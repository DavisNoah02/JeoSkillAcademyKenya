import React, { useEffect, useState } from "react";

export default function LoaderWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (isLoading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsLoading(false), 500); // Short delay after 100%
            return 100;
          }
          return prev + Math.floor(Math.random() * 20) + 10; // Faster increments
        });
      }, 200); // Faster interval
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-emerald-50 to-white dark:from-gray-900 dark:via-blue-950 dark:to-emerald-950 z-50">
        {/* Spinner */}
        <div className="relative w-20 h-20 mb-8">
          <div className="absolute inset-0 rounded-full border-[6px] border-dashed border-emerald-500 animate-spin"></div>
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500 dark:from-emerald-600 dark:to-blue-800 blur-sm opacity-80"></div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 text-center animate-pulse">
          Welcome to <span className="text-blue-600 dark:text-blue-400">JEO Skill Academy</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xltext-base sm:text-lg text-slate-600 dark:text-slate-300 text-center">
          Setting up your learning space...
        </p>

        {/* Dynamic Progress Bar */}
        <div className="w-64 mt-8 h-2 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
          <div
            className={`h-full transition-all duration-200 ease-out ${
              progress === 100 ? "bg-gradient-to-r from-emerald-400 to-blue-500" : "bg-gradient-to-r from-gray-400 to-gray-500 animate-pulse"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* % Text */}
        <div className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-medium tracking-wide">
          {progress < 100 ? `${progress}%` : "Ready!"}
        </div>
      </div>
    );
  }

  return children;
}
