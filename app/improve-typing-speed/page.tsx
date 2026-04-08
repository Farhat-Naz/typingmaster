import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Improve Typing Speed - Typing Master",
  description: "Proven tips and techniques to increase your typing speed while maintaining accuracy.",
};

export default function ImproveSpeedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            How to Improve Your Typing Speed
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Proven strategies to type faster and more accurately
          </p>
        </div>

        {/* Tips Section */}
        <div className="space-y-8">
          {/* Tip 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  1. Master Proper Finger Placement
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Place your fingers on the <strong className="text-purple-600 dark:text-purple-400">home row keys</strong> (ASDF for left hand, JKL; for right hand). 
                  Each finger is responsible for specific keys. Your index fingers should rest on F and J, 
                  which have small bumps to help you find them without looking. This foundation is crucial 
                  for touch typing success.
                </p>
              </div>
            </div>
          </div>

          {/* Tip 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👀</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  2. Don't Look at the Keyboard
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This is the golden rule of touch typing. Looking down breaks your rhythm and slows you down. 
                  Use the home row bumps to orient yourself. It feels frustrating at first, but <strong className="text-blue-600 dark:text-blue-400">muscle memory</strong> will 
                  develop with consistent practice. Cover your hands with a towel if you need to break the habit.
                </p>
              </div>
            </div>
          </div>

          {/* Tip 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  3. Focus on Accuracy Over Speed
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Speed comes naturally with practice. Focus on <strong className="text-green-600 dark:text-green-400">typing correctly</strong> first. Every mistake costs more 
                  time than you realize—backspacing, correcting, and regaining your rhythm. Aim for 95-100% 
                  accuracy, and speed will follow naturally. Our platform tracks both metrics so you can 
                  monitor your progress.
                </p>
              </div>
            </div>
          </div>

          {/* Tip 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⏰</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  4. Practice Regularly (15-30 Minutes Daily)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Short, daily practice sessions are more effective than occasional long sessions. 
                  <strong className="text-yellow-600 dark:text-yellow-400"> 15-30 minutes every day</strong> builds muscle memory faster than 2 hours once a week. 
                  Consistency is key. Use our exercises during your coffee break or before starting work 
                  to build a sustainable practice routine.
                </p>
              </div>
            </div>
          </div>

          {/* Tip 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 dark:bg-red-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🧘</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  5. Maintain Proper Posture
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Sit up straight with your feet flat on the floor. Your screen should be at eye level, 
                  and your wrists should <strong className="text-red-600 dark:text-red-400">float above the keyboard</strong>, not rest on the desk. Good posture 
                  reduces fatigue, prevents strain injuries, and allows your fingers to move freely across 
                  all key rows.
                </p>
              </div>
            </div>
          </div>

          {/* Tip 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  6. Gradually Increase Difficulty
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Start with simpler exercises and only advance when you achieve <strong className="text-indigo-600 dark:text-indigo-400">85%+ accuracy</strong> consistently. 
                  Our platform offers four difficulty levels. Master each level before moving up. Jumping 
                  ahead too quickly can reinforce bad habits and slow your long-term progress.
                </p>
              </div>
            </div>
          </div>

          {/* Tip 7 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-100 dark:bg-pink-900/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  7. Track Your Progress
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Monitoring your WPM and accuracy helps you stay motivated and identify areas for improvement. 
                  Our <strong className="text-pink-600 dark:text-pink-400">session statistics</strong> show your average performance across multiple exercises. 
                  Set weekly goals and celebrate milestones—going from 30 WPM to 40 WPM is a real achievement!
                </p>
              </div>
            </div>
          </div>

          {/* Bonus Tip */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-8 border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-start gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl">⭐</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Bonus: Practice with Real Content
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our exercises include common words, sentences, and technical content to prepare you for 
                  real-world typing. The more you practice with varied content, the more adaptable your 
                  typing skills become.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expected Progress Timeline */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📅 What to Expect: Progress Timeline
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg px-4 py-2 flex-shrink-0">
                <p className="font-bold text-green-700 dark:text-green-300">Week 1-2</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Learn finger placement, type 15-25 WPM with frequent mistakes</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg px-4 py-2 flex-shrink-0">
                <p className="font-bold text-blue-700 dark:text-blue-300">Week 3-4</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Type without looking, reach 25-35 WPM with 85%+ accuracy</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg px-4 py-2 flex-shrink-0">
                <p className="font-bold text-purple-700 dark:text-purple-300">Month 2-3</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Comfortable touch typing, 35-50 WPM with good accuracy</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg px-4 py-2 flex-shrink-0">
                <p className="font-bold text-yellow-700 dark:text-yellow-300">Month 4-6</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Proficient typist, 50-70 WPM with 90%+ accuracy</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-red-100 dark:bg-red-900/30 rounded-lg px-4 py-2 flex-shrink-0">
                <p className="font-bold text-red-700 dark:text-red-300">6+ Months</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Advanced typist, 70+ WPM with excellent accuracy</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            ⌨️ Start Practicing Now
          </Link>
        </div>
      </div>
    </div>
  );
}
