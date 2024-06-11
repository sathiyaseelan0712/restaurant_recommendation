import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome, faInfoCircle, faEnvelope, faUserShield } from "@fortawesome/free-solid-svg-icons";

function Mainnavbar({ onApply }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const adminPage = () => {
    navigate('/AdminPage');
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleApplyClick = () => {
    onApply(search, "", "", ""); // Passing empty strings for cuisine, rating, and location
  };

  return (
    <nav className="bg-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl text-white font-bold">Y2M Holidays</h2>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="flex items-center py-4 px-2 text-white font-semibold hover:text-gray-200 transition duration-300">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
            <a href="/about" className="flex items-center py-4 px-2 text-white font-semibold hover:text-gray-200 transition duration-300">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              About
            </a>
            <a href="/contact" className="flex items-center py-4 px-2 text-white font-semibold hover:text-gray-200 transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative text-gray-600">
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2 rounded-lg bg-white shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
              />
              <FontAwesomeIcon icon={faSearch} className="absolute top-0 left-0 mt-3 ml-3 text-gray-400" />
            </div>
            <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300" onClick={handleApplyClick}>
              Apply
            </button>
            <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300" onClick={adminPage}>
              <FontAwesomeIcon icon={faUserShield} className="mr-2" />
              Admin
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Mainnavbar;
