import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import connectToMongoDB from "../../../../../../library/util/mongooseConnect";
import {SkilldevData} from "../../../../../../library/model/skilldev";


export async function POST(req,{params}) {
  try {
    const data = await req.formData();
   
    const status = data.get("code");
    const transactionId = data.get("transactionId");
    const muid=await params.muid;
    console.log("muid:",muid);
    console.log("params:",params);

    

   
    const st =
      `/pg/v1/status/${process.env.NEXT_MERCHANT_ID}/${transactionId}` +`${process.env.NEXT_SALT_KEY}`;
    const dataSha256 = sha256(st);

    const checksum =
      dataSha256 + "###1";
   

    const options = {
      method: "GET",
      url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${process.env.NEXT_MERCHANT_ID}/${transactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": `${process.env.NEXT_MERCHANT_ID}`,
      },
    };

    // Check payment status
    const response = await axios.request(options);
   

    if (response.data.code === "PAYMENT_SUCCESS") {
      await updatePaymentStatus(muid, true);
      return res.status(301).redirect(`https://hindsol.com/success/${muid}`);
    } else {
      await deletePaymentRecord(muid);
      return res.status(301).redirect("https://hindsol.com/failure");
    }
  } catch (error) {
    console.error("Error processing payment:", error);
    await deletePaymentRecord(params.muid); // Delete the record in the catch block
    return res.status(500).json({ error: "Internal server error" });
  }
  
}



// update status to database
async function updatePaymentStatus (
 id,paymentstatus
) {
  try {
    // connect to the database
    await connectToMongoDB();

    // updating the status
    const skilldev=new SkilldevData();
    await skilldev.updateOne({ _id:id }, { $set: { paymentstatus } });
    
    console.log("status updated");
  
  } catch (error) {
    console.error("Error updating the data:", error);
  }
}


const deletePaymentRecord = async (id) => {
  try {
    // connect to the database
    await connectToMongoDB();

    // updating the status
    const skilldev=new SkilldevData();
    await skilldev.delete({ _id:id });
    
    console.log("record deleted");
  
  } catch (error) {
    console.error("Error deleting the data:", error);
  }
};
