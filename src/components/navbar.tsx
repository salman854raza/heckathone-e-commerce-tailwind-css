"use client"; // Add this directive at the top of the file

import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const navbar = () => {
  const images = [
    "./bgheader.png",
    "./shoppingpic.jpg",
    "./shoppinpic2.webp",
    "./shoppingpic3.webp", // Smaller image
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Move to next image automatically
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  // Move to the next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    
    <div className="relative flex justify-center items-center w-full h-[50vh] sm:h-[60vh] lg:h-[716px] bg-gray-200 overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute transition-transform duration-1000 ease-in-out ${
            index === currentImageIndex
              ? index === 3
                ? "w-[40%] h-auto object-contain opacity-100" // Smaller size for the fourth image
                : "w-full h-full object-cover opacity-100" // Full size for other images
              : "opacity-0"
          }`}
        />
      ))}

     {/* Text Overlay */}
     <div className="absolute inset-0 flex flex-col items-start justify-center pl-10 sm:pl-16 lg:pl-20 text-white bg-black bg-opacity-30">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-wider">
            NEW COLLECTION
          </h1>
          <p className="mt-2 text-lg sm:text-xl lg:text-2xl text-gray-200 font-light">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button className="mt-5 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg sm:text-xl font-montserrat transition-all duration-300 ease-in-out shadow-lg">
            Shop Now
          </button>
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 shadow-md hover:bg-green-500 transition-all duration-300 ease-in-out"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 shadow-md hover:bg-green-500 transition-all duration-300 ease-in-out"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    
  );
};



export default navbar;
