import React from "react";
import Button from "../HomeAbout/Button";
import IPhone from "./IPhone";

import "./homeResources.css";

function HomeResources() {
  return (
    <div className="homeResources-container">
      <div className="resourcesSection resourcesLeft">
        <div className="resourcesLeftTop">
          <div>
            <h4 className="font__4 numberBlog">05.</h4>
          </div>

          <div>
            <h1 className="font__0 myBlog">Helpful</h1>
            <h1 className="font__0 myBlog">Resources</h1>
          </div>
        </div>

        <div className="resourcesLeftMiddle">
          <h3 className="font__3 myBlogAnswer">
            <p>Home to resources and information I</p>
            <p>have collected over the years.</p>
          </h3>
        </div>

        <div className="resourcesLeftBottom">
          <div className="button-1">
            <Button message="LEARN MORE" url="/blog" />
          </div>

          <div className="button-2">
            <Button message="SHARE RESOURCE" />
            {/* TODO: add url for share resources */}
          </div>
        </div>
      </div>
      <div className="resourcesSection resourcesRight">
        <IPhone />
      </div>
    </div>
  );
}

export default HomeResources;
