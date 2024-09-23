"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StaggeredText from '@/components/StaggeredText';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import Image from "next/image"; // Move this line to the top

const sentences = [
  "got me thinking!",
  "Why don't I give you",
  "a placeholder",
  "in my own little",
  "special way",
  "in my own little ",
  "Before we get the cake",
  "Hope you don't mind",
  "Hope you like it",
  "So enough of the words",
  "This's nervous",
  "What I want to ask is",
];

const sectionColors = [
  "bg-gradient-to-br from-blue-600 to-blue-400",
  "bg-gradient-to-br from-green-600 to-green-400",
  "bg-gradient-to-br from-yellow-600 to-yellow-400",
  "bg-gradient-to-br from-red-600 to-red-400",
  "bg-gradient-to-br from-purple-600 to-purple-400",
  "bg-gradient-to-br from-pink-600 to-pink-400",
  "bg-gradient-to-br from-indigo-600 to-indigo-400",
  "bg-gradient-to-br from-teal-600 to-teal-400",
  "bg-gradient-to-br from-orange-600 to-orange-400",
  "bg-gradient-to-br from-gray-600 to-gray-400",
  "bg-gradient-to-br from-lime-600 to-lime-400",
  "bg-gradient-to-br from-lime-600 to-lime-400",
];

export default function Home() {
  const noButtonRef = useRef(null);

  const nextPage = () => {
    window.location.href = "/yes"; // Redirect to the Yes page
  };

  const moveButton = () => {
    const button = noButtonRef.current;
    if (button) {
      const x = Math.random() * (window.innerWidth - button.offsetWidth - 85);
      const y = Math.random() * (window.innerHeight - button.offsetHeight - 48);
      button.style.position = 'absolute'; // Ensure the button is positioned absolutely
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
    }
  };

  useEffect(() => {
    const button = noButtonRef.current;
    button.addEventListener('mouseover', moveButton);

    return () => {
      button.removeEventListener('mouseover', moveButton);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.5 } 
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: i * 0.05,
        ease: "easeOut" 
      }
    }),
  };

  return (
    <main className="text-white">
      <StaggeredText />
      {sentences.map((sentence, index) => (
        <AnimatedSection key={index} bgColor={sectionColors[index]}>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center p-4 sm:p-6 md:p-8"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: false }}
          >
            <div className="flex justify-center space-x-1">
              {sentence.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial="hidden"
                  whileInView="visible"
                  variants={letterVariants}
                  custom={letterIndex}
                >
                  {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
                </motion.span>
              ))}
            </div>
          </motion.h2>
        </AnimatedSection>
      ))}
      
      <div className="h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-700 to-gray-500 p-2 sm:p-4">
        <div className="hover:scale-110 duration-300">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center hover:animate-smooth-bounce ">
            🥺🥺🥺Will you be my Girlfriend🥺🥺🥺
          </h1>
          <div className="mb-6 bg-gray-400 rounded-lg shadow-md">
            <Image
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
              alt="Cute animated illustration"
              width={320} // Adjust the width as needed
              height={240} // Adjust the height as needed
            />
          </div>
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <Link href="/yes">
            <button className="px-3 py-2 sm:px-4 sm:py-2 w-16 md:w-20 bg-green-500 text-white font-bold rounded hover:bg-blue-400 hover:scale-150 duration-300">
              Yes
            </button>
          </Link>
          <button
            ref={noButtonRef}
            className="px-3 py-2 sm:px-4 sm:py-2 w-16 md:w-20 bg-red-500 text-white font-bold rounded"
            onMouseOver={moveButton}
          >
            No
          </button>
        </div>
      </div>
    </main>
  );
}
