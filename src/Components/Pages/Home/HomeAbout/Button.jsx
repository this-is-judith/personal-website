import React from "react";
import { Link } from "react-router-dom";

import "./button.css";

const Button = ({ message, url }) => {
  return (
    <Link to={url}>
      <div className="button-container">
        <text className="button-text">{message}</text>
      </div>
    </Link>
  );
};

export default Button;
