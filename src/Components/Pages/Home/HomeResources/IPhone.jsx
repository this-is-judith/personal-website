import React, { useState, useEffect } from "react";

import { IoIosFlashlight } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import "./iphone.css";

function IPhone({ isPowerOn, togglePower, isSwipeBarClicked, toggleSwipe }) {
  // Date and Time
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const today = new Date();
      const locale = navigator.language; // Using the browser's locale
      const dateOptions = { weekday: "long", month: "long", day: "numeric" };
      const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: false };
      setDate(today.toLocaleDateString(locale, dateOptions));
      setTime(today.toLocaleTimeString(locale, timeOptions));
    };

    // Call once to set immediately
    updateDateTime();

    // Calculate the milliseconds until the next minute
    const now = new Date();
    const delayUntilNextMinute =
      60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

    // Set a timeout to align with the next minute
    const timeout = setTimeout(() => {
      updateDateTime();
      // Then set an interval every minute
      const timer = setInterval(updateDateTime, 60000);
      return () => {
        clearTimeout(timeout);
        clearInterval(timer);
      };
    }, delayUntilNextMinute);

    // Cleanup on unmount
    return () => clearTimeout(timeout);
  }, []);

  // Toggle Power
  const [showScreenSaver, setShowScreenSaver] = useState(false);

  useEffect(() => {
    if (isPowerOn) {
      setShowScreenSaver(true);
    } else {
      setShowScreenSaver(false);
    }
  }, [isPowerOn]);

  return (
    <div className="iphone">
      <div className={`iphone-screen ${isPowerOn ? "on" : ""}`}>
        <div className="iphone-notch">
          <div className="iphone-speaker"></div>
          <div className="iphone-camera"></div>
        </div>
        {showScreenSaver && !isSwipeBarClicked && (
          <>
            <div className="iphone-main-screen">
              <div className="iphone-screen-section iphone-lock">
                <FaLock size="12" className="icon-shadow" />
              </div>
              <div className="iphone-screen-section iphone-date">{date}</div>
              <div className="iphone-screen-section iphone-time">{time}</div>
              <div className="iphone-screen-section iphone-main"></div>
              <div className="iphone-screen-section iphone-extras">
                <div className="iphone-torchlight-icon">
                  <IoIosFlashlight size="25" className="icon-shadow" />
                </div>
                <div className="iphone-camera-icon">
                  <FaCamera size="17.5" className="icon-shadow" />
                </div>
              </div>
            </div>

            <div className="iphone-swipe-bar" onClick={toggleSwipe}></div>
          </>
        )}
        {showScreenSaver && isSwipeBarClicked && <div>Hello</div>}
        <div className="iphone-volume-up"></div>
        <div className="iphone-volume-down"></div>
        <div className="iphone-power-button" onClick={togglePower}></div>
      </div>
    </div>
  );
}

export default IPhone;
