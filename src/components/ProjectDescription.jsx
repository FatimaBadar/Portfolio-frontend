import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";

const ProjectDescription = () => {
  const [visible, setVisible] = useState(false);
  // const [projectData, setProjectData] = useState([])
  const [projectData, setProjectData] = useState([
    {
      id: 1,
      title: "OneClicks",
      subheading: "Multi-platform Advertising tool",
      description: "To manage, run, optimize ad campaigns across several platforms like Meta and Google",
      tool: "Next.js,.NET,MongoDB,PrimeReact,MaterialUI",
      link: "https://github.com/FatimaBadar/OneClicks-frontend",
      fileName: "projects/OneClicks.JPG"
    },
    {
      id: 2,
      title: "UniRideHub",
      subheading: "Carpool Website",
      description: "For drivers and riders to add up a new ride or book a ride to carpool with someone",
      tool: "CSS,React.js,.NET,MySQL,MaterialUI",
      link: "https://github.com/FatimaBadar/UniRideHub",
      fileName: "projects/UniRideHub.JPG"
    },
    {
      id: 3,
      title: "Restaurant Management System",
      subheading: "Management portal",
      description: "To manage the menu, reservations for employers and customers",
      tool: "CSS,React.js,MySQL,PHP",
      link: "https://github.com/FatimaBadar/Restaurant-management",
      fileName: "projects/Restaurant.JPG"
    },
    {
      id: 4,
      title: "Fashion Store",
      subheading: "E-commerce system",
      description: "To display, buy and sell fashion products by both admin or user",
      tool: "HTML,CSS,MySQL,PHP",
      link: "https://github.com/FatimaBadar/E-Commerce-Fashion-Store",
      fileName: "projects/FashionStore.JPG"
    }
  ]);
  
  useEffect(() => {
    // getProjectData();
  }, []);

  const getProjectData = async () => {
    await axios
      .get("http://localhost:3000/api/getProjects")
      .then((response) => {
        setProjectData(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [images, setImages] = useState([
    {
      id: "1",
      title: "OneClicks",
      fileName: "projects/OneClicks.JPG",
    },
    {
      id: "2",
      title: "OneClicks",
      fileName: "projects/OneClicks/Main.JPG",
    },
    {
      id: "3",
      title: "OneClicks",
      fileName: "projects/OneClicks/Ads.JPG",
    },
    {
      id: "4",
      title: "UniRideHub",
      fileName: "projects/UniRideHub/Main.JPG",
    },
    {
      id: "5",
      title: "UniRideHub",
      fileName: "projects/UniRideHub/Goal.JPG",
    },
    {
      id: "6",
      title: "UniRideHub",
      fileName: "projects/UniRideHub/Goal2.JPG",
    },
  ]);
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <img
        src={item.fileName}
        alt={item.title}
        style={{ width: "100%", height: "280px", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <>
        <img
          src={item.fileName}
          alt={item.title}
          style={{ display: "block", width: "100px", height: "70px" }}
        />
      </>
    );
  };
  return (
    <div style={{background: "rgb(148, 167, 192)"}}> 
    {/* <div style={{background:"linear-gradient(86deg, rgba(148,189,192,1) 0%, rgba(148,175,192,1) 100%)"}}>  */}

    {/* style={{background:"linear-gradient(86deg, rgba(131,126,133,1) 0%, rgba(199,197,203,1) 100%)"}}> */}
      {/* <h2
        className="secondary-heading"
        style={{ fontWeight: 800,  marginTop: "50px", textAlign: "center" }}
      >
        Projects
      </h2> */}
        {/* /* background: rgb(128, 126, 133);  */}

      <div className="project-description-page">
        {projectData.map((project, index) => (
          <div key={index} className="project-section" >
            <ul className="grid project-section-grid">
              <div className="image-gallery md:col-7 sm:col-12">
                <Galleria
                  value={images.filter((x) => x.title === project.title)}
                  responsiveOptions={responsiveOptions}
                  numVisible={5}
                  style={{
                    // maxWidth: "640px",
                    width: "600px",
                    // height: "700px",
                  }}
                  item={itemTemplate}
                  // showThumbnails={false}
                  showItemNavigators
                  thumbnail={thumbnailTemplate}
                  circular
                  autoPlay
                  transitionInterval={2000}
                />
              </div>

              <div className="project-section-2 md:col-5 sm:col-12">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-subheading">
                  {project.subheading}
                </p>
                <div>
                <h3 className="project-description-heading">Description:</h3>
                <p className="project-description-text">
                  {project.description}
                </p>
                </div>
                <div>
                  <h3 className="project-tech">Technologies Used:</h3>
                  { project.tool? (
                  project.tool.split(",").map((tool, i) => (
                    <ul key={i}>
                      <li>
                        <p className="project-technologies">{tool}</p>
                      </li>
                    </ul>
                  )) 
                ) : ("")}
                </div>
                <Button
                  className="item inner-button-carousel"
                  type="button"
                  icon="pi pi-github"
                  label="VIEW CODE"
                  onClick={() => window.open(project.link)}
                />
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDescription;
