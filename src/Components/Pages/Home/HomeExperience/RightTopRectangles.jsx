import React from "react";

function RightTopRectangles() {
  return (
    <svg width="600" height="330">
      <rect
        x="55"
        y="20"
        rx="5"
        ry="5"
        width="240"
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
        width="240"
        height="240"
        fill=" var(--background-color)"
        stroke="var(--accent-one)"
        strokeWidth="0.8"
      />

      <rect
        x="340"
        y="20"
        rx="5"
        ry="5"
        width="240"
        height="40"
        fill=" var(--background-color)"
        stroke="var(--accent-one)"
        strokeWidth="0.8"
      />
      <rect
        x="340"
        y="75"
        rx="5"
        ry="5"
        width="240"
        height="240"
        fill=" var(--background-color)"
        stroke="var(--accent-one)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export default RightTopRectangles;
