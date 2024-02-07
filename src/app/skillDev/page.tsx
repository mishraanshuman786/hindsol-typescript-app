"use client"
import Navbar from "@/components/Navbar";
import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import Pulsating from "@/components/Pulsating";
import Footer from "@/components/Footer";
import CareerRegistrationhtmlhtmlForm from "@/components/CareerRegistrationForm";

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
      <div className={`container mb-20 mx-auto ${loading ? "hidden" : ""}`}>
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
                      src="https://images.unsplash.com/photo-1426024120108-99cc76989c71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEyfHxmcmVlJTIwd2ViJTIwZGV2ZWxvcG1lbnQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                      loading="lazy"
                      alt="first"
                      className="box-border object-cover overflow-hidden shrink-0 mx-auto mt-5 rounded-xl aspect-[0.98] max-w-[272px] min-h-[20px] min-w-[20px] size-full"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxmcmVlJTIwd2ViJTIwZGV2ZWxvcG1lbnQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                      loading="lazy"
                      className="box-border object-cover overflow-hidden shrink-0 mt-5 w-6/12 h-full rounded-xl aspect-[100] min-h-[20px] min-w-[20px]"
                    />
                  </div>
                  <div className="box-border flex relative flex-row shrink-0 gap-2.5 mt-5 h-3/6">
                    <img
                      src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      className="box-border object-cover overflow-hidden shrink-0 mt-5 w-6/12 h-full rounded-xl aspect-[100] min-h-[20px] min-w-[20px]"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxmcmVlJTIwd2ViJTIwZGV2ZWxvcG1lbnQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
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
    <CareerRegistrationhtmlhtmlForm/>
    {/* Footer */}
    <Footer/>
    </div>
  
    </div>
    
  );
}

export default SkillDev;