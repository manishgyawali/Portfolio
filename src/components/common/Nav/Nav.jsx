import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signature from "../../../assets/Images/signature.png"
import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
    setTimeout(() => {
      setShowDropdown(false);
    }, 2000); 
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Change '/about-me' to the actual path of your "About Me" page
  };

  return (
    <nav className="shadow-md sticky top-0 bg-white">
      <div className="flex justify-between items-center py-3 cursor-pointer w-11/12 mx-auto">
        <div>
          {/* <h1 className="font-bold text-xl">Personal</h1> */}
          <img  onClick={handleClick} src={Signature} alt=""  className="h-[46px]"/>

        </div>
        <div className="">
          <ul className="flex gap-7 text-xs cursor-pointer">
            {/* HOME */}
            <Link to={"/"}>
              <span className="uppercase text-blue-400 font-semibold">HOME</span>
            </Link>

            {/* ABOUT */}
            <div className="relative group cursor-pointer  hover:text-black">
              <Link to={"/about"}>
                <span className="uppercase">ABOUT</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />
            </div>

            {/* SERVICES */}
            <div className="relative group cursor-pointer hover:text-black">
              <Link to={"/services"}>
                <span className="uppercase">SERVICES</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />
            </div>

            {/* PORTFOLIO */}
            <div className="relative group cursor-pointer  hover:text-black">
              <Link to={"/portfolio"}>
                <span className="uppercase">PORTFOLIO</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />
            </div>

            {/* PRICING */}
            <div className="relative group cursor-pointer  hover:text-black">
              <Link to={"/pricing"}>
                <span className="uppercase">PRICING</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />
            </div>

            {/* BLOG (with Dropdown) */}
            <div
              className="relative group cursor-pointer  hover:text-black"
              onMouseEnter={handleMouseEnter}
            >
              <Link to={"/blog"}>
                <span className="uppercase">BLOG</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute w-[200px] left-0 px-5 bg-white shadow-md rounded-md mt-2 z-10">
                  <ul className="py-2 ">
                    <li className="px-5 py-2 hover:text-[#60A5FA] ">
                      <Link to={"/bloghome"}>Blog Home</Link>
                    </li>
                    <li className="px-5 py-2 hover:text-[#60A5FA]">
                      <Link to={"/blog/category-2"}>Blog Single</Link>
                    </li>
                  
                  </ul>
                </div>
              )}
            </div>

            {/* PAGES */}
            <div className="relative group cursor-pointer  hover:text-black">
              <Link to={"/pages"}>
                <span className="uppercase">PAGES</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />
            </div>

            {/* CONTACT */}
            <div className="relative group cursor-pointer hover:text-black">
              <Link to={"/contact"}>
                <span className="uppercase">CONTACT</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
