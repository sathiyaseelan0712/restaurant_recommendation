import React, { useState } from 'react';


const RestaurantForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(0);
  const [offers, setOffers] = useState(false);
  const [cuisine, setCuisine] = useState('');
  const [menu, setMenu] = useState([{ name: ''}]);
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleRatingChange = (event) => {
    const ratingValue = parseFloat(event.target.value);
    if (ratingValue >= 1 && ratingValue <= 5) {
      setRating(ratingValue);
    } else {
      setErrors({ rating: 'Rating must be between 1 and 5' });
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
    newMenu[index][event.target.name] = event.target.value;
    setMenu(newMenu);
  };

  const handleAddMenu = () => {
    setMenu([...menu, { name: ''}]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      address,
      contactNumber,
      location,
      rating,
      offers,
      cuisine,
      menu,
    };
    console.log(formData);
    // Send the form data to your server or API
  };

  return (
    <form onSubmit={handleSubmit} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
      <div className="relative overflow-hidden custom-container">
        <div className="bg-purple-300 p-8 rounded-lg w-30">
          <h2 className="flex justify-center items-center font-['Inknut_Antiqua'] text-[26px] font-semibold leading-[30px] text-[#fff] relative text-center mb-6 text-black">RESTAURANT DETAILS</h2>
          <div className="mb-6">
            <input type="text" className="border rounded px-4 py-2 w-full" placeholder="Name" value={name} onChange={handleNameChange} />
          </div>
          <div className="mb-4">
            <input type="text" className="border rounded px-4 py-2 w-full" placeholder="Address" value={address} onChange={handleAddressChange} />
          </div>
          <div className="mb-4">
            <input type="text" className="border rounded px-4 py-2 w-full" placeholder="Contact Number" value={contactNumber} onChange={handleContactNumberChange} />
          </div>
          <div className="mb-4">
            <input type="text" className="border rounded px-4 py-2 w-full" placeholder="Location" value={location} onChange={handleLocationChange} />
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
        </div>
          <div className="mb-4">
            <div className="flex items-center">
                <input type="checkbox" className="w-5 h-5 text-green-500 border-gray-300 rounded form-checkbox mr-2" id="offers" name="offers" checked={offers} onChange={handleOffersChange} />
                <label htmlFor="offers" className="text-black">Offers</label>
            </div>
            </div>
            <div className="mb-4">
            <div className="overflow-y-auto h-24">
                {menu.map((dish, index) => (
                <div key={index} className="flex items-center mb-2">
                <label htmlFor={`menu-${index}`}>Menu {index + 1}:</label>
                <input
                    type="text"
                    id={`menu-${index}`}
                    defaultValue={dish.name}
                    onChange={(event) => handleMenuChange(index, event)}
                    className="w-full bg-gray-100 border border-gray-300 text-black rounded py-2 px-4"
                />
                </div>
                ))}
        </div>
            <button type="button" onClick={handleAddMenu} className="bg-purple-500 text-white py-2 px-4 rounded mt-4">Add Dish</button>
        </div>
          <div className="mb-4">
            <select className="flex justify-center items-center border rounded px-4 py-2 w-full custom-select mx-auto" value={cuisine} onChange={handleCuisineChange}>
              <option value="" disabled selected style={{ display: "none" }}>Cuisine</option>
              <option value="northindian">North Indian</option>
              <option value="southindian">South Indian</option>
              <option value="chinese">Chinese</option>
            </select>
         </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RestaurantForm;