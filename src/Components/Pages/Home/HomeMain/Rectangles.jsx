import React from "react";

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
        stroke="var(--header-text-color)"
        stroke-width="0.8"
      />

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
    </svg>
  );
}

export default Rectangles;
