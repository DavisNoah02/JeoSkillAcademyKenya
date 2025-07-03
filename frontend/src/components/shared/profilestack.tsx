import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useTheme } from "@/components/themeProvider"; // <- assuming this exists

export default function ProfileStack() {
  const { theme } = useTheme();

  const profiles = Array.from({ length: 2 }, (_, i) => ({
    id: i,
    gradient:
      theme === "dark"
        ? "from-blue-600 to-blue-800"
        : "from-emerald-400 to-emerald-600",
  }));

  return (
    <motion.div
      className="flex justify-center mt-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <div className="flex items-center">
        {/* Avatar Stack */}
        <div className="flex -space-x-3">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-tr ${profile.gradient} border-2 ${
                  theme === "dark" ? "border-white/30" : "border-gray-200"
                } shadow-lg flex items-center justify-center`}
              >
                <Users className="w-5 h-5 text-white" />
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity"
                initial={false}
              />
            </motion.div>
          ))}

          {/* +99 Badge */}
          <motion.div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold shadow-lg
              ${theme === "dark"
                ? "bg-white/10 border-white/20 text-white"
                : "bg-gray-100 border-gray-300 text-gray-800"}
              border-2 backdrop-blur-sm`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 }}
            whileHover={{ scale: 1.05 }}
          >
            +99
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          className="ml-6"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.3 }}
        >
          <p
            className={`text-sm md:text-base font-medium ${
              theme === "dark" ? "text-white/90" : "text-gray-900"
            }`}
          >
            Join other +99 learners
          </p>
          <p
            className={`text-xs md:text-sm ${
              theme === "dark" ? "text-white/60" : "text-gray-600"
            }`}
          >
            Already subscribed for launch updates
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
