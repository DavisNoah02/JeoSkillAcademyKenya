import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type MoreCoursesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.1, type: "spring", stiffness: 120 },
  },
};

const MoreCoursesModal: React.FC<MoreCoursesModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 dark:from-blue-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white dark:bg-slate-900 dark:border-slate-700 border border-white p-6 rounded-2xl shadow-xl w-full max-w-md mx-4"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              🚧 Courses Coming Soon!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Free learning materials and tutorials are being crafted with care. Stay tuned for exclusive early access!
            </p>
            <div className="text-right">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MoreCoursesModal;
