import React from 'react'

export default function WorkUsSection() {
  return (
    <div>
      {/* Work With Us Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-sm uppercase tracking-wide mb-4">Work With Us</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Now Let’s Grow Yours
              </h2>
              <p className="text-gray-200 text-sm md:text-base mb-6">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th.
              </p>
              <button className="bg-white text-blue-600 rounded px-6 py-3 font-semibold hover:bg-gray-200">
                Button
              </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/team1-girl.png"
                alt="Work With Us"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg transition-transform duration-300 ease-in-out md:hover:scale-105"
              />
            </div>
          </div>
        </section>
    </div>
  )
}
