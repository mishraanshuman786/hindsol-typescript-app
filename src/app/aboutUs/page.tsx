import React from "react";
import Navbar from "@/components/Navbar";
const AboutUsPage = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />

      <section className="container mx-auto ">
        <div className="outline-none  flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:h-[600px] md:pr-8 mb-8 flex items-center justify-center relative">
            <img
              className="w-full h-auto "
              src="/images/about1.webp"
              alt="about us"
            />

            <a
              className="opacity-0"
              href="https://www.vecteezy.com/video/28549623-people-are-standing-on-a-ladder-and-holding-a-clipboard"
            >
              people are standing on a ladder and holding a clipboard Stock
              Videos by Vecteezy
            </a>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-[32px] font-semibold mb-4">
              Our Story
            </h2>
            <hr className="md:border md:border-gray-600" />
            <p className="text-gray-700 md:text-[25px]">
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

      <section className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 order-2 md:order-1 mb-8">
            <h2 className="text-2xl md:text-[32px] font-semibold mb-4">Our Mission</h2>
            <hr className="md:border md:border-gray-600" />
            <p className="text-gray-700 md:text-[25px]">
              At Hindsol, we are on a mission to provide customers a effective
              and efficient software solution to boost their business growth. We
              believe in runing with time to enhance our technology stack to
              provide the products to the customers according to their changing
              needs and requirement from time to time. Together, we aim to make
              a positive impact on the software industry to fullfill the
              evolving needs of our customers.
            </p>
          </div>

          <div className="md:w-1/2 order-1 md:order-2">
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
