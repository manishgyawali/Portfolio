import React from "react";
import PImage from "../../assets/Images/image.png";
import { IoMdImages } from "react-icons/io";
const Projects = () => {
  const projectData = [
    {
      image: PImage,
      name: "Room Rental Service",
      type: "vector",
    },
    {
      image: PImage,

      name: "Room Rental Service",
      type: "vector",
    },
    {
      image: PImage,

      name: "Room Rental Service",
      type: "agency",
    },
    {
      image: PImage,

      name: "Room Rental Service",
      type: "vector",
    },
    {
      image: PImage,

      name: "Room Rental Service",
      type: "printing",
    },
    {
      image: PImage,

      name: "Room Rental Service",
      type: "raster",
    },
  ];
  return (
    <div className="w-11/12 mx-auto py-24 flex flex-col gap-8 ">
      <div className=" flex flex-col gap-20">
        <div className=" items-center justify-center text-center flex flex-col gap-3">
          <h1 className="font-semibold text-4xl">
            Our Latest Featured Projects
          </h1>
          <p className="w-7/12 text-gray-400 ">
            Who are in extremely love with eco friendly system
          </p>
        </div>
        <div className="flex gap-5 text-xs justify-center cursor-pointer  items-center">
            <h1>ALL</h1>
          <div className="relative group cursor-pointer text-gray-600 hover:text-black">
          <h1>VECTOR</h1>
            <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />
          </div>
          <div className="relative group cursor-pointer text-gray-600 hover:text-black">
          <h1>RASTER</h1>
            <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />
          </div>
          <div className="relative group cursor-pointer text-gray-600 hover:text-black">
          <h1>UI/UX</h1>
            <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />
          </div>
          <div className="relative group cursor-pointer text-gray-600 hover:text-black">
          <h1>PRINTING</h1>
            <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-black absolute bottom-[-5px] left-0" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {projectData.map((val, i) => (
          <div key={i} className="flex flex-col gap-3">
            <img
              src={val.image}
              alt=""
              className="rounded-md w-full h-[320px] object-cover"
            />
            <div className="text-center">
              <h1 className="text- font-semibold">{val.name}</h1>
              <h1 className="text-sm text-gray-400">{val.type}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
