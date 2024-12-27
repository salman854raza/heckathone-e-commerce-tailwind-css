import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 px-4 md:px-6 shadow-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">Bandage</div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="Home" label="Home" />
          <NavLink href="/product" label="Product" />
          <NavLink href="/pricing" label="Pricing" />
          <NavLink href="/Contact" label="Contact" />
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-blue-500">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Become a member
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a href={href} className="text-gray-600 hover:text-gray-900 transition-colors">
    {label}
  </a>
);