import React from "react";
import bannerimg from "../../assets/Images/banner.png";  
import Aboutme from "../Aboutme/Aboutme";
import Blog from "../Blog/Blog";
import Service from "../Services/Services";
import Pricing from "../Pricing/Pricing";


const Home = () => {
  return (
<div>
<div className="bg-gray-100">
      <div className="w-11/12 mx-auto py-24 grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
         <div className="flex flex-col gap-5">
         <h3 className="text-gray-600">THIS IS ME</h3>
          <h1 className="text-5xl font-semibold">MANISH GYAWALI</h1>
          <p className="text-gray-400">
            You will begin to realise why this exercise is called the Dickens
            Pattern with reference to the ghost showing Scrooge some different
            futures. discover now
          </p>
         </div>
         <div>
         <button className="bg-gradient-to-r from-[#7b5eea] to-[#56c1ff] text-white px-7 py-2 text-sm">
         DISCOVER ME
         </button>
         </div>
         
        </div>
        <div>
          <img src={bannerimg} alt="bannerimage" className="" /> 
        </div>
      </div>
    </div>

    <Aboutme/>
    <Service/>
    <Pricing/>
    <Blog/>
</div>
    
  );
};

export default Home;
