"use client";

import { useState, useRef, useEffect } from "react";

export default function Final() {
  const [isMounted, setIsMounted] = useState(false); // Ensure rendering only after mounting
  const [noButtonPosition, setNoButtonPosition] = useState({ left: "0px", top: "0px" });
  const containerRef = useRef(null);

  const nextPage = () => {
    window.location.href = "/yes"; // Navigate to the "yes" route or page
  };

  const moveButton = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      const buttonWidth = 100; // Approximate button width
      const buttonHeight = 50; // Approximate button height

      // Calculate new random position within the container
      const x = Math.random() * (containerWidth - buttonWidth);
      const y = Math.random() * (containerHeight - buttonHeight);

      setNoButtonPosition({ left: `${x}px`, top: `${y}px` });
    }
  };

  // Mark the component as mounted after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Move the button only after the component has mounted
  useEffect(() => {
    if (isMounted) {
      moveButton();
    }
  }, [isMounted]);

  // Render nothing until the component has mounted on the client
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-gray-100 relative"
      ref={containerRef} // Reference the container
    >
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center">Do you wanna go out with me?</h1>
        <h1 className="text-4xl font-bold mb-8 text-center">Are you free tomorrow?</h1>
      </div>
      <div className="mb-8">
        <img
          className="rounded-lg shadow-md"
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className="flex space-x-4 relative">
        <button
          className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          onClick={nextPage}
        >
          Yes
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white font-bold rounded absolute"
          onMouseOver={moveButton}
          style={{ ...noButtonPosition, position: "absolute" }}
        >
          No
        </button>
      </div>
    </div>
  );
}
