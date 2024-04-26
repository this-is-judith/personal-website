import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCross } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { HiMiniCurrencyDollar } from "react-icons/hi2";

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
        }, 4000); // Hides welcome and shows topics after 4 seconds
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
          <div className="laptop-text">Welcome! This is Judith's Blog</div>
        )}
        {showTopics && (
          <div className="content-container">
            <div className="search-bar">
              <div className="search-bar-section search-bar-filter">
                <FaFilter size="12" />
              </div>

              <div className="search-bar-section search-bar-search">SEARCH</div>

              <div className="search-bar-section search-bar-glass">
                <FaMagnifyingGlass />
              </div>
            </div>

            <div className="topics-container">
              <div className="topic-row">
                <Link to="/blog" className="topic-box">
                  <div className="topic-box-section topic-box-icon">
                    <FaCross size="18" />
                  </div>
                  <div className="topic-box-section topic-box-word">Faith</div>
                </Link>

                <Link to="/blog" className="topic-box">
                  <div className="topic-box-section topic-box-icon">
                    <FaCode size="20" />
                  </div>
                  <div className="topic-box-section topic-box-word">Tech</div>
                </Link>
              </div>

              <div className="topic-row">
                <Link to="/blog" className="topic-box">
                  <div className="topic-box-section topic-box-icon">
                    <FaUniversity size="20" />
                  </div>
                  <div className="topic-box-section topic-box-word">
                    College
                  </div>
                </Link>

                <Link to="/blog" className="topic-box">
                  <div className="topic-box-section topic-box-icon">
                    <HiMiniCurrencyDollar size="20" />
                  </div>
                  <div className="topic-box-section topic-box-word">Money</div>
                </Link>
              </div>
            </div>
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
