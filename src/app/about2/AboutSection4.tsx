"use client";
import React from "react";
import Image from "next/image";
import AboutSection4 from "./AboutSection4"; // Importing the new section

export default function About() {
  return (
    <div className="w-[1440px] bg-white w-full h-screen flex flex-col">
      {/* Navbar Section */}
      <header className="w-[1350px] sticky top-0 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 shadow-lg w-full flex justify-between items-center px- py-4 z-50">
        <div className="text-2xl font-bold text-white">Bandage</div>
        <nav className="flex gap-6 items-center">
          <a href="/" className="text-white hover:text-gray-200 transition-colors duration-300">
            Home
          </a>
          <a href="/product" className="text-white hover:text-gray-200 transition-colors duration-300">
            Product
          </a>
          <a href="/pricing" className="text-white hover:text-gray-200 transition-colors duration-300">
            Pricing
          </a>
          <a href="/contact" className="text-white hover:text-gray-200 transition-colors duration-300">
            Contact
          </a>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
            Login
          </button>
          <button className="bg-white text-blue-600 flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
            Become a member
            <svg
              className="ml-2"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36108 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"
                fill="blue"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* About Section */}
      <main className="flex flex-col lg:flex-row items-center justify-center w-full px-8 mt-16 lg:mt-0 gap-10">
        {/* Text Content */}
        <div className="w-[1050px] h-[545px] flex flex-col justify-center items-start lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900">ABOUT COMPANY</h2>
          <h1 className="text-6xl font-extrabold text-gray-800 mt-4">ABOUT US</h1>
          <p className="text-lg text-gray-600 mt-4">
            We know how large objects will act, <br /> but things on a small scale.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 mt-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Quote Now
          </button>
        </div>

        {/* Image with Circular Background */}
        <div className="relative sm:w-1/2 md:w-1/2 lg:w-1/2 flex justify-center items-center">
          <div className="absolute w-[300px] h-[300px] bg-pink-200 rounded-full -z-10"></div>
          <div className="absolute w-[100px] h-[100px] bg-pink-300 rounded-full top-10 left-10 -z-10"></div>
          <img src="./image2.png" alt="About Us" className="w-[571px] rounded-lg shadow-lg" />
        </div>
      </main>

      {/* Additional Sections */}
      <AboutSection4 />

      <div className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics and Maxwell's electrodynamics.
            </p>
          </div>
          {/* Team Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image: "about-1-meet-1.jpg",
                name: "John Doe",
                profession: "Software Engineer",
              },
              {
                id: 2,
                image: "about-1-meet-2.jpg",
                name: "Jane Smith",
                profession: "Product Manager",
              },
              {
                id: 3,
                image: "about-1-meet-3.jpg",
                name: "Mike Johnson",
                profession: "UX Designer",
              },
            ].map((member) => (
              <div
                key={member.id}
                className="text-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[316px] h-[231px] h-32 mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.profession}</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700 transition">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      



    </div>
  );
}
