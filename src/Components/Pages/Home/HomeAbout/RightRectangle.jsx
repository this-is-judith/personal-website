import React from "react";

function RightRectangle() {
  return (
    <svg width="400" height="200">
      <rect
        x="100"
        y="10"
        rx="5"
        ry="5"
        width="250"
        height="160"
        fill="var(--background-color)"
        stroke="var(--accent-one)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export default RightRectangle;
