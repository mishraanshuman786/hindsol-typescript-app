import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import connectToMongoDB from "../../../../../../library/util/mongooseConnect";


export async function POST(req,{params}) {
  try {
    const data = await req.formData();
   
    const status = data.get("code");
    const transactionId = data.get("transactionId");
    const muid=params.muid;
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
    await deletePaymentRecord(req.params.muid); // Delete the record in the catch block
    return res.status(500).json({ error: "Internal server error" });
  }
  
}

const updatePaymentStatus = async (muid, paymentstatus) => {
  const { db } = await connectToMongoDB();
  await db.collection("skilldev").updateOne({ _id:muid }, { $set: { paymentstatus } });
};

const deletePaymentRecord = async (muid) => {
  const { db } = await connectToMongoDB();
  await db.collection("skilldev").deleteOne({ _id:muid });
};
