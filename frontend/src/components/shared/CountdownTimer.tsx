import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/themeProvider"; // your existing theme hook

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LAUNCH_DURATION_DAYS = 70;

export default function CountdownTimer() {
  const { theme } = useTheme();

  const launchStartDate = new Date("2025-07-01T00:00:00Z"); // Hardcoded start date
  const launchEndDate = new Date(launchStartDate);
  launchEndDate.setDate(launchEndDate.getDate() + LAUNCH_DURATION_DAYS);

  const totalDurationMs = launchEndDate.getTime() - launchStartDate.getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [progress, setProgress] = useState(0); // 0–100%

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const remaining = launchEndDate.getTime() - now;
      const elapsed = now - launchStartDate.getTime();

      // Clamp progress
      const progressPercent = Math.min((elapsed / totalDurationMs) * 100, 100);
      setProgress(progressPercent);

      if (remaining <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Timer Units */}
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`rounded-lg p-4 min-w-[80px] ${
                theme === "dark"
                  ? "bg-white/10 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <div className="text-3xl font-bold">
                {value.toString().padStart(2, "0")}
              </div>
              <div
                className={`text-sm capitalize ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {unit}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-lg h-2 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 via-blue-500 to-green-500"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
