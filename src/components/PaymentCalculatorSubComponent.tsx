import React, { useState } from "react";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { LuTruck } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { FaTools } from "react-icons/fa";


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
        <div className="flex border border-black">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
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
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
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

        {/* second */}
        <div className="flex border border-black justify-start">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
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
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
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
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
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

      {/* second row */}
      <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         App Field
        </h3>
        <div>
        <div className="flex border border-black">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
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
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
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

        {/* second */}
        <div className="flex border border-black justify-start">
          <div
            onClick={() => setIOSClicked(!isIOSClicked)}
            className={`border-2  ${
              isIOSClicked ? "border-blue-800" : "border-gray-300"
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
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
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
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
            } ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border`}
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
    </div>
  );
}

export default PaymentCalculatorSubComponent;
