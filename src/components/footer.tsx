import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Bandage</h3>
            <div className="flex space-x-4 text-blue-500">
              <FaFacebook className="w-5 h-5 hover:text-green-500" />
              <FaTwitter className="w-5 h-5 hover:text-green-500" />
              <FaInstagram className="w-5 h-5 hover:text-green-500" />
              <FaYoutube className="w-5 h-5 hover:text-green-500" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company Info</h4>
            <ul className="space-y-3 text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <p className="text-center text-gray-600">
            Made With Love By Bolt All Right Reserved
          </p>
        </div>
      </div>
    </footer>
      );
};

export default Footer;
