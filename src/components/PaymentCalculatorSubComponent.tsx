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
import { MdOutlineMailLock } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { FaGooglePlus } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { MdSettingsInputComposite } from "react-icons/md";
import { PiFileVideoFill } from "react-icons/pi";
import { TbFilterSearch } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbMapStar } from "react-icons/tb";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { GrSchedule } from "react-icons/gr";
import { FaSwatchbook } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { LiaCommentsSolid } from "react-icons/lia";
import { GiCardExchange } from "react-icons/gi";
import { FaPushed } from "react-icons/fa6";
import { SiAppstore } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { PiPhoneCallBold } from "react-icons/pi";





function PaymentCalculatorSubComponent() {
  // ios clicked
  const [isIOSClicked, setIOSClicked] = useState(false);
  // android clicked
  const [isAndroidClicked, setAndroidClicked] = useState(false);
  // features selected
  const [features,setFeatures]=useState({
    ecommerce:false,
    logistics:false,
    healthcare:false,
    education:false,
    custom:false,
    emailSignup:false,
    facebookSignup:false,
    googleSignup:false,
    multilanguage:false,
   invitationEmails:false,
   dashboard:false,
   mediaUploading:false,
   sendingEmail:false,
   userInteractions:false,
   audioVideoProcessing:false,
   searchingAndFiltering:false,
   geolocation:false,
   workingWithMaps:false,
   locationTracking:false,
   scheduling:false,
   bookings:false,
   chat:false,
   commentsAndReviews:false,
   dataExchange:false,
   pushNotifications:false,
   cart:false,
   inAppPurchasing:false,
   paymentProcessing:false,
   subscriptions:false,
   inAppMarketplace:false,
   productManagement:false,
   adminPanel:false,
   analytics:false,
   performanceMonitoring:false,
   thirdPartyIntegration:false,
   openApi:false,
   sms:false,
   audioVideoCalls:false
  });

  return (
    <div>
      <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         App Field
        </h3>
        <div>
        <div className="flex justify-center">
          <div
            onClick={() => setFeatures((prev)=>({...prev,ecommerce:!features.ecommerce}))}
            className={`border-2  ${
              features.ecommerce ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.ecommerce ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
              <FiShoppingCart className="mx-auto text-[40px]" /> 
              <h3>E-Commerce</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,logistics:!features.logistics}))}
            className={`border-2  ${
              features.logistics ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.logistics ? (
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
            onClick={() => setFeatures((prev)=>({...prev,healthcare:!features.healthcare}))}
            className={`border-2  ${
             features.healthcare ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.healthcare ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3>Healthcare</h3>
            </div>
          </div>
          <div
            onClick={() => setFeatures((prev)=>({...prev,education:!features.education}))}
            className={`border-2  ${
              features.education ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.education ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Education</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,custom:!features.custom}))}
            className={`border-2  ${
              features.custom ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.custom ? (
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
           onClick={() => setFeatures((prev)=>({...prev,emailSignup:!features.emailSignup}))}
            className={`border-2  ${
             features.emailSignup ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.emailSignup? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
             <MdOutlineMailLock className="mx-auto text-[40px]"/>
              <h3>E-Mail and Password Sign Up</h3>
            </div>
          </div>
          <div
            onClick={() => setFeatures((prev)=>({...prev,facebookSignup:!features.facebookSignup}))}
            className={`border-2  ${
              features.facebookSignup ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.facebookSignup ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <SiFacebook  className="mx-auto text-[40px]"/>
              <h3>Facebook Signup</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
           onClick={() => setFeatures((prev)=>({...prev,googleSignup:!features.googleSignup}))}
            className={`border-2  ${
              features.googleSignup ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.googleSignup ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
           <FaGooglePlus className="mx-auto text-[40px]" />
              <h3>Google Signup</h3>
            </div>
          </div>
          <div
          onClick={() => setFeatures((prev)=>({...prev,multilanguage:!features.multilanguage}))}
            className={`border-2  ${
              features.multilanguage ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.multilanguage ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <IoLanguage className="mx-auto text-[40px]" />

              <h3>Multilanguage System</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,invitationEmails:!features.invitationEmails}))}
            className={`border-2  ${
              features.invitationEmails ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.invitationEmails ? (
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
           onClick={() => setFeatures((prev)=>({...prev,dashboard:!features.dashboard}))}
            className={`border-2  ${
              features.dashboard ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.dashboard ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
             <MdDashboardCustomize className="text-[40px] mx-auto"/>
              <h3>Dashboard</h3>
            </div>
          </div>
          <div
            onClick={() => setFeatures((prev)=>({...prev,mediaUploading:!features.mediaUploading}))}
            className={`border-2  ${
              features.mediaUploading ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.mediaUploading ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <PiVideoFill className="text-[40px] mx-auto" />
              <h3>Media Uploading</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,sendingEmail:!features.sendingEmail}))}
            className={`border-2  ${
              features.sendingEmail ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.sendingEmail ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <SiGmail className="mx-auto text-[40px]" />
              <h3>Email Notifications</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
           onClick={() => setFeatures((prev)=>({...prev,userInteractions:!features.userInteractions}))}
            className={`border-2  ${
              features.userInteractions ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.userInteractions ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
           <MdSettingsInputComposite className="text-[40px] mx-auto" />
              <h3>User Interactions</h3>
            </div>
          </div>
          <div
          onClick={() => setFeatures((prev)=>({...prev,audioVideoProcessing:!features.audioVideoProcessing}))}
            className={`border-2  ${
              features.audioVideoProcessing ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.audioVideoProcessing ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <PiFileVideoFill className="mx-auto text-[40px]"/>

              <h3>Audio/Video Processing</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,searchingAndFiltering:!features.searchingAndFiltering}))}
            className={`border-2  ${
              features.searchingAndFiltering ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.searchingAndFiltering ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <TbFilterSearch className="mx-auto text-[40px]"/>
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
           onClick={() => setFeatures((prev)=>({...prev,geolocation:!features.geolocation}))}
            className={`border-2  ${
              features.geolocation ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.geolocation ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <FaMapLocationDot className="text-[40px] mx-auto"/>
              <h3>Geolocation</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
           onClick={() => setFeatures((prev)=>({...prev,workingWithMaps:!features.workingWithMaps}))}
            className={`border-2  ${
              features.workingWithMaps ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.workingWithMaps ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <TbMapStar className="mx-auto text-[40px]"/>

              <h3>Working With Maps</h3>
            </div>
          </div>
          <div
          onClick={() => setFeatures((prev)=>({...prev,locationTracking:!features.locationTracking}))}
            className={`border-2  ${
              features.locationTracking ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.locationTracking ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
         <FaMagnifyingGlassLocation className="text-[40px] mx-auto"/>
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
           onClick={() => setFeatures((prev)=>({...prev,scheduling:!features.scheduling}))}
            className={`border-2  ${
              features.scheduling ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.scheduling ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <GrSchedule className="text-[40px] mx-auto"/>
              <h3>Scheduling</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,bookings:!features.bookings}))}
            className={`border-2  ${
              features.bookings ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.bookings ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <FaSwatchbook className="text-[40px] mx-auto"/>
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
           onClick={() => setFeatures((prev)=>({...prev,chat:!features.chat}))}
            className={`border-2  ${
              features.chat ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.chat ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
             <IoLogoWechat className="text-[40px] mx-auto"/>
              <h3>Chat</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,commentsAndReviews:!features.commentsAndReviews}))}
            className={`border-2  ${
              features.commentsAndReviews ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.commentsAndReviews ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <LiaCommentsSolid className="text-[40px] mx-auto"/>
              <h3>Comment / Reviews</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
           onClick={() => setFeatures((prev)=>({...prev,dataExchange:!features.dataExchange}))}
            className={`border-2  ${
              features.dataExchange ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.dataExchange ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
         <GiCardExchange className="text-[40px] mx-auto"/>
              <h3>Data Exchange</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,pushNotifications:!features.pushNotifications}))}
            className={`border-2  ${
             features.pushNotifications ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.pushNotifications ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <FaPushed className="text-[40px] mx-auto"/>

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
           onClick={() => setFeatures((prev)=>({...prev,cart:!features.cart}))}
            className={`border-2  ${
              features.cart ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.cart ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
              <FiShoppingCart className="mx-auto text-[40px]" /> 
              <h3>Shopping Cart</h3>
            </div>
          </div>
          <div
            onClick={() => setFeatures((prev)=>({...prev,inAppPurchasing:!features.inAppPurchasing}))}
            className={`border-2  ${
              features.inAppPurchasing ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.inAppPurchasing ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <SiAppstore className="text-[40px] mx-auto"/>
              <h3>In App Purchasing</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
            onClick={() => setFeatures((prev)=>({...prev,paymentProcessing:!features.paymentProcessing}))}
            className={`border-2  ${
             features.paymentProcessing ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.paymentProcessing ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <SiPaytm className="mx-auto text-[40px]"/>
              <h3>Payment Processing</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,subscriptions:!features.subscriptions}))}
            className={`border-2  ${
              features.subscriptions ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.subscriptions ? (
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
           onClick={() => setFeatures((prev)=>({...prev,inAppMarketplace:!features.inAppMarketplace}))}
            className={`border-2  ${
              features.inAppMarketplace ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.inAppMarketplace ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3>In App Marketplace</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,productManagement:!features.productManagement}))}
            className={`border-2  ${
             features.productManagement ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.productManagement ? (
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
           onClick={() => setFeatures((prev)=>({...prev,adminPanel:!features.adminPanel}))}
            className={`border-2  ${
             features.adminPanel? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.adminPanel ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
         <MdAdminPanelSettings className="text-[40px] mx-auto" />
              <h3>Admin Panel</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
           onClick={() => setFeatures((prev)=>({...prev,analytics:!features.analytics}))}
            className={`border-2  ${
              features.analytics ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
          >
            <div>
              {features.analytics ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <SiGoogleanalytics className="text-[40px] mx-auto"/>

              <h3>Analytics</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,performanceMonitoring:!features.performanceMonitoring}))}
            className={`border-2  ${
              features.performanceMonitoring ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
          >
            <div>
              {features.performanceMonitoring ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
         <GrDocumentPerformance className="mx-auto text-[40px]"/>
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
           onClick={() => setFeatures((prev)=>({...prev,thirdPartyIntegration:!features.thirdPartyIntegration}))}
            className={`border-2  ${
              features.thirdPartyIntegration ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.thirdPartyIntegration ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
             <FaExternalLinkAlt className="text-[40px] mx-auto" />
              <h3>Third Party Integrations</h3>
            </div>
          </div>
          <div
           onClick={() => setFeatures((prev)=>({...prev,openApi:!features.openApi}))}
            className={`border-2  ${
              features.openApi ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.openApi ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <RiOpenaiFill className="text-[40px] mx-auto"/>
              <h3>Open Api</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex  justify-center">
          <div
           onClick={() => setFeatures((prev)=>({...prev,sms:!features.sms}))}
            className={`border-2  ${
              features.sms ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.sms ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
              <LiaCommentsSolid className="text-[40px] mx-auto"/>
              <h3>SMS Messaging</h3>
            </div>
          </div>
          <div
          onClick={() => setFeatures((prev)=>({...prev,audioVideoCalls:!features.audioVideoCalls}))}
            className={`border-2  ${
              features.audioVideoCalls ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-full md:h-32 border`}
          >
            <div>
              {features.audioVideoCalls ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <PiPhoneCallBold className="text-[40px] mx-auto" />

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
