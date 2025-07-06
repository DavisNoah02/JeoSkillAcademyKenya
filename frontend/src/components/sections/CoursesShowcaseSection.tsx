import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookOpen,
  Unlock,
  Crown,
  ChevronRight,
  Users,
  Clock,
  Award,
} from "lucide-react"
import { useTheme } from "@/components/themeProvider";
import { freeCourses, premiumCourses } from "@/data/courses"

// Course data structure
interface Course {
  title: string
  description: string
  icon: React.ElementType
  category: string
  duration?: string
  students?: string
  level: "Beginner" | "Intermediate" | "Advanced"
  features: string[]
}
// Get unique categories
const freeCategories = [...new Set(freeCourses.map((course) => course.category))]
const premiumCategories = [...new Set(premiumCourses.map((course) => course.category))]

interface CourseCardProps {
  course: Course
  index: number
  isPremium?: boolean
}

function CourseCard({ course, index, isPremium = false }: CourseCardProps) {
  const { theme } = useTheme()
  const IconComponent = course.icon

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return theme === "dark"
          ? "bg-green-900/30 text-green-300 border-green-700/50"
          : "bg-green-50 text-green-700 border-green-200"
      case "Intermediate":
        return theme === "dark"
          ? "bg-amber-900/30 text-amber-300 border-amber-700/50"
          : "bg-amber-50 text-amber-700 border-amber-200"
      case "Advanced":
        return theme === "dark"
          ? "bg-red-900/30 text-red-300 border-red-700/50"
          : "bg-red-50 text-red-700 border-red-200"
      default:
        return theme === "dark"
          ? "bg-gray-800 text-gray-300 border-gray-700"
          : "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <motion.div
      className={`relative rounded-2xl p-6 border transition-all duration-300 group overflow-hidden ${
        theme === "dark"
          ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70"
          : "bg-white/80 border-gray-200/60 hover:border-blue-300/60 hover:bg-white"
      } backdrop-blur-sm shadow-sm hover:shadow-lg`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Premium badge */}
      {isPremium && (
        <div className="absolute top-4 right-4">
          <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Crown className="w-3 h-3" />
            <span>PRO</span>
          </div>
        </div>
      )}

      {/* Free badge */}
      {!isPremium && (
        <div className="absolute top-4 right-4">
          <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Unlock className="w-3 h-3" />
            <span>FREE</span>
          </div>
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
          theme === "dark" ? "bg-gray-600" : "bg-gray-500"
        } shadow-lg`}
      >
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      {/* Category */}
      <div className={`text-xs font-medium mb-2 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
        {course.category}
      </div>

      {/* Title */}
      <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        {course.title}
      </h3>

      {/* Description */}
      <p className={`text-sm mb-4 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
        {course.description}
      </p>

      {/* Stats */}
      <div className="flex items-center space-x-4 mb-4 text-xs">
        {course.duration && (
          <div className={`flex items-center space-x-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            <Clock className="w-3 h-3" />
            <span>{course.duration}</span>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="mb-4">
        <div className="space-y-1">
          {course.features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className={`flex items-center text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            >
              <div className={`w-1 h-1 rounded-full mr-2 ${theme === "dark" ? "bg-blue-400" : "bg-blue-500"}`} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Level Badge */}
      <div className="flex items-center justify-between">
        <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getLevelColor(course.level)}`}>
          {course.level}
        </span>
        <ChevronRight
          className={`w-4 h-4 ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          } group-hover:translate-x-1 transition-transform duration-200`}
        />
      </div>
    </motion.div>
  )
}

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState<"free" | "premium">("free")
  const { theme } = useTheme()

  return (
    <section
      className={`py-20 px-6 relative overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-blue-50/30"
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-20 w-32 h-32 rounded-full border ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          } opacity-50`}
        />
        <div
          className={`absolute top-40 right-32 w-24 h-24 rounded-full border ${
            theme === "dark" ? "border-blue-800" : "border-blue-200"
          } opacity-50`}
        />
        <div
          className={`absolute bottom-32 left-1/4 w-20 h-20 rounded-full border ${
            theme === "dark" ? "border-purple-800" : "border-purple-200"
          } opacity-50`}
        />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={`inline-flex items-center space-x-2 rounded-full px-6 py-3 mb-6 border bg-gray-600 ${
              theme === "dark"
                ? "bg-gray-800/60 border-gray-700/50 backdrop-blur-sm"
                : "bg-white/60 border-blue-200/50 backdrop-blur-sm"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <BookOpen className={`w-5 h-5 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
            <span className={`text-sm font-medium ${theme === "dark" ? "text-blue-400" : "text-blue-700"}`}>
              Course Catalog
            </span>
          </motion.div>

          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${
              theme === "dark" ? "text-white" : "text-slate-600"
            }`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-300 to-emerald-500 bg-clip-text text-emerald-600">
              Expert-Led Courses
            </span>
          </h2>
          
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            className={`rounded-2xl p-2 shadow-lg border ${
              theme === "dark"
                ? "bg-gray-800/80 border-gray-700/50 backdrop-blur-sm"
                : "bg-white/80 border-gray-200/60 backdrop-blur-sm"
            }`}
          >
            <div className="grid grid-cols-2 gap-2">
              <motion.button
                className={`relative px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === "free"
                    ? "bg-gray-600 text-white shadow-lg"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("free")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Unlock className="w-5 h-5" />
                <span>🔓 Free Courses</span>
              </motion.button>

              <motion.button
                className={`relative px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === "premium"
                    ? "bg-gray-700 text-white shadow-lg"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("premium")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Crown className="w-5 h-5" />
                <span>💎 Premium Courses</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Course Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activeTab === "free"
                ? freeCourses.map((course, index) => (
                    <CourseCard key={`free-${index}`} course={course} index={index} isPremium={false} />
                  ))
                : premiumCourses.map((course, index) => (
                    <CourseCard key={`premium-${index}`} course={course} index={index} isPremium={true} />
                  ))}
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Bottom CTA */}
<motion.div
  className="text-center mt-20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
>
  <div
    className={`relative rounded-3xl p-10 shadow-2xl max-w-4xl mx-auto border overflow-hidden group transition-all duration-500 ${
      theme === "dark"
        ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/60"
        : "bg-gradient-to-br from-white to-slate-100 border-slate-200"
    } backdrop-blur-xl`}
  >
    {/* Inner Glow/Effect Layer */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-700 pointer-events-none" />

    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-center justify-center mb-3">
        <Award
          className={`w-8 h-6 ${
            theme === "dark" ? "text-purple-400" : "text-purple-600"
          } mr-4`}
        />
        <h3
          className={`text-2xl font-bold ${
            theme === "dark" ? "text-white" : "text-slate-800"
          }`}
        >
          Ready to Level Up Your{" "}
          <span
            className={`bg-clip-text text-transparent ${
              theme === "dark"
                ? "bg-gradient-to-r from-slate-300 to-gray-100"
                : "bg-gradient-to-r from-blue-600 to-emerald-500"
            }`}
          >
            Tech Career?
          </span>
        </h3>
      </div>

      <p
        className={`mb-8 text-lg leading-relaxed max-w-xl mx-auto ${
          theme === "dark" ? "text-slate-300" : "text-slate-600"
        }`}
      >
        Join thousands of students who will transform their careers with our
        comprehensive courses. Start with free courses or dive deep with premium
        content.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-12">
        <motion.button
          className="text-white px-6 py-4 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all duration-500 border border-transparent bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-green-700 hover:to-emerald-800 hover:cursor-pointer"
          whileHover={{ scale: 1.03, y: 0.3 }}
          whileTap={{ scale: 0.55 }}
        >
          Start with Free Courses
        </motion.button>
        <motion.button
          className="text-white px-8 py-4 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all duration-500 border border-transparent bg-gradient-to-r from-blue-900 to-emerald-900 hover:from-blue-700 hover:to-emerald-800 hover:cursor-pointer"
          whileHover={{ scale: 1.03, y: 0.3 }}
          whileTap={{ scale: 0.55 }}
        >
          Explore More Courses
        </motion.button>
      </div>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  )
}