import React from "react";
import "./homeAbout.css";
import Rectangle from "./Rectangle";

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

        <div className="aboutLeftBottom"></div>
      </section>

      <section className="aboutSection aboutRight">
        <div className="aboutRightTop">
          <Rectangle className="faithReactangle" />
        </div>
        <div className="aboutRightMiddle">
          <Rectangle className="educationRectangle" />
        </div>
        <div className="aboutRightBottom">
          <Rectangle className="hobbiesRectangle" />
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
