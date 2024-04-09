import React from "react";
import image from "../../../Assets/Photos/granite-highlight-black.png";
import "./homeMain.css";

const Header = () => {
  return (
    <>
      <div className="homeMain-container">
        <div className="mainSection left"></div>

        <div className="mainSection right">{/* <img src={image} /> */}</div>
      </div>
    </>
  );
};

export default Header;
