"use client";

import React from "react";

// Pricing Component
const Pricing = () => {
  const images = [
    "/col-md-6.png",
    "/col-md-4.png",
    "/col-md-5.png",
    "/col-md-3.png",
    "/col-md-2.png",
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
          <a href="http://localhost:3000/" className="hover:text-blue-400">
            Home
          </a>
          <a href="/cart" className="hover:text-blue-400">
            Shop
          </a>
          <a href="/about" className="hover:text-blue-400">
            About
          </a>
          <a href="#" className="hover:text-blue-400">
            Blog
          </a>
          <a href="/Contact" className="hover:text-blue-400">
            Contact
          </a>
          <a href="/pages" className="hover:text-blue-400">
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
          <a href="/cart" aria-label="Cart">
            🛒 1
          </a>
          <a href="#" aria-label="Favorites">
            ❤️ 1
          </a>
        </div>
        {/* Mobile Toggle */}
        <button className="md:hidden text-black text-2xl" aria-label="Toggle Menu">
          ☰
        </button>
      </div>
    </div>
  );
};

// ShopPage Component
const ShopPage = () => {
  const products = [
    {
      id: 1,
      title: "Creative Poster Design",
      category: "Graphic Arts",
      originalPrice: "$20.00",
      discountedPrice: "$10.00",
      image: "/men3.png",
    },
    {
      id: 2,
      title: "Digital Illustration",
      category: "Art Department",
      originalPrice: "$25.00",
      discountedPrice: "$15.00",
      image: "/womens2.png",
    },
    {
      id: 3,
      title: "Typography Basics",
      category: "English Department",
      originalPrice: "$18.00",
      discountedPrice: "$9.00",
      image: "/women3.png",
    },
    {
      id: 4,
      title: "Photo Editing",
      category: "Photography",
      originalPrice: "$30.00",
      discountedPrice: "$20.00",
      image: "/women4.png",
    },
    {
      id: 5,
      title: "Logo Design",
      category: "Branding",
      originalPrice: "$50.00",
      discountedPrice: "$25.00",
      image: "/women5.png",
    },
    {
      id: 6,
      title: "Brochure Design",
      category: "Marketing",
      originalPrice: "$40.00",
      discountedPrice: "$20.00",
      image: "/women6.png",
    },
    {
      id: 7,
      title: "Web Design Basics",
      category: "Web Development",
      originalPrice: "$35.00",
      discountedPrice: "$17.50",
      image: "/men3.png",
    },
    {
      id: 8,
      title: "UI/UX Design",
      category: "User Experience",
      originalPrice: "$60.00",
      discountedPrice: "$30.00",
      image: "/men4.png",
    },
    {
      id: 9,
      title: "Character Design",
      category: "Animation",
      originalPrice: "$45.00",
      discountedPrice: "$22.50",
      image: "/men4.png",
    },
    {
      id: 10,
      title: "Vector Art",
      category: "Illustration",
      originalPrice: "$28.00",
      discountedPrice: "$14.00",
      image: "/men5.png",
    },
    {
      id: 11,
      title: "Social Media Posts",
      category: "Marketing",
      originalPrice: "$15.00",
      discountedPrice: "$7.50",
      image: "/men6.png",
    },
    {
      id: 12,
      title: "3D Modeling",
      category: "3D Design",
      originalPrice: "$70.00",
      discountedPrice: "$35.00",
      image: "/men7.png",
    },
  ];

  const categories = [
    { id: 1, title: "CLOTHS", items: 5, image: "/col-md-6.png" },
    { id: 2, title: "CLOTHS", items: 5, image: "/col-md-5.png" },
    { id: 3, title: "CLOTHS", items: 5, image: "/col-md-4.png" },
    { id: 4, title: "CLOTHS", items: 5, image: "/col-md-3.png" },
    { id: 5, title: "CLOTHS", items: 5, image: "/col-md-2.png" },
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
                className="w-full h-60 object-cover"
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
    </div>
  );
};

// Exporting both components
export { ShopPage, Pricing }
