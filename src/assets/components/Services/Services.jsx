import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { IoCameraReverseOutline } from "react-icons/io5";
import { IoMdImages } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { IoRocketOutline } from "react-icons/io5";

const Services = () => {
  const serviceData = [
    {
      icon: <AiOutlinePieChart />,
      title: "Web Design",
      description:
        "“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”",
    },
    {
      icon: <FaComputer />,
      title: "Web Development",
      description:
        "If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.",
    },
    {
      icon: <IoCameraReverseOutline />,
      title: "Photography",
      description:
        "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.",
    },
    {
      icon: <IoMdImages />,
      title: "Clipping Path",
      description:
        "Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.",
    },
    {
      icon: <CiMobile3 />,
      title: "Apps Interface",
      description:
        "Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts.",
    },
    {
      icon: <IoRocketOutline />,
      title: "Graphic Design",
      description:
        "You've heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="w-11/12 mx-auto py-24 flex flex-col gap-15 ">
        <div className=" items-center justify-center text-center flex flex-col gap-3">
          <h1 className="font-semibold text-4xl">My Offered Services</h1>
          <p className="w-7/12 text-gray-400 ">
            At about this time of year, some months after New Year’s resolutions
            have been made and kept, or made and neglected.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10 ">
          {serviceData.map((val, i) => (
            <div key={i} className="grid gap-6">
              <div className="text-4xl grid items-center justify-center ">
                {val.icon}
              </div>
              <div className=" text-center flex flex-col gap-5">
                <h1 className="font-semibold text-xl ">{val.title}</h1>
                <p className="text-gray-400">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
