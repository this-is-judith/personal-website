import React from "react";

function Rectangles() {
  return (
    <svg width="600" height="720">
      <rect
        x="200"
        y="560"
        rx="5"
        ry="5"
        width="360"
        height="50"
        fill="blacK"
      />

      <rect x="200" y="620" rx="5" ry="5" width="360" height="70" fill="grey" />

      <rect x="50" y="560" rx="5" ry="5" width="140" height="130" fill="grey" />
    </svg>
  );
}

export default Rectangles;
