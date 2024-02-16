import React, { useState } from "react";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { LuTruck } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


function PaymentCalculatorSubComponent() {
  // ios clicked
  const [isIOSClicked, setIOSClicked] = useState(false);
  // android clicked
  const [isAndroidClicked, setAndroidClicked] = useState(false);

  return (
    <div>
      <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         App Field
        </h3>
        <div>
        <div className="flex justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
              <FiShoppingCart className="mx-auto text-[40px]" /> 
              <h3>E-Commerce</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Logistics</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3> Healthcare</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Education</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <FaTools className="text-[40px] mx-auto" />
              <h3>Custom</h3>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* second component */}
      <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         Users And Accounts
        </h3>
        <div>
        <div className="flex ">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
              <FiShoppingCart className="mx-auto text-[40px]" /> 
              <h3>E-Mail and Password Sign Up</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Facebook Signup</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3>Google Signup</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Multilanguage System</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <SiGmail className="mx-auto text-[40px]" />
              <h3>User Invitation Emails</h3>
            </div>
          </div>
        </div>
        </div>
      </div>

        {/* third component */}
        <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         App Content
        </h3>
        <div>
        <div className="flex ">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
              <FiShoppingCart className="mx-auto text-[40px]" /> 
              <h3>Dashboard</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Media Uploading</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Email Notifications</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3>User Interactions</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Audio/Video Processing</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <SiGmail className="mx-auto text-[40px]" />
              <h3>Search & Filtering</h3>
            </div>
          </div>
        </div>
        </div>
      </div>

           {/* fourth component */}
        <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         GEOLOCATION
        </h3>
        <div>
        <div className="flex w-full ">
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Geolocation</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Working With Maps</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <SiGmail className="mx-auto text-[40px]" />
              <h3>Live Location Tracking</h3>
            </div>
          </div>
        </div>
        </div>
      </div>

          {/* fifth component */}
          <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         SCHEDULING / BOOKINGS
        </h3>
        <div>
        <div className="flex w-full ">
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Scheduling</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Bookings</h3>
            </div>
          </div>
        </div>
       </div>
      </div>

            {/* sixth component */}
            <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
        USER INTERACTIONS
        </h3>
        <div>
        <div className="flex  justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
              <FiShoppingCart className="mx-auto text-[40px]" /> 
              <h3>Chat</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Comment / Reviews</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3>Data Exchange</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Push Notifications</h3>
            </div>
          </div>
  
        </div>
        </div>
      </div>

        {/* Seventh component */}
        <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
       ECOMMERCE
        </h3>
        <div>
        <div className="flex  justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
              <FiShoppingCart className="mx-auto text-[40px]" /> 
              <h3>Shopping Cart</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>In App Purchasing</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3>Payment Processing</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Subscriptions</h3>
            </div>
          </div>
  
        </div>

            {/* third row */}
            <div className="flex  justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3>In App Marketplace</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Product Management</h3>
            </div>
          </div>
  
        </div>
        </div>
      </div>

               {/* eigth component */}
               <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         ADMIN, FEEDBACK & ANALYTICS
        </h3>
        <div>
        <div className="flex w-full ">
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Admin Panel</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Analytics</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <SiGmail className="mx-auto text-[40px]" />
              <h3>Performance Monitoring</h3>
            </div>
          </div>
        </div>
        </div>
      </div>

            {/* ninth component */}
            <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
        EXTERNAL APIS AND INTEGRATIONS
        </h3>
        <div>
        <div className="flex justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
              <FiShoppingCart className="mx-auto text-[40px]" /> 
              <h3>Third Party Integrations</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Open Api</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isIOSClicked ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3>SMS Messaging</h3>
            </div>
          </div>
          <div
            onClick={() => setAndroidClicked(!isAndroidClicked)}
            className={`border-2  ${
              isAndroidClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {isAndroidClicked ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Audio / Video Calls</h3>
            </div>
          </div>
  
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default PaymentCalculatorSubComponent;
