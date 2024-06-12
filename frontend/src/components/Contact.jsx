import React, { useState } from "react";
import Mainnavbar from "./Mainnavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/contact", {
        name,
        email,
        feedback,
      });
      console.log("Message sent successfully!", response.data);
      alert("Message sent successfully!");
      
      setName("");
      setEmail("");
      setFeedback("");
      if(response.data.success)
        navigate("/Home");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <Mainnavbar />
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md w-full">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Contact Us</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message:
              </label>
              <textarea
                id="message"
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 transform transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
