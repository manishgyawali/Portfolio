import React, { useState } from "react";
import PImage from "../../assets/Images/image.png";
import SS2 from "../../assets/Images/ss2.png";
import SS3 from "../../assets/Images/ss3.png";
import SS4 from "../../assets/Images/ss4.png";
import SS5 from "../../assets/Images/ss5.png";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const projectData = [
    { image: PImage, name: "Room Rental System", type: "MERN", liveLink: "#", codeLink: "#" },
    { image: SS2, name: "Education-Website", type: "React", liveLink: "#", codeLink: "#" },
    { image: SS3, name: "Portfolio", type: "Javascript", liveLink: "#", codeLink: "#" },
    { image: SS4, name: "Weather-App", type: "Frontend", liveLink: "#", codeLink: "#" },
    { image: SS5, name: "Admin Dashboard", type: "React", liveLink: "#", codeLink: "#" },
    { image: PImage, name: "Room Rental Service", type: "UI/UX", liveLink: "#", codeLink: "#" },
  ];

  // Filter projects based on the selected filter
  const filteredProjects =
    selectedFilter === "ALL"
      ? projectData
      : projectData.filter((project) =>
          project.type.toUpperCase().includes(selectedFilter)
        );

  return (
    <div className="bg-[#F8F7F3] animate-reveal">
      <div className="w-11/12 mx-auto py-24 flex flex-col gap-8">
        <div className="flex flex-col gap-20">
          <div className="items-center justify-center text-center flex flex-col gap-3">
            <h1 className="font-semibold text-4xl">Our Latest Featured Projects</h1>
            <p className="w-7/12 text-gray-400">
              Who are in extremely love with eco friendly system
            </p>
          </div>
          <div className="flex gap-5 text-xs justify-center cursor-pointer items-center">
            {["ALL", "MERN", "REACT", "UI/UX", "JAVASCRIPT"].map((filter) => (
              <div
                key={filter}
                className={`relative group cursor-pointer text-gray-600 hover:text-black ${
                  selectedFilter === filter ? "text-black font-bold" : ""
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                <h1>{filter}</h1>
                <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-[#ed9728] absolute bottom-[-5px] left-0" />
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-3 group overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-[180px]  ">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-md object-cover   group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl hover:text-teal-400 transition-colors duration-300"
                    title="View Live"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl hover:text-teal-400 transition-colors duration-300"
                    title="View Code"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="text-center pb-5">
                <h1 className="text-lg tracking-wide font-semibold">{project.name}</h1>
                <h1 className="text-sm font-montserrat text-gray-400">{project.type}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
