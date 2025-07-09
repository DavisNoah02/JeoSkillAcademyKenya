import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface NotificationBannerProps {
  onDismiss: () => void;
  visible: boolean;
}

const NotificationBanner: React.FC<NotificationBannerProps> = ({ onDismiss, visible }) => {
  const location = useLocation();
  const [internalVisible, setInternalVisible] = useState(visible);

  useEffect(() => {
    setInternalVisible(true);
  }, [location.pathname]);

  const handleDismiss = () => {
    setInternalVisible(false);
    onDismiss();
  };

  return (
    <AnimatePresence>
      {internalVisible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#6a0f27] to-[#1e3a8a] text-white text-sm md:text-base py-2 px-4 font-medium flex justify-center items-center shadow"
        >
          <span>
            Empowering African Minds with Tech Skills:{" "}
            <strong className="text-teal-500">Dev Deep Dive </strong>
            <strong className="text-red-500"> Coming Soon !</strong>
          </span>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss Banner"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBanner;
