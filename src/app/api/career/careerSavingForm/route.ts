import {writeFile} from "fs/promises";
import { NextRequest,NextResponse } from "next/server";
import { join } from "path";
export async function POST(request:NextRequest){
  const formData=await request.formData();

  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const address = formData.get("address") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const pincode = formData.get("pincode") as string;
  const remark = formData.get("remark") as string;
  const resumeFile = formData.get("resume") as unknown as File;

  const bytes=await resumeFile.arrayBuffer();
  const buffer=Buffer.from(bytes);

  const path=join('./src/app/api/career/careerSavingForm','tmp',resumeFile.name);
  await writeFile(path,buffer);
  console.log(`file is saved to the ${path} path.`);
  console.log("other Data:",name,email,address,phoneNumber,pincode,remark);
  return NextResponse.json({status:true,message:"Form Submitted Successfully."})



}