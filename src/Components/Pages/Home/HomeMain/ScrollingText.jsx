import React from "react";

const ScrollingText = () => {
  return (
    <svg width="360" height="70" viewBox="0 0 360 70">
      <path id="text-path-2" d="M0,35 H360" fill="none" />
      <text fill="var(--accent-one)" fontSize="20" fontFamily="Arial">
        <textPath href="#text-path-2" startOffset="0%">
          ANOTHER TEXT TO SCROLL ANOTHER TEXT TO SCROLL
          <animate
            attributeName="startOffset"
            from="100%"
            to="-100%"
            dur="10s"
            repeatCount="indefinite"
          />
        </textPath>
      </text>
    </svg>
  );
};

export default ScrollingText;
