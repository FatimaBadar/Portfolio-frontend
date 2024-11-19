import React from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import "./app.css";
import HeroComponent from "./components/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import TechnologyComponent from "./components/TechnologyComponent";
import ContactComponent from "./components/ContactComponent";

export function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="hero-container">
          <HeroComponent />
          <div className="spline-wrapper">
            <Spline
              className="spline"
              scene="https://draft.spline.design/2Jn9F9S2SAUvddgI/scene.splinecode"
            />
            <div
              id="overlay"
              style="position: absolute; bottom: 0; right: 0; width: 158px; height: 57px; border-radius: 15px;background-color: rgba(0, 0, 0, 1); z-index: 10;"
            ></div>
          </div>
        </div>
        <AboutMeComponent />
        <ProjectsComponent />
        <TechnologyComponent />
        <ContactComponent/>
      </div>
    </>
  );
}
