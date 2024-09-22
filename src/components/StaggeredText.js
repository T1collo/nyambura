"use client";

import { motion } from "framer-motion";

const textArray = [
  "You keep persisting ",
  "on something",
];

const letterVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" }, // Delay for each letter
  }),
};

const StaggeredText = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-white space-y-10 md:space-y-20 p-4 sm:p-6 md:p-8"
    >
      {textArray.map((text, index) => (
        <motion.h1
          key={index}
          className="text-3xl sm:text-5xl md:text-[100px] font-bold" // Adjusted font sizes for different screen sizes
        >
          <div className="flex space-x-1">
            {text.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                initial="hidden"
                whileInView="visible"
                variants={letterVariants}
                custom={letterIndex} // Pass index for staggered delay
              >
                {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
              </motion.span>
            ))}
          </div>
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default StaggeredText;
