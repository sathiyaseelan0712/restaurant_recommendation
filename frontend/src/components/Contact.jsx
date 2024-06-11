import React from "react";
import Mainnavbar from "./Mainnavbar";

function Contact() {
  return (
    <>
    <Mainnavbar/>
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            ></textarea>
          </div>
          <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 transform transition-transform duration-300 hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
