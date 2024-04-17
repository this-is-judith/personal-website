import React from "react";

import { Link } from "react-router-dom";

const RightRectangle = ({ text, x, y, fontSize }) => {
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

      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="var(--accent-one)"
        fontSize={fontSize}
        fontFamily="Poppins"
        fontWeight="bold"
      >
        {text}
      </text>
    </svg>
  );
};

export default RightRectangle;
