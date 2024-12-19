"use client";
// import React from "react";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";


export const ProductPage = () => {
  const images = [
    "/product1.jpg", // Replace with actual image paths
    "/product2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="bg-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Image Viewer */}
        <div className="relative">
          <img
            src={images[currentImageIndex]}
            alt="Product"
            className="w-full h-auto rounded-lg shadow-lg"
          />

          {/* Left Arrow */}
          <button
            onClick={() => handleArrowClick("left")}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            &#8592;
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleArrowClick("right")}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            &#8594;
          </button>
        </div>

        {/* Right Section - Product Details */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Floating Phone</h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span className="ml-2 text-gray-600">(10 Reviews)</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-4">$1,139.33</p>
          <p className="text-gray-500 mt-2">Availability: <span className="text-green-500">In Stock</span></p>
          <p className="text-gray-600 mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          {/* Color Options */}
          <div className="flex mt-4">
            {["blue", "green", "orange", "black"].map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full bg-${color}-500 mx-1 border`}
              ></div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Select Options
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Small Images Section */}
      <div className="flex mt-8 space-x-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-16 h-16 rounded-lg cursor-pointer border ${
              index === currentImageIndex
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};







// Product Interface
interface Product {
  id: number;
  name: string;
  title: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
}

// ProductCard Component
const ProductCard = ({
  title,
  price,
  originalPrice,
  imageUrl,
}: Product) => {
  return (
    
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer border border-gray-200 bg-white">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-green-600 font-bold">${price.toFixed(2)}</span>
          <span className="text-gray-500 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

// Main Product Component
const Product = () => {
  // Product List
  const products: Product[] = [
    {
      id: 1, title: "Graphic Design", price: 84.45, originalPrice: 99.99, imageUrl: "/fixed-height.png",
      name: ""
    },
    {
      id: 2, title: "Web Development", price: 150.0, originalPrice: 180.0, imageUrl: "/fixed-height 1.png",
      name: ""
    },
    {
      id: 3, title: "SEO Services", price: 70.5, originalPrice: 89.0, imageUrl: "/fixed-height 2.png",
      name: ""
    },
    {
      id: 4, title: "UI/UX Design", price: 110.0, originalPrice: 140.0, imageUrl: "/fixed-height 3.png",
      name: ""
    },
    {
      id: 5, title: "Graphic Design", price: 84.45, originalPrice: 99.99, imageUrl: "/fixed-height 4.png",
      name: ""
    },
    {
      id: 6, title: "Web Development", price: 150.0, originalPrice: 180.0, imageUrl: "/fixed-height 5.png",
      name: ""
    },
    {
      id: 7, title: "SEO Services", price: 70.5, originalPrice: 89.0, imageUrl: "/fixed-height 6.png",
      name: ""
    },
    {
      id: 8, title: "UI/UX Design", price: 110.0, originalPrice: 140.0, imageUrl: "/fixed-height 7.png",
      name: ""
    },
  ];

  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Top Info Bar */}
      <div className="flex flex-wrap justify-between items-center px-4 py-2 text-sm bg-green-700 text-white">
        <div className="flex items-center gap-4">
          <span>📞 (225) 555-0118</span>
          <span>📧 michelle.rivera@example.com</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-semibold">
            Follow Us and get a chance to win 80% off
          </span>
          <div className="flex gap-2">
            <a href="#">📸</a>
            <a href="#">🎥</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-black text-white px-4 py-3 flex justify-between items-center md:px-8">
        <div className="text-2xl font-bold">Bandage</div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Shop</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Blog</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
          <a href="#" className="hover:text-blue-400">Pages</a>
        </nav>
        <div className="flex items-center gap-4 text-blue-400">
          <a href="#">🔑 Login/Register</a>
          <a href="#">🔍</a>
          <a href="#">🛒 1</a>
          <a href="#">❤️ 1</a>
        </div>
        {/* Mobile Toggle */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>

      {/* image with h1 & paragraph */}
      <section>

      <div className="bg-white px-4 py-8 relative">
  {/* Vertical Pink Lines */}
  <div className="absolute inset-0 pointer-events-none grid grid-cols-12 gap-4">
    {Array.from({ length: 12 }).map((_, index) => (
      <div
        key={index}
        className="bg-pink-400 w-10 h-full mx-auto"
        style={{ opacity: 0.5 }}
      />
    ))}
  </div>

  <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
    {/* Image Section */}
    <div className="flex justify-center">
      <img
        src="/product-listing.png"
        alt="Product"
        className="max-w-full h-auto rounded-lg shadow-md"
      />
    </div>

    {/* Content Section */}
    <div className="md:col-span-2 space-y-8">
      {/* Row 1 - First Heading and Paragraph */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First Heading and Paragraph */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            The quick fox jumps over
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            nostrum, beatae commodi, dolorem, dolorum rerum aut mollitia
            explicabo suscipit exercitationem porro aperiam quos fuga? Labore
            eius laudantium nam fugit optio?
          </p>
        </div>
      </div>

      {/* Row 2 - Additional List Heading and Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Additional List Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            The quick fox jumps over
          </h1>
          <ul className="space-y-2">
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
          </ul>
        </div>
      </div>

      {/* Row 3 - Third Row Content */}
      <div className="grid grid-rows-1 lg:grid-rows-2 gap-8">
        {/* Additional Content Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            The quick fox jumps over
          </h1>
          <ul className="space-y-2">
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

      {/* Bestseller Products */}
      <div className="bg-gray-200 py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          BESTSELLER PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        <img src="/vector1.png" alt="Hooli" className="h-8 md:h-12" />
        <img src="/vector2.png" alt="Lyft" className="h-8 md:h-12" />
        <img src="/vector3.png" alt="Stripe" className="h-8 md:h-12" />
        <img src="/vector4.png" alt="AWS" className="h-8 md:h-12" />
        <img src="/vector5.png" alt="Reddit" className="h-8 md:h-12" />
      </div>
      

      {/* Footer */}


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
      </div>
      
    
  );
};

export default Product ;

