import React from 'react'

export default function Navbar() {
  return (
    <div>
      {/* Navbar Section */}
  <header className="sticky top-0 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 shadow-lg w-full flex justify-between items-center px-6 py-4 z-50">
    {/* Logo */}
    <div className="text-2xl font-bold text-white">Bandage</div>

    {/* Navigation Menu */}
    <nav className="flex gap-6 items-center">
      {/* Navigation Links */}
      {[
        { name: "Home", href: "http://localhost:3000" },
        { name: "Product", href: "/product" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-white hover:text-gray-200 transition-colors duration-300"
        >
          {item.name}
        </a>
      ))}

      {/* Login Button */}
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
        Login
      </button>

      {/* Become a Member Button */}
      <button className="bg-white text-blue-600 flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
        Become a member
        <svg
          className="ml-2"
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36108 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"
            fill="blue"
          />
        </svg>
      </button>
    </nav>
  </header>
    </div>
  )
}
