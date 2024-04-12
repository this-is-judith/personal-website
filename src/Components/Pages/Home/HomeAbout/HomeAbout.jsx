import React from "react";

import RightRectangle from "./RightRectangle";
import { Link } from "react-router-dom";

import "./homeAbout.css";

const HomeAbout = () => {
  return (
    <div className="homeAbout-container">
      <section className="aboutSection aboutLeft">
        <div className="aboutLeftTop">
          <div>
            <h4 className="font__4 number">01.</h4>
          </div>

          <div>
            <h1 className="font__0 whoAmI">Who</h1>
            <h1 className="font__0 whoAmI">am I?</h1>
          </div>
        </div>

        <div className="aboutLeftMiddle">
          <h3 className="font__3 whoAmIAnswer">
            <p>A child of God, an engineering student, a friend.</p>
            <p>I'm a person of many interests and hobbies.</p>
          </h3>
        </div>

        <div className="aboutLeftBottom">
          {/* <ButtonContainer /> */}
          <Link to="/about">
            <div className="button-container">
              <text className="button-text">LEARN MORE</text>
            </div>
          </Link>
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
