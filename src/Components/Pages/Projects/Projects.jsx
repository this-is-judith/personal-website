import React from "react";

import Header from "../../Header/Header";
import "./projects.css";

function Projects() {
  {
    document.body.style.margin = 0;
  }

  return (
    <>
      <div className="projects-page">
        <div class="header">
          <Header />
        </div>

        <main className="projects-container">
          <div className="projects-description">
            Judith's Projects Page is Coming Soon :)
          </div>
        </main>
      </div>
    </>
  );
}

export default Projects;
