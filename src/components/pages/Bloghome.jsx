import React from 'react'

const Bloghome = () => {
  return (
    <div className="relative">
      {/* Image Section */}
      <div>
        <img 
          src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="" 
          className='w-full h-[600px] object-cover' 
        />
      </div>
      
      {/* Text and Button Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center group items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Dude You’re Getting a Telescope</h1>
        <p className="text-lg mb-6 text-center">There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
        <button className="bg-white text-black py-2 px-8 rounded hover:bg-blue-400 transition duration-300">View More</button>
      </div>
    </div>
  )
}

export default Bloghome
