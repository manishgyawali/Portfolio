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

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about"); // Change '/about-me' to the actual path of your "About Me" page
  };


  return (
    <div>
      <div className="bg-gray-100">
        <div className="w-10/12 mx-auto py-10 grid md:grid-cols-2 ">
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-col gap-5 text-center justify-center items-center">
              <h3 className="text-gray-600 ">THIS IS ME</h3>
              <h1 className="text-5xl font-semibold font-montserrat animate-bounce">
              MANISH GYAWALI
              </h1>
              <p className="text-gray-400 font-montserrat">
              Meet Me, a Full Stack Developer crafting sleek designs and robust solutions. Explore his work and see ideas come to life!              </p>
              <h1 className="text-xl text-center animate-pulse text-gray-500 font-mono">
                - Full Stack Developer -
              </h1>
            </div>

            {/* <div className="">
              <button className="bg-gradient-to-r from-[#7b5eea] to-[#56c1ff] rounded text-white px-7 py-2 text-sm">
                DISCOVER ME
              </button>
            </div> */}
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
        </div>
      </div>

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
