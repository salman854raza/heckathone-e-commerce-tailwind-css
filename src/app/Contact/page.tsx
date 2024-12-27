"use client";
import React from "react";
import ContactSection from "./ContactSection";
// import Header from "./header";
// import Footer from "./footer";
// import { ContactPage } from "./page"; // Ensure correct path
import { SupportSection } from "./SupportSection";
// import { Navbar } from "./Navbar";

export default function Contact() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      {/* Uncomment and include Header component if needed */}
      {/* <Header /> */}

      <ContactSection />
      {/* <ContactPage /> */}

      {/* Support Section */}
      <div className="min-h-screen bg-white py-20">
        <SupportSection />
      </div>

      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
}
