import TypingPractice from '@/components/TypingPractice';
import TypingStatsFeatures from '@/components/TypingStatsFeatures';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* SEO Heading */}
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Free Typing Test Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Test your typing speed and improve accuracy with our free typing tutor.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <TypingPractice />
        <TypingStatsFeatures />
      </div>
    </div>
  );
}
