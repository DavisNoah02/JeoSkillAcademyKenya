import { motion } from "framer-motion";
import {
  Facebook, Twitter, Instagram, Linkedin,Github, Mail, Phone, MapPin,
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
      const timer = setTimeout(() => setIsSubscribed(false), 5000); // Revert after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  return (
    <footer className="relative bg-slate-900 text-white px-8 py-6 overflow-hidden">
      {/* Radial background overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(66,119,203,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-2"
      >
        {/* Company Info */}
        <div className="space-y-4">
            <h2 className="text-2xl text-left font-bold tracking-tight mb-2">
              <span className="text-2xl text-left font-bold font-extrabold tracking-tight bg-gradient-to-r from-red-400 to-cyan-600 bg-clip-text text-transparent">Jeo Skill</span>
              <span className="text-gray-300 ml-2">Kenya</span>
            </h2>
          <p className="text-left text-md gap-3 text-slate-300">
            Bridging the gap in digital skills through world-class training for future-ready Kenyans.
          </p>

          {/* Contact Info: horizontal on small screens, vertical on md+ */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 gap-3">
            <a
              href="mailto:everse@gmail.com"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition"
            >
              <Mail className="text-blue-400 w-5 h-5" />
              <span>jeoskill@gmail.com</span>
            </a>
            <a
              href="tel:+254729239023"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition"
            >
              <Phone className="text-emerald-400 w-5 h-5" />
              <span>+254 729 239 023</span>
            </a>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="text-red-400 w-5 h-5" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 lg:text-left md:text-center text-center">
          <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">Company Links</h4>
          <ul className="space-y-2 text-slate-300">
            {["AboutUs", "Courses", "Instructors", "Blog"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4 lg:text-left md:text-center text-center">
          <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">Get Help</h4>
          <ul className="space-y-2 text-slate-300">
            {["Contact Us", "Privacy Policy", "Cookies Policy", "Terms of Service"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(/ /g, "")}`} className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4 lg:text-left md:text-center text-center">
          <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">Subscribe</h4>
          <p className="text-slate-300 mb-3">
            Get updates, tips, and offers directly to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-6">
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
                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLoading || isSubscribed || isVerifying}
              className={`bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-9 py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/25 transition-all duration-500 border border-purple-400/20  ${
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
              className={`text-sm ${
                message.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} JeoSkill Academy. All rights reserved.</p>
        <div className="flex gap-6">
          {[
            { href: "#", icon: Facebook, label: "Facebook" },
            { href: "#", icon: Twitter, label: "Twitter" },
            { href: "#", icon: Instagram, label: "Instagram" },
            { href: "#", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/DavisNoah02", icon: Github, label: "GitHub" },
          ].map(({ href, icon: Icon, label }, idx) => (
            <a key={idx} href={href} className="hover:text-white transition" title={label}>
              <Icon className="w-5 h-5" aria-label={label} />
            </a>
          ))}
        </div>
        <p>
          Built with ❤️ by{" "}
          <a
            href="https://noa-dave.vercel.app/"
            target="_blank"
            rel="noopener"
            className="text-blue-400 hover:underline"
          >
            noa.dave
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
