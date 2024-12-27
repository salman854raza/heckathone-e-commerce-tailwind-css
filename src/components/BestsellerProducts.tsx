import React from 'react';
// import { ProductCard } from './Shop/ProductCard';
import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
}

export const BestsellerProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: 'Graphic Design',
      price: 84.45,
      originalPrice: 99.99,
      imageUrl: '/placeholder-1.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">BESTSELLER PRODUCTS</h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}