import React from "react";

function RightBottomRectangles() {
  return (
    <svg width="600" height="200">
      <rect
        x="55"
        y="20"
        rx="5"
        ry="5"
        width="525"
        height="40"
        fill=" var(--background-color)"
        stroke="var(--accent-one)"
        strokeWidth="0.8"
      />
      <rect
        x="55"
        y="75"
        rx="5"
        ry="5"
        width="525"
        height="100"
        fill=" var(--background-color)"
        stroke="var(--accent-one)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export default RightBottomRectangles;
