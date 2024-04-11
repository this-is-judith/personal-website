import React from "react";

import profileImage from "../../../../Assets/Photos/profileImage.png";

const Circles = () => {
  return (
    <svg width="600" height="720">
      <defs>
        <clipPath id="circleView">
          <circle cx="280" cy="330" r="175" />
        </clipPath>
      </defs>

      <circle
        cx="400"
        cy="480"
        r="100"
        fill="var(--accent-two)"
        className="popUpAnimation"
      />
      <circle
        cx="280"
        cy="330"
        r="175"
        fill="var(--accent-one)"
        className="popUpAnimation"
      />

      <image
        href={profileImage}
        width="500"
        height="500"
        x="30"
        y="50"
        clipPath="url(#circleView)"
        className="popUpAnimation"
      />
    </svg>
  );
};

export default Circles;
