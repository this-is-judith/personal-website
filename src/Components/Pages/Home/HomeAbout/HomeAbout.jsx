import React from "react";

import RightRectangle from "./RightRectangle";
import Button from "./Button";
import { FaCross } from "react-icons/fa";

import "./homeAbout.css";

const HomeAbout = () => {
  return (
    <div className="homeAbout-container">
      <section className="about-section about-left">
        <div className="about-left-top">
          <div>
            <h4 className="font__4 number">01.</h4>
          </div>

          <div>
            <h1 className="font__0 whoAmI">Who</h1>
            <h1 className="font__0 whoAmI">am I?</h1>
          </div>
        </div>

        <div className="about-left-middle">
          <h3 className="font__3 whoAmIAnswer">
            <p>A child of God, an engineering student, a friend.</p>
            <p>I'm a person of many interests and hobbies.</p>
          </h3>
        </div>

        <div className="about-left-bottom">
          <div className="button-1">
            <Button message="LEARN MORE" url="/about" />
          </div>

          <div className="button-2">
            <Button message="CONTACT ME" /> {/* TODO: add url for contact */}
          </div>
        </div>
      </section>

      <section className="about-section about-right">
        <div className="aboutRightTop">
          <RightRectangle className="faithReactangle" />
          <FaCross className="cross" size={"3rem"} />
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
