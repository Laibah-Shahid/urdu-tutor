// components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url('/hero-image.png')` }}
    >
      <div className="absolute w-full h-full bg-black opacity-50" />
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow text-blue-800">
          بچوں کی اردو دنیا 
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto drop-shadow">
          Interactive story-based Urdu tutoring powered by AI and open-source technologies, designed for kids and language learners.
        </p>
      </div>
    </section>
  );
};

export default Hero;
