"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosCart, IoIosSearch } from "react-icons/io";
import { IoMenuSharp, IoHeart } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-green-600 shadow-md">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-black px-4 py-2 text-sm">
        {/* Phone */}
        <div className="flex items-center space-x-2 text-white font-bold">
          <FaPhoneAlt className="text-lg" />
          <a href="#" className="hover:text-cyan-400">
            (225) 555-0118
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2 text-white font-bold">
          <MdOutlineMailOutline className="text-lg" />
          <a href="#" className="hover:text-cyan-400">
            michelle.rivera@example.com
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3 text-white">
          <span className="hover:text-cyan-400">Follow Us:</span>
          <a href="#">
            <FaFacebook className="text-lg hover:text-cyan-400" />
          </a>
          <a href="#">
            <FaYoutube className="text-lg hover:text-cyan-400" />
          </a>
          <a href="#">
            <FaInstagram className="text-lg hover:text-cyan-400" />
          </a>
          <a href="#">
            <FaTwitter className="text-lg hover:text-cyan-400" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-bold text-black hover:text-cyan-400">
          Bandage
        </h1>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center absolute md:static bg-green-600 w-full md:w-auto p-4 md:p-0 left-0 top-full md:top-auto z-10`}
        >
          <a href="Home" className="text-white hover:text-cyan-400">
            Home
          </a>
         
          <div className="relative flex items-center space-x-1">
          
              <a href="/DesktopTeam1" className="text-slate-600 text-white hover:text-cyan-400">
            Shop
          </a> 
          
            <button
              onClick={toggleDropdown}
              
            >
              <RiArrowDownSLine className="ml-1 text-xl text-slate-600 text-white hover:text-cyan-400" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-40">
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
                >
                  Men's Clothing
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
                >
                  Women's Clothing
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
                >
                  Accessories
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
                >
                  Shoes
                </a>
              </div>
            )}
          </div>
          <a href="/about" className="text-white hover:text-cyan-400">
            About
          </a>
          <a href="#" className="text-white hover:text-cyan-400">
            Blog
          </a>
          <a href="/Contact" className="text-white hover:text-cyan-400">
            Contact
          </a>
          <a href="/pages" className="text-white hover:text-cyan-400">
            Pages
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-xl text-sky-400">
          <a href="#" className="hover:text-cyan-400">
            <IoIosSearch />
          </a>
          <div className="relative hover:text-cyan-400">
            <IoHeart />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative hover:text-cyan-400">
            <Link href="/cart">
            <IoIosCart />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
            </Link>
          </div>
          <IoMenuSharp
            className="block md:hidden hover:text-cyan-400 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
}
