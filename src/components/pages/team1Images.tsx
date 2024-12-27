import React from 'react';

export default function Team1Images() {
  return (
    <>
      {/* Section Header */}
      <div className="font-bold py-12">
        <div className="flex justify-center items-center">
          <h1 className="text-xl text-gray-500">What We Do</h1>
        </div>
        <br />
        <div className="flex justify-center items-center text-center px-4">
          <p className="text-3xl md:text-6xl">Innovation tailored for you</p>
        </div>
        <div className="flex justify-center items-center font-bold space-x-2 py-4">
          <h1>Home</h1>
          <br />
          <h1 className="text-gray-400 text-2xl">{'>'}</h1>
          <h1 className="text-gray-500">Team</h1>
        </div>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {/* Large Image */}
        <div className="flex justify-center">
          <img
            src="team1-girl2.png"
            alt="Team Member"
            className="rounded-md w-full max-w-sm md:max-w-full transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Grid of Smaller Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src="team1-girl3.png"
            alt="Team Member"
            className="rounded-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="team1-girl4.png"
            alt="Team Member"
            className="rounded-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="team1-girl5.png"
            alt="Team Member"
            className="rounded-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="team1-girl6.png"
            alt="Team Member"
            className="rounded-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </>
  );
}
