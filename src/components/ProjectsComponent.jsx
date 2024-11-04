import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";

export default function ProjectsComponent() {
  // const { ref: ProjectRef, inView } = useInView(
  //   {threshold: 0.1, triggerOnce: true });

  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "OneClicks",
      description: "Multi-platform Adverstising management tool",
      image: "OneClicks.JPG",
      link: "git",
    }, 
    {
      id: "2",
      name: "OneClicks2",
      description: "Multi-platform Adverstising management tool",
      image: "OneClicks.JPG",
      link: "git",
    },
    {
      id: "3",
      name: "OneClicks3",
      description: "Multi-platform Adverstising management tool",
      image: "OneClicks.JPG",
      link: "git",
    },
    {
      id: "4",
      name: "OneClicks4",
      description: "Multi-platform Adverstising management tool",
      image: "OneClicks.JPG",
      link: "git",
    },
  ]);

  // useEffect(() => {
  //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
  // }, []);

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
      // <div className={`items carousel border-1 surface-border border-round ${inView ? 'projects-visible' : 'projects-hidden'}`}>
      <div className="carousel border-1 surface-border border-round">
        {/* <div className="item"> */}
        <div className="mb-3" >
          <img
            src={projects.image}
            // src={`https://primefaces.org/cdn/primereact/images/product/${projects.image}`}
            alt={projects.name}
            className="w-11 shadow-2 border-3"
          />
        </div>
        <div >
          <h2 className="project-name">{projects.name}</h2>
          <h6 className="project-description">{projects.description}</h6>
        </div>
        <Button className="item inner-button-carousel" type="button" icon='pi pi-github' label="VIEW CODE" />
        {/* </div> */}
      </div>
    );
  };

  return (
    <div className="projects" id="projects">
       {/* ref={ProjectRef}> */}
      <Carousel
        value={projects}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        autoplayInterval={3000}
      />
    </div>
  );
}
