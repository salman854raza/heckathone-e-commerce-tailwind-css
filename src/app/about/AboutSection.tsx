import React from 'react'

export default function AboutSection() {
  return (
    <div>
      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full px-8 mt-16 lg:mt-0 gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold text-gray-900">ABOUT COMPANY</h2>
          <h1 className="text-6xl font-extrabold text-gray-800 mt-4">ABOUT US</h1>
          <p className="text-lg text-gray-600 mt-4">
            We know how large objects will act,
            <br /> but things on a small scale.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 mt-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Quote Now
          </button>
        </div>

        {/* Image with Circular Background */}
        <div className="relative lg:w-1/2 flex justify-center items-center">
          <div className="absolute w-[300px] h-[300px] bg-pink-200 rounded-full -z-10"></div>
          <div className="absolute w-[100px] h-[100px] bg-pink-300 rounded-full top-10 left-10 -z-10"></div>
          <img
            src="./image2.png"
            alt="About Us"
            className="w-[571px] rounded-lg shadow-lg"
          />
        </div>
      </div>

    </div>
  )
}
