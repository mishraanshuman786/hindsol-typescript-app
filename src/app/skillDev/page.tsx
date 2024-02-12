"use client"
import Navbar from "@/components/Navbar";
import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import Pulsating from "@/components/Pulsating";
import Footer from "@/components/Footer";
import SkillDevRegistrationForm from "@/components/SkillDevRegistrationForm";

function SkillDev() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading animation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);


  return (
    <div >
      {/* Navbar component */}
      <Navbar/>

         {/* Pulsating div for loading animation */}
         {loading && <Pulsating />}
      {/* pulsating end */}

      {/*The Content of the Career Page */}
      <div className={`container mx-auto ${loading ? "hidden" : ""}`}>
    <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 2.4 }} className="box-border flex flex-col shrink-0 px-5  w-screen text-black bg-white min-h-[530px] ml-[calc(50%_-_50vw)] max-sm:pb-10">
      <section className="box-border flex flex-col grow shrink-0 self-stretch px-5   mx-auto mb-10 w-full text-black bg-white max-w-[1200px] min-h-[530px] max-sm:pb-10">
        <div className="box-border flex relative flex-col shrink-0  min-h-[391px]">
          <section className="box-border flex relative flex-col grow shrink-0 self-stretch px-5 mx-auto w-full max-w-[1200px] min-h-[391px]">
            <div className="box-border flex relative flex-col shrink-0 ">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="box-border relative pt-44 pb-40 h-full">
                    <h2
                      style={{
                        padding: "0px",
                        marginBottom: "40px",
                        fontFamily: "Red Hat Display, sans-serif",
                        color: "rgb(26, 27, 53)",
                        fontWeight: 700,
                        lineHeight: "78px",
                        fontSize: "53px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Transforming the reverse supply chain through our solutions
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="box-border flex relative flex-row shrink-0 gap-2.5 mt-5">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1683749810427-9f460939f702?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt="first"
                      className="box-border object-cover overflow-hidden shrink-0 mx-auto mt-5 rounded-xl aspect-[0.98] max-w-[272px] min-h-[20px] min-w-[20px] size-full"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      className="box-border object-cover overflow-hidden shrink-0 mt-5 w-6/12 h-full rounded-xl aspect-[100] min-h-[20px] min-w-[20px]"
                    />
                  </div>
                  <div className="box-border flex relative flex-row shrink-0 gap-2.5 mt-5 h-3/6">
                    <img
                      src="https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      className="box-border object-cover overflow-hidden shrink-0 mt-5 w-6/12 h-full rounded-xl aspect-[100] min-h-[20px] min-w-[20px]"
                    />
                    <img
                      src="https://logisticinfotech.com/wp-content/uploads/2015/04/Mobile-App-Development.jpg"
                      loading="lazy"
                      className="box-border object-cover overflow-hidden shrink-0 mt-5 w-6/12 h-full rounded-xl aspect-[1.5] min-h-[20px] min-w-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </motion.div>
    <SkillDevRegistrationForm/>
   
    </div>
    {
      (!loading)?(
         <Footer/>
      ):null
    }
    
  
    </div>
    
  );
}

export default SkillDev;