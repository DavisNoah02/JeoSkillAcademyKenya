import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Code, Users, Trophy } from "lucide-react";
import ProfileStack from "../shared/profilestack";
import CountdownTimer from "../shared/CountdownTimer";
import Grid3D from "../shared/3DGrid";
import { useTheme } from "@/components/themeProvider";
import LaunchingSoon from "../shared/LaunchingSoon";

function FeatureHighlights() {
  const features = [
    { icon: Code, label: "Professional Skills" },
    { icon: Users, label: "Expert Mentors" },
    { icon: Trophy, label: "Certified Programs" },
  ];

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-8 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.label}
          className="flex items-center space-x-2 text-muted-foreground"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <feature.icon className="w-8 h-8 text-green-500 dark:text-green-400" />
          <span className="text-base font-medium">{feature.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function HeroLaunchSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const { theme } = useTheme();

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-4 md:px-8 ${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Gradient Overlay */}
      <motion.div
        className={`absolute inset-0 z-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-pink-900/30"
            : "bg-gradient-to-br from-blue-100 via-white to-green-100"
        }`}
        style={{ y: y1 }}
      />

      {/* 3D Background Grid */}
      <Grid3D />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Academy Tag */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-white/10 dark:bg-black/10 backdrop-blur border border-white/20 dark:border-gray-800 rounded-full px-4 py-2 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <GraduationCap className="w-5 h-5 text-green-500 dark:text-green-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-white/90">
            Everse Tech Academy
          </span>
          <GraduationCap className="w-5 h-5 text-green-500 dark:text-green-400" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400 dark:from-white dark:to-gray-300"
        >
          Learn. Grow.
          <br />
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-300 dark:to-green-300">
            Dominate.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 dark:text-white/80 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Kenya's{" "}
          <span className="font-semibold text-green-600 dark:text-green-300">
            digital gateway
          </span>{" "}
          to professional tech skills.
          <br />
          Welcome to{" "}
          <span className="font-semibold text-green-600 dark:text-green-300">
            your future of learning
          </span>{" "}
          and unlocking opportunity.
        </motion.p>

        {/* Features */}
        <FeatureHighlights />

        {/* Launching Soon CTA */}
        <div className="mt-12 mb-8">
          <LaunchingSoon />
        </div>

        {/* Countdown */}
        <motion.div className="mb-12 mt-16 flex justify-center">
          <div
            className={`
              inline-flex items-center gap-4 px-8 py-6 rounded-2xl shadow-xl border
              backdrop-blur-md
              ${theme === "dark"
                ? "bg-white/10 border-white/20 text-white"
                : "bg-white/80 border-gray-200 text-gray-900"}
            `}
          >
            <CountdownTimer />
          </div>
        </motion.div>



        {/* Profile Stack */}
        <div className="pb-8">
          <ProfileStack />
        </div>
      </motion.div>

      
    </section>
  );
}
