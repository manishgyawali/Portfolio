import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiRedux,
  SiBootstrap,
  SiChakraui,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiCanva,
  SiMui,
} from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from "../../assets/Images/aribt.png";
import { FaLaptopCode, FaPlane, FaCampground, FaBook } from "react-icons/fa";
import { BiSolidCricketBall } from "react-icons/bi";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
      { name: "ChakraUI", icon: <SiChakraui className="text-teal-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-700" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
      },
      { name: "Material UI", icon: <SiMui className="text-blue-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    ],
  },
  // {
  //   category: "Backend",
  //   items: [
  //     { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  //     { name: "ExpressJS", icon: <SiPhp className="text-gray-500" /> },
  //     { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  //   ],
  // },
  {
    category: "Others",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
    ],
  },
];

const About = () => {
  const hobbies = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-yellow-400" />,
      title: "Development",
    },
    { id: 2, icon: <FaPlane className="text-blue-400" />, title: "Travel" },
    {
      id: 3,
      icon: <FaCampground className="text-pink-500" />,
      title: "Camping",
    },
    { id: 4, icon: <FaBook className="text-purple-500" />, title: "Reading" },
    {
      id: 5,
      icon: <BiSolidCricketBall className="text-red-500" />,
      title: "Cricket",
    },
  ];
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

      <div className="flex flex-col gap-16 bg-[#F8F7F3]">
        <div className="flex items-center gap-5 pt-5 w-11/12 mx-auto text-sm text-gray-500">
          <p className="text-lg font-serif">
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought. such as Coca Cola. Dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
          {/* <img
            src={Image}
            alt=""
            className="w-44 h-44 rounded-full object-cover"
          /> */}
        </div>

        {/* Skills Section */}
        <div className="w-11/12 mx-auto flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <h1 className="text-2xl  text-[#FCB143] font-mono font-bold">
              SKILLS
            </h1>
            <h1 className=" w-16 bg-[#ED9728] border border-[#ED9728]"></h1>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {skills.map((val, i) => (
              <div
                key={i}
                className=" bg-white flex flex-col gap-10 px-1 py-3 shadow-xl rounded-md"
              >
                <h1 className="text-xl font-mono font-semibold px-10 text-gray-700">
                  {val.category}:
                </h1>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-6">
                  {val.items.map((itemData, index) => (
                    <div
                      key={i}
                      className="flex items-center animate-upDown flex-col gap-2"
                    >
                      <h1 className="text-4xl">{itemData.icon}</h1>
                      <h1 className="pb-5 font-montserrat ">{itemData.name}</h1>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interest Section */}
        <div className="w-11/12 mx-auto flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <h1 className="text-2xl text-[#FCB143] font-mono font-bold">
              INTERESTS
            </h1>
            <h1 className=" w-16 bg-[#ED9728] border border-[#ED9728]"></h1>
          </div>
          <div>
            <div className="">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.id}
                    className="flex items-center gap-4 p-4 bg-white rounded-md shadow-md  transform transition-all duration-500 hover:scale-105 hover:shadow-xl "
                  >
                    <div className="text-2xl">{hobby.icon}</div>
                    <h3 className=" font-semibold font-mono text-lg">{hobby.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Experience Section  */}
        <div className="w-11/12 mx-auto flex flex-col gap-5 pb-5">
          <div className="flex items-center gap-5">
            <h1 className="text-2xl text-[#FCB143] font-mono font-bold">
              EXPERIENCE
            </h1>
            <h1 className=" w-16 bg-[#ED9728] border border-[#ED9728]"></h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  px-5">
            <div className="border border-gray-200 shadow-lg rounded-lg bg-white px-8 pb-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="grid items-center justify-center">
                <img
                  src={Logo}
                  alt="Company Logo"
                  className="w-40 h-28 object-cover "
                />
              </div>
              <div className="flex flex-col  gap-4 items-center">
                <h1 className="text-xl md:text-2xl font-mono text-[#E77D7D] font-bold">
                  Frontend Developer
                </h1>
                <h2 className="text-center text-gray-500  font-medium">
                  Abhyam Robotics Institution of Business and Technology
                </h2>
                <p className="text-center text-sm text-gray-600">
                  Developed web applications using{" "}
                  <span className="font-semibold text-[#FCB143]">React</span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#FCB143]">
                    Tailwind CSS
                  </span>
                  , delivering user-friendly interfaces with clean designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
