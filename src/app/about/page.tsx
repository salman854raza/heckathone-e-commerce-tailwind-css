"use client";

import React from "react";

export default function About() {
  const stats = [
    { number: "15K", label: "Happy Customers" },
    { number: "150K", label: "Monthly Visitors" },
    { number: "15", label: "Countries Worldwide" },
    { number: "100+", label: "Top Partners" },
  ];

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Navbar Section */}
      <header className="sticky top-0 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 shadow-lg w-full flex justify-between items-center px-6 py-4 z-50">
        <div className="text-2xl font-bold text-white">Bandage</div>
        <nav className="flex gap-6 items-center">
          {["Home", "Product", "Pricing", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase()}`}
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
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
      </main>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics.
          </p>
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
                  className="w-[316px] h-[231px] mx-auto mb-4 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.profession}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Big Companies Are Here
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        <img src="/vector1.png" alt="Hooli" className="h-8 md:h-12" />
        <img src="/vector2.png" alt="Lyft" className="h-8 md:h-12" />
        <img src="/vector3.png" alt="Stripe" className="h-8 md:h-12" />
        <img src="/vector4.png" alt="AWS" className="h-8 md:h-12" />
        <img src="/vector5.png" alt="Reddit" className="h-8 md:h-12" />
      </div>
    </section>


    <section className="bg-blue-600 text-white py-16 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
    {/* Text Section */}
    <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
      <h3 className="text-sm uppercase tracking-wide mb-4">Work With Us</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Now Let’s Grow Yours
      </h2>
      <p className="text-gray-200 text-sm md:text-base mb-6">
        The gradual accumulation of information about atomic and small-scale
        behavior during the first quarter of the 20th.
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


    <footer className="bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Bandage</h2>
          <p className="text-gray-500 text-sm">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company Info</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Get In Touch</h3>
          <div className="flex space-x-2 mb-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded px-4 py-2 text-sm focus:outline-none"
            />
            <button className="bg-blue-500 text-white rounded px-4 py-2 text-sm">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-xs">
            Lorem imp sum dolor Amit.
          </p>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-8">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>





    </div>
  );
}
