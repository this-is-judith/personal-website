import React from "react";

function LeftRectangles() {
  return (
    <svg width="600" height="150">
      <rect
        x="120"
        y="20"
        rx="30"
        ry="30"
        width="200"
        height="65"
        fill="grey"
      />

      <rect
        x="375"
        y="20"
        rx="30"
        ry="30"
        width="200"
        height="65"
        fill="grey"
      />
    </svg>
  );
}

export default LeftRectangles;
