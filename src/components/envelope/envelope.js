"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from './index.module.css';

const envelopeVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 } 
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, delay: 0.3 }
  },
};

const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 1 }
  },
};

const Arrow = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="arrow-icon"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className=" flex items-center justify-center p-10 font-semibold text-3xl">Tap the letter</div>
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
          <div className={styles.arrowContainer}>
            <Arrow />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
