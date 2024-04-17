import React from "react";

import { Link } from "react-router-dom";
import RightRectangle from "./RightRectangle";
import Button from "./Button";
import { FaCross } from "react-icons/fa";
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
            {/* <Button message="CONTACT ME" /> TODO: add url for contact */}
            <Button message="CONTACT ME" />
          </div>
        </div>
      </section>

      <section className="about-section about-right">
        <div className="about-right-top">
          <RightRectangle
            className="faith-rectangle"
            text="FAITH"
            x="225"
            y="115"
            fontSize="2.25rem"
            url="/about" // TODO: update url to specific part of about
          />

          <Link to="/about">
            {/* TODO: update url to specific part of about */}
            <FaCross className="homeAbout-icon" size={"2.5rem"} />
          </Link>
        </div>

        <div className="about-right-middle">
          <RightRectangle
            className="education-rectangle"
            text="EDUCATION"
            x="225"
            y="115"
            fontSize="2rem"
          />

          <Link to="/about">
            <FaGraduationCap className="homeAbout-icon" size={"3rem"} />
          </Link>
        </div>

        <div className="about-right-bottom">
          <RightRectangle
            className="hobbies-rectangle"
            text="HOBBIES"
            x="225"
            y="115"
            fontSize="2.125rem"
          />

          <Link to="/about">
            <FaBookOpen className="homeAbout-icon" size={"3rem"} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
