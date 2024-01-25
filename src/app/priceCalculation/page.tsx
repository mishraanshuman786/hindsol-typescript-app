"use client"
import Navbar from "@/components/Navbar";
import React,{useState} from "react";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { DiHtml5Multimedia } from "react-icons/di";
import { DiBrackets } from "react-icons/di";
import { DiHtml53DEffects } from "react-icons/di";
import { TbDeviceImacCode } from "react-icons/tb";




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
          </div>

          {/* main content div */}
          <div className="flex mt-4">
            {/* left div */}
            <div className="w-[65%]">
               {/* Project Type Selection */}
               <div>
                   {
                    (isDesktop)?(
                      <div>
                        <h3 className="text-[30px] mt-10   text-center font-semibold text-blue-800">How BIG Is Your APP?</h3>
                      <div className="flex pr-4">

                      <div title="App with Core functionality ,but without other side features." className="border-gray-300 ml-16 mt-6 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border">
                        <div>
                        <DiBrackets className="text-[40px]" />
                        <h3 className="text-[20px]">MVP</h3>
                        </div>

                       
                      </div>

                      <div title="App Core functionality + some side features that make addition to core functionality." className="border-gray-300 ml-16 mt-6 flex  items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border">
                        <div>
                      <DiHtml5Multimedia className="text-[40px]" />
                        <h3 className="text-[20px]">Basic</h3>
                        </div>
                      </div>
      
                      <div title="Fully Build Application with all Core and Side Features. " className="border-gray-300 ml-16 mt-6 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border">
                        <div>
                        <DiHtml53DEffects className="text-[40px]" />
                        <h3 className="text-[20px]"> Refined</h3>
                        </div>
                      
                      </div>


                      </div>
                      </div>
                    ):(
                      <div className="flex">
                      <div className="border-gray-300 ml-16 mt-12 flex items-center bg-gray-200 rounded justify-center  md:w-72 md:h-32 border">
                        <div>
                        <FaApple className="mx-auto text-[40px] " />
                          <h3> iOS APP</h3>
                        </div>
                       
                      </div>
                      <div className="border-gray-300 ml-16 mt-12 flex items-center justify-center bg-gray-200 rounded  md:w-72 md:h-32 border">
                        <div>
                      <DiAndroid className="mx-auto text-[40px]"/>
                      <h3>ANDROID APP</h3>
                      </div>
                      </div>
                      </div>
                    )
                   }
               </div>
            </div>
            {/* right div */}
            <div className="w-[35%] ">
                <div className="bg-blue-800 w-[90%] pt-4 h-[400px] my-10 text-white rounded mx-auto">
                  {/* first div */}
                  <div className="border border-white mx-4 bg-blue-600  rounded">
                  <div className="flex justify-between">
                    <div className="flex items-center m-2">
                    <TbDeviceImacCode className="text-[25px]" />
                    <h3 className="text-[18px]">WEB</h3>
                    </div>

                    <h3 className="m-2 text-[18px]">NOTHING TO CALCULATE</h3>

                  </div>
                  <h3 className="text-[28px] ml-4">$0</h3>
                  </div>

                  {/* second div */}
                  <div className="border border-white mx-4 mt-4 bg-blue-600  rounded">
                  <div className="flex justify-between">
                    <div className="flex items-center m-2">
                    <TbDeviceMobileCode className="text-[25px]" />
                    <h3 className="text-[18px]">WEB</h3>
                    </div>

                    <h3 className="m-2 text-[18px]">NOTHING TO CALCULATE</h3>

                  </div>
                  <h3 className="text-[28px] ml-4">$0</h3>
                  </div>

                   {/* third div */}
                   <div className=" mx-4 mt-4  rounded">
                  <div className="flex justify-between">
                    <div className="flex items-center m-2">
                  
                    <h3 className="text-[18px]">Total Cost:</h3>
                    </div>

                   

                  </div>
                  <h3 className="text-[35px] font-semibold ml-2">$0</h3>
                  </div>

                  <hr className="mx-4 mt-6"/>


                </div>
                

               
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default PriceCalculation;
