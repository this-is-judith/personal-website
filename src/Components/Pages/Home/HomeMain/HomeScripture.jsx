import React from "react";

import ScrollingText from "./ScrollingText";

import "./homeScripture.css";

const HomeScripture = () => {
  return (
    <div className="homeScipture-container">
      <div className="scripture-square">
        <h3 className="scripture-square-text">John 3:16</h3>
      </div>

      <div className="scripture-content">
        <div className="scripture-of-the-week">
          <h3>SCRIPTURE OF THE WEEK</h3>
        </div>
        <div className="verse">
          <ScrollingText />
        </div>
      </div>
    </div>
  );
};

export default HomeScripture;
