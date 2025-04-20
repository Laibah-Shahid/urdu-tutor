import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-center py-6 border-t text-gray-600">
      &copy; {new Date().getFullYear()} UrduTutor. All rights reserved.
    </footer>
  );
};

export default Footer;