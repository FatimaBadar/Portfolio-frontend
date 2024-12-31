import React from "react";
import HeroComponent from "../components/HeroComponent";
import AboutMeComponent from "../components/AboutMeComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import TechnologyComponent from "../components/TechnologyComponent";
import ContactComponent from "../components/ContactComponent";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
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
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "158px",
                height: "57px",
                borderRadius: "15px",
                backgroundColor: "rgba(0, 0, 0, 1)",
                zIndex: 10,
              }}
            ></div>
          </div>
        </div>
        <AboutMeComponent />
        <ProjectsComponent />
        <TechnologyComponent />
        <ContactComponent />
      </div>
    </>
  );
};

export default Home;
