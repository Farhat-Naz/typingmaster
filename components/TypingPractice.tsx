'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface TypingStats {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  totalChars: number;
  errors: number;
}

const EXERCISES = {
  verybeginner: [
    "a s d f j k l ; a s d f j k l ; a s d f j k l ; a s d f j k l ; a s d f j k l",
    "q w e r t y u i o p q w e r t y u i o p q w e r t y u i o p q w e r t y u i o p",
    "z x c v b n m , . / z x c v b n m , . / z x c v b n m , . / z x c v b n m , . /",
    "a a a a s s s s d d d d f f f f j j j j k k k k l l l l ; ; ; ;",
    "q q q q w w w w e e e e r r r r t t t t y y y y u u u u i i i i o o o o p p p p",
  ],
  beginner: [
    "the be to of and a in that have i it for not on with he as you do at this but his by from they we say her she or an will my one all would there their what",
    "when up out if about who get which go me make can like time no just him know take people into year your good some could them see other than then now look only come its over think also back after use two how our way even because any these give day most us",
    "she would could should what when where which who whom whose why how all each every both few more most other some such only own same so than too very just also still already always never ever often sometimes usually maybe perhaps probably certainly definitely",
    "here are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which do not look even slightly believable",
    "if you are going to use a passage of lorem ipsum you need to be sure there is not anything embarrassing hidden in the middle of text all the lorem ipsum generators on the internet tend to repeat predefined chunks as necessary",
  ],
  intermediate: [
    "the quick brown fox jumps over the lazy dog. pack my box with five dozen liquor jugs. how vexingly quick daft zebras jump. the five boxing wizards jump quickly.",
    "programming is the art of telling another human what one wants the computer to do. it is better to solve one problem five different ways than to solve five problems one way.",
    "the best way to learn to type is to practice regularly and focus on accuracy before speed. muscle memory develops over time with consistent effort and proper technique.",
    "touch typing means using all ten fingers without looking at the keyboard. this skill takes weeks to master but pays off tremendously in productivity and efficiency throughout your career.",
    "keyboards are arranged in the qwerty layout named after the first six letters on the top row. this design was created to prevent typing jams on mechanical typewriters by separating commonly used letter pairs.",
  ],
  advanced: [
    "typescript provides static typing which helps catch errors during development. javascript runtime environments execute code asynchronously. modern frameworks enable reactive user interfaces with component-based architecture.",
    "sophisticated algorithms optimize data structures for efficient retrieval. parallel processing distributes computational load across multiple processors. cryptographic protocols secure digital communications against unauthorized access.",
    "machine learning models require extensive training data and computational resources. neural networks simulate biological brain structures to recognize patterns. deep learning architectures have revolutionized computer vision and natural language processing.",
    "distributed systems coordinate multiple servers to handle massive traffic loads. load balancers distribute requests across backend services. caching layers reduce database query pressure and improve response times significantly.",
    "functional programming emphasizes immutable data and pure functions without side effects. declarative paradigms describe what should be computed rather than how to compute it. monads provide elegant solutions for handling complex computational patterns.",
  ],
};

export default function TypingPractice() {
  const [difficulty, setDifficulty] = useState<string>('verybeginner');
  const [currentText, setCurrentText] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 100,
    correctChars: 0,
    incorrectChars: 0,
    totalChars: 0,
    errors: 0,
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [exerciseCount, setExerciseCount] = useState<number>(0);
  const [sessionStats, setSessionStats] = useState({
    totalExercises: 0,
    averageWPM: 0,
    averageAccuracy: 0,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const loadNewExercise = useCallback((diff: string) => {
    const exercises = EXERCISES[diff as keyof typeof EXERCISES];
    const randomIndex = Math.floor(Math.random() * exercises.length);
    setCurrentText(exercises[randomIndex]);
    setUserInput('');
    setStartTime(null);
    setIsComplete(false);
    setCurrentIndex(0);
    setStats({
      wpm: 0,
      accuracy: 100,
      correctChars: 0,
      incorrectChars: 0,
      totalChars: 0,
      errors: 0,
    });
    setExerciseCount(prev => prev + 1);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  useEffect(() => {
    loadNewExercise(difficulty);
  }, [difficulty, loadNewExercise]);

  const calculateStats = useCallback((input: string, text: string, time: number): TypingStats => {
    let correctChars = 0;
    let incorrectChars = 0;
    
    for (let i = 0; i < input.length; i++) {
      if (i < text.length) {
        if (input[i] === text[i]) {
          correctChars++;
        } else {
          incorrectChars++;
        }
      }
    }

    const totalChars = input.length;
    const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;
    
    // WPM calculation: (characters / 5) / (time in minutes)
    const timeInMinutes = time / 60000;
    const wpm = timeInMinutes > 0 ? Math.round((correctChars / 5) / timeInMinutes) : 0;

    return {
      wpm,
      accuracy,
      correctChars,
      incorrectChars,
      totalChars,
      errors: incorrectChars,
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (!startTime && value.length > 0) {
      setStartTime(Date.now());
    }

    if (isComplete) return;

    setUserInput(value);
    setCurrentIndex(value.length);

    if (startTime) {
      const timeElapsed = Date.now() - startTime;
      const newStats = calculateStats(value, currentText, timeElapsed);
      setStats(newStats);
    }

    if (value.length === currentText.length) {
      setIsComplete(true);
      const finalTime = Date.now() - (startTime || Date.now());
      const finalStats = calculateStats(value, currentText, finalTime);
      setStats(finalStats);

      // Update session stats
      setSessionStats(prev => ({
        totalExercises: prev.totalExercises + 1,
        averageWPM: prev.totalExercises === 0
          ? finalStats.wpm
          : Math.round((prev.averageWPM * prev.totalExercises + finalStats.wpm) / (prev.totalExercises + 1)),
        averageAccuracy: prev.totalExercises === 0
          ? finalStats.accuracy
          : Math.round((prev.averageAccuracy * prev.totalExercises + finalStats.accuracy) / (prev.totalExercises + 1)),
      }));
    }
  };

  const handleRestart = () => {
    loadNewExercise(difficulty);
  };

  const handleDifficultyChange = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
    loadNewExercise(newDifficulty);
  };

  const getCharClassName = (index: number) => {
    if (index < currentIndex) {
      return userInput[index] === currentText[index]
        ? 'text-green-600 dark:text-green-400'
        : 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900';
    }
    if (index === currentIndex) {
      return 'bg-blue-200 dark:bg-blue-800 animate-pulse';
    }
    return 'text-gray-400 dark:text-gray-600';
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          ⌨️ Typing Master
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Master your typing speed and accuracy
        </p>
      </div>

      {/* Difficulty Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {[
          { level: 'verybeginner', label: '🌱 Very Beginner', color: 'green' },
          { level: 'beginner', label: '📘 Beginner', color: 'blue' },
          { level: 'intermediate', label: '📗 Intermediate', color: 'yellow' },
          { level: 'advanced', label: '📕 Advanced', color: 'red' },
        ].map(({ level, label }) => (
          <button
            key={level}
            onClick={() => handleDifficultyChange(level)}
            className={`px-5 py-2 rounded-lg font-semibold transition-all text-sm ${
              difficulty === level
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Stats Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.wpm}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">WPM</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.accuracy}%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">{stats.correctChars}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Correct</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg text-center">
          <div className="text-3xl font-bold text-red-600 dark:text-red-400">{stats.errors}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Errors</div>
        </div>
      </div>

      {/* Session Stats */}
      {sessionStats.totalExercises > 0 && (
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-xl p-4 mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{sessionStats.totalExercises}</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Exercises Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{sessionStats.averageWPM}</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Avg WPM</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">{sessionStats.averageAccuracy}%</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Avg Accuracy</div>
            </div>
          </div>
        </div>
      )}

      {/* Typing Area */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6">
        <div className="mb-6">
          <div className="text-xl leading-relaxed font-mono tracking-wide">
            {currentText.split('').map((char, index) => (
              <span key={index} className={getCharClassName(index)}>
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          disabled={isComplete}
          className="w-full px-4 py-3 text-lg font-mono border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none bg-gray-50 dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Start typing here..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {/* Progress Bar */}
        <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-full transition-all duration-300"
            style={{ width: `${(currentIndex / currentText.length) * 100}%` }}
          />
        </div>

        {/* Completion Message */}
        {isComplete && (
          <div className="mt-6 p-4 bg-green-100 dark:bg-green-900 rounded-lg text-center">
            <p className="text-green-800 dark:text-green-200 font-semibold text-lg">
              🎉 Exercise Complete!
            </p>
            <p className="text-green-700 dark:text-green-300 mt-2">
              WPM: <strong>{stats.wpm}</strong> | Accuracy: <strong>{stats.accuracy}%</strong>
            </p>
            <p className="text-green-600 dark:text-green-400 mt-2 text-sm">
              Click "New Exercise" to continue practicing
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleRestart}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          🔄 New Exercise
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-12 bg-blue-50 dark:bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-3">📋 How to Use</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span><strong>Very Beginner:</strong> Start here if you've never typed before - practice single letters and repeated keys</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span><strong>Beginner:</strong> Common words and short phrases to build your foundation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span><strong>Intermediate:</strong> Full sentences and paragraphs to improve speed</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span><strong>Advanced:</strong> Technical content for experienced typists</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>Click on the input field and start typing the text above</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>Green characters are correct, red characters are incorrect</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>Track your WPM, accuracy, and errors in real-time</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>Click "New Exercise" to get a new typing challenge</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
