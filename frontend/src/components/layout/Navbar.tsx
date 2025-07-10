import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/themeProvider";
import NotificationBanner from "./NotificationBanner";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutus" },
  { name: "Courses", to: "/more-courses" },
  { name: "Contact", to: "/contactus" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  // Case-insensitive partial match (handles routes like /aboutus/team etc)
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.toLowerCase().startsWith(path.toLowerCase());
  };
  

  const offsetTop = bannerDismissed ? "top-0" : "top-[2.5rem]";

  return (
    <>
      <NotificationBanner
        visible={!bannerDismissed}
        onDismiss={() => setBannerDismissed(true)}
      />

      <header
        className={`fixed ${offsetTop} left-0 w-full z-40 px-6 md:px-12 py-4
        transition-all duration-300 backdrop-blur-md border-b
        ${theme === "dark"
          ? "bg-black/30 text-white border-white/10"
          : "bg-gray-100 text-gray-700 border-gray-200"}`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/favicon.png" alt="JeoSkill Logo" className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-red-400 to-cyan-600 bg-clip-text text-transparent">
              JeoSkill
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className={`text-sm font-medium transition-all duration-200 relative ${
                    isActive(link.to)
                      ? "text-teal-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-teal-300"
                      : "hover:text-teal-300 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[2px] hover:after:bg-teal-300"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/academy"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 text-center font-semibold px-4 py-2 rounded-full shadow-md transition-all duration-300 border-1 
                          bg-teal-700 text-white hover:bg-transparent hover:text-teal-800 border-teal-700
                          dark:bg-teal-500 dark:text-slate-900 dark:hover:bg-transparent dark:hover:text-teal-300 dark:border-teal-400"
              >
                JEO ACADEMY
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white/90 dark:bg-gray-900/90 px-6 pb-4 shadow-inner border-t border-gray-200 dark:border-gray-800"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 font-medium transition-all relative ${
                    isActive(link.to)
                      ? "text-teal-300"
                      : "text-gray-700 hover:text-teal-300 dark:text-gray-300 dark:hover:text-teal-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/academy"
                onClick={() => setMenuOpen(false)}
                className="block mt-3 text-center font-semibold px-4 py-2 bg-gradient-to-r from--200 to-teal-400 text-black rounded-full shadow-md transition-all duration-300 hover:bg-transparent hover:text-teal-300 border-2 border-teal-300"
              >
                JEO ACADEMY
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
