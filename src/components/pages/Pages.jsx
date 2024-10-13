import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Pages = () => {
  return (
    <div>
       <div className="p-24  flex flex-col gap-5 text-center bg-gradient-to-r from-[#7b5eea] to-[#56c1ff]">
        <h1 className="text-4xl font-semibold text-white">PAGES</h1>
        <div className="text-sm text-white flex gap-3 items-center justify-center">
          <button>Home</button><FaArrowRightLong /><button>Pages</button>
        </div>
      </div>
    </div>
  )
}

export default Pages