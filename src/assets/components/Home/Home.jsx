import React from "react";
import bannerimg from "../../../assets/banner.png";  // Corrected import

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto py-52 grid grid-cols-2 gap-10">
        <div className="">
          <h3 className="text-gray-600">THIS IS ME</h3>
          <h1 className="text-5xl font-semibold">MANISH GYAWALI</h1>
          <p className="text-gray-400">
            You will begin to realise why this exercise is called the Dickens
            Pattern with reference to the ghost showing Scrooge some different
            futures. discover now
          </p>
          <button className="bg-gradient-to-r from-[#7b5eea] to-[#56c1ff] text-white px-7 py-2 text-sm">
            DISCOVER ME
          </button>
        </div>
        <div>
          <img src={bannerimg} alt="bannerimage" className="" /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
