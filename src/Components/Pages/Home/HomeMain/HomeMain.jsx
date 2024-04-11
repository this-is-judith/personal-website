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
import { songOfTheWeek } from "../../../../Assets/Songs/SongOfTheWeek";

import "./homeMain.css";

const HomeMain = () => {
  return (
    <div className="homeMain-container">
      <section className="mainSection mainLeft">
        <div className="leftSection mainTop">
          <div className="font__4-container">
            <h4 className="font__4">Hey, I'm</h4>
          </div>

          <div>
            <h1 className="font__0">Judith</h1>
            <h1 className="font__0">Osei-Tete</h1>
          </div>

          <div>
            <h3 className="font__3">
              A Computer Engineer interested in both hardware
            </h3>
            <h3 className="font__3 bottom">and software.</h3>
          </div>
        </div>

        <div className="leftSection mainBottom">
          <Rectangles />
        </div>
      </section>

      <section className="mainSection mainRight">
        <Circles />

        <div className="playCircle">
          <a
            href={songOfTheWeek}
            target="_blank"
            rel="noopener noreferrer"
            className="playCircle-link"
          >
            <FaPlayCircle size={30} className="playIcon" />
          </a>
        </div>

        <ScrollDown />

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/judithoseitete/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/this-is-judith"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="mailto:jao92@cornell.edu"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMail size={24} />
          </a>

          <a
            href="https://www.instagram.com/thisisjudith._/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram size={24} />
          </a>

          <a
            href="https://www.facebook.com/JudyTheSuperhero/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeMain;
