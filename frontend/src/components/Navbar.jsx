import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
function Navbar({onApply}){
  const navigate = useNavigate();
  const adminpage = () => {
    navigate('/AdminPage');
  }
  const [search, setSearch] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState('');
  const [location, setLocation] = useState('');
  const handlesearchchange = (event) => {
    setSearch(event.target.value);
  }
  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };
  
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleApplyClick = () => {
    onApply(search, cuisine, rating, location);
  };
  
    return(
    <>
  <div className="z-30">
  <div className="h-8vh flex justify-between lg:py-3 px-10 py-10 border-b bg-purple-200">
    <div className="flex items-center flex-l">
      <h2 className="text-3xl font-bold text-black font-['Denk_One']">Y2M Holidays</h2>
    </div>
    <div className="flex items-center">
      <input type="text" className="block w-full text-black font-['Denk_One'] py-2 px-4 bg-white" placeholder="Search" value={search} onChange={handlesearchchange}/>
      <select className="block w-full  text-black font-['Denk_One'] py-2 px-4   focus:outline-none focus:bg-purple-200 bg-purple-200" value={cuisine} onChange={handleCuisineChange}>
        <option>Cuisine</option>
        <option value="1">South India</option>
        <option value="2">North India</option>
        <option value="3">North India</option>
        <option value="4">China</option>
        <option value="5">Japan</option>
        <option value="6">North korea</option>

      </select>
      <select className="block w-full text-black font-['Denk_One'] py-2 px-4 pr-8 focus:outline-none focus:bg-purple-200 bg-purple-200" value={rating} onChange={handleRatingChange}>
        <option>Rating</option>
        <option value="1">Option 1</option>
      </select>
      <select className="block w-full  text-black font-['Denk_One'] py-2 px-4  focus:outline-none focus:bg-purple-200 bg-purple-200" value={location} onChange={handleLocationChange}>
        <option>Location</option>
        <option value="1">Option 1</option>
      </select>
      <button className="font-['Denk_One'] border-b rounded-lg py-1 px-2 bg-purple-400" onClick={handleApplyClick}>Apply</button>
      <button className="font-['Denk_One'] border-b rounded-lg py-1 px-2 bg-purple-400 " onClick={adminpage}>
          Admin
      </button>
    </div>
  </div>
</div>
    </>
    )
}
export default Navbar;