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
    <div>
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

      {/* Big Companies Section */}
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
    </div>
  );
}
