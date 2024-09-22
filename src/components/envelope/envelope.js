"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import styles from './index.module.css'; // Import the CSS module

const envelopeVariants = {
  hidden: { opacity: 0, scale: 0.5 }, // Start hidden and scaled down
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 } 
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and slightly moved down
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, delay: 0.3 } // Delay for the letter to appear
  },
};

const backgroundVariants = {
  hidden: { opacity: 0 }, // Start background hidden
  visible: { 
    opacity: 1, 
    transition: { duration: 1 } // Fade in duration for the background
  },
};

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <motion.div
        className={styles.background}
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      ></motion.div>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={envelopeVariants}
      >
        <div 
          className={`${styles['envelope-wrapper']} ${isOpen ? styles.flap : ''}`} 
          onClick={handleEnvelopeClick}
        >
          <motion.div 
            className={styles.envelope}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={letterVariants}
          >
            <div className={styles.letter}>
              <motion.div
                className={styles.text}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={letterVariants}
              >
                <strong>Dear Person.</strong>
                <p>
                  Every moment with you is a treasure. You light up my days and fill my heart with joy. 
                  I am so grateful to have you in my life. I love you more than words can say.
                  So please be my forever🥺
                </p>
              </motion.div>
            </div>
          </motion.div>
          <div className={styles.heart}></div>
        </div>
      </motion.div>
    </div>
  );
}
