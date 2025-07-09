import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/themeProvider";
import { Rocket, Check, Star, Target, Users, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { betaSteps, betaBenefits } from "@/data/betaSteps";
import BetaAccessModal from "@/components/shared/BetaAccessModal";

export default function JoinBetaSection() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const isDark = theme === "dark";

  return (
    <section
      className={`py-16 px-6 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-white via-slate-50 to-slate-100"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={`inline-flex items-center space-x-2 px-4 py-2 mb-4 rounded-full ${isDark ? "bg-purple-700/10" : "bg-purple-100"}`}>
            {/* <Star className="w-5 h-5 text-purple-600" /> */}
            <span className="text-sm font-medium text-purple-600">Limited Beta Access</span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 ${isDark ? "text-white" : "text-slate-900"}`}>
            {/* <Rocket className="w-7 h-7 text-purple-500" /> */}
            Join Our <span className="bg-gradient-to-r from-blue-500 to-emerald-500 text-transparent bg-clip-text">Beta Program</span>
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Be among the first 100 learners to experience Kenya's most innovative tech academy.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`rounded-2xl p-6 shadow-md border ${
              isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-800"}`}>Beta Benefits</h3>
              </div>

              <div className="space-y-3">
                {betaBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      isDark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`rounded-2xl p-6 shadow-md border ${
              isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-800"}`}>Getting Started</h3>
              </div>

              <div className="space-y-3">
                {betaSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      isDark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
<motion.div
  className="text-center mt-12"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
>
  <div className="flex items-center justify-center space-x-2 mb-3">
    <Users className="w-6 h-6 text-purple-500" />
    <span className={`text-sm font-medium ${isDark ? "text-purple-300" : "text-purple-600"}`}>
      Join Other Beta Applicants
    </span>
  </div>

  <h3 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-800"}`}>
    Ready to Get Started?
  </h3>

  <p className={`text-base max-w-2xl mx-auto mb-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
    Join other learners who are already preparing for the future of work in Kenya.
    Apply now and become part of Kenya's tech revolution.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <motion.button
      className="text-white px-6 py-3 font-semibold  shadow-md transition-all bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsModalOpen(true)}
    >
      Apply for Beta Access
    </motion.button>

    <motion.button
      className="px-6 py-3 font-semibold  transition-all border border-slate-400 bg-gray-600 text-white hover:bg-slate-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/AboutUs")}
    >
      Learn More
    </motion.button>
  </div>
</motion.div>


      </div>
      <BetaAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
