import React from "react";
import Aboutme from "../Aboutme/Aboutme";
import CountUps from "./../CountUp/CountUps";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/Images/bannermain.png";
import Image from "../../assets/Images/banner2.png";
import Instagram from "../../assets/Images/instagram.png";
import Facebook from "../../assets/Images/facebook.png";
import Github from "../../assets/Images/github.png";
import Linkedin from "../../assets/Images/linkedin.png";


const Home = () => {
  const navigate = useNavigate();
  const mediaData = [
    {
      image:Instagram,
    },
    {
      image:Facebook,
    } ,  {
      image:Github,
    }  , {
      image:Linkedin,
    }
  ]

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <div className="bg-[#F8F7F3]">
     
        <div className=" grid lg:grid-cols-2 py-5  px-9 ">
          <div className="  items-center py-16  ">
            <div className="flex items-center   flex-col gap-3 ">
              <h3 className=" pl-3 text-sm tracking-wider font-mono ">
                THIS IS ME
              </h3>
              <h1 className="text-3xl md:text-6xl font-bold  tracking-wider font-montserrat ">
                MANISH GYAWALI
              </h1>
              <h2 className="text-[#ED9728] font-semibold font-mono animate-bounce tracking-wider text-lg">
                - Frontend Developer -
              </h2>
              <div className="flex items-center gap-5">
                <div className=" h-12 w-1 bg-[#ED9728] border border-[#ED9728]"></div>
                <p className=" font-mono ">
                  {" "}
                  Meet Me, a Frontend Developer crafting sleek designs and
                  robust solutions. Explore my work and see ideas come to life!
                </p>
              </div>
            </div>

            <div className="flex gap-10  mt-10">
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-cursive font-bold">+250k</p>
                <p className="text-gray-700 text-sm   font-sans">
                  Websites that reaching a wide audience and give lasting
                  impression
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-cursive font-bold">+800k</p>
                <p className="text-gray-700 text-sm  font-sans">
                  Hours watched, engaging storytelling that captivates viewers
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              {mediaData.map((val,i)=>(
                <div key={i}>
                  <img src={val.image} alt="" className="h-[25px] transition-transform duration-300 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
          <div className="md:items-center flex justify-center lg:ml-24 md:py-5">
            <img
              src={Banner}
              alt="Camera User"
              className="rounded-lg md:h-[450px]  "
            />
          </div>
        </div>
      </div>

      <Aboutme />
      <CountUps />
    </div>
  );
};

export default Home;
