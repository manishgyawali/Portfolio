import React from "react";
import Aboutme from "../Aboutme/Aboutme";
import { FaArrowRightLong } from "react-icons/fa6";
import Testimonial from "../Testimonials/Testimonial";

const About = () => {
  return (
    <div className="">
      <div className="p-24 text-center flex flex-col gap-5 bg-gradient-to-r from-[#7b5eea] to-[#56c1ff]">
        <h1 className="text-4xl font-semibold text-white">ABOUT ME</h1>
        <div className="text-sm text-white flex gap-3 items-center justify-center">
          <button>Home</button><FaArrowRightLong /><button>About Me</button>
        </div>
      </div>

      <Aboutme />
      <div className="flex flex-col gap-5 py-10 w-10/12 mx-auto text-sm text-gray-500">
        <p>
          It won’t be a bigger problem to find one video game lover in your
          neighbor. Since the introduction of Virtual Game, it has been
          achieving great heights so far as its popularity and technological
          advancement are concerned. The history of video game is as interesting
          as a fairy tale.
        </p>
        <p>
          The quality of today’s video game was not at all there when video game
          first conceptualized and played ever. During the formulative years,
          video games were created by using various interactive electronic
          devices with various display formats. The first ever video game was
          designed in 1947 by Thomas T. Goldsmith Jr
        </p>
      </div>
      <Testimonial/>
    </div>
  );
};

export default About;
