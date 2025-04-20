import { MicrophoneIcon } from '@heroicons/react/24/outline';

export default function SpeakingPage() {
    return (
        <div className="min-h-screen p-10 bg-indigo-50 text-gray-800">
        <div className="flex items-center gap-4 mb-4">
          <MicrophoneIcon className="w-10 h-10 text-indigo-600" />
          <h1 className="text-4xl font-bold text-indigo-700">چت چت کا تجربہ</h1>
        </div>
            <p>Repeat after the tutor and receive real-time feedback on pronunciation. Build confidence in speaking Urdu.</p>
      </div>
    );
  }
  