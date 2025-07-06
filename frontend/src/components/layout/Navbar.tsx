import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/themeProvider";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/AboutUs" },
  { name: "Courses", to: "/courses" },
  { name: "Contact", to: "/ContactUs" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4
        transition-all duration-300
        backdrop-blur-md
        border-b
        ${theme === "dark"
          ? "bg-black/30 text-white border-white/10"
          : "bg-white/50 text-gray-900 border-gray-200"}
      `}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent"
        >
          JeoSkill
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-green-500 dark:text-green-400"
                    : "hover:text-green-500 dark:hover:text-green-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-inherit"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden bg-white/90 dark:bg-gray-900/90 px-6 pb-4 shadow-inner border-t border-gray-200 dark:border-gray-800`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 font-medium transition ${
                  isActive(link.to)
                    ? "text-green-500 dark:text-green-400"
                    : "text-gray-700 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
