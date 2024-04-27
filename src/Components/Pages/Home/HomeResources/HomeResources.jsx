import React, { useState } from "react";

import Button from "../HomeAbout/Button";
import IPhone from "./IPhone";
import { FaArrowLeftLong, FaArrowUpLong } from "react-icons/fa6";

import "./homeResources.css";

function HomeResources() {
  const [isPowerOn, setIsPowerOn] = useState(false);

  const togglePower = () => {
    setIsPowerOn(!isPowerOn);
  };

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
            <IPhone isPowerOn={isPowerOn} togglePower={togglePower} />
          </div>

          <div className="resources-click-bar">
            {isPowerOn && (
              <>
                <div className="resources-arrow-container swipe-arrow">
                  <FaArrowUpLong size="30" className="bounce-up-down" />
                </div>

                <div className="resources-words swipe-bar">
                  <h4>Click Swipe Bar</h4>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="resources-click-pwr-container">
          <div className="resources-click-pwr">
            {!isPowerOn && (
              <>
                <div className="resources-arrow-container">
                  <FaArrowLeftLong size="30" className="bounce-left-right" />
                </div>

                <div className="resources-words">
                  <div className="resources-empty"></div>

                  <div className="click-button">
                    <h4>Click Button</h4>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="resources-empty"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeResources;
