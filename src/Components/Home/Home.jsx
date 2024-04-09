import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import HomeMain from "./HomeMain/HomeMain";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeExperience from "./HomeExperience/HomeExperience";
import HomeProjects from "./HomeProjects/HomeProjects";
import HomeBlog from "./HomeBlog/HomeBlog";
import HomeResources from "./HomeResources/HomeResources";
// import Footer from "./Footer/Footer";

import "./home.css";

function Home()
{
  return (
    <>
      <div class="head"><Header/></div>

      <main className="main">
        <div className ="homeMain"><HomeMain/></div>
        <div className ="homeAbout"><HomeAbout/></div>
        <div className ="homeExperience"><HomeExperience/></div>
        <div className ="homeProjects"><HomeProjects/></div>
        <div className ="homeBlog"><HomeBlog/></div>
        <div className ="homeResources"><HomeResources/></div>
      </main>
    </>
  );
}

export default Home;

