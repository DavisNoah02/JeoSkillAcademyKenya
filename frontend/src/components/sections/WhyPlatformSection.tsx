import { motion } from "framer-motion";
import {
  X,
  ArrowRight,
  Sparkles,
  Users,
  Code,
  Trophy,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { useTheme } from "@/components/themeProvider";
import { problems, learningPath } from "@/data/whyJeoSkillData";
import { Link } from "react-router-dom";

const successMetrics = [
  { label: "Structured Curriculum", icon: BookOpen },
  { label: "Hands-on Projects", icon: Code },
  { label: "Industry Certifications", icon: Trophy },
  { label: "Career Placement", icon: Users },
];

export default function WhySkillKenya() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative py-20 px-6 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-slate-200 to-slate-100"
      }`}
    >
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[120px] z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-400/20 blur-[120px] z-0"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${
              theme === "dark" ? "text-white" : "text-slate-600"
            }`}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              JeoSkill Academy?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-400 leading-relaxed mt-4 max-w-3xl mx-auto">
            Tired of hopping from tutorial to tutorial? We give you the structure, mentorship, and skills to actually grow.
          </p>
        </motion.div>

        {/* Problem + Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Problems */}
          <motion.div
            className={`rounded-2xl p-8 border ${
              theme === "dark"
                ? "bg-slate-800/70 border-slate-700"
                : "bg-white/90 border-slate-300 shadow"
            }`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400">Learning Without Structure</h3>
            </div>

            <p className="text-slate-500 dark:text-slate-300 mb-6 text-left">
              Sound familiar? You're not alone. 87% of self-taught developers struggle with these exact challenges:
            </p>

            <div className="space-y-4">
              {problems.map((problem, idx) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={problem.title}
                    className="p-4 bg-slate-300/30 dark:bg-white/5 rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                          {problem.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm text-left leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            className={`rounded-2xl p-8 border transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-br from-blue-900/40 to-emerald-900/20 border-blue-700"
                : "bg-gradient-to-br from-blue-50 to-emerald-50 border-emerald-300 shadow-sm"
            }`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3
                className={`text-xl font-bold ${
                  theme === "dark"
                    ? "text-white"
                    : "bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
                }`}
              >
                Learning With Jeo-Skill Academy
              </h3>
            </div>

            <p
              className={`mb-6 text-left ${
                theme === "dark" ? "text-slate-200" : "text-slate-700"
              }`}
            >
              Be part of students who will successfully launch their tech careers with our structured approach:
            </p>

            <div className="space-y-4">
              {learningPath.map((solution, idx) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={solution.title}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10"
                        : "bg-white border-slate-200 shadow-sm"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 ${solution.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4
                          className={`font-semibold mb-2 ${
                            theme === "dark" ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {solution.title}
                        </h4>
                        <p
                          className={`text-sm text-left leading-relaxed ${
                            theme === "dark" ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Metrics section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl p-6 transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <ArrowRight
                className={`w-5 h-5 ${
                  theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                }`}
              />
              <h4
                className={`text-xl align-middle font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-800"
                }`}
              >
                What You Get With Our Structured Approach
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {successMetrics.map((metric) => {
                const Icon = metric.icon;

                const descriptions = {
                  "Structured Curriculum":
                    "Follow a clear, step-by-step roadmap designed to build your skills from beginner to job-ready.",
                  "Hands-on Projects":
                    "Work on real-world projects that mirror what you’ll be doing on the job.",
                  "Industry Certifications":
                    "Earn certifications recognized by top tech employers around the world.",
                  "Career Placement":
                    "Get career support including resume help, mock interviews, and job referrals.",
                };

                return (
                  <div
                    key={metric.label}
                    className="flex flex-col items-center text-center p-4 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === "dark" ? "bg-slate-800" : "bg-slate-100"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                    </div>
                    <span
                      className={`font-semibold mb-3 ${
                        theme === "dark" ? "text-slate-100" : "text-slate-800"
                      }`}
                    >
                      {metric.label}
                    </span>
                    <p
                      className={`text-sm leading-relaxed ${
                        theme === "dark" ? "text-slate-300" : "text-slate-800"
                      }`}
                    >
                      {descriptions[metric.label as keyof typeof descriptions]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            to="/contactUs"
            className={`inline-block px-6 py-3 font-semibold transition-colors duration-300 ${
              theme === "dark"
                ? "bg-emerald-500 hover:bg-emerald-600 text-slate-900"
                : "bg-emerald-600 hover:bg-emerald-700 text-white"
            }`}
          >
            Talk to Us to Learn More&rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
