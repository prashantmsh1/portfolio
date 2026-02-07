"use client";

import React from "react";
import Navbar from "../Navbar";
import Hero from "../hero/hero";
import InfoGrid from "../infogrid/InfoGrid";
import Projects from "../projects/Projects";
import About from "../about/About";
import Skills from "../skills/Skills";
import Connect from "../connect/Connect";
import Footer from "../footer/Footer";

const home = () => {
    return (
        <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <Hero />
            <About />
            <InfoGrid />
            <Projects />
            <Skills />
            <Connect />
            <Footer />
        </div>
    );
};

export default home;
