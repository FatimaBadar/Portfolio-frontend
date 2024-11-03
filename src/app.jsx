import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import "./app.css";
import HeroComponent from "./components/HeroComponent";
import React from "react";
import AboutMeComponent from "./components/AboutMeComponent";
import ProjectsComponent from "./components/ProjectsComponent";

export function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero-container">
          <HeroComponent />
          <div className="spline-wrapper">
          <Spline
            className="spline"
            scene="https://prod.spline.design/8rTDsIuCsY4h89f3/scene.splinecode"
          />
          </div>

        </div>
        <AboutMeComponent />
        <ProjectsComponent/>
      </div>
    </>
  );
}
