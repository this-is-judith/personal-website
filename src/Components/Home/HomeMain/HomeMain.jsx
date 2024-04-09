import React from "react";
import "./homeMain.css";
import Circles from "./Circles";
import Rectangles from "./Rectangles";

const Header = () => {
  return (
    <>
      <div className="homeMain-container">
        <div className="mainSection left">
          <Rectangles />
        </div>

        <div className="mainSection right">
          <Circles />
        </div>
      </div>
    </>
  );
};

export default Header;
