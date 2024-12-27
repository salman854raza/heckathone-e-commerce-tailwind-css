import React from 'react'
import { FaPhoneAlt, FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'

export default function header() {
  return (
    
      <header className="sticky top-0 z-50 bg-white shadow-md">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-green-800 px-4 py-2 text-sm">
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
                <a href="#"><FaFacebook className="text-lg hover:text-cyan-400" /></a>
                <a href="#"><FaYoutube className="text-lg hover:text-cyan-400" /></a>
                <a href="#"><FaInstagram className="text-lg hover:text-cyan-400" /></a>
                <a href="#"><FaTwitter className="text-lg hover:text-cyan-400" /></a>
              </div>
            </div>
            </header>
  )
}
