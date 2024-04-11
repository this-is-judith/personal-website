import React from "react";

const ScrollingText = () => {
  const scriptureOfTheWeek =
    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.";

  return (
    <svg width="360" height="70" viewBox="0 0 360 70">
      <path id="text-path-2" d="M0,35 H360" />
      <text
        fill="var(--accent-one)"
        fontSize="20"
        fontFamily="var(--header-font)"
      >
        <textPath href="#text-path-2" startOffset="0%">
          {scriptureOfTheWeek}
          <animate
            attributeName="startOffset"
            from="100%"
            to="-100%"
            dur="40s"
            repeatCount="indefinite"
          />
        </textPath>
      </text>
    </svg>
  );
};

export default ScrollingText;
