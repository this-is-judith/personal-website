import React, { useState } from "react";
import "./iphone.css";

function IPhone() {
  const [isPowerOn, setIsPowerOn] = useState(false);

  const togglePower = () => {
    setIsPowerOn(!isPowerOn);
  };

  return (
    <div className="iphone">
      <div className={`iphone-screen ${isPowerOn ? "on" : ""}`}>
        <div className="iphone-notch">
          <div className="iphone-speaker"></div>
          <div className="iphone-camera"></div>
        </div>

        <div className="iphone-main-screen">
          <div className="iphone-screen-section iphone-lock"></div>
          <div className="iphone-screen-section iphone-date"></div>
          <div className="iphone-screen-section iphone-time"></div>
          <div className="iphone-screen-section iphone-main"></div>
          <div className="iphone-screen-section iphone-extras">
            <div className="iphone-torchlight-icon"></div>
            <div className="iphone-camera-icon"></div>
          </div>
        </div>

        {isPowerOn && (
          <div className="iphone-welcome-message">Welcome to iPhone</div>
        )}

        <div className="iphone-volume-up"></div>
        <div className="iphone-volume-down"></div>
        <div className="iphone-power-button" onClick={togglePower}></div>
        <div className="iphone-swipe-bar"></div>
      </div>
    </div>
  );
}

export default IPhone;
