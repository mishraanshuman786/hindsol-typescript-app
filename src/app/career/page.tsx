"use client"
import Navbar from '@/components/Navbar';
import React,{useEffect,useState} from 'react';
import Pulsating from '@/components/Pulsating';
import { RiComputerLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";

function Career() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading animation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar/>

        {/* Pulsating div for loading animation */}
        {
        (loading && (<Pulsating/>))
       }
        {/* pulsating end */}

        {/*The Content of the Career Page */}

       <div className={`container mx-auto ${loading ? "hidden" : ""}`}>
            <header className='flex flex-col items-center relative mb-[500px] '>
                 {/* Image container */}
               <div className='h-[500px] w-full rounded-t-xl' style={{backgroundImage:"url('https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}} />
               {/* content container */}
               <div className='h-[400px] w-[80%]  rounded-xl absolute top-[350px] bg-white'>
                  <h1 className='text-[30px] text-center mt-14 font-medium '>View Open positions in these departments</h1>

                  {/* all options main div */}
                  <div className='flex w-[90%] px-[8%] justify-between gap-12 mt-[60px] mx-auto flex-wrap '>
                     {/* option div 1*/}
                     <div className='flex flex-col items-center w-[130px]'>
                        {/* image div  */}
                        <div  className='flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-violet-800'>
                        <RiComputerLine className='text-[30px] text-violet-800' />
                        </div>
                     <h3 className='text-center text-[12px] font-bold'>IT</h3>
                     </div>
                     {/* option div 2*/}
                     <div className='flex flex-col items-center w-[130px]'>
                        {/* image div */}
                        <div  className='flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-blue-600'>
                       <FaCode className='text-[30px] text-blue-600' />
                        </div>
                     <h3 className='text-center text-[12px] font-bold'>Product</h3>
                     </div>
                     {/* option div 3*/}
                     <div className='flex flex-col items-center w-[130px]'>
                        {/* image div */}
                        <div  className='flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-green-800'>
                        <RiComputerLine className='text-[30px] text-green-800' />
                        </div>
                     <h3 className='text-center text-[12px] font-bold'>Sales</h3>
                     </div>
                     {/* option div 4*/}
                     <div className='flex flex-col items-center w-[130px]'>
                        {/* image div 4*/}
                        <div  className='flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-yellow-600'>
                        <RiComputerLine className='text-[30px] text-orange-700' />
                        </div>
                     <h3 className='text-center text-[12px] font-bold'>Marketing</h3>
                     </div>
                     {/* option div 5*/}
                     <div className='flex flex-col items-center w-[130px] '>
                        {/* image div */}
                        <div  className='flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-pink-500'>
                        <RiComputerLine className='text-[30px] text-pink-700' />
                        </div>
                     <h3 className='text-center text-[12px] font-bold'>HR</h3>
                     </div>
                     {/* option div 6*/}
                     <div className='flex flex-col items-center w-[130px]'>
                        {/* image div */}
                        <div  className='flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-violet-500'>
                        <RiComputerLine className='text-[30px] text-violet-800' />
                        </div>
                     <h3 className='text-center text-[12px] font-bold'>Finance</h3>
                     </div>
                     {/* option div 7*/}
                     <div className='flex flex-col items-center w-[130px]'>
                        {/* image div */}
                        <div  className='flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-blue-500'>
                        <RiComputerLine className='text-[30px] text-blue-600' />
                        </div>
                     <h3 className='text-center text-[12px] font-bold'>Operations</h3>
                     </div>
                     {/* option div 8*/}
                     <div className='flex flex-col items-center  w-[130px] '>
                        {/* image div */}
                        <div  className='flex justify-center rounded-lg border border-green-500 items-center w-[70px] h-[70px] '>
                        <RiComputerLine className='text-[30px] text-green-500' />
                        </div>
                     <h3 className='text-center text-[12px] font-bold'>Customer Success</h3>
                     </div>
                    
                  </div>
               </div>

               
            </header>
       </div> 
    </div>
  )
}

export default Career;
