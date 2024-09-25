import React from "react";

import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-500">
      <div className="w-11/12 py-24 mx-auto grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-10">
        <div className="grid col-span-2 gap-5">
          <h1 className="text-xl text-white font-semibold">About Me</h1>
          <p className="w-11/12 ">
            We have tested a number of registry fix and clean utilities and
            present our top 3 list on our site for your convenience.
          </p>
          <p>Copyright ©2024 All rights reserved | Manish Gyawali</p>
        </div>

        <div className="col-span-2 flex flex-col gap-5">
          <h1 className="text-xl text-white font-semibold">NewsLetter</h1>
          <p className="">Stay updated with our latest trends</p>
          <div className="flex items-center justify-between w-10/12 md:w-full  bg-gray-100 rounded-md shadow-md">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2.5 bg-transparent outline-none placeholder:text-sm"
            />
            <button className="px-4 py-2.5 text-2xl text-white bg-indigo-400 rounded-r-md">
              →
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-xl text-white font-semibold">Follow Me</h1>
          <h2 className="">Lets us be social</h2>
          <div className="flex gap-3 text-white text-2xl text-md">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
