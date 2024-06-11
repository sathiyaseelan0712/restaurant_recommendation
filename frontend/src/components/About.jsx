import React from "react";
import Mainnavbar from "./Mainnavbar";

function About() {
  return (
    <>
    <Mainnavbar/>
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-10 bg-white rounded-lg shadow-md w-full mt-5 mb-5">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Y2M Holidays, your ultimate destination for discovering the best restaurants around you! Our mission is to help food enthusiasts find the perfect dining spots that match their taste, preferences, and requirements.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Services</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our restaurant recommendation webpage is designed to provide you with a seamless and enjoyable experience in searching for restaurants. Whether you are craving a specific cuisine, looking for a restaurant with a certain rating, or just exploring new dining options in a particular location, our platform has got you covered.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Features</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Search for restaurants based on cuisine, location, and ratings.</li>
          <li>Discover top-rated restaurants and exclusive offers.</li>
          <li>Read detailed descriptions and view the menu before making a choice.</li>
          <li>Get personalized recommendations tailored to your preferences.</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Admin Panel</h3>
        <p className="text-lg text-gray-700 mb-6">
          For restaurant owners and administrators, we offer a robust admin panel where you can easily manage restaurant details. This includes adding new restaurants, updating existing information, and ensuring your restaurant reaches the right audience.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Commitment</h3>
        <p className="text-lg text-gray-700 mb-6">
          At Y2M Holidays, we are committed to enhancing your dining experience. Our team is constantly working to improve our platform and add new features that make finding the perfect restaurant as easy and enjoyable as possible.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h3>
        <p className="text-lg text-gray-700 mb-6">
          If you have any questions, feedback, or suggestions, feel free to reach out to us via our contact page. We are always here to help and would love to hear from you!
        </p>
      </div>
    </div>
    </>
  );
}

export default About;
