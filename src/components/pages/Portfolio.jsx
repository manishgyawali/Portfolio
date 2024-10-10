import React from 'react'
import Projects from '../Projects/Projects'

const Portfolio = () => {
  return (
    <div>
       <div className="p-24 text-center bg-gradient-to-r from-[#7b5eea] to-[#56c1ff]">
        <h1 className="text-4xl font-semibold text-white">PORTFOLIO</h1>
      </div>
      <Projects />
    </div>
  )
}

export default Portfolio