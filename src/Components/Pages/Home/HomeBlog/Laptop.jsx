import React, { useState, useEffect } from "react";
import "./laptop.css";

const Laptop = () => {
  const [isScreenOn, setScreenOn] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [bootingText, setBootingText] = useState("");
  const [showTopics, setShowTopics] = useState(false);

  useEffect(() => {
    let timer;
    let bootingTimer;

    if (isScreenOn) {
      // Starts the booting animation
      let dots = 0;
      bootingTimer = setInterval(() => {
        dots = (dots + 1) % 4; // Cycles through 0, 1, 2, 3
        setBootingText(`Booting${".".repeat(dots)}`);
      }, 400); // Changes dots every 400 ms

      timer = setTimeout(() => {
        clearInterval(bootingTimer);
        setBootingText("");
        setShowWelcomeMessage(true);
        setTimeout(() => {
          setShowWelcomeMessage(false);
          setShowTopics(true);
        }, 5000); // Hides welcome and show topics after 5 seconds
      }, 3000); // Sets timeout to show welcome message after 3 seconds
    } else {
      setShowWelcomeMessage(false);
      setShowTopics(false);
      setBootingText("");
    }

    // Cleans up function to clear timers
    return () => {
      clearTimeout(timer);
      clearInterval(bootingTimer);
    };
  }, [isScreenOn]);

  const toggleScreen = () => {
    setScreenOn(!isScreenOn);
  };

  const generateKey = (keyClass = "key", keyText = "") => (
    <div className={keyClass}>{keyText}</div>
  );

  return (
    <div className="laptop">
      <div className={`screen ${isScreenOn ? "on" : ""}`}>
        <div className="camera"></div>
        {bootingText && <div className="laptop-text">{bootingText}</div>}
        {showWelcomeMessage && (
          <div className="laptop-text">Welcome, this is Judith's Blog</div>
        )}
        {showTopics && (
          <>
            <div className="search-bar">Search</div>
            <div className="topics-container">
              <div className="topic-row">
                <div className="topic-box">Faith</div>
                <div className="topic-box">Tech</div>
              </div>
              <div className="topic-row">
                <div className="topic-box">Money</div>
                <div className="topic-box">College</div>
              </div>
            </div>
          </>
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
          <div className={"power-button-container"} onClick={toggleScreen}>
            {generateKey("key power-button", `${isScreenOn ? "ON" : "OFF"}`)}
          </div>
          {generateKey()} {generateKey()}
          {generateKey("key wide-key")} {/* for ctrl */}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
