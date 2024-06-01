import React,{useState,useEffect} from "react";
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

      return (
        <>
        <div className="flex bg-purple-200">
        <div className="container mx-auto p-4 bg-purple-400 mt-10 ml-25 border-b rounded-lg   mb-10">
        <div className="flex flex-wrap">
            {details.map((detail, index) => (
            <div key={index} className="container font-['Denk_One'] mx-auto p-2 m-4  border-b rounded-lg max-w-md bg-purple-300">
                <div className="flex flex-col space-y-4">
                <h2>Name : {detail.name}</h2>
                <p>Location : {detail.location}</p>
                <p>Address : {detail.address}</p>
                <p>Contact : {detail.contact}</p>
                <p>Rating : {detail.rating}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
        </div>
    </>
    );
}
export default Home;