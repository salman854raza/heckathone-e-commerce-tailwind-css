// Navbar.jsx
import React from 'react';
import Link from 'next/link';
import { RiArrowDownSLine } from 'react-icons/ri';
import { IoIosSearch,  IoIosCart,  } from 'react-icons/io';
import { IoHeart, IoMenuSharp } from 'react-icons/io5';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-sky-400">
        <Link href="/">MyBrand</Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 items-center">
        <a href="Home" className="text-slate-600 hover:text-cyan-400">Home</a>
        <div className="flex items-center space-x-1">
          <Link href="/pricing" legacyBehavior>
            <a className="text-slate-600 hover:text-cyan-400">Shop</a>
          </Link>
          <RiArrowDownSLine className="text-black hover:text-cyan-400" />
        </div>
        <Link href="/about" legacyBehavior>
          <a className="text-slate-600 hover:text-cyan-400">About</a>
        </Link>
        <a href="#" className="text-slate-600 hover:text-cyan-400">Blog</a>
        <a href="#" className="text-slate-600 hover:text-cyan-400">Contact</a>
        <a href="#" className="text-slate-600 hover:text-cyan-400">Price</a>
      </nav>

      {/* Login / Register */}
      <div className="hidden md:flex items-center space-x-2 text-sky-400 font-bold">
        <a href="#" className="hover:underline hover:text-cyan-400">Login</a>
        <span>/</span>
        <a href="#" className="hover:underline hover:text-cyan-400">Register</a>
      </div>

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
          <Link href="/product">
            <IoIosCart />
          </Link>
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </div>
        <IoMenuSharp className="block md:hidden hover:text-cyan-400" />
      </div>
    </header>
  );
};

export default Navbar;
