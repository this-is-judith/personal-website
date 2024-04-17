import React from "react";
import "./laptop.css";

const Laptop = () => {
  const generateKey = (keyClass = "key") => <div className={keyClass}></div>;

  return (
    <div className="laptop">
      <div className="screen"></div>
      <div className="keyboard">
        <div className="keyboard-row">
          {generateKey()} {generateKey()} {generateKey()} {generateKey()}
          {generateKey()} {generateKey()} {generateKey()} {generateKey()}
          {generateKey("key wide-key")} {/* Typically backspace */}
        </div>
        <div className="keyboard-row">
          {generateKey("key wide-key")} {/* Typically tab */}
          {generateKey()} {generateKey()} {generateKey()} {generateKey()}
          {generateKey()} {generateKey()} {generateKey()} {generateKey()}
          {generateKey("key wide-key")} {/* Typically enter */}
        </div>
        <div className="keyboard-row">
          {generateKey("key wide-key")} {/* Typically caps lock */}
          {generateKey()} {generateKey()} {generateKey()} {generateKey()}
          {generateKey()} {generateKey()} {generateKey()}
          {generateKey("key wide-key")} {/* Typically shift */}
        </div>
        <div className="keyboard-row">
          {generateKey("key wide-key")} {/* Typically shift */}
          {generateKey()} {generateKey()} {generateKey()}
          {generateKey("key extra-wide-key")} {/* Spacebar */}
          {generateKey()} {generateKey()} {generateKey()}
          {generateKey("key wide-key")} {/* Typically ctrl */}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
