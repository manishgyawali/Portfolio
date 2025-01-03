import React from "react";
import RoomImage from "../../../assets/Images/image.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const RoomRentalSystem = () => {
  return (
    <div className=" ">
      <div className="py-16 text-center flex text-black flex-col gap-5 bg-[#f0f0f0]">
        <h1 className="text-3xl font-semibold ">ROOM RENTAL SYSTEM</h1>
        <div className=" text-[#6e6e6e] text-xs flex gap-3 items-center justify-center">
          <FaHome className="text-xl" />
          <FaArrowRightLong />
          <button className="font-semibold ">PROJECTS</button>
          <FaArrowRightLong />
          <button className="font-semibold ">ROOM RENTAL SYSTEM</button>
        </div>
      </div>

      {/* description section  */}

      <div className="w-10/12 mx-auto py-16 overflow-hidden">
        {/* Project Image */}

        <div className="">
          <img
            src={RoomImage}
            alt="Room Rental System"
            className="w-full h-64 object-contain"
          />
        </div>

        {/* Project Details */}
        <div className="p-8 flex flex-col gap-6">
          <h1 className="text-2xl font-bold ">Description</h1>
          <p className="text-gray-500">
            A user-friendly system to manage room rentals efficiently. This
            project allows landlords to list available rooms, and tenants can
            browse and book rooms easily. It is designed to streamline the
            rental process for both parties.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Key Features:</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Interactive user interface for landlords and tenants</li>
              <li>Search and filter rooms based on location and price</li>
              <li>Admin dashboard to manage listings and users</li>
              <li>Responsive design for all devices</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Technologies Used:</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
              <li>Tailwind CSS for styling</li>
              <li>JWT for authentication</li>
              <li>Cloudinary for image storage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomRentalSystem;
