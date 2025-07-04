"use client"

import {
  Award,
  Users,
  Globe,
  Heart,
  BookOpen,
  Target,
  Lightbulb,
  TrendingUp,
  Quote,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AboutUs() {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section */}
        <motion.section
          className="relative overflow-hidden py-18 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 dark:from-blue-400/5 dark:to-emerald-400/5" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div className="text-center mb-16" variants={fadeInUp} initial="initial" animate="animate">
              <motion.div
                className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" />
                Tech Build in KENYA
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent bg-clip-text text-transparent mb-6">
                E-verse Skool
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Empowering Africa's next generation of digital innovators through world-class, accessible online education
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                { number: "100+", label: "Active Learners", icon: Users, color: "blue" },
                { number: "50+", label: "Success Stories", icon: Globe, color: "green" },
                { number: "10+", label: "Expert Instructors", icon: Award, color: "purple" },
                { number: "110+", label: "Courses Available", icon: BookOpen, color: "orange" },
              ].map((stat, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center p-6 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div
                        className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}
                      >
                        <stat.icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                      </div>
                      <div className={`text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2`}>
                        {stat.number}
                      </div>
                      <div className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <div className="container mx-auto px-6 max-w-6xl">
          {/* Mission & Vision */}
          <motion.section
            className="py-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Our Purpose & Vision</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Driven by passion, guided by purpose, and committed to excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="h-full p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Our Mission</h3>
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                      To democratize access to world-class tech and professional education by building an inclusive and
                      engaging digital learning ecosystem tailored for African learners.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full p-8 border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Our Vision</h3>
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                      To be Africa's most trusted edtech platform — empowering the next generation of developers,
                      innovators, and digital leaders through future-ready education.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Our Story */}
          <motion.section
            className="py-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">Our Story</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Founded by Kenyan educators, developers, and community builders, E-verse Academy was born out of the
                  need to close Africa's digital skills gap. Our team is committed to delivering hands-on, locally
                  relevant, and globally recognized online education.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  We believe that quality education should be accessible to everyone, regardless of their location or
                  economic background. That's why we've built a platform that works even in low-connectivity areas and
                  offers flexible payment options.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl transform rotate-3"></div>
                <Card className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="w-8 h-8 text-yellow-500" />
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Innovation at Heart</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      We continuously innovate our teaching methods, incorporating the latest technologies and pedagogical
                      approaches to ensure our students receive the best possible learning experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* What Sets Us Apart */}
          <motion.section
            className="py-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">What Makes Us Unique</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                We're not just another online learning platform. Here's what sets us apart
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Project-Based Learning",
                  description: "Localized curriculum aligned with African job markets and real-world projects",
                },
                {
                  icon: Globe,
                  title: "Mobile-First Design",
                  description: "Full mobile accessibility and downloadable content for low-connectivity areas",
                },
                {
                  icon: Users,
                  title: "Community Support",
                  description: "Mentorship, peer learning, and gamified learning paths that keep you engaged",
                },
                {
                  icon: Award,
                  title: "Industry Recognition",
                  description: "Career-aligned certifications and job-readiness tracks recognized by employers",
                },
                {
                  icon: Heart,
                  title: "Affordable Access",
                  description: "Inclusive pricing and financial aid programs to make education accessible",
                },
                {
                  icon: Sparkles,
                  title: "Cutting-Edge Content",
                  description: "Always up-to-date curriculum covering the latest technologies and trends",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full p-6 border-0 shadow-lg bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{feature.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials */}
          <motion.section
            className="py-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Success Stories</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Hear from our community of learners who have transformed their careers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "I enrolled in E-verse's Frontend Bootcamp and within 6 months, I was freelancing and supporting my family. The mentorship made all the difference.",
                  author: "Faith Wanjiku",
                  location: "Nairobi, Kenya",
                  role: "Frontend Developer",
                },
                {
                  quote:
                    "As a working mom, flexibility mattered. E-verse helped me upskill without quitting my job — and I got certified too!",
                  author: "Lydia Chebet",
                  location: "Eldoret, Kenya",
                  role: "Full-Stack Developer",
                },
              ].map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-8 border-0 shadow-lg bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <Quote className="w-8 h-8 text-blue-500 mb-4" />
                      <p className="text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-slate-800 dark:text-slate-100">{testimonial.author}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">
                            {testimonial.role} • {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            className="py-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            
          </motion.section>
        </div>
      </div>
      <Footer />
    </>
  )
}
