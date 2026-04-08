import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typing Tips - Improve Your Typing Skills | Typing Master",
  description: "Expert typing tips and techniques to help you type faster and more accurately.",
};

export default function TypingTipsPage() {
  const tips = [
    {
      icon: "🎯",
      title: "Practice Daily for 15-30 Minutes",
      description: "Consistency is key. Short daily practice sessions are more effective than occasional long sessions. Set aside time each day to build muscle memory.",
      color: "purple",
    },
    {
      icon: "👀",
      title: "Don't Look at the Keyboard",
      description: "Touch typing means typing without looking. Use the home row bumps (F and J keys) to orient your fingers. It takes time but dramatically improves speed.",
      color: "blue",
    },
    {
      icon: "🎯",
      title: "Focus on Accuracy First",
      description: "Speed comes naturally with practice. Focus on typing correctly first. Every mistake costs time—backspacing, correcting, and regaining your rhythm.",
      color: "green",
    },
    {
      icon: "🪑",
      title: "Maintain Proper Posture",
      description: "Sit up straight with feet flat. Screen at eye level, wrists floating above keyboard. Good posture reduces fatigue and prevents strain injuries.",
      color: "yellow",
    },
    {
      icon: "📈",
      title: "Gradually Increase Difficulty",
      description: "Master each level before moving up. Start with simpler exercises and only advance when you achieve 85%+ accuracy consistently.",
      color: "red",
    },
    {
      icon: "🧘",
      title: "Relax Your Hands and Fingers",
      description: "Tension slows you down. Keep your hands relaxed and let your fingers flow naturally across the keys. Take breaks to stretch your fingers.",
      color: "indigo",
    },
    {
      icon: "⌨️",
      title: "Learn Proper Finger Placement",
      description: "Each finger is responsible for specific keys. Place left hand on ASDF and right hand on JKL;. The index fingers rest on F and J which have small bumps.",
      color: "pink",
    },
    {
      icon: "📊",
      title: "Track Your Progress",
      description: "Monitor your WPM and accuracy. Set weekly goals and celebrate milestones. Our platform tracks session stats so you can see improvement over time.",
      color: "teal",
    },
    {
      icon: "💪",
      title: "Be Patient with Yourself",
      description: "Learning to type takes time. Don't get discouraged by slow progress. Even 5 minutes of practice daily will show results within weeks.",
      color: "orange",
    },
    {
      icon: "🎵",
      title: "Find Your Rhythm",
      description: "Try to type at a steady pace rather than bursts of speed. A consistent rhythm helps build muscle memory faster and reduces errors.",
      color: "violet",
    },
    {
      icon: "🔤",
      title: "Practice Difficult Keys",
      description: "Identify which keys you struggle with most (often Q, Z, X, P) and practice them specifically. Targeted practice speeds up overall improvement.",
      color: "cyan",
    },
    {
      icon: "⏱️",
      title: "Time Your Practice Sessions",
      description: "Use our built-in timer to track how long you practice. Aim to increase practice time gradually as your endurance improves.",
      color: "rose",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto py-12 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            🎯 Typing Tips & Techniques
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Expert advice to help you type faster, more accurately, and with less effort
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pro Tips Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl mb-10">
          <h2 className="text-3xl font-bold mb-6 text-center">⭐ Pro Tips for Rapid Progress</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">🚀 Speed Building Techniques</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• Use all 10 fingers, not just 2-3</li>
                <li>• Practice common word patterns repeatedly</li>
                <li>• Gradually increase difficulty level</li>
                <li>• Time yourself to build urgency</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">🎯 Accuracy Improvement</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• Slow down to speed up - accuracy first</li>
                <li>• Focus on trouble keys individually</li>
                <li>• Read ahead while typing current word</li>
                <li>• Review mistakes after each session</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mistakes Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ❌ Common Typing Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <span className="text-2xl">❌</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Looking at the Keyboard</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  This breaks your rhythm and slows progress. Trust your muscle memory and keep eyes on screen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <span className="text-2xl">❌</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Using Only Two Fingers</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hunt-and-peck method limits your speed potential. Learn to use all 10 fingers for maximum efficiency.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <span className="text-2xl">❌</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Rushing Before Ready</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Trying to type fast before mastering accuracy leads to bad habits. Build a solid foundation first.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="text-2xl">❌</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Inconsistent Practice</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Practicing only occasionally prevents muscle memory development. Daily practice, even 10 minutes, works best.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📚 Additional Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/improve-typing-speed" className="block p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all">
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
                📈 How to Improve Typing Speed
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Complete guide with proven strategies to increase your typing speed while maintaining accuracy.
              </p>
            </Link>
            <Link href="/blog" className="block p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
                📝 Typing Master Blog
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Expert tips, tutorials, and insights to help you become a faster, more accurate typist.
              </p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
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
