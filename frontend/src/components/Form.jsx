import React, { useState } from 'react';
import axios from 'axios';
const Form = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(0);
  const [offers, setOffers] = useState(false);
  const [cuisines, setCuisine] = useState('');
  const [menu, setMenu] = useState([{ name: '' }]);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(true); 

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContact(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleRatingChange = (event) => {
    const ratingValue = parseFloat(event.target.value);
    if (ratingValue >= 1 && ratingValue <= 5) {
      setRating(ratingValue);
      setErrors((prevErrors) => ({ ...prevErrors, rating: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, rating: 'Rating must be between 1 and 5' }));
    }
  };

  const handleOffersChange = (event) => {
    setOffers(event.target.checked);
  };

  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };

  const handleMenuChange = (index, event) => {
    const newMenu = [...menu];
    newMenu[index] = event.target.value; // Treat each item in the menu array as a string
    setMenu(newMenu);
  };

  const handleAddMenu = () => {
    setMenu([...menu, { name: '' }]);
  };

  const handleRemoveMenu = (index) => {
    const newMenu = menu.filter((_, i) => i !== index);
    setMenu(newMenu);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      address,
      contact,
      location,
      rating,
      offers,
      cuisines,
      menu, 
    }; 
    axios.post('http://localhost:3000/', formData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleClose = () => {
    setIsVisible (false); // Hide the form when the close button is clicked
  };

  if (!isVisible) {
    return null; 
  };
  
    
  return (
    
    <form onSubmit={handleSubmit} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
      <div className="relative overflow-hidden custom-container">
        
        <div className="bg-purple-300 p-8 rounded-lg w-[40vw]">
        <button
        type="button"
        onClick={handleClose}
        className="absolute top-0 left-0 m-2 text-2xl text-black cursor-pointer">
        X
      </button>
          <h2 className="text-center text-2xl font-extrabold text-black mb-6">
            RESTAURANT DETAILS
          </h2>
          <div className="mb-4">
            <input
              type="text"
              className="border rounded px-4 py-2 w-full"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="border rounded px-4 py-2 w-full"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="border rounded px-4 py-2 w-full"
              placeholder="Contact Number"
              value={contact}
              onChange={handleContactNumberChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="border rounded px-4 py-2 w-full"
              placeholder="Location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              className="border rounded px-4 py-2 w-full"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={handleRatingChange}
              step="0.1"
              min="1"
              max="5"
            />
            {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-5 h-5 text-green-500 border-gray-300 rounded form-checkbox mr-2"
                id="offers"
                name="offers"
                checked={offers}
                onChange={handleOffersChange}
              />
              <label htmlFor="offers" className="text-black">
                Offers
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="overflow-y-auto h-24">
            {menu.map((dish, index) => (
            <div key={index} className="flex items-center mb-2">
              <label htmlFor={`menu-${index}`} className="mr-2">Menu {index + 1}:</label>
              <div className="relative w-full">
                <input
                  type="text"
                  id={`menu-${index}`}
                  name="name"
                  value={dish} // Treat dish as a string, not an object
                  onChange={(event) => handleMenuChange(index, event)}
                  className="w-full bg-gray-100 border border-gray-300 text-black rounded py-2 px-4"
                />
                <span
                  onClick={() => handleRemoveMenu(index)}
                  className="absolute top-0 right-0 m-2 text-2xl text-black cursor-pointer"
                >
                  ×
                </span>
              </div>
            </div>
          ))}
            </div>
            <button
              type="button"
              onClick={handleAddMenu}
              className="bg-purple-500 text-white py-2 px-4 rounded mt-4"
            >
              Add Dish
            </button>
          </div>
          <div className="mb-4">
            <select
              className="border rounded px-4 py-2 w-full"
              value={cuisines}
              onChange={handleCuisineChange}
            >
              <option value="" disabled>
                Cuisine
              </option>
              <option value="northindian">North Indian</option>
              <option value="southindian">South Indian</option>
              <option value="chinese">Chinese</option>
            </select>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
