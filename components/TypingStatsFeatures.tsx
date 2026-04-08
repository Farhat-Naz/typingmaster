'use client';

import { useState, useEffect } from 'react';

interface SessionData {
  date: string;
  wpm: number;
  accuracy: number;
  difficulty: string;
}

interface KeyPerformance {
  key: string;
  errors: number;
  totalAttempts: number;
  accuracy: number;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  wpm: number;
  accuracy: number;
  date: string;
}

export default function TypingStatsFeatures() {
  const [activeTab, setActiveTab] = useState<'progress' | 'leaderboard' | 'weakkeys'>('progress');
  const [sessionHistory, setSessionHistory] = useState<SessionData[]>([]);
  const [keyPerformance, setKeyPerformance] = useState<KeyPerformance[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [playerName, setPlayerName] = useState('');

  // Load data from localStorage on mount
  useEffect(() => {
    const savedSessions = localStorage.getItem('typingSessions');
    const savedKeys = localStorage.getItem('typingKeyPerformance');
    const savedLeaderboard = localStorage.getItem('typingLeaderboard');

    if (savedSessions) {
      setSessionHistory(JSON.parse(savedSessions));
    }
    if (savedKeys) {
      setKeyPerformance(JSON.parse(savedKeys));
    }
    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard));
    }
  }, []);

  // Calculate progress stats
  const getProgressStats = () => {
    if (sessionHistory.length === 0) return null;
    
    const totalSessions = sessionHistory.length;
    const avgWPM = Math.round(sessionHistory.reduce((sum, s) => sum + s.wpm, 0) / totalSessions);
    const avgAccuracy = Math.round(sessionHistory.reduce((sum, s) => sum + s.accuracy, 0) / totalSessions);
    const bestWPM = Math.max(...sessionHistory.map(s => s.wpm));
    const bestAccuracy = Math.max(...sessionHistory.map(s => s.accuracy));
    
    // Calculate improvement (last 5 vs first 5 sessions)
    let improvement = null;
    if (sessionHistory.length >= 10) {
      const first5 = sessionHistory.slice(0, 5);
      const last5 = sessionHistory.slice(-5);
      const firstAvg = Math.round(first5.reduce((sum, s) => sum + s.wpm, 0) / 5);
      const lastAvg = Math.round(last5.reduce((sum, s) => sum + s.wpm, 0) / 5);
      improvement = lastAvg - firstAvg;
    }

    return { totalSessions, avgWPM, avgAccuracy, bestWPM, bestAccuracy, improvement };
  };

  const progressStats = getProgressStats();

  const handleSaveToLeaderboard = () => {
    if (!playerName || sessionHistory.length === 0) return;
    
    const latestSession = sessionHistory[sessionHistory.length - 1];
    const newEntry: LeaderboardEntry = {
      rank: leaderboard.length + 1,
      name: playerName,
      wpm: latestSession.wpm,
      accuracy: latestSession.accuracy,
      date: new Date().toLocaleDateString(),
    };

    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.wpm - a.wpm)
      .slice(0, 10)
      .map((entry, index) => ({ ...entry, rank: index + 1 }));

    setLeaderboard(updatedLeaderboard);
    localStorage.setItem('typingLeaderboard', JSON.stringify(updatedLeaderboard));
    setPlayerName('');
  };

  const clearAllData = () => {
    if (confirm('Are you sure you want to clear all your typing data?')) {
      localStorage.removeItem('typingSessions');
      localStorage.removeItem('typingKeyPerformance');
      localStorage.removeItem('typingLeaderboard');
      setSessionHistory([]);
      setKeyPerformance([]);
      setLeaderboard([]);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 px-4">
      {/* Feature Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Tab Headers */}
        <div className="flex border-b-2 border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex-1 px-6 py-4 font-semibold transition-all ${
              activeTab === 'progress'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            📊 Progress Tracking
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex-1 px-6 py-4 font-semibold transition-all ${
              activeTab === 'leaderboard'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            🏆 Leaderboard
          </button>
          <button
            onClick={() => setActiveTab('weakkeys')}
            className={`flex-1 px-6 py-4 font-semibold transition-all ${
              activeTab === 'weakkeys'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            🎯 Weak Key Detection
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {/* Progress Tracking Tab */}
          {activeTab === 'progress' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                📊 Your Typing Progress
              </h2>

              {!progressStats ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📈</div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No data yet. Complete some typing exercises to see your progress!
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                        {progressStats.totalSessions}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Total Sessions
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                        {progressStats.avgWPM}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Average WPM
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                        {progressStats.avgAccuracy}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Average Accuracy
                      </div>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400">
                        {progressStats.bestWPM}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Best WPM
                      </div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-red-600 dark:text-red-400">
                        {progressStats.bestAccuracy}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Best Accuracy
                      </div>
                    </div>
                    {progressStats.improvement !== null && (
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 text-center">
                        <div className={`text-4xl font-bold ${
                          progressStats.improvement >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                          {progressStats.improvement >= 0 ? '+' : ''}{progressStats.improvement}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          WPM Improvement
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Progress Chart (Simple Bar Chart) */}
                  {sessionHistory.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Recent Sessions
                      </h3>
                      <div className="space-y-3">
                        {sessionHistory.slice(-10).map((session, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="text-xs text-gray-600 dark:text-gray-400 w-20">
                              {session.date}
                            </div>
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-8 overflow-hidden relative">
                              <div
                                className="bg-gradient-to-r from-purple-500 to-blue-500 h-full flex items-center justify-end pr-2 transition-all"
                                style={{ width: `${Math.min((session.wpm / 100) * 100, 100)}%` }}
                              >
                                <span className="text-white text-xs font-bold">{session.wpm} WPM</span>
                              </div>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 w-20 text-right">
                              {session.accuracy}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Leaderboard Tab */}
          {activeTab === 'leaderboard' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                🏆 Leaderboard
              </h2>

              {/* Add to Leaderboard */}
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Add Your Score
                </h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Enter your name"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    maxLength={20}
                  />
                  <button
                    onClick={handleSaveToLeaderboard}
                    disabled={!playerName || sessionHistory.length === 0}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Score
                  </button>
                </div>
              </div>

              {/* Leaderboard Table */}
              {leaderboard.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🏆</div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No scores yet. Complete an exercise and add your score!
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Rank
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Name
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                          WPM
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Accuracy
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((entry, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-200 dark:border-gray-700 ${
                            index === 0
                              ? 'bg-yellow-50 dark:bg-yellow-900/20'
                              : index === 1
                              ? 'bg-gray-50 dark:bg-gray-800/50'
                              : index === 2
                              ? 'bg-orange-50 dark:bg-orange-900/20'
                              : ''
                          }`}
                        >
                          <td className="px-4 py-3">
                            <span className="text-2xl">
                              {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${entry.rank}`}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">
                            {entry.name}
                          </td>
                          <td className="px-4 py-3 text-purple-600 dark:text-purple-400 font-bold">
                            {entry.wpm} WPM
                          </td>
                          <td className="px-4 py-3 text-green-600 dark:text-green-400">
                            {entry.accuracy}%
                          </td>
                          <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-sm">
                            {entry.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Weak Key Detection Tab */}
          {activeTab === 'weakkeys' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                🎯 Weak Key Detection
              </h2>

              {keyPerformance.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No key data yet. Complete typing exercises to identify your weak keys!
                  </p>
                  <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 max-w-md mx-auto">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      How it works:
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      As you type, we track which keys you struggle with most. This helps you focus your practice on specific keys to improve faster.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Weak Keys Alert */}
                  {keyPerformance.filter(k => k.accuracy < 80).length > 0 && (
                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-red-700 dark:text-red-300 mb-3">
                        ⚠️ Keys Needing Improvement
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {keyPerformance
                          .filter(k => k.accuracy < 80)
                          .sort((a, b) => a.accuracy - b.accuracy)
                          .slice(0, 5)
                          .map((key, index) => (
                            <div
                              key={index}
                              className="bg-red-200 dark:bg-red-800 rounded-lg px-4 py-2 text-center"
                            >
                              <div className="text-2xl font-bold text-red-700 dark:text-red-300">
                                {key.key.toUpperCase()}
                              </div>
                              <div className="text-xs text-red-600 dark:text-red-400">
                                {key.accuracy}% accuracy
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* All Key Performance */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      All Keys Performance
                    </h3>
                    <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                      {keyPerformance.map((key, index) => (
                        <div
                          key={index}
                          className={`rounded-lg p-3 text-center ${
                            key.accuracy >= 95
                              ? 'bg-green-100 dark:bg-green-900/30'
                              : key.accuracy >= 80
                              ? 'bg-yellow-100 dark:bg-yellow-900/30'
                              : 'bg-red-100 dark:bg-red-900/30'
                          }`}
                        >
                          <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {key.key.toUpperCase()}
                          </div>
                          <div className={`text-sm font-semibold ${
                            key.accuracy >= 95
                              ? 'text-green-700 dark:text-green-400'
                              : key.accuracy >= 80
                              ? 'text-yellow-700 dark:text-yellow-400'
                              : 'text-red-700 dark:text-red-400'
                          }`}>
                            {key.accuracy}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practice Recommendations */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">
                      💡 Practice Recommendations
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Focus on keys with below 80% accuracy first</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Practice "Very Beginner" level to master individual keys</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Repeat exercises containing your weak keys</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Aim for 95%+ accuracy on all keys before advancing levels</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Clear Data Button */}
      <div className="text-center mt-6">
        <button
          onClick={clearAllData}
          className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all text-sm"
        >
          🗑️ Clear All Data
        </button>
      </div>
    </div>
  );
}
