"use client"
import React from "react";
import Slider from"react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/ReviewComponent.css";

const reviews = [
  {
    image: "/review/solomon.jpg",
    name: "Odafe Solomon",
    Designation: "Client",
    description: "Hindsol Software Private Limited is outstanding! Their team's proficiency, reliability, and commitment to quality make them my top choice for IT solutions. Highly recommended without reservation.",
  },
  {
    image: "/review/judy.jpg",
    name: "Judy Onomivbori",
    Designation: "Client",
    description: "Hindsol Software excels in delivering innovative solutions promptly. Their expertise and professionalism are commendable. Highly recommend their services for seamless IT solutions.",
  },
  {
    image: "/review/ashish.jpg",
    name: "Ashish Viishwakarma",
    Designation: "Govn. of India CPWD Ministry",
    description: "Hindsol Software Pvt Ltd consistently impresses with their top-notch IT solutions, reliability, and excellent customer service. They're our go-to for all tech needs!",
  },
  {
    image: "/review/binay.jpg",
    name: "Binay Kumar",
    Designation: "Client",
    description: "Hindsol Software Private Limited consistently impresses with their cutting-edge solutions, stellar customer service, and dedication to exceeding client expectations. Highly recommend their expertise.",
  },
  {
    image: "/review/ram.jpg",
    name: "Shri Ram",
    Designation: "Client",
    description: "Hindsol Software Private Limited delivers exceptional IT solutions, exceeding expectations with their expertise and prompt service. Highly recommended for their professionalism and innovation.",
  }
];

const ReviewComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h1 className="text-center text-blue-800 font-semibold md:text-[40px] text-[28px]">Testimonials</h1>
      <h3 className="text-center text-blue-800 font-semibold md:text-[23px] text-[15px]">See what people are saying</h3>

    <div className="w-4/5 m-auto ">
      <div className="mt-5 mb-20 ">
        <Slider {...settings} >
        {reviews.map((element, index) => {
          return (
          <div key={index} className="bg-orange-200 h-[500px]  text-black rounded-xl">
            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
              <img src={element.image} className="w-44 h-44 rounded-full" />
            </div>
            <div className="flex flex-col justify-between items-center gap-4 p-4">
              <p className="font-semibold text-xl text-gray-800">{element.name}</p>
              <p className="font-semibold text-md text-gray-600">{element.Designation}</p>
              <p className="font-semibold text-center text-md text-gray-600">{element.description}</p>
           
              
            </div>
          </div>)
        })}
        </Slider>

      </div>
    </div>
    </div>
  );
};

export default ReviewComponent;
