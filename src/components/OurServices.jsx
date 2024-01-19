"use client";
import { Container } from "postcss";
import React from "react";
export function OurServices() {
  return (
    <div>
      <div className="text-[40px] text-center my-[100px pt-[40px] pb-[40px]">
        Our Services
      </div>
      <div className="text-lg text-center pb-[20px]">
        In DesignRush, we have been featured as one of the top 5 Salesforce
        companies for providing outstanding services
      </div>

      {/* Our services para Container */}
      <div className="flex text-center mx-[120px] h-[400px]">
        {/* First Sub Container */}
        <div className="w-[400px] grid grid-rows-3">
          <div>
            <h1 className="font-bold">Web Application Development</h1>
            <p>
              {" "}
              Welcome your customers with an interactive & highly-professional
              web experience that stays with them forever.{" "}
            </p>
          </div>
          <div>
            <h1 className="font-bold">Chat Bot Development</h1>
            <p>
              Save thousands of dollars by letting one chatbot simultaneously
              handle all your customers queries.
            </p>
          </div>
          <div>
            <h1 className="font-bold">Mobility Solutions</h1>
            <p>
              {" "}
              Your idea is priceless and has the power to bring a change. Its
              high time you develop it into a million dollar app.
            </p>
          </div>
        </div>

        {/* Second Sub Container */}
        <div className="w-[400px]">
          <h1>Center div</h1>
        </div>

        {/* Third Sub Container */}
        <div className="w-[400px] grid grid-rows-3">
          <div>
            <h1 className="font-bold">Performance Marketing</h1>
            <p>
              It isnt easy to bring customers to your business. But, with us,
              its quite the opposite.
            </p>
          </div>
          <div>
            {" "}
            <h1 className="font-bold">AR/VR Development</h1>
            <p>
              Step into the tech-terrain of Augmented and Virtual Reality today
              and already leave your competitors behind.
            </p>
          </div>
          <div>
            <h1 className="font-bold">Salesforce Development</h1>
            Our technical proficiency in salesforce is unbeatable. We weave
            diverse elements to power up your CRM.
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurServices;
