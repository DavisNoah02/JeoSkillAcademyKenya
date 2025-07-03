"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, Users, Shield } from "lucide-react"
import { Link } from "react-router-dom"
// import Footer from "@/components/layout/Footer"

export default function Terms() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const sections = [
    {
      icon: Users,
      title: "User Accounts and Registration",
      content: [
        {
          subtitle: "Account Creation",
          text: "To access certain features of our Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.",
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
        },
        {
          subtitle: "Age Requirements",
          text: "You must be at least 16 years old to use our Service. If you are under 18, you represent that you have your parent's or guardian's permission to use the Service.",
        },
      ],
    },
    {
      icon: FileText,
      title: "Use of the Service",
      content: [
        {
          subtitle: "Permitted Use",
          text: "You may use our Service for lawful purposes only and in accordance with these Terms. You agree not to use the Service in any way that could damage, disable, overburden, or impair our servers or networks.",
        },
        {
          subtitle: "Content Access",
          text: "Subject to these Terms and your payment of applicable fees, we grant you a limited, non-exclusive, non-transferable license to access and use the educational content for your personal, non-commercial use.",
        },
        {
          subtitle: "Prohibited Activities",
          text: "You may not: (a) copy, modify, or distribute our content without permission; (b) use automated systems to access the Service; (c) attempt to gain unauthorized access to our systems; or (d) engage in any activity that interferes with or disrupts the Service.",
        },
      ],
    },
    {
      icon: CreditCard,
      title: "Payment and Billing",
      content: [
        {
          subtitle: "Course Fees",
          text: "Certain courses and features require payment of fees. All fees are stated in Kenyan Shillings (KES) unless otherwise indicated. You agree to pay all applicable fees as described on our platform.",
        },
        {
          subtitle: "Payment Methods",
          text: "We accept various payment methods including mobile money (M-Pesa, Airtel Money), credit/debit cards, and bank transfers. Payment processing is handled by secure third-party payment processors.",
        },
        {
          subtitle: "Refund Policy",
          text: "We offer a 30-day money-back guarantee for premium courses. Refund requests must be made within 30 days of purchase and before completing more than 30% of the course content.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Our Content",
          text: "All content on our platform, including courses, videos, text, graphics, logos, and software, is owned by us or our licensors and is protected by copyright, trademark, and other intellectual property laws.",
        },
        {
          subtitle: "User Content",
          text: "You retain ownership of any content you submit to our platform (such as forum posts or assignments). By submitting content, you grant us a license to use, modify, and display such content in connection with our Service.",
        },
        {
          subtitle: "Copyright Infringement",
          text: "We respect intellectual property rights and expect our users to do the same. If you believe your copyright has been infringed, please contact us with details of the alleged infringement.",
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
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto" {...fadeInUp}>
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Please read these terms carefully before using our Learning Management System.
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
                  These Terms of Service ("Terms") govern your use of the E-verse Academy Learning Management System and
                  related services (collectively, the "Service") operated by Skill Kenya ("we," "our," or "us").
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part
                  of these terms, then you may not access the Service.
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

      {/* Additional Important Sections */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Disclaimers */}
            <motion.div {...fadeInUp}>
              <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-900 dark:text-white">
                    <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    Disclaimers and Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Service Availability</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      We strive to maintain continuous service availability but cannot guarantee uninterrupted access.
                      We may temporarily suspend the Service for maintenance or updates.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Educational Outcomes</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      While we provide high-quality educational content, we cannot guarantee specific learning outcomes
                      or career advancement. Success depends on individual effort and circumstances.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Limitation of Liability</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our liability is limited to the amount you paid for the Service. We are not liable for indirect,
                      incidental, or consequential damages arising from your use of the Service.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Termination */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Termination</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may terminate or suspend your account and access to the Service immediately, without prior
                    notice, if you breach these Terms. You may also terminate your account at any time by contacting us.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Upon termination, your right to use the Service will cease immediately, but provisions that by their
                    nature should survive termination will remain in effect.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Governing Law */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    These Terms are governed by and construed in accordance with the laws of Kenya. Any disputes arising
                    from these Terms or your use of the Service will be subject to the exclusive jurisdiction of the
                    courts of Kenya.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will notify you of any changes by posting
                    the new Terms on this page and updating the "Last updated" date. Your continued use of the Service
                    after any changes constitutes acceptance of the new Terms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>Email:</strong> everse@gmail.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +254 700 000 000
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
    {/* <Footer/> */}
    </>
  )
}
