import React, { useState, useEffect } from "react";
import "./laptop.css";

const Laptop = () => {
  const [isScreenOn, setScreenOn] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [bootingText, setBootingText] = useState("");

  useEffect(() => {
    let timer;
    let bootingTimer;

    if (isScreenOn) {
      // Start the booting animation
      let dots = 0;
      bootingTimer = setInterval(() => {
        dots = (dots + 1) % 4; // Cycle through 0, 1, 2, 3
        setBootingText(`Booting${".".repeat(dots)}`);
      }, 500); // Change dots every 500 ms

      // Set timeout to show welcome message after 3 seconds
      timer = setTimeout(() => {
        clearInterval(bootingTimer); // Stop the booting animation
        setBootingText(""); // Clear booting text
        setShowWelcomeMessage(true);
      }, 4000);
    } else {
      setShowWelcomeMessage(false);
      setBootingText("");
    }

    // Cleanup function to clear timers
    return () => {
      clearTimeout(timer);
      clearInterval(bootingTimer);
    };
  }, [isScreenOn]);

  const toggleScreen = () => {
    setScreenOn(!isScreenOn);
  };

  const generateKey = (keyClass = "key") => <div className={keyClass}></div>;

  return (
    <div className="laptop">
      <div
        className={`screen ${isScreenOn ? "on" : ""}`}
        onClick={toggleScreen}
      >
        <div className="camera"></div>
        {bootingText && <div className="booting-message">{bootingText}</div>}
        {showWelcomeMessage && (
          <div className="welcome-message">
            Welcome! Judith's blog is currently under construction :D
          </div>
        )}
      </div>

      <div className="keyboard">
        <div className="keyboard-row">
          {generateKey()} {generateKey()} {generateKey()} {generateKey()}
          {generateKey()} {generateKey()} {generateKey()} {generateKey()}
          {generateKey("key wide-key")} {/* for ackspace */}
        </div>

        <div className="keyboard-row">
          {generateKey("key wide-key")} {/* for tab */}
          {generateKey()} {generateKey()} {generateKey()} {generateKey()}
          {generateKey()} {generateKey()} {generateKey()} {generateKey()}
          {generateKey("key wide-key")} {/* for enter */}
        </div>

        <div className="keyboard-row">
          {generateKey("key wide-key")} {/* for caps lock */}
          {generateKey()} {generateKey()} {generateKey()} {generateKey()}
          {generateKey()} {generateKey()} {generateKey()}
          {generateKey("key wide-key")} {/* for shift */}
        </div>

        <div className="keyboard-row">
          {generateKey("key wide-key")} {/* for shift */}
          {generateKey()} {generateKey()} {generateKey()}
          {generateKey("key extra-wide-key")} {/* for spacebar */}
          {generateKey()} {generateKey()} {generateKey()}
          {generateKey("key wide-key")} {/* for ctrl */}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
