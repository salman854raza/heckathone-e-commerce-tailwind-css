"use client";

import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const images = [
    "./bg2.png",
    "./shoppingpic.jpg",
    "./shoppinpic2.webp",
    "./shoppingpic3.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  // Automatically change image every 3 seconds for a faster sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  // Move to the next image
  const handleNext = () => {
    setDirection("right");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous image
  const handlePrev = () => {
    setDirection("left");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex justify-center items-center w-full h-[50vh] sm:h-[60vh] lg:h-[716px] bg-gray-200 overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute ${
              index === currentImageIndex
                ? "translate-x-0"
                : direction === "right"
                ? "-translate-x-full"
                : "translate-x-full"
            } transition-transform duration-700 ease-in-out ${
              index === 3 ? "w-3/4 h-auto object-contain" : "w-full h-full object-cover"
            }`} // Smaller size for shoppingpic3.webp
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-center  pl-10 sm:pl-16 lg:pl-20 text-white bg-black bg-opacity-30">
        <h1 className="md-5 sm:text-xl">Summer 2020</h1>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-wider">
          NEW COLLECTION
        </h1>
        <p className="mt-2 text-lg sm:text-xl lg:text-2xl text-gray-200 font-light">
          We know how large objects will act, <br />
          but things on a small scale.
        </p>
        <button className="flex md:items-center md:justify-center mt-5 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg sm:text-5xl md:text-3xl font-montserrat transition-all duration-300 ease-in-out shadow-lg ">
          Shop Now
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 shadow-md hover:bg-green-500 transition-all duration-300 ease-in-out"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 shadow-md hover:bg-green-500 transition-all duration-300 ease-in-out"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10  flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-500 ${
              index === currentImageIndex
                ? "w-5 h-5 bg-green-500 scale-110" // Enlarged and green for active dot
                : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
