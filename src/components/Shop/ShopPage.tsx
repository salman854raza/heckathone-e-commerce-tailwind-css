import React from 'react';
import { Navbar } from './Navbar';
// import { CategoryBanner } from './CategoryBanner';
import { ProductGrid } from './ProductGrid';
import { Pagination } from './Pagination';
import DesignSection from './designSection';
import Hero from './hero';
import Header from './header';




export const ShopPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <main>
        <div className="container mx-auto px-16 py-2">
          
          <Hero />
          {/* <CategoryBanner /> */}
          <DesignSection />
          <ProductGrid />
          <Pagination />
        </div>
      </main>
    </div>
  );
};