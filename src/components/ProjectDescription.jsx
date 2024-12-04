import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";

const ProjectDescription = () => {
  const [visible, setVisible] = useState(false);
  const [projectData, setProjectData] = useState([
    {
      id: "1",
      title: "OneClicks",
      description: "Multi-platform Adverstising Management tool",
      fileName: "projects/OneClicks.JPG",
      tools: ["Next.js", ".NET", "MongoDB", "PrimeReact", "MaterialUI"],
      link: "https://github.com/FatimaBadar/OneClicks-frontend",
    },
    {
      id: "2",
      title: "UniRideHub",
      description: "Carpooling Website",
      fileName: "projects/UniRideHub.JPG",
      tools: ["React.js", ".NET", "MySQL", "PrimeReact", "MaterialUI"],
      link: "https://github.com/FatimaBadar/UniRideHub",
    },
    {
      id: "3",
      title: "Restaurant",
      description: "Restaurant Management portal",
      fileName: "projects/Restaurant.JPG",
      link: "https://github.com/FatimaBadar/Restaurant-management",
    },
    {
      id: "4",
      title: "Fashion Store",
      description: "E-Commerce website",
      fileName: "projects/FashionStore.JPG",
      link: "https://github.com/FatimaBadar/E-Commerce-Fashion-Store",
    },
  ]);

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

  // useEffect(() => {
  //         PhotoService.getImages().then(data => setImages(data));
  // }, []);
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
    <>
      {/* <h2
        className="secondary-heading"
        style={{ fontWeight: 800,  marginTop: "50px", textAlign: "center" }}
      >
        Projects
      </h2> */}
      <div className="project-description">
        {/* <ul style={{ backgroundColor: "white" }}>
        {projectData.map((project, index) => (
          <div key={index}>
            <h1>{project.title}</h1>
            {images
              .filter((x) => x.title === project.title)
              .map((matchingImage, i) => {
                <li>
                  <img
                    key={i}
                    src={matchingImage.fileName}
                    alt={matchingImage.title}
                    style={{
                      display: "block",
                      width: "150px",
                      marginBottom: "10px",
                    }}
                  />
                </li>;
              })}
          </div>
        ))}
      </ul> */}

        {projectData.map((project, index) => (
          <div key={index} className="project-section">
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
                <p className="project-description-text">
                  {project.description}
                </p>

                <div>
                  <h3 className="project-tech">Technologies Used:</h3>
                  {project.tools?.map((tool, i) => (
                    <ul key={i}>
                      <li>
                        <p>{tool}</p>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectDescription;
