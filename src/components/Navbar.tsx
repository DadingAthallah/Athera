import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full max-w-[1400px] mx-auto px-12 py-10 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl tracking-tight font-instrument text-white">
          Aethera<sup className="text-xs">®</sup>
        </div>

        {/* Menu Items */}
        <div className="hidden lg:flex items-center space-x-12">
          <a href="#" className="text-[13px] font-inter text-white font-medium hover:text-white/70 transition-colors">Home</a>
          <a href="#" className="text-[13px] font-inter text-gray-300 font-medium hover:text-white transition-colors">Studio</a>
          <a href="#" className="text-[13px] font-inter text-gray-300 font-medium hover:text-white transition-colors">About</a>
          <a href="#" className="text-[13px] font-inter text-gray-300 font-medium hover:text-white transition-colors">Journal</a>
          <a href="#" className="text-[13px] font-inter text-gray-300 font-medium hover:text-white transition-colors">Reach Us</a>
        </div>

        {/* CTA Button */}
        <button className="rounded-full px-8 py-3 text-[13px] font-inter font-medium bg-white text-black hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300">
          Begin Journey
        </button>
      </div>
    </nav>
  );
};
