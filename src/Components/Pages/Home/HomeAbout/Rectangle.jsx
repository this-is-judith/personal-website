import React from "react";
import { Link } from "react-router-dom";

import "./rectangle.css";

const Rectangle = ({ message, url }) => {
  return (
    <Link to={url}>
      <div className="button-container">
        <text className="button-text">{message}</text>
      </div>
    </Link>
  );
};

export default Rectangle;
