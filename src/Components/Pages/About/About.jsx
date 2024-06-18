import React from "react";

import Header from "../../Header/Header";
import "./about.css";

function About() {
  {
    document.body.style.margin = 0;
  }

  return (
    <>
      <div className="about-page">
        <div class="header">
          <Header />
        </div>

        <main className="about-container">
          <div className="about-description">
            Judith's About Page is Coming Soon :)
          </div>
        </main>
      </div>
    </>
  );
}

export default About;
