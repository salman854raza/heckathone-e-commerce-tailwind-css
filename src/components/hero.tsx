import React from 'react'

export default function hero() {
  
     // Array of unique product images
  const productImages = [ 
    "./women3.png",
    "./men3.png",
    "./women4.png",
    "./women5.png",
    "./men1.png",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24",
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className="relative group overflow-hidden">
              <img 
                src="./womens2.png"
                alt="Women's Fashion"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-white text-xl font-bold text-center">WOMEN</h3>
              </div>
            </div>

            {/* Accessories */}
            <div className="relative group overflow-hidden">
              <img 
                src="./mens2.png"
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
                src="./womens1.png"
                alt="Kids Fashion"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-white text-xl font-bold text-center">KIDS</h3>
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
                    className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-300"
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
      <section className="relative">
  {/* First Image */}
  <div className="w-full h-auto">
    <img 
      src="./menbggreen.png" 
      alt="Background Green" 
      className="w-full h-auto object-cover" 
    />
  </div>

  {/* Second Image */}
  <div className="w-full h-auto mt-4">
    <img 
      src="./neural-universe.png" 
      alt="Neural Universe" 
      className="w-full h-auto object-cover" 
    />
  </div>

  {/* Third Image */}
  <div className="w-full h-auto mt-4">
    <img 
      src="./Feature Post.png" 
      alt="feature post" 
      className="w-full h-auto object-cover" 
    />
  </div>
</section>

      </main>
      
  );
}
