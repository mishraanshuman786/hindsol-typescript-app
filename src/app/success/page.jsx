"use client"
import AlertPopup from "../../components/AlertPopup";
import { cookies } from "next/headers";

export default function Success(){

    const cookieStore = cookies();
    const hasCookie = cookieStore.has('status')
   
    return (<div>
        <h1>Payment successfull</h1>
      {(hasCookie)&& <AlertPopup message="Payment success" />}  
        </div>)
}