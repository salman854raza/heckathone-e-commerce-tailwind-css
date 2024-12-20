"use client";

import React from "react";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import StatisticSection from "./StatisticSection"; // Ensure this file exists and is correctly exported.
import TeamSection from "./TeamSection";
import WorkUsSection from "./WorkUsSection";

export default function MainPage() {
  return (
    <main>
      <div className="w-full h-screen flex flex-col bg-white">
        {/* Navbar */}
        <Navbar />

        {/* Sections */}
        <AboutSection />
        <StatisticSection />
        <TeamSection />
<WorkUsSection />
        
      </div>
    </main>
  );
}






















{/* <footer className="bg-gray-50 py-8 px-4 md:px-8">
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
    </footer> */}
