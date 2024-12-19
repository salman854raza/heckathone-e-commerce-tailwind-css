"use client";
import React from "react";
import Image from "next/image";

export default function AboutSection1() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <span className="text-blue-600 font-semibold">Problems trying</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms of Classical physics: 
            Newtonian mechanics and Maxwell's electrodynamics.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Team collaboration"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}