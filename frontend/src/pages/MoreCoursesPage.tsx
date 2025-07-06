import React from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, AlarmClock, Sparkles,Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MoreCoursesPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-100 dark:from-slate-600 dark:via-slate-800 dark:to-slate-700 transition-colors duration-500 px-6 py-20">
      <motion.div
        className="max-w-3xl w-full bg-slate-200 dark:bg-slate-900 border border-emerald-100 dark:border-slate-700 rounded-3xl shadow-xl p-10 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative Glow */}
        <motion.div
          className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-200 to-blue-300 dark:from-emerald-600 dark:to-blue-700 opacity-30 blur-2xl z-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Header */}
        <div className="relative z-10 text-center">
          <motion.div
            className="inline-flex items-center justify-center bg-emerald-100 dark:bg-emerald-700/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full mb-4 text-sm font-semibold shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <AlarmClock className="w-4 h-4 mr-2" />
            Courses Launching Soon
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            🚧 More Courses Are Coming Your Way!
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
            We’re working hard behind the scenes to bring you more high-quality, expert-led courses.
            Stay tuned for powerful content that helps you level up faster and smarter.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8 text-center relative z-10">
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-800/30">
            <BookOpenCheck className="w-6 h-6 mx-auto text-blue-500 dark:text-blue-300 mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-300">Taught by Industry Pros</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-800/30">
            <Code className="w-6 h-6 mx-auto text-emerald-500 dark:text-emerald-300 mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-300">Hands-On Learning, Not Just Theory</p>
          </div>
          <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-800/30">
            <AlarmClock className="w-6 h-6 mx-auto text-indigo-500 dark:text-indigo-300 mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-300">Launching in Just a Few Weeks</p>
          </div>
        </div>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-emerald-700 transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </motion.button>
          
        </div>
      </motion.div>
    </section>
  );
}
