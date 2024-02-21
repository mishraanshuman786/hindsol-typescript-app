import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import connectToMongoDB from "../../../../../../library/util/mongooseConnect";
import {SkilldevData} from "../../../../../../library/model/skilldev";
const mongoose = require('mongoose');


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
      return NextResponse.redirect(`https://hindsol.com/success/${muid}`,
        {
          status: 301,
        }
      );
    } else {
      await deletePaymentRecord(muid);
      return NextResponse.redirect("https://hindsol.com/failure", {
        status: 301,
      });
    }
  } catch (error) {
    console.error("Error processing payment:", error);
    await deletePaymentRecord(params.muid); // Delete the record in the catch block
    return NextResponse.error(error);
  }
  
}



// update status to database
async function updatePaymentStatus (
 id,paymentstatus
) {
  try {
    // connect to the database
    await connectToMongoDB();

   // Assuming you have defined your schema
const skilldev = mongoose.model('SkilldevData');

// Your update data
const updateData = {
  paymentstatus:true
};

// Use findByIdAndUpdate to find the document by ID and update it
slilldev.findByIdAndUpdate(id, updateData, { new: true }, (err, updatedDoc) => {
  if (err) {
    console.error('Error updating document:', err);
    // Handle error
    throw new Error("Status is not Updated.")
  } else {
    console.log('Updated document:', updatedDoc);
    // Handle updated document
  }
});
  
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
