"use client"
import React from "react";
let arr=["container","container","container","container","container","container","container","container","container","container","container","container"];
export function OurPortfolio() {
    return (
        <div>
            <div className="text-[40px] text-center my-[100px pt-[40px] pb-[40px]">Our Portfoilo</div>
            <div className="text-lg text-center pb-[20px]" >We Request Your Attention to These Pieces of Perfection We’ve Developed
        </div>
        <div className='mb-4 grid grid-cols-4 grid-rows-3' >
        {
         arr.map((element,index)=>{
            return (
                <div key={index} className='h-[200px] border border-gray-700'>{element} {index+1}</div>
            )
         })}
       
    </div>



        </div>















    )}

    export default OurPortfolio;
