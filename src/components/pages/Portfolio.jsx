import React from 'react'
import Projects from '../Projects/Projects'
import { FaArrowRightLong } from "react-icons/fa6";


const Portfolio = () => {
  return (
    <div>
       <div className="p-24 dark:bg-red-500  flex flex-col gap-5 text-center bg-gradient-to-r from-[#ed9728] to-[#de56ff]">
        <h1 className="text-4xl font-semibold text-white">PORTFOLIO</h1>
        <div className="text-sm text-white flex gap-3 items-center justify-center">
          <button>Home</button><FaArrowRightLong /><button>Portfolio</button>
        </div>
      </div>
      <Projects />
    </div>
  )
}

export default Portfolio