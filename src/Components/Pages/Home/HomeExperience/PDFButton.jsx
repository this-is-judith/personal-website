import React from "react";

import "../HomeAbout/button.css";

const PDFButton = ({ message, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="button-container">
        <text className="button-text">{message}</text>
      </div>
    </a>
  );
};

export default PDFButton;
