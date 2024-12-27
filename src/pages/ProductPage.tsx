import React from 'react';
import { ImageGallery } from '@/components/ProductGallery/ImageGallery';
import { ProductInfo } from '@/components/ProductDetails/ProductInfo';
import { Tabs } from '@/components/ProductDetails/Tabs';

const productImages = [
  '/floating-phone-1.jpg',
  '/floating-phone-2.jpg',
  '/floating-phone-3.jpg',
  '/floating-phone-4.jpg',
];

const productTabs = [
  {
    id: 'description',
    label: 'Description',
    content: (
      <div className="prose max-w-none">
        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
      </div>
    ),
  },
  {
    id: 'additional',
    label: 'Additional Information',
    content: (
      <div className="prose max-w-none">
        <ul>
          <li>the quick fox jumps over the lazy dog</li>
          <li>the quick fox jumps over the lazy dog</li>
          <li>the quick fox jumps over the lazy dog</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'reviews',
    label: 'Reviews (0)',
    content: (
      <div className="prose max-w-none">
        <p>No reviews yet.</p>
      </div>
    ),
  },
];

export const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ImageGallery images={productImages} />
          <ProductInfo
            title="Floating Phone"
            price={1139.33}
            rating={4}
            reviews={10}
            description="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
            availability="In Stock"
          />
        </div>
        <Tabs tabs={productTabs} />
      </div>
    </div>
  );
}