"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Phone, MapPin, Clock, CheckCircle, Loader2, Send } from "lucide-react"

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

/**
 * @typedef {Object} FormData
 * @property {string} name
 * @property {string} email
 * @property {string} subject
 * @property {string} message
 */

/**
 * @typedef {Object} FormErrors
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [subject]
 * @property {string} [message]
 */

const ContactUsPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required"
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitted(true)
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setErrors({})
  }

  if (submitted) {
    return (
   
      <div className="min-h-screen bg-gradient-to-br from-blue-900/30 to-emerald-900/30 backdrop-blur-sm py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-400 mb-6">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Button onClick={resetForm} variant="outline">
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <> 
    <Navbar/>
    <div className="min-h-screen bg-white dark:bg-gray-900 py-18 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold   mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent bg-clip-text text-transparent pt-10">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 bg-gray shadow-lg">
          {/* Contact Form */}
          <div className="lg:col-span-2  ">
            <Card className="bg-gray shadow-lg  bg-gray-50 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="font-bold ">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6 ">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                    <p className="text-sm text-gray-500">Minimum 10 characters required</p>
                  </div>

                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:from-blue-600 hover:to-emerald-600 w-auto px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 ">
            <Card className="bg-gray shadow-lg  bg-gray-50 dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400">info@jeoskill.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-400">+254 700 000 000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-gray-400">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium mb-3">Business Hours</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Monday - Friday</span>
                        <span className="text-sm font-medium">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Saturday</span>
                        <span className="text-sm font-medium">10:00 AM - 6:00 PM</span>
                      </div>
                      
                    </div>
                    <div className="mt-4 p-3 bg-gray border border-green-200 rounded-lg">
                      <p className="text-sm text-green-700 font-medium">Quick Response:</p>
                      <p className="text-sm text-green-600">
                        We respond to WhatsApp messages within 30 minutes during business hours!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-green-800 text-white-600 font-medium">
              <Mail className="h-4 w-4 "  />
              <AlertDescription>
                We typically respond to all inquiries within 24 hours during business days.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    
    </>
  )
}

export default ContactUsPage
