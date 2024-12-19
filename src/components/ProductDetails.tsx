import React, { useState } from 'react';
import { StarRating } from './StarRating';
import { ColorSelector } from './ColorSelector';

interface ProductDetailsProps {
  title: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  price,
  rating,
  reviews,
  description,
}) => {
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const colors = ['#3B82F6', '#EF4444', '#F59E0B', '#000000'];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
      <div className="mb-4">
        <StarRating rating={rating} reviews={reviews} />
      </div>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">${price.toFixed(2)}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Colors</h3>
        <ColorSelector
          colors={colors}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />
      </div>
      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
        Select Options
      </button>
    </div>
  );
}