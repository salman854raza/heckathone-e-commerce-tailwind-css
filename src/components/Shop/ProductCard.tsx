import React from 'react';

interface ProductCardProps {
  title: string;
  department: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  colors: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  department,
  originalPrice,
  salePrice,
  image,
  colors
}) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm font-bold text-gray-500 mb-2">{department}</p>
      
      <div className="flex items-center gap-2">
        <span className="text-gray-400 font-bold line-through">${originalPrice.toFixed(2)}</span>
        <span className="text-green-600 font-bold">${salePrice.toFixed(2)}</span>
      </div>
      
      <div className="flex gap-2 mt-3">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-4 h-4 rounded-full bg-${color}-500`}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
    </div>
  );
};