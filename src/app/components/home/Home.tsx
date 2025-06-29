import React from "react";
import Navbar from "../Navbar";
import Hero from "../hero/hero";
import InfoGrid from "../infogrid/InfoGrid";
import Projects from "../projects/Projects";
import About from "../about/About";
import Skills from "../skills/Skills";
import Connect from "../connect/Connect";
import Footer from "../footer/Footer";

type Props = {};

const home = (props: Props) => {
    return (
        <div className="text-red-900">
            <Navbar />
            <section id="home">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>
            <section>
                <InfoGrid />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="connect">
                <Connect />
            </section>
            <Footer />
        </div>
    );
};

export default home;
