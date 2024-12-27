import React from 'react';
import { StarRating } from './StarRating';
import { ColorSelector } from './ColorSelector';

interface ProductInfoProps {
  title: string;
  price: number;
  reviews: number;
  rating: number;
  description: string;
  availability: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  price,
  reviews,
  rating,
  description,
  availability,
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      
      <div className="flex items-center space-x-4">
        <StarRating rating={rating} />
        <span className="text-gray-500">{reviews} Reviews</span>
      </div>
      
      <div className="text-3xl font-bold text-gray-900">
        ${price.toFixed(2)}
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Availability:</span>
        <span className="text-blue-600">{availability}</span>
      </div>
      
      <p className="text-gray-600">{description}</p>
      
      <ColorSelector />
      
      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        Select Options
      </button>
    </div>
  );
}