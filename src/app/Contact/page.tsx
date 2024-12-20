import React from "react";
import ContactSection from "./ContactSection";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#product" className="hover:underline">
              Product
            </a>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
          <div className="space-x-4">
            <button className="text-sm bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-600">
              Login
            </button>
            <button className="text-sm bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
              Become a member
            </button>
          </div>
        </div>
      </header>

     <ContactSection />
    </div>
  );
}
