import React from 'react'
import Image from "next/image";
// import AsianWomanMan from "/public/asian-woman-man.png"; 

export default function hero() {
  
     // Array of unique product images
  const productImages = [ 
    "./women3.png",
    "./men3.png",
    "./women4.png",
    "./women5.png",
    "./men1.png",
    "./feature6.png",
    "./card6.png",
    "./cover1.png",
  ];


  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 px-4">
        {/* Editor's Pick Section */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-gray-500 text-lg mb-2">EDITOR'S PICK</h2>
            <p className="text-gray-800 text-2xl font-bold">
              Problems trying to resolve <br />
              the conflict between
            </p>
          </div>
          
          <div className="flex justify center items-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Men */}
            <div className="relative group overflow-hidden">
              <img 
                src="./men1.png"
                alt="Men's Fashion"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-white text-xl font-bold text-center">MEN</h3>
              </div>
            </div>

            {/* Women */}
            <div className="relative group overflow-hidden px-16">
              <img 
                src="./women6.png"
                alt="Women's Fashion"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-white text-xl font-bold text-center">WOMEN</h3>
              </div>
            </div>
            

            {/* Accessories */}
            <div className='flex justify-center items-center grid lg:grid-rows-2 py-16'>
            <div className="relative group overflow-hidden">
              <img 
                src="./womens2.png"
                alt="Accessories"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-white text-xl font-bold text-center">ACCESSORIES</h3>
              </div>
            </div>
            

            {/* Kids */}
            <div className="relative group overflow-hidden">
              <img 
                src="./mens2.png"
                alt="Kids Fashion"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-white text-xl font-bold text-center">KIDS</h3>
              </div>
              </div>
              </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-gray-500 text-lg mb-2">Featured Products</h3>
            <h2 className="text-gray-800 text-3xl font-bold mb-4">BESTSELLER PRODUCTS</h2>
            <p className="text-gray-500">Problems trying to resolve the conflict between</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productImages.map((image, index) => (
              <div key={index} className="bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full aspect-[3/4] object-fit hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-gray-800 font-bold mb-2">Product {index + 1}</h3>
                  <p className="text-gray-500 text-sm mb-2">Description goes here</p>
                  <div className="flex justify-center items-center gap-4">
                    <span className="text-gray-400 line-through">$16.48</span>
                    <span className="text-green-700 font-bold">$6.48</span>
                  </div>
                  <div className="flex justify-center gap-2 mt-4">
                    {['#23A6F0', '#23856D', '#E77C40', '#252B42'].map((color, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
  {/* First Image */}
  
  <section className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen bg-green-500 p-6 lg:p-20 lg:gap-10">
      {/* Text Content */}
      <div className="text-center lg:text-left text-white lg:w-1/2">
        {/* Subtitle */}
        <p className="text-sm uppercase tracking-wide">Summer 2020</p>

        {/* Title */}
        <h1 className="mt-2 text-3xl lg:text-5xl font-bold">
          Vita Classic Product
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg">
          We know how large objects will act. We know how new objects will act,
          and we know.
        </p>

        {/* Price and Button */}
        <div className="mt-6 flex flex-col lg:flex-row gap-4 items-center lg:items-start">
          {/* Price */}
          <p className="text-2xl font-semibold">$16.48</p>

          {/* Button */}
          <button className="px-16 py-3 bg-white text-green-500 rounded-md font-medium hover:bg-green-600 hover:text-white transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Image Content */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/cover.2.png"
          alt="Vita Classic Product Image"
          width={400}
          height={400}
          className="w-auto h-auto   rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
      </div>
    </section>





<section className="relative w-full bg-white py-16 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
       

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          {/* Subtitle */}
          <p className="text-gray-500 text-sm uppercase tracking-wide">Summer 2020</p>

          {/* Title */}
          <h1 className="mt-2 text-2xl lg:text-4xl font-bold text-gray-800">
            Part of the Neural Universe
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-600">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition">
              Buy Now
            </button>
            <button className="px-6 py-3 bg-transparent border border-green-500 text-green-500 rounded-md font-medium hover:bg-green-600 hover:text-white transition">
              Read More
            </button>
          </div>
        </div>
         {/* Image Section */}
         <div className="flex-1 flex justify-center lg:justify-start">
          <Image
            src="/asian-woman.png"
            alt="Asian Woman and Man"
            className="w-auto h-auto rounded-md shadow-lg"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      </section>

      </main>
      
  );
}

   

  

















