
import React,{useEffect,useState} from "react";
import Navbar from "./Navbar";

import axios from "axios";
function Home(){
    const [details,setDetails]=useState([]);
    async function getRestaraunt(){
        const res=await axios.get("http://localhost:3000/");
        console.log(res.data);
        setDetails(res.data);
    }
    useEffect(()=>{
        getRestaraunt();
    },[])   

    return(
        <>
        <div className="flex ">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
          {details.map((detail, index) => (
            <div key={index} className="flex flex-col space-y-4 m-4">
            <h2>{detail.name}</h2>
            <p>{detail.location}</p>
            <p>{detail.address}</p>
            <p>{detail.contact}</p>
            <p>{detail.rating}</p>
            </div>
        ))}
      </div>
      </div>
        </>
    )
}
export default Home;