import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-indigo-600">UrduTutor</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#hero" className="hover:text-indigo-600">Home</a></li>
        <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
        <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;