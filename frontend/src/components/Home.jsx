import React, { useEffect, useState } from "react";
import Mainnavbar from "./Mainnavbar";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from "./Photos/image1.png";
import Image2 from "./Photos/image2.png";
import Image3 from "./Photos/image3.png";
import Image4 from "./Photos/image4.png";

function Home() {
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [carouselImages] = useState([Image1, Image2, Image3, Image4]);

  async function getRestaurant() {
    const res = await axios.get("http://localhost:3000/");
    console.log(res.data);
    setDetails(res.data);
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  useEffect(() => {
    const filtered = details.filter((item) => {
      const matchesCuisine = cuisine === "" || (item.cuisines && item.cuisines.includes(cuisine));
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        matchesCuisine &&
        (rating === "" || item.rating >= parseInt(rating)) &&
        (location === "" || item.location === location)
      );
    });
    setFilteredData(filtered);
  }, [search, cuisine, rating, location, details]);

  const handleApply = (searchTerm, selectedCuisine, selectedRating, selectedLocation) => {
    setSearch(searchTerm);
    setCuisine(selectedCuisine);
    setRating(selectedRating);
    setLocation(selectedLocation);
  };

  return (
    <>
      <Mainnavbar onApply={handleApply} />
      <div className="pt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Find Your Favorite Restaurant</h1>
        </div>
        <div className="pt-4 flex">
          <div className="w-1/5">
            <div className="flex flex-col items-center space-y-8">
              <div className="flex flex-col items-center relative pt-20">
                <img
                  src="https://imgs.search.brave.com/eGPYI2Pk0gfJnUWo3JM3a5SITBSerBlmuwYC20FZijY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jb25x/dWVyaW5nY3Vpc2lu/ZS5jb20vaW1hZ2Vz/L2hvbWVib3gtY2F0/ZXJpbmcuanBn"
                  alt="Cuisine"
                  className="w-24 h-24 rounded-full cursor-pointer border-4 border-white shadow-lg"
                />
                <select
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setCuisine(e.target.value)}
                >
                  <option value="">Cuisine</option>
                  <option value="South India">South India</option>
                  <option value="North India">North India</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="North Korea">North Korea</option>
                </select>
                <label className="mt-2 text-white font-['Denk_One']">{cuisine || 'Cuisine'}</label>
              </div>
              <div className="flex flex-col items-center relative">
                <img
                  src="https://imgs.search.brave.com/PUwKFnEpAlCLR8KRTSwMbiyXv5rNR-L-yUF5_hmeIyQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA0/NDc0Mzk1Mi9waG90/by9yZXZpZXctcmF0/aW5nLWNvbmNlcHQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXNQUFJLbTNpeDdQ/TjNBNTVfU1FrLWQx/VTRfUEVXdnNEaWd4/QkhqLUlXdGc9"
                  alt="Rating"
                  className="w-24 h-24 rounded-full cursor-pointer border-4 border-white shadow-lg"
                />
                <select
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Rating</option>
                  <option value="4">4+ stars</option>
                  <option value="3">3+ stars</option>
                  <option value="2">2+ stars</option>
                  <option value="1">1+ stars</option>
                </select>
                <label className="mt-2 text-white font-['Denk_One']">{rating || 'Rating'}</label>
              </div>
            </div>
          </div>

          <div className="w-3/5 px-4">
            <Carousel interval={3000}>
              {carouselImages.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 rounded-lg shadow-lg"
                    style={{ height: "400px" }}
                    src={image}
                    alt={`Carousel image ${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="w-1/5 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center relative">
                <img
                  src="https://imgs.search.brave.com/iYiJ6e1lgwldFIrYDRdJyns1aOQccZHdrMncMHqHY-4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/OTA2NDM0Ni9waG90/by9jaXR5LW1hcC13/aXRoLXBpbi1wb2lu/dGVycy0zZC1yZW5k/ZXJpbmctaW1hZ2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVRyWkhUOFI3RU9y/UXY0dFJwZE9VVnVP/azhLU0VhemRzXzhX/WlI5MWZWdFU9"
                  alt="Location"
                  className="w-24 h-24 rounded-full cursor-pointer border-4 border-white shadow-lg"
                />
                <select
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Location</option>
                  <option value="Salem">Salem</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Erode">Erode</option>
                  <option value="Hosur">Hosur</option>
                  <option value="Karur">Karur</option>
                </select>
                <label className="mt-2 text-white font-['Denk_One']">{location || 'Location'}</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {filteredData.length > 0 ? (
            filteredData.map((detail, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={index % 2 === 0 ? Image1 : Image2}
                    alt={detail.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <h2 className="text-lg font-semibold mt-4">{detail.name}</h2>
                  <p className="text-gray-700 mb-1">Location: {detail.location}</p>
                  <p className="text-gray-700 mb-1">Address: {detail.address}</p>
                  <p className="text-gray-700 mb-1">Contact: {detail.contact}</p>
                  <p className="text-gray-700">Rating: {detail.rating}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No restaurants found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
