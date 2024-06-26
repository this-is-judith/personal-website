import React from "react";

import ScrollingText from "./ScrollingText";
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
          <div className="homeMain-text-container homeMain-text-1">
            <h4 className="homeMain-text font_4">Hey, I'm</h4>
          </div>

          <div className="homeMain-text-container homeMain-text-2">
            <h1 className="homeMain-text font_0">Judith</h1>
            <h1 className="homeMain-text font_0">Osei-Tete</h1>
          </div>

          <div className="homeMain-text-container homeMain-text-3">
            <h3 className="homeMain-text font_3">
              A Computer Engineer interested in both hardware and software.
            </h3>
          </div>
        </div>

        <div className="leftSection mainBottom">
          <div className="homeMain-rectangle homeMain-rectangle-1">
            <div className="scripture-square">
              <h3>John 3:16</h3>
            </div>

            <div className="scripture-content">
              <div className="scripture-of-the-week">
                <h3>SCRIPTURE OF THE WEEK</h3>
              </div>
              <div className="verse">
                <ScrollingText />
              </div>
            </div>
          </div>
          <div className="homeMain-rectangle homeMain-rectangle-2"></div>
        </div>
      </section>

      <section className="mainSection mainRight">
        <div className="rightSection circles-container">
          <div className="homeMain-circle-box homeMain-circle-box-left">
            <div className="homeMain-circle-bigger-box big-circle"></div>

            <div className="homeMain-circle-smaller-box"></div>
          </div>

          <div className="homeMain-circle-box homeMain-circle-box-right">
            <div className="homeMain-circle-bigger-box"></div>
            <div className="homeMain-circle-smaller-box small-circle">
              <a
                href={songOfTheWeek}
                target="_blank"
                rel="noopener noreferrer"
                className="playCircle-link"
              >
                <FaPlayCircle size={35} className="playIcon" />
              </a>
            </div>
          </div>
        </div>

        <div className="rightSection socials">
          <a
            href="https://www.linkedin.com/in/judithoseitete/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="https://github.com/this-is-judith"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="mailto:jao92@cornell.edu"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMail size={30} />
          </a>

          <a
            href="https://www.instagram.com/thisisjudith._/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram size={30} />
          </a>

          <a
            href="https://www.facebook.com/JudyTheSuperhero/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeMain;
