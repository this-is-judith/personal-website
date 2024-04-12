import React from "react";

const ButtonContainer = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "5rem",
  };

  const buttonStyle = {
    padding: "10px 20px",
    height: "3.5rem",
    width: "10rem",
    backgroundColor: "var(--accent-one)",
    color: "var(--background-color)",
    border: "var(--accent-one)",
    borderRadius: "20px",
    cursor: "pointer",
    outline: "none",
  };

  return (
    <div style={containerStyle}>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="button-link"
      >
        <button style={buttonStyle}>LEARN MORE</button>
      </a>

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="button-link"
      >
        <button style={buttonStyle}>CONTACT ME</button>
      </a>
    </div>
  );
};

export default ButtonContainer;
