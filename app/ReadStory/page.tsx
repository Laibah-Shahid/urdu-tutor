import { BookOpenIcon } from '@heroicons/react/24/outline';

export default function StoryPage() {
    return (
        <div className="min-h-screen p-10 bg-indigo-50 text-gray-800">
        <div className="flex items-center gap-4 mb-4">
          <BookOpenIcon className="w-10 h-10 text-indigo-600" />
          <h1 className="text-4xl font-bold text-indigo-700">Have a Conversation</h1>
        </div>
            <p>Enjoy engaging Urdu stories with narration and subtitles. Great for improving listening comprehension!</p>
        </div>
    );
  }
  