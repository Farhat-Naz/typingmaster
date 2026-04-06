import TypingPractice from '@/components/TypingPractice';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto py-12">
        <TypingPractice />
      </div>
    </div>
  );
}
