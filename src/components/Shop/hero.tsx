import Image from 'next/image';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { CategoryBanner } from './CategoryBanner';

const Hero = () => {
  return (
    <div className="px-0 mt-0">
      <div className='flex justify-between items-center'>
        <h2 className='text-[#252B42] font-bold text-[24px]'>Shop</h2>
        <p className="text-[#252B42] font-bold text-[14px] flex items-center gap-1">
          Home <FiChevronRight className="text-[#BDBDBD] text-[25px]" />{" "}
          <span className="text-[#737373]">Shop</span>
        </p>
      </div>
      <div className='mt-4 flex justify-center items-center lg:px-12 md:px-4'>
      <CategoryBanner />
      </div>
    </div>
  );
};

export default Hero;