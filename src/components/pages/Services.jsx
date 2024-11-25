import React from 'react'
import Service from '../Services/Services'
import { FaArrowRightLong } from "react-icons/fa6";


const Services = () => {
  return (
    <div>
       <div className="p-24  flex flex-col gap-5 text-center bg-gradient-to-r from-[#ed9728] to-[#de56ff]">
        <h1 className="text-4xl font-semibold text-white">SERVICES</h1>
        <div className="text-sm text-white flex gap-3 items-center justify-center">
          <button>Home</button><FaArrowRightLong /><button>Services</button>
        </div>
      </div>
      <Service />
    </div>
  )
}

export default Services