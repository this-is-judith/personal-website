import React from "react";
import { Link } from "react-router-dom";

import "./secondButton.css";

const SecondButton = ({ message, url }) => {
  return (
    <Link to={url}>
      <div className="second-button-container">
        <text className="second-button-text">{message}</text>
      </div>
    </Link>
  );
};

export default SecondButton;
