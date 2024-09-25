import React from "react";
import AboutImg from "../../Images/mainimg2.png";

const Aboutme = () => {
  return (
    <div className="grid grid-cols-2  w-11/12 mx-auto py-24 gap-10">
      <div>
        <img src={AboutImg} alt="" className=" w-96 object-cover" />
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-5">
          <h2>ABOUT ME</h2>
          <h1 className="text-4xl font-semibold">Personal Details</h1>
          <p className="text-gray-400 ">
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought. such as Coca Cola. Dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-r from-[#7b5eea] to-[#56c1ff] text-white px-7 py-2 text-sm">
            VIEW FULL DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
