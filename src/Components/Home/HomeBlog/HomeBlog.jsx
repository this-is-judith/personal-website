import React from "react";
import LeftRectangles from "../HomeAbout/LeftRectangles";

import "./homeBlog.css";

function HomeBlog() {
  return (
    <div className="homeBlog-container">
      <section className="blogSection blogLeft">
        <div className="blogLeftTop">
          <p>04.</p>
          <p>Blog</p>
        </div>

        <div className="blogLeftMiddle">
          Where I write about anything and everything
        </div>

        <div className="blogLeftBottom">
          <LeftRectangles />
        </div>
      </section>

      <section className="blogSection blogRight">
        <div className="iphone">
          <div className="iphone-notch"></div>
          <div className="iphone-screen"></div>
        </div>
      </section>
    </div>
  );
}

export default HomeBlog;
