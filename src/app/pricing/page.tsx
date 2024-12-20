"use client";

import React from "react";

// ShopPage Component
const ShopPage = () => {
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: "Graphic Design",
    category: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: `/images/product-${i + 1}.png`,
  }));

  const categories = [
    { id: 1, title: "CLOTHS", items: 5, image: "/images/category-1.png" },
    { id: 2, title: "CLOTHS", items: 5, image: "/images/category-2.png" },
    { id: 3, title: "CLOTHS", items: 5, image: "/images/category-3.png" },
    { id: 4, title: "CLOTHS", items: 5, image: "/images/category-4.png" },
    { id: 5, title: "CLOTHS", items: 5, image: "/images/category-5.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="px-4 py-4 text-sm text-gray-500">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-lg text-gray-900">Shop</h1>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Home</span>
            <span>&gt;</span>
            <span>Shop</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-md shadow-sm overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-gray-900">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600">{product.category}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="text-green-600 font-semibold">
                    {product.discountedPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="px-4 py-4 flex justify-center items-center gap-2">
        <button className="px-4 py-2 border rounded-md text-gray-500">
          First
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          1
        </button>
        <button className="px-4 py-2 border rounded-md text-gray-500">
          2
        </button>
        <button className="px-4 py-2 border rounded-md text-gray-500">
          Next
        </button>
      </div>

      {/* Categories */}
      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative bg-cover bg-center h-48 rounded-md overflow-hidden"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                <h2 className="text-lg font-bold">{category.title}</h2>
                <p>{category.items} Items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Pricing Component
const Pricing = () => {
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
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="YouTube">🎥</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white text-black px-4 py-3 flex justify-between items-center md:px-8">
        <div className="text-2xl font-bold">Bandage</div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            Shop
          </a>
          <a href="#" className="hover:text-blue-400">
            About
          </a>
          <a href="#" className="hover:text-blue-400">
            Blog
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
          <a href="#" className="hover:text-blue-400">
            Pages
          </a>
        </nav>
        <div className="flex items-center gap-4 text-blue-400">
          <a href="#" aria-label="Login/Register">
            🔑 Login/Register
          </a>
          <a href="#" aria-label="Search">
            🔍
          </a>
          <a href="#" aria-label="Cart">
            🛒 1
          </a>
          <a href="#" aria-label="Favorites">
            ❤️ 1
          </a>
        </div>
        {/* Mobile Toggle */}
        <button className="md:hidden text-white text-2xl" aria-label="Toggle Menu">
          ☰
        </button>
      </div>
    </div>
  );
};

// Exporting both components
export { ShopPage, Pricing };
