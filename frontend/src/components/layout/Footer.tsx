import { motion } from "framer-motion";
import {
  Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { subscribeToNewsletter } from "@/services/newsletter";

const Footer = () => {
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
        setEmail("");
      }
      setMessage(result.message);
    } finally {
      setIsLoading(false);
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 10000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (isSubscribed) {
      const timer = setTimeout(() => setIsSubscribed(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  return (
    <footer className="relative bg-slate-900 text-white px-8 py-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(66,119,203,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />

      {/* Content grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8"
      >
        {/* Brand + Contact */}
        <div className="space-y-4  text-left">
          <h2 className="text-2xl  font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-400 to-cyan-600 bg-clip-text text-transparent">Jeo Skill</span>
            <span className="text-gray-300 ml-2">Kenya</span>
          </h2>
          <p className="text-slate-300">
            Bridging the gap in digital skills through world-class training for future-ready Kenyans.
          </p>
          <div className="flex flex-col gap-2 text-slate-400">
            <a href="mailto:jeoskill@gmail.com" className="flex items-center gap-2 hover:text-white">
              <Mail className="text-blue-400 w-5 h-5" />
              jeoskill@gmail.com
            </a>
            <a href="tel:+254729239023" className="flex items-center gap-2 hover:text-white">
              <Phone className="text-emerald-400 w-5 h-5" />
              +254 729 239 023
            </a>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="text-red-400 w-5 h-5" />
              Nairobi, Kenya
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">Company Links</h4>
          <ul className="space-y-2 text-slate-300">
            {["About Us", "Courses", "Instructors", "Blog"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">Get Help</h4>
          <ul className="space-y-2 text-slate-300">
            {["Contact Us", "Privacy Policy", "Cookies Policy", "Terms of Service"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">Subscribe</h4>
          <p className="text-slate-300">Get updates, tips, and offers directly to your inbox.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                disabled={isLoading || isSubscribed || isVerifying}
              />
              {isVerifying && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="loader h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading || isSubscribed || isVerifying}
              className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 transition text-white font-semibold py-2 rounded-md disabled:opacity-60"
            >
              {isSubscribed ? "Subscribed!" : "Join Now"}
            </button>
            {message && (
              <p className="text-sm text-center text-green-400">{message}</p>
            )}
          </form>
        </div>
      </motion.div>

      {/* Bottom section */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto px-2">
          <div>&copy; {new Date().getFullYear()} JeoSkill Academy. All rights reserved.</div>
          <div className="flex gap-6 text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-blue-400 transition" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-blue-400 transition" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-pink-400 transition" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-blue-300 transition" /></a>
            <a href="https://github.com/DavisNoah02" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="w-5 h-5 hover:text-gray-100 transition" /></a>
          </div>
          <div>
            Built with <span className="text-pink-400">❤️</span> by{" "}
            <a href="https://noa-dave.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">noa.dave</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
