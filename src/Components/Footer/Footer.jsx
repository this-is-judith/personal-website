import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ContactFormDetails from "./ContactFormDetails";
import ContactFormMessage from "./ContactFormMessage";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-section footer-top">
        <section className="footer-middle">
          <div className="footer-middle-top">
            <ContactFormDetails />
          </div>

          <div className="footer-middle-middle">
            <div className="footer-middle-middle-top">
              <h2> LET'S CONNECT! </h2>
            </div>

            <div className="footer-middle-middle-bottom">
              <div className="footer-socials">
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
            </div>
          </div>

          <div className="footer-middle-bottom"></div>
        </section>

        <section className="footer-right">
          <ContactFormMessage />
        </section>
      </section>

      <section className="footer-section footer-bottom">
        <p className="name-and-copyright">Judith Osei-Tete © 2024</p>
      </section>
    </footer>
  );
};

export default Footer;
