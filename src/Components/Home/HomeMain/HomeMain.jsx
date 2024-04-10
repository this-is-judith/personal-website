import React from "react";
import "./homeMain.css";
import Circles from "./Circles";
import Rectangles from "./Rectangles";
import { FaPlayCircle } from "react-icons/fa";
import ScrollDown from "./ScrollDown";

const Header = () => {
  return (
    <>
      <div className="homeMain-container">
        <section className="mainSection mainLeft">
          <div className="leftSection mainTop">
            <p>Hello! My name is Judith</p>
            <p>I'm a Computer Engineer interested in both</p>
            <p>hardware and software.</p>
          </div>

          <div className="leftSection mainBottom">
            <Rectangles />
          </div>
        </section>

        <section className="mainSection mainRight">
          <Circles />
          <div className="playCircle">
            <FaPlayCircle size={30} />
          </div>
          <ScrollDown />
        </section>
      </div>
    </>
  );
};

export default Header;
