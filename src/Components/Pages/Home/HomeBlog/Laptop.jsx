import React, { useState } from "react";
import "./laptop.css";

const Laptop = () => {
  const [isScreenOn, setScreenOn] = useState(false); // State to toggle screen on/off
  const generateKey = (keyClass = "key") => <div className={keyClass}></div>;

  // Function to toggle screen on/off
  const toggleScreen = () => {
    setScreenOn(!isScreenOn);
  };

  return (
    <div className="laptop">
      <div
        className={`screen ${isScreenOn ? "on" : ""}`}
        onClick={toggleScreen}
      >
        <div className="camera"></div>
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
