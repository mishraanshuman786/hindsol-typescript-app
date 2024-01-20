"use client "
import React from 'react';
import styles from "./styles/ServicesComponent.module.css";

let arr = [
  {
    heading: 'Metro Cabs',
    para: 'I need taxi App.',
    color: 'bg-green-500',
  },
  {
    heading: 'E-Commerce Application',
    para: 'I need E-Commerce App.',
    color: 'bg-red-500',
  },
  {
    heading: 'Food Application',
    para: 'I need Food App.',
    color: 'bg-blue-700',
  },
 
  {
    heading: 'E-Learning Application',
    para: 'I need E-Learning App.',
    color: 'bg-red-600',
  },
  {
    heading: 'Chat Application',
    para: 'I need Chat message App.',
    color: 'bg-orange-400',
  },
  {
    heading: 'Real-Estate Application',
    para: 'I need Real State App.',
    color: 'bg-green-400',
  },
  {
    heading: 'Banking Application',
    para: 'I need finance/banking App',
    color: 'bg-yellow-600',
  },
  {
    heading: 'Tours and Travels Application.',
    para: 'I need Tours and Travels App.',
    color: 'bg-orange-600',
  },
  {
    heading: 'Dating Application',
    para: 'I need dating App.',
    color: 'bg-yellow-600',
  },
  {
    heading: 'Crypto-Currency Application',
    para: 'I need Crypto-Currency App.',
    color: 'bg-violet-500',
  },
  {
    heading: 'Business Application',
    para: 'I need Business Website/App.',
    color: 'bg-red-600',
  },
  {
    heading: 'Bot',
    para: 'I need Bot.',
    color: 'bg-yellow-600',
  },
  {
    heading: 'Automobile Application',
    para: 'I need Automobile App.',
    color: 'bg-green-400',
  },
  {
    heading: 'Pharma Application',
    para: 'I need Pharma App.',
    color: 'bg-red-500',
  },
  {
    heading: 'Video Streaming Application ',
    para: 'I need Video Streaming App.',
    color: 'bg-blue-700',
  },
  {
    heading: 'Logistics Application',
    para: 'I need Logistics App.',
    color: 'bg-orange-600',
  },
  {
    heading: 'Job Portal Application',
    para: 'I need Job Portal App.',
    color: 'bg-orange-600',
  },
  {
    heading: 'Event Application',
    para: 'I need Event App.',
    color: 'bg-red-600',
  },
  {
    heading: 'Business Application',
    para: 'I need Business Website/App.',
    color: 'bg-red-600',
  },
  {
    heading: 'Shadi Application',
    para: 'I need Shadi Application.',
    color: 'bg-red-500',
  },
  {
    heading: 'Education Application',
    para: 'I need Education App.',
    color: 'bg-green-400',
  },
  {
    heading:"Medical Application",
    para:"I need Medical App.",
    color:"bg-red-500"
  },
  {
    heading: 'ERP Solution',
    para: 'I need ERP Solution.',
    color: 'bg-green-400',
  },
  {
    heading: 'Hindsol Application',
    para: 'I need HRM App.',
    color: 'bg-orange-600',
  }
];


function ServicesComponent() {
  return (
    <div className='gap-4 px-8 mb-4 grid grid-cols-4 grid-rows-6'>
      {arr.map((element, index) => {
        let image = `/images/${index}.png`;
       
        return (
          <div
            key={index}
            className={` ${styles.containerHover} h-[200px] relative bg-blue overflow-hidden ${element.color} `}
          >
            <div className='z-10 w-[60%] ml-2 text-white  absolute'>
              <h1 className='text-[25px] font-bold'>{element.heading}</h1>
              <h4>{element.para}</h4>
            </div>

            <img
              src={image}
              alt={element.heading}
              width={120}
              height={120}
              className={`${styles.imageHover} mt-[65px] ml-[152px] `}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ServicesComponent;
