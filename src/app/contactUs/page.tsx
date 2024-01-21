"use client"
import Navbar from '../../components/Navbar';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="font-sans min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Contact Form */}
      <div className="flex flex-col md:flex-row relative">

        {/* Contact Image */}
        <img
          src='/contactPage.jpg'
          width={600}
          height={600}
          className='md:w-1/2 object-cover'
          alt='Contact Image SVG'
        />

        {/* Form Container */}
        <div className="md:w-1/2 p-8 bg-white rounded shadow-lg">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

          {/* Form */}
          <form action="#" method="POST">

            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                placeholder='Enter Your Name'
                id="name"
                name="name"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                placeholder='Enter Your Email'
                id="email"
                name="email"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea
                id="message"
                placeholder='Write a Message'
                name="message"
                className="w-full p-2 border rounded"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300">Submit</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
