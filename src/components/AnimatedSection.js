"use client";

import { motion } from "framer-motion";

const AnimatedSection = ({ bgColor, children }) => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <motion.div
      className={`min-h-screen flex items-center justify-center ${bgColor} p-4 sm:p-6 md:p-8`} // Added padding for different screen sizes
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: false, amount: 0.1 }} // Adjust viewport settings to trigger at 10% visibility
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
