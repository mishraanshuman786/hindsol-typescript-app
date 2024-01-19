"use client"
import React from 'react';

let arr=["container","container","container","container","container","container","container","container","container","container","container","container","container","container","container","container","container","container","container","container","container","container","container","container"];

function ServicesComponent() {
  return (
    <div className='gap-4 px-8 mb-4 grid grid-cols-4 grid-rows-6' >
        {
         arr.map((element,index)=>{
            return (
                <div key={index} className='h-[200px] border border-gray-700'>{element} {index+1}</div>
            )
         })}
       
    </div>
  )
}

export default ServicesComponent;