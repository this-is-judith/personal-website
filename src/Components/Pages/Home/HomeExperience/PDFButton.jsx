import React from "react";

import "../HomeAbout/button.css";

const PDFButton = ({ message, url }) => {
  return (
    <a href={url} target="_blank">
      <div className="button-container">
        <text className="button-text">{message}</text>
      </div>
    </a>
  );
};

export default PDFButton;
