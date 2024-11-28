import React from "react";
import { IoIosHome } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className="flex flex-col bg-[#F8F7F3] gap-10">
      <div className="p-24  flex flex-col gap-5 text-center bg-gradient-to-r from-[#ed9728] to-[#de56ff]">
        <h1 className="text-4xl font-semibold text-white">CONTACT</h1>
        <div className="text-sm text-white flex gap-3 items-center justify-center">
          <button>Home</button><FaArrowRightLong /><button>Contact</button>
        </div>
      </div>
      {/* Google Map */}
      <div className="h-[500px] w-11/12 mx-auto shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1766.831834139662!2d83.44609816290587!3d27.66587570468233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1726483681881!5m2!1sen!2snp"
          className="w-full h-full rounded-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="grid grid-cols-3 gap-14 w-11/12 mx-auto">
        {/* Contact Information */}
        <div className="grid tracking-wide gap-5">
          <div className="flex items-center gap-7">
            <IoIosHome className="text-3xl text-[#ed9728]" />
            <div>
              <h1>Butwal, Devinagar</h1>
              <h2 className="text-gray-500">4343 Kalikanagar Road</h2>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <IoCallOutline className="text-3xl text-[#ed9728]" />
            <div>
              <h1>9826472008</h1>
              <h2 className="text-gray-500">Mon to Fri 9am to 6 pm</h2>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <AiTwotoneMail className="text-3xl text-[#ed9728]" />
            <div>
              <h1>manishgyawali345@gmail.com</h1>
              <h2 className="text-gray-500">Send us your query anytime!</h2>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid gap-10">
          <input
            type="text"
            placeholder="Enter your name"
            className="border tracking-wider border-gray-400 px-5 py-2"
          />
          <input
            type="text"
            placeholder="Enter email address"
            className="border tracking-wider border-gray-400 px-5 py-2"
          />
          <input
            type="text"
            placeholder="Enter subject"
            className="border tracking-wider border-gray-400 px-5 py-2"
          />
        </div>

        {/* Message Box */}
        <div>
          <input
            type="text"
            placeholder="Enter Message"
            className="border tracking-wider border-gray-400 px-16 py-24"
          />
        </div>
      </div>

      {/* Send Message Button */}
      <div className="flex w-11/12 mx-auto justify-end pb-10 ">
        <button className="bg-gradient-to-r from-[#ed9728] to-[#de56ff] text-white py-3 rounded px-5 hover:transition">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default Contact;
