import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import "./app.css";
import HeroComponent from "./components/HeroComponent";
import React from "react";
import AboutMeComponent from "./components/AboutMeComponent";

export function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero-container">
          <HeroComponent />
          <Spline
            className="spline"
            scene="https://prod.spline.design/8rTDsIuCsY4h89f3/scene.splinecode"
          />
        </div>
        <AboutMeComponent />
      </div>
    </>
  );
}
