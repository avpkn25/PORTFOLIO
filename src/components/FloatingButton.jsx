import React, { useState, useEffect, useCallback } from "react";
import { FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButton = ({ resumeUrl }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const runCycle = useCallback(() => {
    setShowTooltip(true);

    const firstDisplay = setTimeout(() => {
      setShowTooltip(false);
      setTimeout(runCycle, 4000);
    }, 5000);

    return () => clearTimeout(firstDisplay);
  }, []);

  useEffect(() => {
    const cleanup = runCycle();
    return () => cleanup();
  }, [runCycle]);

  return (
    <div className="fixed hidden md:flex bottom-6 right-8 group">
      {/* Floating Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute bottom-full right-0 mb-2 flex flex-col items-end"
          >
            {/* Tooltip Content */}
            <div className="bg-[#7127ba] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
              Click here to see my resume
            </div>
            {/* Tooltip Arrow */}
            <div className="w-full flex justify-end pr-5">
              <div className="w-3 h-3 -mt-1.5 rotate-45 bg-[#7127ba]"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => window.open(resumeUrl, "_blank", "noopener,noreferrer")}
        className="relative bg-[#7127ba] hover:bg-[#2e1452] p-3.5 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7127ba]"
        aria-label="View Resume"
      >
        <FileText className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default FloatingButton;