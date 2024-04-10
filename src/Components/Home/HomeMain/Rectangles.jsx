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
        fill="black"
      />

      <rect x="200" y="270" rx="5" ry="5" width="360" height="70" fill="grey" />

      <rect x="50" y="210" rx="5" ry="5" width="140" height="130" fill="grey" />
    </svg>
  );
}

export default Rectangles;
