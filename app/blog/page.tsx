import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Typing Tips & Tutorials | Typing Master",
  description: "Expert tips, tutorials, and guides to help you become a faster, more accurate typist.",
};

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  icon: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "10 Keyboard Shortcuts Every Typist Should Know",
    excerpt: "Boost your productivity with these essential keyboard shortcuts that will save you hours of work time.",
    date: "2026-04-01",
    readTime: "5 min read",
    category: "Productivity",
    slug: "keyboard-shortcuts",
    icon: "⌨️",
  },
  {
    title: "The Science Behind Muscle Memory in Typing",
    excerpt: "Understanding how your brain learns to type can help you practice more effectively and speed up your progress.",
    date: "2026-03-28",
    readTime: "7 min read",
    category: "Science",
    slug: "muscle-memory-science",
    icon: "🧠",
  },
  {
    title: "Common Typing Mistakes and How to Fix Them",
    excerpt: "Are you making these common typing errors? Learn what's holding you back and how to correct it.",
    date: "2026-03-25",
    readTime: "6 min read",
    category: "Tips",
    slug: "common-typing-mistakes",
    icon: "❌",
  },
  {
    title: "Ergonomic Setup for Comfortable Typing",
    excerpt: "Prevent wrist pain and fatigue with the proper desk and keyboard setup for long typing sessions.",
    date: "2026-03-20",
    readTime: "8 min read",
    category: "Health",
    slug: "ergonomic-setup",
    icon: "🪑",
  },
  {
    title: "From 30 to 60 WPM: Real Success Stories",
    excerpt: "Read how these Typing Master users doubled their typing speed in just 3 months with consistent practice.",
    date: "2026-03-15",
    readTime: "6 min read",
    category: "Inspiration",
    slug: "success-stories",
    icon: "🏆",
  },
  {
    title: "Touch Typing vs. Hunt and Peck: Which is Better?",
    excerpt: "We compare the two main typing styles and explain why touch typing is the clear winner for productivity.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Comparison",
    slug: "touch-typing-vs-hunt-peck",
    icon: "⚖️",
  },
  {
    title: "Best Practices for Learning to Type Blind",
    excerpt: "Master the art of typing without looking at the keyboard with these proven techniques and exercises.",
    date: "2026-03-05",
    readTime: "7 min read",
    category: "Tutorial",
    slug: "learn-blind-typing",
    icon: "👁️",
  },
  {
    title: "How Typing Speed Affects Your Career",
    excerpt: "Discover why employers value fast typists and how improving your WPM can boost your job prospects.",
    date: "2026-02-28",
    readTime: "6 min read",
    category: "Career",
    slug: "typing-speed-career",
    icon: "💼",
  },
  {
    title: "5-Minute Daily Exercises for Faster Typing",
    excerpt: "Short on time? These quick daily exercises will help you make steady progress without a huge time commitment.",
    date: "2026-02-20",
    readTime: "4 min read",
    category: "Exercises",
    slug: "5-minute-exercises",
    icon: "⏱️",
  },
];

const categories = ["All", "Productivity", "Science", "Tips", "Health", "Inspiration", "Comparison", "Tutorial", "Career", "Exercises"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto py-12 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            📝 Typing Master Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Expert tips, tutorials, and insights to help you become a faster, more accurate typist
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-all shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer border border-gray-100 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{post.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">📬 Get Weekly Typing Tips</h2>
            <p className="text-purple-100 mb-6">
              Subscribe to our newsletter and receive free typing tips, exercises, and motivation directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Popular Articles Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🔥 Most Popular Articles
          </h2>
          <div className="space-y-4">
            <Link href="/blog/keyboard-shortcuts" className="flex items-start gap-4 p-4 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group">
              <span className="text-3xl">⌨️</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  10 Keyboard Shortcuts Every Typist Should Know
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  The most viewed article this month • 5 min read
                </p>
              </div>
            </Link>
            <Link href="/blog/muscle-memory-science" className="flex items-start gap-4 p-4 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group">
              <span className="text-3xl">🧠</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  The Science Behind Muscle Memory in Typing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Reader favorite • 7 min read
                </p>
              </div>
            </Link>
            <Link href="/blog/success-stories" className="flex items-start gap-4 p-4 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group">
              <span className="text-3xl">🏆</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  From 30 to 60 WPM: Real Success Stories
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Most inspiring article • 6 min read
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-10">
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
