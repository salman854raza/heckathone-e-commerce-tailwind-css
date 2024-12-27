import { Product } from '../types/product';

// Generate 36 products (3 pages worth of data)
export const generateMockProducts = (): Product[] => {
  return Array.from({ length: 36 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
    price: 6.48,
    originalPrice: 16.48,
    imageUrl: `/product-${(index % 12) + 1}.jpg`,
    department: 'English Department',
    colors: ['blue', 'green', 'orange', 'black']
  }));
};