import React from "react";

const ScrollingText = () => {
  return (
    <svg width="360" height="50">
      <rect x="0" y="0" width="360" height="50" fill="var(--header-color)" />
      <path id="text-path-a" d="M360,25 H-360" fill="none" />
      <text fill="var(--header-text-color)" fontSize="20" fontFamily="Arial">
        <textPath href="#text-path-a" startOffset="0%">
          SCRIPTURE OF THE WEEK
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
