import React from "react";

import { Link } from "react-router-dom";
import Button from "./Button";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";

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
            <h1 className="font__0 who-am-I">Who</h1>
            <h1 className="font__0 who-am-I">am I?</h1>
          </div>
        </div>

        <div className="about-left-middle">
          <h3 className="font__3 who-am-I-answer">
            <p>A child of God, an engineering student, a friend.</p>
            <p>I'm a person of many interests and hobbies.</p>
          </h3>
        </div>

        <div className="about-left-bottom">
          <div className="button-1">
            <Button message="LEARN MORE" url="/about" />
          </div>

          <div className="button-2">
            {/* TODO: add url for contact */}
            <Button message="CONTACT ME" />
          </div>
        </div>
      </section>

      <div className="about-section about-right">
        <div className="right-rectangle about-right-top">
          <Link to="/about" className="homeAbout-rectangle-link">
            <div className="homeAbout-icon-container">
              <FaGlobeAfrica className="homeAbout-icon" size={"2.8rem"} />
            </div>

            <div className="homeAbout-text-container">
              <h1 className="homeAbout-background"> BACKGROUND </h1>
            </div>
          </Link>
        </div>

        <div className="right-rectangle about-right-middle">
          <Link to="/about" className="homeAbout-rectangle-link">
            <div className="homeAbout-icon-container">
              <FaGraduationCap className="homeAbout-icon" size={"3.5rem"} />
            </div>

            <div className="homeAbout-text-container">
              <h1> EDUCATION </h1>
            </div>
          </Link>
        </div>

        <div className="right-rectangle about-right-bottom">
          <Link to="/about" className="homeAbout-rectangle-link">
            <div className="homeAbout-icon-container">
              <FaBookOpen className="homeAbout-icon" size={"3.5rem"} />
            </div>

            <div className="homeAbout-text-container">
              <h1> HOBBIES </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
