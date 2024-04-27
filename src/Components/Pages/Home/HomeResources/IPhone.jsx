import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { IoIosFlashlight } from "react-icons/io";
import { FaCamera, FaLock, FaCross, FaCode } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

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

  // From Power Off to Screen Saver
  const [showScreenSaver, setShowScreenSaver] = useState(false);

  useEffect(() => {
    if (isPowerOn) {
      setShowScreenSaver(true);
    } else {
      setShowScreenSaver(false);
    }
  }, [isPowerOn]);

  // From First Screen to Screen Saver
  const [isFirstScreenUpArrowClicked, setisFirstScreenUpArrowClicked] =
    useState(false);
  const [isFirstScreenDownArrowClicked, setisFirstScreenDownArrowClicked] =
    useState(false);

  return (
    <div className="iphone">
      <div
        className={`iphone-screen screen-${isPowerOn ? "on" : ""} ${
          isSwipeBarClicked ? "first-screen" : ""
        }`}
      >
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

        {showScreenSaver && isSwipeBarClicked && (
          <div className="iphone-firstScreen-content-container">
            <div className="first-screen iphone-arrow">
              <MdKeyboardArrowUp size="60" />
            </div>

            <Link
              to="/resources"
              className="topic-box first-screen iphone-firstScreen-content-1"
            >
              <div className="topic-box-section topic-box-icon">
                <FaCross size="18" />
              </div>
              <div className="topic-box-section topic-box-word">Faith</div>
            </Link>

            <Link
              to="/resources"
              className="topic-box first-screen iphone-firstScreen-content-2"
            >
              <div className="topic-box-section topic-box-icon">
                <FaCode size="20" />
              </div>
              <div className="topic-box-section topic-box-word">Tech</div>
            </Link>
            <div className="first-screen iphone-arrow">
              <MdKeyboardArrowDown size="60" />
            </div>
          </div>
        )}

        <div className="iphone-volume-up"></div>
        <div className="iphone-volume-down"></div>
        <div className="iphone-power-button" onClick={togglePower}></div>
      </div>
    </div>
  );
}

export default IPhone;
