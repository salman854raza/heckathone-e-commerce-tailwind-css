import React from 'react';
import { ProductCard } from './ProductCard';

// Define product data with unique images
const products = [
  {
    id: 1,
    title: 'Graphic Design Basics',
    department: 'Design Department',
    originalPrice: 20.99,
    salePrice: 15.99,
    image: '/men1.png',
    colors: ['blue', 'green', 'orange', 'navy'],
  },
  {
    id: 2,
    title: 'Advanced Graphic Design',
    department: 'Design Department',
    originalPrice: 25.99,
    salePrice: 18.99,
    image: '/women6.png',
    colors: ['red', 'blue', 'green', 'navy'],
  },
  {
    id: 3,
    title: 'Typography Essentials',
    department: 'Typography Department',
    originalPrice: 19.99,
    salePrice: 12.99,
    image: '/women1.png',
    colors: ['green', 'navy', 'blue', 'red'],
  },
  {
    id: 4,
    title: 'Logo Design Workshop',
    department: 'Logo Department',
    originalPrice: 22.99,
    salePrice: 17.99,
    image: '/mens2.png',
    colors: ['orange', 'navy', 'green', 'red'],
  },
  {
    id: 5,
    title: 'Web Design Fundamentals',
    department: 'Web Design Department',
    originalPrice: 24.99,
    salePrice: 19.99,
    image: '/men3.png',
    colors: ['navy', 'blue', 'red', 'green'],
  },
  {
    id: 6,
    title: 'UI/UX Design Principles',
    department: 'UI/UX Department',
    originalPrice: 28.99,
    salePrice: 22.99,
    image: '/men4.png',
    colors: ['blue', 'green', 'red', 'orange'],
  },
  {
    id: 7,
    title: 'Digital Marketing Essentials',
    department: 'Marketing Department',
    originalPrice: 18.99,
    salePrice: 13.99,
    image: '/men5.png',
    colors: ['red', 'navy', 'blue', 'orange'],
  },
  {
    id: 8,
    title: 'Photography for Designers',
    department: 'Photography Department',
    originalPrice: 26.99,
    salePrice: 21.99,
    image: '/women3.png',
    colors: ['orange', 'blue', 'green', 'red'],
  },
  {
    id: 9,
    title: 'Motion Graphics Workshop',
    department: 'Animation Department',
    originalPrice: 30.99,
    salePrice: 24.99,
    image: '/men6.png',
    colors: ['green', 'navy', 'blue', 'red'],
  },
  {
    id: 10,
    title: 'Video Editing Basics',
    department: 'Video Department',
    originalPrice: 27.99,
    salePrice: 22.99,
    image: '/men7.png',
    colors: ['blue', 'green', 'red', 'orange'],
  },
  {
    id: 11,
    title: 'Illustration Techniques',
    department: 'Illustration Department',
    originalPrice: 23.99,
    salePrice: 18.99,
    image: '/men8.png',
    colors: ['red', 'blue', 'green', 'navy'],
  },
  {
    id: 12,
    title: '3D Modeling for Beginners',
    department: '3D Design Department',
    originalPrice: 32.99,
    salePrice: 28.99,
    image: '/women2.png',
    colors: ['navy', 'red', 'blue', 'green'],
  },
];

export const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
