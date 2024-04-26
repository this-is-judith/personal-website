import React from "react";
import "./iphone.css";

function IPhone() {
  return (
    <div className="iphone">
      <div className="iphone-screen">
        <div className="iphone-notch">
          <div className="iphone-speaker"></div>
          <div className="iphone-camera"></div>
        </div>

        <div className="iphone-volume-up"></div>
        <div className="iphone-volume-down"></div>
        <div className="iphone-power-button"></div>
        <div className="iphone-swipe-bar"></div>
      </div>
    </div>
  );
}

export default IPhone;
