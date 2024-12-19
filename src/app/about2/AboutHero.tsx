"use client";
import React from "react";

// import { Button } from "@/components/ui/button";

export default function AboutHero() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">ABOUT US</h2>
          <p className="text-gray-600 mb-8">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white">
            Get Quote Now
          </button>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-100 rounded-full opacity-50 -z-10"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-100 rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
}