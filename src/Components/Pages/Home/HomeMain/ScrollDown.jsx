import React from "react";
import { useScrollDown } from "../../../../Assets/Hooks/useScrollDown";
import "./scrollDown.css";

const ScrollDown = () => {
  const handleScrollDown = useScrollDown();

  return (
    <svg
      onClick={handleScrollDown}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="scroll-down-button"
      style={{ cursor: "pointer" }}
    >
      <path className="first-arrow" d="M6 9l6 6 6-6" />
      <path className="second-arrow" d="M6 14l6 6 6-6" />
    </svg>
  );
};

export default ScrollDown;
