import React from "react";
import Laptop from "./Laptop";
import Button from "../HomeAbout/Button";

import "./homeBlog.css";

function HomeBlog() {
  return (
    <div className="homeBlog-container">
      <section className="blogSection blogLeft">
        <div className="blogLeftTop">
          <div>
            <h4 className="font__4 numberBlog">04.</h4>
          </div>

          <div>
            <h1 className="font__0 myBlog">Personal</h1>
            <h1 className="font__0 myBlog">Blog</h1>
          </div>
        </div>

        <div className="blogLeftMiddle">
          <h3 className="font__3 myBlogAnswer">
            <p>A place I share my thoughts, journey and</p>
            <p>write about anything and everything.</p>
            <p>p.s, click the laptop screen!</p>
          </h3>
        </div>

        <div className="blogLeftBottom">
          <div className="button-1">
            <Button message="LEARN MORE" url="/blog" />
          </div>

          <div className="button-2">
            <Button message="PITCH IDEA" /> {/* TODO: add url for idea pitch */}
          </div>
        </div>
      </section>

      <section className="blogSection blogRight">
        <div className="blogLaptop">
          <Laptop />
        </div>
      </section>
    </div>
  );
}

export default HomeBlog;
