import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join, extname } from "path";

// Function to generate a random string
function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const address = formData.get("address") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const pincode = formData.get("pincode") as string;
  const remark = formData.get("remark") as string;
  const resumeFile = formData.get("resume") as unknown as File;

  const bytes = await resumeFile.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const extension = extname(resumeFile.name);
  const uniqueFilename = `${new Date().toISOString().slice(0, 10)}-${generateRandomString(10)}${extension}`;

  const path = join("./public/", "tmp", uniqueFilename);
  await writeFile(path, buffer);
  console.log(`file is saved to the ${path} path.`);
  console.log(
    "other Data:",
    name,
    email,
    address,
    phoneNumber,
    pincode,
    remark
  );
  return NextResponse.json({
    status: true,
    message: "Form Submitted Successfully.",
  });
}
