import React from "react";
import CountUp from 'react-countup';

const CountUps = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#7b5eea] to-[#56c1ff]">
        <div className="w-9/12 mx-auto grid grid-cols-2 gap-5 md:grid-cols-2   lg:grid-cols-4 py-24">
          <div>
            <h1 className="text-4xl text-white font-semibold">
              {" "}
              <CountUp delay={2} end={890} />
            </h1>
            <h3 className="text-white">Projects Completed</h3>
          </div>
          <div>
            <h1 className="text-4xl text-white font-semibold">
              {" "}
              <CountUp delay={2} end={590} />
            </h1>
            <h3 className="text-white">Satisfied Clients</h3>
          </div>
          <div>
            <h1 className="text-4xl text-white font-semibold">
              {" "}
              <CountUp delay={2} end={950} />
            </h1>
            <h3 className="text-white">Cups of Coffee</h3>
          </div>
          <div>
            <h1 className="text-4xl text-white font-semibold">
              {" "}
              <CountUp delay={2} end={1120} />
            </h1>
            <h3 className="text-white">Real Professionals</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountUps;
