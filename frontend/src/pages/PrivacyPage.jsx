"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "@/components/layout/Footer";



export default function PrivacyPolicy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us. This includes your name, email address, phone number, and payment information.",
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about your use of our platform, including your IP address, browser type, device information, pages visited, and time spent on our platform.",
        },
        {
          subtitle: "Educational Data",
          text: "We collect information about your learning progress, course completions, quiz scores, and other educational activities to provide personalized learning experiences.",
        },
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our educational services, process payments, and communicate with you about your account and courses.",
        },
        {
          subtitle: "Personalization",
          text: "We use your data to personalize your learning experience, recommend courses, and track your progress through our educational programs.",
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you important updates about our services, new courses, and promotional materials (which you can opt out of at any time).",
        },
      ],
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party service providers who help us operate our platform, process payments, or provide customer support.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or government request, or to protect our rights and the safety of our users.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.",
        },
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          subtitle: "Encryption",
          text: "We use industry-standard encryption to protect sensitive information during transmission and storage.",
        },
        {
          subtitle: "Access Controls",
          text: "We limit access to your personal information to employees and contractors who need it to provide our services.",
        },
      ],
    },
  ]

  return (
    <>
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto" {...fadeInUp}>
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
            <Card className="p-8 dark:bg-gray-800 dark:border-gray-700">
              <CardContent>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  At JeoSkill Academy , we are committed to protecting your privacy and ensuring
                  the security of your personal information. This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you use our Learning Management System and related services
                  (collectively, the "Service").
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  By using our Service, you agree to the collection and use of information in accordance with this
                  policy. If you do not agree with our policies and practices, please do not use our Service.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="dark:bg-gray-700 dark:border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-gray-900 dark:text-white">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.subtitle}</h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Your Rights */}
            <motion.div {...fadeInUp}>
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Access and Portability</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        You have the right to access and receive a copy of your personal data.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Correction</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        You can request correction of inaccurate or incomplete personal data.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Deletion</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        You can request deletion of your personal data in certain circumstances.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Opt-out</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        You can opt out of marketing communications at any time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Data Retention */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Data Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services and fulfill the
                    purposes outlined in this Privacy Policy. We may also retain certain information as required by law
                    or for legitimate business purposes, such as fraud prevention and safety.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* International Transfers */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">International Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Your information may be transferred to and processed in countries other than Kenya. We ensure that
                    such transfers are made in accordance with applicable data protection laws and that appropriate
                    safeguards are in place to protect your information.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-900 dark:text-white">
                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>Email:</strong> JeoSkill@gmail.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +254 729239023
                    </p>
                    <p>
                      <strong>Address:</strong> Nairobi, Kenya
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>

    <Footer/>
    </>
  )
}

