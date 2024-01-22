"use client"
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Pulsating from "@/components/Pulsating";

const AboutUsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading animation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Pulsating div for loading animation */}
      {loading && <Pulsating />}
      {/* pulsating end */}

      <section className={`container mx-auto px-4 ${loading ? "hidden" : ""}`}>
        <div className="outline-none flex flex-col md:flex-row items-center">
          <div className="md:w-full md:pr-8 mb-8 relative">
            <img
              className="w-full h-auto"
              src="/images/about1.webp"
              alt="about us"
            />

            <a
              className="opacity-0 block mt-2 text-sm text-gray-500"
              href="https://www.vecteezy.com/video/28549623-people-are-standing-on-a-ladder-and-holding-a-clipboard"
            >
              people are standing on a ladder and holding a clipboard Stock
              Videos by Vecteezy
            </a>
          </div>

          <div className="md:w-full">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Story
            </h2>
            <hr className="border-t-2 border-gray-300 mb-4" />
            <p className="text-gray-700 text-base md:text-lg">
              Welcome to Hindsole Softwares Private Limited, where innovation
              meets passion. Our journey began in 2018 with a vision to make a
              software company to provide the software solutions to our
              customers like website development and software development to
              make their life easy. Over the years, we have grown into a
              dedicated team of professionals striving to our company&apos;s mission
              or main objectives.
            </p>
          </div>
        </div>
      </section>

      <section className={`container mx-auto px-4 ${loading ? "hidden" : ""}`}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-full md:pr-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Mission
            </h2>
            <hr className="border-t-2 border-gray-300 mb-4" />
            <p className="text-gray-700 text-base md:text-lg">
              At Hindsol, we are on a mission to provide customers an effective
              and efficient software solution to boost their business growth. We
              believe in running with time to enhance our technology stack and
              provide products to customers according to their changing needs
              and requirements. Together, we aim to make a positive impact on
              the software industry to fulfill the evolving needs of our
              customers.
            </p>
          </div>

          <div className="md:w-full">
            <img
              src="/images/about3.jpg"
              alt="Mission Image"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
