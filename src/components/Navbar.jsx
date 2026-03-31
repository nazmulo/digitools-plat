import React from "react";
const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-600">DigiTools</h1>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#products">Products</a></li>
          <li><a href="#steps">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>

        <div className="text-lg font-semibold">
          🛒 <span className="text-purple-600">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;