import React from "react";
import { IoIosHome } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="w-11/12 mx-auto py-24 flex flex-col gap-10">
      <div></div>
      <div className="grid grid-cols-3 gap-14">
        <div className="grid gap-5">
          <div className="flex items-center gap-7">
            <IoIosHome className="text-3xl text-blue-400" />
            <div>
              <h1>Butwal, Devinagar</h1>
              <h2 className="text-gray-500">4343 Kalikanagar Road</h2>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <IoCallOutline className="text-3xl  text-blue-400" />
            <div>
              <h1>9826472008</h1>
              <h2 className="text-gray-500">Mon to Fri 9am to 6 pm</h2>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <AiTwotoneMail className="text-3xl  text-blue-400" />
            <div>
              <h1>manishgyawali345@gmail.com</h1>
              <h2 className="text-gray-500">Send us your query anutime!</h2>
            </div>
          </div>
        </div>
          <div className="grid gap-10">
            <input type="text" placeholder="Enter your name" className="border border-gray-400  placeholder: px-5 py-2" />
            <input type="text" placeholder="Enter email address" className="border border-gray-400  placeholder: px-5 py-2" />
            <input type="text" placeholder="Enter subject" className="border border-gray-400  placeholder: px-5 py-2" />
          </div>
          
        <div>
            <input type="text" placeholder="Enter Message" className="border border-gray-400  placeholder: px-16 py-24" />
          </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-400 text-white py-2 px-5 hover: transition ">SEND MESSAGE</button>
      </div>
    </div>
  );
};

export default Contact;
