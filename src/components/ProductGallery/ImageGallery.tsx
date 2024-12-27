import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[currentIndex]}
          alt="Product"
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <button
        onClick={previousImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronLeftIcon />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronRightIcon />
      </button>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`aspect-square overflow-hidden rounded-lg ${
              currentIndex === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
}