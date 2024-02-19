"use client"
import AlertPopup from "../../components/AlertPopup";
import {useCookie} from "../../library/util/useCookie";
export default function Success(){
    const statusCookieValue = useCookie("status");
    console.log(statusCookieValue);
    return (<div>
        <h1>Payment successfull</h1>
        {statusCookieValue && <AlertPopup message="Payment success" />}
        </div>)
}