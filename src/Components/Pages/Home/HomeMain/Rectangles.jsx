import React from "react";
import ScrollingText from "./ScrollingText";

function Rectangles() {
  return (
    <svg width="600" height="370">
      <foreignObject x="200" y="210" width="360" height="50">
        <ScrollingText />
      </foreignObject>

      <rect
        x="200"
        y="270"
        rx="5"
        ry="5"
        width="360"
        height="70"
        fill="var(--header-color)"
        stroke="var(--header-text-color)"
        stroke-width="0.8"
      />
      <text
        x="380"
        y="305" // Adjust this based on the rectangle's position and height
        textAnchor="middle"
        fill="var(--header-text-color)"
        fontSize="20"
        fontFamily="Arial"
      >
        Rectangle 2
      </text>

      <rect
        x="50"
        y="210"
        rx="5"
        ry="5"
        width="140"
        height="130"
        fill="var(--header-color)"
        stroke="var(--header-text-color)"
        stroke-width="0.8"
      />
      <text
        x="120" // Center of the smaller rectangle
        y="275" // Vertically more or less in the middle of the rectangle
        textAnchor="middle"
        fill="var(--header-text-color)"
        fontSize="20"
        fontFamily="Arial"
      >
        Rectangle 3
      </text>
    </svg>
  );
}

export default Rectangles;
