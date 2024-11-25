import React from "react";
import Aboutme from "../Aboutme/Aboutme";
import { FaArrowRightLong } from "react-icons/fa6";
import Testimonial from "../Testimonials/Testimonial";
import Logo from "../../assets/Images/aribt.png";
import Image from "../../assets/Images/banner2.png";

const About = () => {
  return (
    <div>
      <div className="p-24 text-center flex flex-col gap-5 bg-gradient-to-r from-[#ed9728] to-[#de56ff]">
        <h1 className="text-4xl font-semibold text-white">ABOUT ME</h1>
        <div className="text-sm text-white flex gap-3 items-center justify-center">
          <button>Home</button>
          <FaArrowRightLong />
          <button>About Me</button>
        </div>
      </div>

      <div className="flex flex-col gap-10 bg-[#F8F7F3]">
        <div className="flex items-center gap-5 py-5 w-11/12 mx-auto text-sm text-gray-500">
          <p className="text-lg">
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought. such as Coca Cola. Dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
          <img
            src={Image}
            alt=""
            className="w-44 h-44 rounded-full object-cover"
          />
        </div>

        <div className="w-11/12 mx-auto flex flex-col gap-4">
          <h1 className="text-4xl text-[#2C5282] font-mono font-semibold">
            EXPERIENCE:
          </h1>
          <div className="grid grid-cols-3 gap-3  ">
            <div className="border flex flex-col items-center rounded bg-[#EDF2F7]   px-10 pb-8 ">
              <img src={Logo} alt="" className="w-36 h-24 object-cover " />
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-2xl text-[#2C5282] font-bold">
                  Frontend Developer
                </h1>
                <h2 className="text-center text-gray-500  font-semibold ">
                  at Abhyam Robotics Institution of Business and Technology
                </h2>
                <h2 className="text-center text-sm text-gray-600">
                  Developed web applications using React and Tailwind CSS
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto flex flex-col gap-4">
          <h1 className="text-4xl text-[#2C5282] font-mono font-semibold">
            EDUCATION:
          </h1>
          <div className="grid grid-cols-3 gap-3  ">

            
          </div>
        </div>
      </div>
      {/* <Testimonial /> */}
    </div>
  );
};

export default About;
