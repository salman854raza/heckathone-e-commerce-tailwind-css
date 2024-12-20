import React from 'react'

export default function desktop() {
  return (
    <div>
       {/* image with h1 & paragraph */}
       <section>

<div className="bg-white px-4 py-8 relative">
  {/* Vertical Pink Lines */}
  <div className="absolute inset-0 pointer-events-none grid grid-cols-12 gap-4">
    {Array.from({ length: 12 }).map((_, index) => (
      <div
        key={index}
        className="bg-pink-400 w-10 h-full mx-auto"
        style={{ opacity: 0.5 }} />
    ))}
  </div>

  <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
    {/* Image Section */}
    <div className="flex justify-center">
      <img
        src="/product-listing.png"
        alt="Product"
        className="max-w-full h-auto rounded-lg shadow-md" />
    </div>

    {/* Content Section */}
    <div className="md:col-span-2 space-y-8">
      {/* Row 1 - First Heading and Paragraph */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First Heading and Paragraph */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            The quick fox jumps over
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            nostrum, beatae commodi, dolorem, dolorum rerum aut mollitia
            explicabo suscipit exercitationem porro aperiam quos fuga? Labore
            eius laudantium nam fugit optio?
          </p>
        </div>
      </div>

      {/* Row 2 - Additional List Heading and Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Additional List Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            The quick fox jumps over
          </h1>
          <ul className="space-y-2">
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
          </ul>
        </div>
      </div>

      {/* Row 3 - Third Row Content */}
      <div className="grid grid-rows-1 lg:grid-rows-2 gap-8">
        {/* Additional Content Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            The quick fox jumps over
          </h1>
          <ul className="space-y-2">
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
            <li className="text-gray-700">{">"} The quick fox jumps over the lazy dog</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

</div>
  )
}
