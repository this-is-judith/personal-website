import React from "react";

import profileImage from "../../../../Assets/Photos/profileImage.png";

const Circles = () => {
  return (
    <svg width="600" height="720">
      <defs>
        <clipPath id="circleView">
          <circle cx="310" cy="330" r="175" />
        </clipPath>
      </defs>

      <circle cx="430" cy="480" r="100" fill="#d92862" />
      <circle cx="310" cy="330" r="175" fill="#002e50" />

      <image
        href={profileImage} // Use the imported image here
        width="500"
        height="500"
        x="60"
        y="50"
        clipPath="url(#circleView)"
      />
    </svg>
  );
};

export default Circles;
