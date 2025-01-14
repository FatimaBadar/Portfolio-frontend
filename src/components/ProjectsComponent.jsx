import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import axios from "axios";

const ProjectsComponent= () =>{
  const { ref: ProjectRef, inView } = useInView();
    // {threshold: 0.1, triggerOnce: true });
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    await axios
      .get("http://localhost:3000/api/getProjects")
      .then((response) => {
        console.log(response.data);
        setProjectData(response.data.data);
        console.log("project data: ", projectData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const responsiveOptions = [
    {
      breakpoint: "2560px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1440px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 1,
      numScroll: 1,
    },
    // {
    //   breakpoint: "575px",
    //   numVisible: 1,
    //   numScroll: 1,
    // },
  ];

  const productTemplate = (projects) => {
    return (
      <div className={`items carousel border-1 surface-border border-round ${inView ? 'projects-visible' : 'projects-hidden'}`}>
      {/* //  <div className="item carousel border-1 surface-border border-round">  */}
        {/* <div className="item"> */}
        <div className="mb-3">
          <img
            src={projects.fileName}
            alt={projects.fileName}
            id="project-image"
            className="w-11 shadow-2 border-3 border-white"
          />
        </div>
        <div>
          <h2 className="project-name">{projects.title}</h2>
          <h6 className="project-description">{projects.subheading}</h6>
        </div>
        {/* <div className="flex gap-2"> */}
        {/* <ProjectDialog projectData={projects}/> */}
        <Button
          className="item inner-button-carousel"
          type="button"
          icon="pi pi-github"
          label="VIEW CODE"
          onClick={() => window.open(projects.link)}
        />
        {/* </div> */}
      </div>
    );
  };

  return (
    <div className="projects" id="projects"
    ref={ProjectRef}>
      <h2
        className={`items secondary-heading ${inView ? 'projects-visible' : 'projects-hidden'}`}
        style={{ fontWeight: 800, marginLeft: "9vw" }}
      >
        Projects
      </h2>
      <p
        className={`items small-text ${inView ? 'projects-visible' : 'projects-hidden'}`}
        style={{
          fontSize: "22px",
          marginLeft: "9vw",
          marginTop: "50px",
          marginBottom: "10px",
        }}
      >
        Some things I’ve built so far
      </p>
      <Carousel
        value={projectData}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        autoplayInterval={3000}
      />
    </div>
  );
}
export default ProjectsComponent;