import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


const features = [
  {
    title: 'Have a Conversation',
    description: 'Talk to the AI Urdu tutor and ask questions about stories, vocabulary, or pronunciation.',
    path: '/conversation'
  },
  {
    title: 'Listen to a Story',
    description: 'Enjoy engaging Urdu stories narrated with expressions and clarity to enhance listening skills.',
    path: '/story'
  },
  {
    title: 'Practice Speaking',
    description: 'Repeat after the tutor and get feedback on your pronunciation to improve speaking skills.',
    path: '/speaking'
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-800">Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-indigo-50 p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
            </div>
              <a
              href={index === 0 ? '/Conversation'
                : index === 1
                ? '/ReadStory'
                : '/Speaking'}
              className="flex items-center justify-center  mt-4 w-28 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Explore 
              <ArrowRightIcon className="h-4 w-4 text-white inline-block ml-2" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;


