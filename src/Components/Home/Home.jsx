import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import HomeMain from "./HomeMain/HomeMain";
// import About from "../About/About";
// import Experience from "../Experience/Experience";
// import Projects from "../Projects/Projects";
// import Blog from "../Blog/Blog";
// import Resources from "../Resources/Resources";
// import Footer from "../Footer/Footer";

import "./home.css";

function Home()
{
    return (
        <>
           <Header/>

           <main className="main">
                <HomeMain/>
           </main>
        </>
    );
}

export default Home;

