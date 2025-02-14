import React, { useState, useEffect } from "react";
import "../styles/Typewriter.scss";

const TypewriterText = ({ text, speed = 100, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
        if (onComplete) setTimeout(onComplete, 500); // Add delay before triggering flowers
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <div className="typewriter-container">
      <h1 className="typewriter">{displayedText || "\u00A0"}</h1> {/* Prevent "undefined" */}
    </div>
  );
};

export default TypewriterText;
