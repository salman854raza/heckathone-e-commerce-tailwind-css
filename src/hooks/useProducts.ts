import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { generateMockProducts } from '../data/mockProducts';

const ITEMS_PER_PAGE = 12;

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  
  useEffect(() => {
    // Simulate API call
    setProducts(generateMockProducts());
  }, []);

  const getCurrentPageProducts = (): Product[] => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handlePageChange = async (page: number) => {
    if (page < 1 || page > totalPages) return;
    
    setIsLoading(true);
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(false);
  };

  return {
    products: getCurrentPageProducts(),
    currentPage,
    totalPages,
    isLoading,
    handlePageChange
  };
};