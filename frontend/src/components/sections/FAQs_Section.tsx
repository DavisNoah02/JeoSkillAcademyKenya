import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useTheme } from "@/components/themeProvider";
import { faqs } from "@/data/faqs";
import { subscribeToNewsletter } from "@/services/newsletter";

export default function FAQsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme } = useTheme();

  // Newsletter states
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [message, setMessage] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setIsVerifying(true);

    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        setIsSubscribed(true);
        setEmail(""); // Clear the input
      }
      
      setMessage(result.message);
    } finally {
      setIsLoading(false);
      setIsVerifying(false);
    }
  };

  // Effect to clear message after 10 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 10000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // New: Effect to revert subscribe button after 5 seconds
  useEffect(() => {
    if (isSubscribed) {
      const timer = setTimeout(() => setIsSubscribed(false), 7000); // Revert after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      className={`relative min-h-screen overflow-hidden py-8 px-6 shadow-lg flex flex-col items-center justify-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-6">
          <HelpCircle size={40} className="text-green-400 mr-4" />
          <h2 className="text-3xl font-bold text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-center text-slate-500 dark:text-slate-300 mb-6">
          Find quick answers to common questions about Everse Academy.
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-200 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

       
        {/* FAQ Items */}
              <div className="space-y-4 max-w-3xl mx-auto mb-12">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group rounded-lg shadow-lg p-4 transition-all duration-300 bg-slate-100 dark:bg-slate-800"
                    >
                      <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400">
                        {faq.question}
                        <span className="text-teal-600 dark:text-purple-400 group-hover:text-teal-500 dark:group-hover:text-purple-300 text-xl font-bold">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))
                ) : (
                  <p className="text-center text-gray-600 dark:text-slate-400">
                    No FAQs match your search query.
                  </p>
                )}
              </div>


        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white rounded-2xl p-6 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">
              JOIN THE NEWSLETTER
            </h2>
            <p className="text-sm text-slate-200">
              Subscribe to our newsletter and never miss important updates,
              news, or offers.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full"
          >
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              {isVerifying && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <motion.button
               whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLoading || isSubscribed || isVerifying}
              className={`bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-9 py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/25 transition-all duration-500 border border-purple-400/20 ${
                isSubscribed
                  ? "bg-green-600 cursor-default"
                  : isLoading || isVerifying
                  ? "bg-blue-400 cursor-wait"
                  : "hover:cursor-pointer"
              }`}
            >
              {isVerifying
                ? "Verifying..."
                : isLoading
                ? "Subscribing..."
                : isSubscribed
                ? "Subscribed "
                : "Subscribe"}
            </motion.button>
          </form>

          {message && (
            <p
              className={`text-center text-sm ${
                message.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-center text-sm text-slate-300">
            No spam, just occasional updates. You can{" "}
            <a href="/newsletter" className="text-blue-400 underline">
              unsubscribe
            </a>{" "}
            anytime.
          </p>
        </div>
      </div>

      {/* Decorative Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />
    </section>
  );
}
