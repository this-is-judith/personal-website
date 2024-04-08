import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
import Resources from "../Resources/Resources";
import Footer from "../Footer/Footer";

import "./app.css";

function App()
{
    return (
        <Header />
    );
}

export default App;
