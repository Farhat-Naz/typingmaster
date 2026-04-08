import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Typing Master",
  description: "Learn more about Typing Master and our mission to help you type faster and more accurately.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            About Typing Master
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Our mission to help you type faster and more accurately
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🎯 Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Typing Master is a free online typing tutor designed to help users of all skill levels 
            improve their typing speed and accuracy. Whether you're a complete beginner or an 
            experienced typist looking to refine your skills, our platform provides targeted 
            exercises and real-time feedback to accelerate your progress.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We believe that touch typing is an essential skill in today's digital world. It boosts 
            productivity, reduces strain, and allows you to focus on your thoughts rather than 
            finding keys on the keyboard. Our adaptive learning system meets you where you are 
            and guides you toward mastery.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-10">
            ✨ What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
                🌱 Progressive Difficulty Levels
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                From very beginner to advanced, our exercises grow with your skills. Start with 
                simple key rows and progress to complex technical content.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
                📊 Real-Time Performance Tracking
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Monitor your WPM, accuracy, and errors as you type. Session statistics help you 
                see your improvement over time.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
                🎨 Visual Feedback
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Color-coded characters show your progress instantly. Green for correct, red for 
                mistakes, and blue for your current position.
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 mb-3">
                💯 100% Free
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                No subscriptions, no hidden fees. Typing Master is completely free to use with 
                unlimited exercises and practice sessions.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-10">
            👥 Who We Help
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">✓</span>
              <span><strong>Students</strong> - Build essential typing skills for academic success</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span><strong>Professionals</strong> - Increase productivity and reduce typing fatigue</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>Job Seekers</strong> - Improve skills needed for office work</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 text-xl">✓</span>
              <span><strong>Anyone</strong> - Who wants to type faster and more accurately</span>
            </li>
          </ul>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            🏠 Back to Practice
          </Link>
        </div>
      </div>
    </div>
  );
}
