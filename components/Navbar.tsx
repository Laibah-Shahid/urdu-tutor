import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-blue-700 shadow">
      <div className="text-2xl font-bold text-white">UrduTutor</div>
      <ul className="flex space-x-6 text-white font-medium">
        <li><a href="#hero" className="hover:text-blue-300">Home</a></li>
        <li><a href="#features" className="hover:text-blue-300">Features</a></li>
        <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;