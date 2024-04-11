import React from "react";

import RightRectangle from "./RightRectangle";
import LeftRectangles from "./LeftRectangles";
import ButtonContainer from "../HomeExperience/ButtonContainer";

import "./homeAbout.css";

const HomeAbout = () => {
  return (
    <div className="homeAbout-container">
      <section className="aboutSection aboutLeft">
        <div className="aboutLeftTop">
          <p>01.</p>
          <p>Who am I?</p>
        </div>

        <div className="aboutLeftMiddle">
          I'm a person of many interests and hobbies
        </div>

        <div className="aboutLeftBottom">
          <ButtonContainer />
        </div>
      </section>

      <section className="aboutSection aboutRight">
        <div className="aboutRightTop">
          <RightRectangle className="faithReactangle" />
        </div>
        <div className="aboutRightMiddle">
          <RightRectangle className="educationRectangle" />
        </div>
        <div className="aboutRightBottom">
          <RightRectangle className="hobbiesRectangle" />
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
