import React, { useState } from 'react';

// Define the Product type
interface Product {
  id: number;
  name: string;
  title: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
}

// Define the ProductCard component
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

// Define the main Bestseller component
export default function Bestseller() {
  // Define product data
  const products: Product[] = [
    {
      id: 1,
      name: "Graphic Design Package",
      title: "Graphic Design",
      price: 84.45,
      originalPrice: 99.99,
      imageUrl: "/fixed-height.png",
    },
    {
      id: 2,
      name: "Web Development Service",
      title: "Web Development",
      price: 150.0,
      originalPrice: 180.0,
      imageUrl: "/fixed-height 1.png",
    },
    {
      id: 3,
      name: "SEO Optimization",
      title: "SEO Services",
      price: 70.5,
      originalPrice: 89.0,
      imageUrl: "/fixed-height 2.png",
    },
    {
      id: 4,
      name: "UI/UX Package",
      title: "UI/UX Design",
      price: 110.0,
      originalPrice: 140.0,
      imageUrl: "/fixed-height 3.png",
    },
    {
      id: 5,
      name: "Graphic Design Package",
      title: "Graphic Design",
      price: 84.45,
      originalPrice: 99.99,
      imageUrl: "/fixed-height 4.png",
    },
    {
      id: 6,
      name: "Web Development Service",
      title: "Web Development",
      price: 150.0,
      originalPrice: 180.0,
      imageUrl: "/fixed-height 5.png",
    },
    {
      id: 7,
      name: "SEO Optimization",
      title: "SEO Services",
      price: 70.5,
      originalPrice: 89.0,
      imageUrl: "/fixed-height 6.png",
    },
    {
      id: 8,
      name: "UI/UX Package",
      title: "UI/UX Design",
      price: 110.0,
      originalPrice: 140.0,
      imageUrl: "/fixed-height 7.png",
    },

  ];

  return (
    <div>
      <div className="bg-gray-200 py-16 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          BESTSELLER PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              imageUrl={product.imageUrl}
              name={product.name}
              id={product.id}
            />
          ))}
        </div>
      </div>
      <footer className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center text-gray-600">
            Made With Love By Bolt All Rights Reserved
          </p>
        </div>
      </footer>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        <img src="/vector1.png" alt="Hooli" className="h-8 md:h-12" />
        <img src="/vector2.png" alt="Lyft" className="h-8 md:h-12" />
        <img src="/vector3.png" alt="Stripe" className="h-8 md:h-12" />
        <img src="/vector4.png" alt="AWS" className="h-8 md:h-12" />
        <img src="/vector5.png" alt="Reddit" className="h-8 md:h-12" />
      </div>
    </div>
  );
}
