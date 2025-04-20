import Image from 'next/image';
import { BookOpenIcon, EyeIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const stories = [
  {
    name: 'چالاک لومڑی',
    image: '/stories/fox.jpg',
    rating: 4.5,
    views: 1200,
  },
  {
    name: 'خرگوش اور کچھوا',
    image: '/stories/rabbit-turtle.jpg',
    rating: 4.8,
    views: 1500,
  },
  {
    name: 'شیردل بادشاہ',
    image: '/stories/king.jpg',
    rating: 4.2,
    views: 980,
  },
  {
    name: 'پیارا سا ہاتھی',
    image: '/stories/elephant.jpg',
    rating: 4.6,
    views: 1100,
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen p-10 bg-indigo-50 text-gray-800">
      <div className="flex items-center gap-4 mb-4">
        <BookOpenIcon className="w-10 h-10 text-indigo-600" />
        <h1 className="text-4xl font-bold text-indigo-700">اردو کہانیوں کا سننا</h1>
      </div>
      <p className="mb-8 text-gray-700 max-w-2xl">
        Enjoy engaging Urdu stories with narration and subtitles. Great for improving listening comprehension!
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {stories.map((story, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
            <Image
              src={story.image}
              alt={story.name}
              width={400}
              height={200}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">{story.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(Math.floor(story.rating))].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                  {story.rating % 1 !== 0 && (
                    <StarIcon className="h-5 w-5 opacity-50" />
                  )}
                  <span className="ml-1 text-gray-700">{story.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-5 w-5 text-indigo-400" />
                  <span>{story.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
