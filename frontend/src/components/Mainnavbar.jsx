import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
function Mainnavbar({onApply}){
    const navigate = useNavigate();
  const adminpage = () => {
    navigate('/AdminPage');
  }
  const [search, setSearch] = useState('');
  const handlesearchchange = (event) => {
    setSearch(event.target.value);
  }
  const handleApplyClick = () => {
    onApply(search);
  };
  
    return(
        <>
        <nav class="bg-purple-200">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">
      <div class="flex items-center space-x-4">
        <h2 class="text-2xl font-bold">Y2M Holidays</h2>
      </div>
      <div class="hidden md:flex items-center space-x-1">
        <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-purple-600 transition duration-300">Home</a>
        <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-purple-600 transition duration-300">About</a>
        <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-purple-600 transition duration-300">Contact</a>
      </div>
      <div class="flex items-center space-x-2">
      <input type="text" className="block w-full text-black font-['Denk_One'] py-2 px-4 bg-white" placeholder="Search" value={search} onChange={handlesearchchange}/>
        <button class="bg-purple-500 text-white font-bold py-2 px-4 rounded" onClick={handleApplyClick} >Apply</button>
        <button class="bg-purple-500 text-white font-bold py-2 px-4 rounded" onClick={adminpage}>Admin</button>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
export default Mainnavbar