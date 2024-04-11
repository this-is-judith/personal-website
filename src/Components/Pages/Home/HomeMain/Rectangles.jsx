import React from "react";
import ScrollingText from "./ScrollingText";

function Rectangles() {
  return (
    <svg width="600" height="370">
      <rect
        x="200"
        y="210"
        rx="5"
        ry="5"
        width="360"
        height="50"
        fill="var(--header-color)"
        stroke="var(--accent-one)"
        strokeWidth="0.8"
      />
      <text
        x="380" // Approximately centered; adjust as needed
        y="240" // Adjust based on the height of the rectangle and font size
        textAnchor="middle" // Centers the text horizontally around the x coordinate
        fill="var(--header-text-color)"
        fontSize="20" // Adjust as needed
        fontFamily="Arial" // Your choice of font
      >
        Rectangle 1
      </text>

      <rect
        x="200"
        y="270"
        rx="5"
        ry="5"
        width="360"
        height="70"
        fill="var(--header-color)"
        stroke="var(--accent-one)"
        stroke-width="0.8"
      />
      {/* <text
        x="380"
        y="305"
        textAnchor="middle"
        fill="var(--accent-one)"
        fontSize="20"
        fontFamily="Arial"
      >
        Rectangle 2
      </text> */}
      <foreignObject x="200" y="275" width="360" height="70">
        <ScrollingText />
      </foreignObject>

      <rect
        x="50"
        y="210"
        rx="5"
        ry="5"
        width="140"
        height="130"
        fill="var(--header-color)"
        stroke="var(--accent-one)"
        stroke-width="0.8"
      />
      <text
        x="120"
        y="275"
        textAnchor="middle"
        fill="var(--accent-one)"
        fontSize="20"
        fontFamily="Arial"
      >
        Rectangle 3
      </text>
    </svg>
  );
}

export default Rectangles;
