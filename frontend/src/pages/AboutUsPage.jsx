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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-16">

      
        {/* Hero Section */}
        <motion.section
          className="relative overflow-hidden py-30 px-6 min-h-[80vh] flex items-center justify-center text-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center lazyload"
              style={{
                // Use the uploaded image directly as the background
                backgroundImage: `url('JeoStudents.jpg')`, 
              }}
            />
            <div className="absolute inset-0 bg-gray-900/60" />
          </div>

          
          <div className="container mx-auto max-w-4xl relative z-10"> 
            {/* Centered Text Block */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"> 
                Who we are?
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-5xl mx-auto text-center"> 
             The Creation of JeoSkill Academy right here in Kenya, our story began with a deep conviction: that technology, when harnessed for good, can profoundly transform lives across our continent.
              </p>
              <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-3xl mx-auto text-center">
            Our goal is not just to teach; it's to empower a generation. By breaking down barriers to quality tech education, we are enabling young Kenyans, and eventually young Africans across the continent, to thrive in a competitive global economy, driving innovation, and contributing to the sustainable betterment of our societies.
              </p>
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
                    <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed text-left">
                      To democratize future-ready tech and professional education across Africa by implementing and evaluating AI-driven adaptive learning platforms that personalize instruction in core subjects for tertiary students, empowering them to overcome educational barriers and achieve proficiency, thereby contributing to national development and innovation
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
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Our Belief</h3>
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed text-left">
                      To be Africa's most trusted edtech platform — To lead in bridging educational disparities and fostering a globally competitive workforce in Africa through accessible, personalized, and technology-driven learning solutions.
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
                  Founded by <span className="font-semibold text-emerald-200">Lee Emmanuel</span>, <span className="font-semibold text-emerald-200">Noah Dave</span>, and their team, a team of Kenyan educators, developers, and community builders, JeoSkill Academy was born out of the
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
                      We continuously innovate our teaching methods, incorporating the latest technologies and  
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


          {/* Our Team */}
              {/* <motion.section
                className="py-16"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div className="text-center mb-12" variants={fadeInUp}>
                  <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Meet the Team</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    The passionate minds behind JeoSkill Academy
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((_, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="p-6 border-0 shadow-lg bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 text-center">
                        <CardContent className="p-0">
                          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                            <img
                              src={`/${index + 1}.jpg`} // Upload and name your images as team1.jpg, team2.jpg, team3.jpg
                              alt={`Team member ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">Name Placeholder</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">Role Placeholder</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section> */}


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
                    "I enrolled in JeoSkill Frontend Bootcamp and within 6 months, I was freelancing and supporting my family. The mentorship made all the difference.",
                  author: "Faith Wanjiku",
                  location: "Nairobi, Kenya",
                  role: "Frontend Developer",
                },
                {
                  quote:
                    "As a working mom, flexibility mattered. Jeo Skill helped me upskill without quitting my job — and I got certified too!",
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
