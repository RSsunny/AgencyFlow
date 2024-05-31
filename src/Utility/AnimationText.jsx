"use client";
import { useEffect, useState } from "react";

const AnimationText = () => {
  const [displayText, setDisplayText] = useState("Text 1");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const textArray = ["web Developer", "Afilator", "Creator"];
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % textArray.length;
      setDisplayText(textArray[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 2000);
    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
};

export default AnimationText;
