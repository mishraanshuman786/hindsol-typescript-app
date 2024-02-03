"use client"
import React, { useState, useEffect } from "react";
import styles from "./styles/CareerPageSlider.module.css"; // Import CSS module for styling

const CareerPageSlider = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handlePrevClick = () => {
    setCurrentScreen((prevScreen) => (prevScreen === 1 ? 2 : prevScreen - 1));
  };

  const handleNextClick = () => {
    setCurrentScreen((prevScreen) => (prevScreen % 2) + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prevScreen) => (prevScreen % 2) + 1);
    },3000 ); // Change 5000 to the desired delay in milliseconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex justify-between px-20">
        <h2 className="text-[55px] font-bold"><span className="text-green-500">Life</span> At HINDSOL</h2>
        <div className={styles.controls}>
          <button onClick={handlePrevClick}>{"<"}</button>
          <button onClick={handleNextClick}>{">"}</button>
        </div>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carouselContent}>
          {/* Render content based on current screen */}
          {currentScreen === 1 && (
            <div className={styles.screen}>
              <div className={styles.column}>
                <div className=" h-[280px] overflow-hidden mt-[100px] rounded-xl">
                  <img
                    width="100%"
                    height="100%"
                    src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 4"
                  />
                </div>
                <div className="overflow-hidden flex flex-col gap-2">
                  <div className=" h-[280px] overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1525373698358-041e3a460346?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Image 5"
                    />
                  </div>
                  <div className="overflow-hidden mb-2 rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Image 5"
                    />
                  </div>
                </div>

                <div className=" h-[385px] mt-10 overflow-hidden rounded-xl">
                  <img
                    width="100%"
                    height="100%"
                    src="https://plus.unsplash.com/premium_photo-1678718711951-e1add4d05f59?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 6"
                  />
                </div>
              </div>
              <div className="w-[30%]  flex flex-col justify-center items-center px-5">
                <h1 className="text-[50px] text-gray-800 font-semibold">Candid conversations</h1>
                <h4 className="text-[20px] text-gray-500"> and diverse perspectives that encourage
                proactive knowledge exchange help foster a culture of courage
                and empathy. Zero judgment on asking questions and actively
                seeking help!
                </h4>
              </div>
            </div>
          )}
         {currentScreen === 2 && (
            <div className={styles.screen}>
              <div className={styles.column}>
                <div className=" h-[280px] overflow-hidden mt-[100px] rounded-xl">
                  <img
                    width="100%"
                    height="100%"
                    src="https://images.unsplash.com/photo-1520583457224-aee11bad5112?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 4"
                  />
                </div>
                <div className="overflow-hidden flex flex-col gap-2">
                  <div className=" h-[280px] overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Image 5"
                    />
                  </div>
                  <div className="overflow-hidden mb-2 rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1651169610763-fddf392fadb4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Image 5"
                    />
                  </div>
                </div>

                <div className=" h-[385px] mt-10 overflow-hidden rounded-xl">
                  <img
                    width="100%"
                    height="100%"
                    src="https://images.unsplash.com/photo-1706550634123-ad2aa217ede8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 6"
                  />
                </div>
              </div>
              <div className="w-[30%]  flex flex-col justify-center items-center px-5">
                <h1 className="text-[50px] text-gray-800 font-semibold">Future generations</h1>
                <h4 className="text-[20px] text-gray-500">will inherit this planet from us. It matters to Blubirch!
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerPageSlider;
