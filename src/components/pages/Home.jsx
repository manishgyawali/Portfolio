import React from "react";
import bannerimg from "../../assets/Images/banner3.png";
import Aboutme from "../Aboutme/Aboutme";
import Blog from "../Blog/Blog";
import Service from "../Services/Services";
import Pricing from "../Pricing/Pricing";
import Projects from "./../Projects/Projects";
import CountUps from "./../CountUp/CountUps";
import Testimonial from "../Testimonials/Testimonial";
import signature from "../../assets/Images/signature3.png";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/Images/bannermain.png";
import Image from "../../assets/Images/banner2.png";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about"); // Change '/about-me' to the actual path of your "About Me" page
  };

  return (
    <div>
      <div className="">
        {/* <div className="w-10/12 mx-auto py-10 grid md:grid-cols-2 ">
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-col gap-5 text-center justify-center items-center">
              <h3 className="text-gray-600 ">THIS IS ME</h3>
              <h1 className="text-5xl font-semibold font-montserrat animate-bounce">
              MANISH GYAWALI
              </h1>
              <p className="text-gray-400 font-montserrat">
              Meet Me, a Full Stack Developer crafting sleek designs and robust solutions. Explore my work and see ideas come to life!              </p>
              <h1 className="text-xl text-center animate-pulse text-gray-500 font-mono">
                - Full Stack Developer -
              </h1>
            </div>

            <div className="flex items-center justify-center gap-5">
              <div className="relative group">
                <button
                  onClick={handleClick}
                  className="relative inline-block p-10px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-600 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        DISCOVER ME
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
              <div className="relative group">
                <button
                 
                  className="relative inline-block p-10px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-600 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        DOWNLOAD CV
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src={bannerimg}
              alt="bannerimage"
              className="transition-transform duration-300 hover:scale-105 "
            />
          </div>
        </div> */}

        {/* <div className="relative w-full ">
          <img src={Banner} alt="" className="w-full h-[550px] object-cover" />
          <div className="absolute  grid grid-cols-2 inset-0  items-center  bg-black bg-opacity-50">
            <div className="flex  flex-col gap-5 ml-36 ">
              <h3 className="text-white pl-3 text-sm tracking-wider font-mono ">
                THIS IS ME
              </h3>
              <h1 className="text-white text-5xl  tracking-wider  font-montserrat ">
                MANISH GYAWALI
              </h1>
              <h2 className="text-[#60A5FA] font-mono animate-pulse tracking-wider text-lg">
                - Frontend Developer -
              </h2>
              <div className="flex items-center gap-5">
                <div className="bg-white h-14 border"></div>
                <p className="text-white font-mono  ">
                  {" "}
                  Meet Me, a Frontend Developer crafting sleek designs and
                  robust solutions. Explore my work and see ideas come to life!
                </p>
              </div>
              <div className="flex items-center  gap-5">
                <div className="relative group">
                  <button
                    onClick={handleClick}
                    className="relative inline-block  font-semibold leading-6 text-white bg-[#60A5FA] shadow-2xl cursor-pointer rounded-xl shadow-zinc-600 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                    <span className="relative z-10 block px-6 py-2 rounded-xl bg-[#60A5FA]">
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="transition-all duration-500 group-hover:translate-x-1">
                          DISCOVER ME
                        </span>
                        <svg
                          className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </button>
                </div>
                <div className="relative group">
                  <button className="relative inline-block  font-semibold leading-6 text-white bg-[#60A5FA] shadow-2xl cursor-pointer rounded-xl shadow-zinc-600 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                    <span className="relative z-10 block px-6 py-2 rounded-xl bg-[#60A5FA]">
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="transition-all duration-500 group-hover:translate-x-1">
                          DOWNLOAD CV
                        </span>
                        <svg
                          className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              <img src={Image} alt="" />
            </div>
          </div>
        </div> */}
        <div className=" bg-[#F8F7F3] grid grid-cols-2 items-center justify-center p-6">
          <div className="grid grid-cols-2 gap-8 items-center max-w-5xl">
            {/* Left Section */}
            <div>
              <div className="flex items-center  flex-col gap-5 ">
                <h3 className=" pl-3 text-sm tracking-wider font-mono ">
                  THIS IS ME
                </h3>
                <h1 className=" text-6xl font-bold  tracking-wider  font-montserrat ">
                  MANISH GYAWALI
                </h1>
                <h2 className="text-[#60A5FA] font-mono animate-pulse tracking-wider text-lg">
                  - Frontend Developer -
                </h2>
                <div className="flex items-center gap-5">
                  <div className=" h-14 border border-s-gray-950"></div>
                  <p className=" font-mono  ">
                    {" "}
                    Meet Me, a Frontend Developer crafting sleek designs and
                    robust solutions. Explore my work and see ideas come to
                    life!
                  </p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-1 mt-8">
                {["yt", "ig", "fb", "x"].map((icon) => (
                  <div
                    key={icon}
                    className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-gray-700 font-semibold"
                  >
                    {icon}
                  </div>
                ))}
              </div>

              {/* Statistics */}
              <div className="flex space-x-10 mt-10">
                <div>
                  <p className="text-3xl font-cursive font-bold">+250k</p>
                  <p className="text-gray-700 text-sm mt-2">
                    Videos that reaching a wide audience and give lasting
                    impression
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-cursive font-bold">+800k</p>
                  <p className="text-gray-700 text-sm mt-2">
                    Hours watched, engaging storytelling that captivates viewers
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
          </div>
            <div className="">
              <img src={Banner} alt="Camera User" className="rounded-lg w-[400px] " />
            </div>
        </div>
      </div>

      {/* <div className="relative">
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-6xl font-bold">Manish Gyawali</h1>
              <p className="text-xl">- full stack developer -</p>
            </div>
            <img
              src={signature}
              alt="signature"
              className="opacity-10 h-[600px] w-[1200px] object-cover"
            />
          </div> */}
      <Aboutme />
      {/* <Service /> */}
      <CountUps />
      {/* <Testimonial />
      <Projects />
      <Pricing />
      <Blog /> */}
    </div>
  );
};

export default Home;
