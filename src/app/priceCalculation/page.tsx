"use client"
import Navbar from "@/components/Navbar";
import React,{useState} from "react";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";



function PriceCalculation() {

  const [isDesktop,setIsDesktop]=useState(true);

  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/* Header */}
      <header>
        <div>
          <Image
            src="/hindsol.png"
            className="mx-auto"
            alt="hindsol"
            width={200}
            height={200}
          />
          <h1 className="text-center text-[40px] text-gray-900 font-semibold">
            Project Price Calculator
          </h1>
          <h3 className="text-[20px] text-center text-gray-900 md:px-20">
            <strong>
              Select the features of your application that you would like to
              implement to receive an approximate cost estimate.
            </strong>
          </h3>
          <h3 className="text-[16px] text-center md:px-20">
            You will receive an approximate estimate for your application. It is
            not final but will provide you with only an approximate idea of the
            schedule and costs for the development of your app.
          </h3>
        </div>
        <div>
          <div>
            <div className="flex  justify-center m-0">
              {/* desktop switch */}
              <div onClick={()=>setIsDesktop(true)} className={`flex items-center mr-2   font-semibold ${isDesktop?"underline text-blue-900":"text-gray-900"}`}>
                <FaLaptopCode className="text-[40px]  mb-0" />
                <h1 className="text-[40px] hover:text-blue-900">WEB</h1>
              </div>
              {/* mobile switch */}
              <div onClick={()=>setIsDesktop(false)} className={`flex items-center ml-2 font-semibold ${isDesktop?"text-gray-900":"underline underline-offset-1 text-blue-900"}`}>
                <TbDeviceMobileCode className="text-[40px] mb-0" />
                <h1 className="text-[40px] hover:text-blue-900">MOBILE</h1>
              </div>
            </div>
            <hr className="border-gray-400 border-2 m-[-13px] "/>
            <h1>Hello</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default PriceCalculation;
