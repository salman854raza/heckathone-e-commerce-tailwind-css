"use client";
import React from "react";
import Image from "next/image";
export default function AboutSection2() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: 
            Newtonian mechanics and Maxwell's electrodynamics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="text-center">
              <div className="aspect-square relative mb-6">
                <Image
                  src={`https://images.unsplash.com/photo-${item}?auto=format&fit=crop&w=400&q=80`}
                  alt={`Team member ${item}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Username</h3>
              <p className="text-gray-600 mb-4">Profession</p>
              <div className="flex justify-center space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}