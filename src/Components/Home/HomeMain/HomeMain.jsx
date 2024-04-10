import React from "react";
import "./homeMain.css";
import Circles from "./Circles";
import Rectangles from "./Rectangles";
import { FaPlayCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="homeMain-container">
        <div className="mainSection left">
          <div className="leftSection top">
            <div className="homeMain-text">
              <p>Hello! My name is Judith</p>
              <p>I'm a Computer Engineer interested in both</p>
              <p>hardware and software.</p>
            </div>
          </div>

          <div className="leftSection bottom">
            <Rectangles />
          </div>
        </div>

        <div className="mainSection right">
          <Circles />
          <div className="playCircle">
            <FaPlayCircle size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
