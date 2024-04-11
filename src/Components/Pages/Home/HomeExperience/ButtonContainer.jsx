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
      <button style={buttonStyle}>LEARN MORE</button>
      <button style={buttonStyle}>VIEW RESUME</button>
    </div>
  );
};

export default ButtonContainer;
