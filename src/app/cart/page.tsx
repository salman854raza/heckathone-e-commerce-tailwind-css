"use client";
import React, { useState } from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Header from "./header";
import Bestseller from "./Bestseller";
import Desktop from "./desktop";

interface Product {
  id: number;
  name: string;
  title: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
}

const ProductCard: React.FC<Product> = ({ title, price, originalPrice, imageUrl }) => {
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

const ProductPage: React.FC = () => {
  const images = [
    "/product1.jpg",
    "/product2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleArrowClick = (direction: "left" | "right") => {
    setCurrentImageIndex((prevIndex) =>
      direction === "left"
        ? prevIndex === 0
          ? images.length - 1
          : prevIndex - 1
        : prevIndex === images.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const products: Product[] = [
    { id: 1, name: "", title: "Graphic Design", price: 84.45, originalPrice: 99.99, imageUrl: "/fixed-height.png" },
    { id: 2, name: "", title: "Web Development", price: 150.0, originalPrice: 180.0, imageUrl: "/fixed-height 1.png" },
    { id: 3, name: "", title: "SEO Services", price: 70.5, originalPrice: 89.0, imageUrl: "/fixed-height 2.png" },
    { id: 4, name: "", title: "UI/UX Design", price: 110.0, originalPrice: 140.0, imageUrl: "/fixed-height 3.png" },
  ];

  return (
    <>
      <Header />
      <div className="bg-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={images[currentImageIndex]}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={() => handleArrowClick("left")}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              &#8592;
            </button>
            <button
              onClick={() => handleArrowClick("right")}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              &#8594;
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Floating Phone</h1>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 text-lg">
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </span>
              <span className="ml-2 text-gray-600">(10 Reviews)</span>
            </div>
            <p className="text-2xl font-bold text-gray-800 mt-4">$1,139.33</p>
            <p className="text-gray-500 mt-2">
              Availability: <span className="text-green-500">In Stock</span>
            </p>
            <p className="text-gray-600 mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.
              Excitation venial consequent sent nostrum met.
            </p>
            <div className="flex mt-4">
              {["blue", "green", "orange", "black"].map((color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full bg-${color}-500 mx-1 border`}
                ></div>
              ))}
            </div>
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
        <div className="flex mt-8 space-x-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-16 h-16 rounded-lg cursor-pointer border ${
                index === currentImageIndex ? "border-blue-500" : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <Desktop/>
      <Bestseller/>
    </>
  );
};

export default ProductPage;
