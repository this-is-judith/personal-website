import React from "react";

import Circles from "./Circles";
import Rectangles from "./Rectangles";
import ScrollDown from "./ScrollDown";
import { FaPlayCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import "./homeMain.css";

const HomeMain = () => {
  return (
    <div className="homeMain-container">
      <section className="mainSection mainLeft">
        <div className="leftSection mainTop">
          <h1>Hello! My name is Judith</h1>
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

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/judithoseitete/"
            className="social-icon"
          >
            <FaLinkedin size={22} />
          </a>

          <a href="https://github.com/this-is-judith" className="social-icon">
            <FaGithub size={22} />
          </a>

          <a href="mailto:jao92@cornell.edu" className="social-icon">
            <IoMdMail size={22} />
          </a>

          <a
            href="https://www.instagram.com/thisisjudith._/"
            className="social-icon"
          >
            <AiFillInstagram size={22} />
          </a>

          <a
            href="https://www.facebook.com/JudyTheSuperhero/"
            className="social-icon"
          >
            <FaFacebook size={22} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeMain;
