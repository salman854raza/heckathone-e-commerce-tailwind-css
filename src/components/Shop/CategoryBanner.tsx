import React from 'react';

const categories = [
  { id: 1, image: '/col-md-3.png' },
  { id: 2, image: '/col-md-4.png' },
  { id: 3, image: '/col-md-5.png'},
  { id: 4, image: '/col-md-6.png' },
  { id: 5, image: '/col-md-2.png' },
];

export const CategoryBanner: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
      {categories.map(({ id, image }) => (
        <div key={id} className="relative group overflow-hidden">
          <img
            src={image}
            alt="title"
            className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
            {/* <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
            <p className="text-sm">{items} Items</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};