import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function ConversationPage() {
  return (
    <div className="min-h-screen p-10 bg-indigo-50 text-gray-800">
      <div className="flex items-center gap-4 mb-4">
        <ChatBubbleLeftRightIcon className="w-10 h-10 text-indigo-600" />
        <h1 className="text-4xl font-bold text-indigo-700"> کے ساتھ بات چیت کریں AI</h1>
      </div>
      <p>Interact with our AI-powered Urdu tutor. Ask questions, get translations, and improve your understanding.</p>
    </div>
  );
}