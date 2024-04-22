import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-section footer-left">Section 1</section>

      <section className="footer-section footer-middle">
        <div className="footer-middle-top"></div>

        <div className="footer-middle-bottom">
          <p className="name-and-copyright">Judith Osei-Tete © 2024</p>
        </div>
      </section>

      <section className="footer-section footer-right">Section 3</section>
    </footer>
  );
};

export default Footer;
