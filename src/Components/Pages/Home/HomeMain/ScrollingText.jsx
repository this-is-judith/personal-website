import React from "react";

import "./scrollingText.css";

const ScrollingText = () => {
  const scriptureOfTheWeek =
    "For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life.";

  return (
    <svg className="animated-svg" viewBox="0 0 340 60">
      <path id="text-path" d="M0,35 H360" />
      <text className="svg-text">
        <textPath href="#text-path" startOffset="0%">
          {scriptureOfTheWeek}
          <animate
            attributeName="startOffset"
            from="100%"
            to="-350%"
            dur="25s"
            repeatCount="indefinite"
          />
        </textPath>
      </text>
    </svg>
  );
};

export default ScrollingText;
