"use client "
import React from 'react';
import styles from "./styles/ServicesComponent.module.css";

let arr = [
  {
    heading: 'Metro Cabs',
    para: 'I need taxi App.',
    color: 'green-500',
  },
  {
    heading: 'E-Commerce Application',
    para: 'I need E-Commerce App.',
    color: 'green-500',
  },
  {
    heading: 'Food Application',
    para: 'I need Food App.',
    color: 'green-500',
  },
  {
    heading: 'Medical Application',
    para: 'I need Health App.',
    color: 'green-500',
  },
  {
    heading: 'E-Learning Application',
    para: 'I need E-Learning App.',
    color: 'green-500',
  },
  {
    heading: 'Chat Application',
    para: 'I need Chat message App.',
    color: 'green-500',
  },
  {
    heading: 'Real-Estate Application',
    para: 'I need Real State App.',
    color: 'green-500',
  },
  {
    heading: 'Banking Application',
    para: 'I need finance/banking App',
    color: 'green-500',
  },
  {
    heading: 'Tours and Travels Application.',
    para: 'I need Tours and Travels App.',
    color: 'green-500',
  },
  {
    heading: 'Dating Application',
    para: 'I need dating App.',
    color: 'green-500',
  },
  {
    heading: 'Crypto-Currency Application',
    para: 'I need Crypto-Currency App.',
    color: 'green-500',
  },
  {
    heading: 'Business Application',
    para: 'I need Business Website/App.',
    color: 'green-500',
  },
  {
    heading: 'Bot',
    para: 'I need Bot.',
    color: 'green-500',
  },
  {
    heading: 'Automobile Application',
    para: 'I need Automobile App.',
    color: 'green-500',
  },
  {
    heading: 'Pharma Application',
    para: 'I need Pharma App.',
    color: 'green-500',
  },
  {
    heading: 'Video Streaming Application ',
    para: 'I need Video Streaming App.',
    color: 'green-500',
  },
  {
    heading: 'Lohgistics Application',
    para: 'I need Logistics App.',
    color: 'green-500',
  },
  {
    heading: 'Job Portal Application',
    para: 'I need Job Portal App.',
    color: 'green-500',
  },
  {
    heading: 'Event Application',
    para: 'I need Event App.',
    color: 'green-500',
  },
  {
    heading: 'Business Application',
    para: 'I need Business Website/App.',
    color: 'green-500',
  },
  {
    heading: 'Shadi Application',
    para: 'I need Shadi Application.',
    color: 'green-500',
  },
  {
    heading: 'Education Application',
    para: 'I need Education App.',
    color: 'green-500',
  },
  {
    heading: 'ERP Solution',
    para: 'I need ERP Solution.',
    color: 'green-500',
  },
  {
    heading: 'Hindsol Application',
    para: 'I need HRM App.',
    color: 'green-500',
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
            className={` ${styles.containerHover} h-[200px] relative overflow-hidden  border border-gray-700 bg-green-600 `}
          >
            <div className='z-10 w-[60%] text-white  absolute'>
              <h1 className='text-[30px] font-bold'>{element.heading}</h1>
              <h4>{element.para}</h4>
            </div>

            <img
              src={image}
              alt={element.heading}
              width={120}
              height={120}
              className={`${styles.imageHover} mt-[70px] ml-[170px] `}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ServicesComponent;
