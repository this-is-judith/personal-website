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
        x="380"
        y="240"
        textAnchor="middle"
        fill="var(--accent-one)"
        fontSize="20"
        fontFamily="Arial"
      >
        SCRIPTURE OF THE WEEK
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
      <foreignObject x="200" y="275" width="360" height="70">
        <ScrollingText />
      </foreignObject>

      <a
        href="https://www.bible.com/bible/111/JHN.3.NIV"
        target="_blank"
        rel="noopener noreferrer"
        className="bibleAppLink"
      >
        <rect
          x="50"
          y="210"
          rx="5"
          ry="5"
          width="140"
          height="130"
          fill="var(--accent-two)"
          stroke="var(--accent-one)"
          stroke-width="0.8"
        />

        <text
          x="120"
          y="282.5"
          textAnchor="middle"
          fill="var(--accent-one)"
          fontSize="20"
          fontFamily="Arial"
          className="rect_2"
        >
          JOHN 3:16
        </text>
      </a>
    </svg>
  );
}

export default Rectangles;
