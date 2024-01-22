"use client"
import Navbar from '@/components/Navbar';
import React,{useEffect,useState} from 'react';
import Pulsating from '@/components/Pulsating';

function Ideas() {

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

       <div className={`container mx-auto ${loading ? "hidden" : ""}`}>
            Ideas
       </div> 
    </div>
  )
}

export default Ideas;
