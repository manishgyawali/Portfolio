import React, { useState } from "react";
import PImage from "../../assets/Images/image.png";
import SS2 from "../../assets/Images/ss2.png";
import SS3 from "../../assets/Images/ss3.png";
import SS4 from "../../assets/Images/ss4.png";
import SS5 from "../../assets/Images/ss5.png";
import SS6 from "../../assets/Images/ss6.png";

import { IoArrowForward } from "react-icons/io5";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const projectData = [
    {
      image: PImage,
      name: "Room Rental System",
      description:
        "A system to manage room rentals with an easy-to-use interface.",
      type: "MERN",
      liveLink: "#",
      codeLink: "#",
    },
    {
      image: SS2,
      name: "Education-Website",
      description: "A responsive website designed for educational purposes.",
      type: "React",
      liveLink: "#",
      codeLink: "#",
    },
    {
      image: SS3,
      name: "Portfolio",
      description: "A modern portfolio to showcase skills and projects.",
      type: "Javascript",
      liveLink: "#",
      codeLink: "#",
    },
    {
      image: SS4,
      name: "Weather-App",
      description:
        "An app to display weather forecasts for multiple locations.",
      type: "Frontend",
      liveLink: "#",
      codeLink: "#",
    },
    {
      image: SS5,
      name: "Admin Dashboard",
      description: "An intuitive admin dashboard built using React.",
      type: "React",
      liveLink: "#",
      codeLink: "#",
    },
    {
      image: SS6,
      name: "Gies Consultancy Site",
      description:
        "A consultancy website created with Next.js for modern businesses.",
      type: "NextJs",
      liveLink: "#",
      codeLink: "#",
    },
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
            <h1 className="font-semibold text-4xl">
              Our Latest Featured Projects
            </h1>
            <p className="w-7/12 text-gray-400">
              Who are in extremely love with eco friendly system
            </p>
          </div>
          <div className="flex gap-5 text-xs justify-center cursor-pointer items-center">
            {["ALL", "MERN", "REACT", "NEXTJS", "JAVASCRIPT"].map((filter) => (
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10    ">
          {filteredProjects.map((project, i) => (
            // <div
            //   key={i}
            //   className="relative flex flex-col gap-3 group overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300"
            // >
            //   <div className="relative overflow-hidden h-[180px]  ">
            //     <img
            //       src={project.image}
            //       alt={project.name}
            //       className="rounded-md object-cover   group-hover:scale-110 transition-transform duration-500"
            //     />
            //     <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-5">
            //       <a
            //         href={project.liveLink}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //         className="text-white text-xl hover:text-teal-400 transition-colors duration-300"
            //         title="View Live"
            //       >
            //         <FaExternalLinkAlt />
            //       </a>
            //       <a
            //         href={project.codeLink}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //         className="text-white text-xl hover:text-teal-400 transition-colors duration-300"
            //         title="View Code"
            //       >
            //         <FaGithub />
            //       </a>
            //     </div>
            //   </div>
            //   <div className="text-center pb-5">
            //     <h1 className="text-lg tracking-wide font-semibold">{project.name}</h1>
            //     <h1 className="text-sm font-montserrat text-gray-400">{project.type}</h1>
            //   </div>
            // </div>
            <div
              key={i}
              className="relative cursor-pointer group h-[370px] w-[340px] rounded-3xl  overflow-hidden transition-transform duration-700"
            >
              {/* Image section with clickable link */}
              <div className="rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 rounded-3xl  w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Description section */}
              <div className="absolute bottom-1 left-3 shadow-xl rounded-3xl bg-white w-11/12 mx-auto group-hover:pb-8 transition-all duration-700">
                <div className="p-5">
                  <h1 className="text-lg font-semibold text-[#172155]">
                    {project.name}
                  </h1>
                  <p className="text-sm text-gray-500 font-semibold mt-2">
                    {project.type}
                  </p>
                  {/* Add a description paragraph */}
                  <p className="text-sm text-gray-400 mt-3">
                    {project.description || "No description available"}
                  </p>
                </div>

                {/* hover button */}
                <div className="absolute bottom-0 left-5 right-4 opacity-0 group-hover:opacity-100 text-[#415FF2] pb-3 transition-all duration-300 ease-in-out">
                  <a className="flex items-center gap-2 text-sm font-semibold">
                    More details <IoArrowForward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
