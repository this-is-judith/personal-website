import React from "react";

import Button from "../HomeAbout/Button";
import IPhone from "./IPhone";
import { FaArrowLeftLong } from "react-icons/fa6";

import "./homeResources.css";

function HomeResources() {
  return (
    <div className="homeResources-container">
      <div className="resources-section resources-left">
        <div className="resourcesLeftTop">
          <div>
            <h4 className="font__4 numberResources ">05.</h4>
          </div>

          <div>
            <h1 className="font__0 myResources ">Helpful</h1>
            <h1 className="font__0 myResources ">Resources</h1>
          </div>
        </div>

        <div className="resourcesLeftMiddle">
          <h3 className="font__3 myResourcesAnswer">
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

      <div className="resources-section resources-right">
        <div className="resources-iphone-container">
          <div className="resources-iphone">
            <IPhone className="iphone" />
          </div>
          <div className="resources-click-bar"></div>
        </div>
        <div className="resources-click-pwr-container">
          <div className="resources-click-pwr">
            <div className="resources-arrow-container">
              <FaArrowLeftLong size="30" className="resources-arrow" />
            </div>
            <div className="resources-words">
              <h4>Click Power</h4>
              <h4 class="lower">Button</h4>
            </div>
          </div>
          <div className="resources-empty"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeResources;
