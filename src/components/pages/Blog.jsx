import React from 'react'
import Blog from '../Blog/Blog'
import { FaArrowRightLong } from 'react-icons/fa6'

const BlogP = () => {
  return (
    <div>
       <div className="p-24 text-center flex flex-col gap-5 bg-gradient-to-r from-[#7b5eea] to-[#56c1ff]">
        <h1 className="text-4xl font-semibold text-white">BLOG</h1>
        <div className="text-sm text-white flex gap-3 items-center justify-center">
          <button>Home</button><FaArrowRightLong /><button>Blog</button>
        </div>
      </div>
      <Blog />
    </div>
  )
}

export default BlogP