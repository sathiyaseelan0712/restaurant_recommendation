import React from "react";
import {useNavigate} from 'react-router-dom';
function Navbar(){
  const navigate = useNavigate();
  const adminpage = () => {
    navigate('/AdminPage');
  }
    return(
    <>
  <div className="z-30">
  <div className="h-8vh flex justify-between lg:py-3 px-10 py-10 border-b bg-purple-200">
    <div className="flex items-center flex-l">
      <h2 className="text-3xl font-bold text-black font-['Denk_One']">Y2M Holidays</h2>
    </div>
    <div className="flex items-center">
      <select className="block w-full  text-black font-['Denk_One'] py-2 px-4  focus:outline-none focus:bg-purple-200 bg-purple-200">
        <option>Menu</option>
        <option value="1"></option>
        <option value="1">breakfast</option>
      </select>
      <select className="block w-full  text-black font-['Denk_One'] py-2 px-4   focus:outline-none focus:bg-purple-200 bg-purple-200">
        <option>Cuisine</option>
        <option value="1">Option 1</option>
      </select>
      <select className="block w-full  text-black font-['Denk_One'] py-2 px-4   focus:outline-none bg-purple-200">
        <option>Rating</option>
        <option value="1">Option 1</option>
      </select>
      <select className="block w-full  text-black font-['Denk_One'] py-2 px-4  focus:outline-none focus:bg-purple-200 bg-purple-200">
        <option>Location</option>
        <option value="1">Option 1</option>
      </select>
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