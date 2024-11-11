import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import "./app.css";
import HeroComponent from "./components/HeroComponent";
import React from "react";
import AboutMeComponent from "./components/AboutMeComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import SkillsComponent from "./components/SkillsComponent";

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
          </div>

        </div>
        <AboutMeComponent/>
        <ProjectsComponent/>
        <SkillsComponent/>
      </div>
    </>
  );
}
