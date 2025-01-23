import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";

const ProjectDescription = () => {
  const [visible, setVisible] = useState(false);
  const [projectData, setProjectData] = useState([])
  const server = import.meta.SERVER_URL || "http://localhost:3000";

  useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    await axios
      .get(`${server}/api/getProjects`)
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
    {
      id: "7",
      title: "Restaurant Management System",
      fileName: "projects/Restaurant.JPG",
    },
    {
      id: "8",
      title: "Restaurant Management System",
      fileName: "projects/Restaurant Management System/Main.JPG",
    },
    {
      id: "9",
      title: "Restaurant Management System",
      fileName: "projects/Restaurant Management System/Welcome.JPG",
    },
    {
      id: "10",
      title: "Restaurant Management System",
      fileName: "projects/Restaurant Management System/Menu.JPG",
    },
    {
      id: "11",
      title: "Restaurant Management System",
      fileName: "projects/Restaurant Management System/Reservation.JPG",
    },
    {
      id: "12",
      title: "Fashion Store",
      fileName: "projects/FashionStore.JPG",
    },
    {
      id: "13",
      title: "Fashion Store",
      fileName: "projects/Fashion Store/Overview.JPG",
    },
    {
      id: "14",
      title: "Fashion Store",
      fileName: "projects/Fashion Store/Register.JPG",
    },
    {
      id: "15",
      title: "Fashion Store",
      fileName: "projects/Fashion Store/Login.JPG",
    },
    {
      id: "16",
      title: "Fashion Store",
      fileName: "projects/Fashion Store/Product.JPG",
    },
    {
      id: "17",
      title: "Fashion Store",
      fileName: "projects/Fashion Store/Add Product.JPG",
    },
    {
      id: "18",
      title: "Fashion Store",
      fileName: "projects/Fashion Store/Delete Product.JPG",
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
//     {/*// <div style={{background: "rgb(148, 167, 192)"}}> 
//      <div style={{background:"linear-gradient(86deg, rgba(148,189,192,1) 0%, rgba(148,175,192,1) 100%)"}}>  
//  <h2
//         className="secondary-heading"
//         style={{ fontWeight: 800,  marginTop: "50px", textAlign: "center" }}
//       >
//         Projects
//       </h2>  /* background: rgb(128, 126, 133);  */}
        <div style={{background:"linear-gradient(86deg, rgba(131,126,133,1) 0%, rgba(199,197,203,1) 100%)"}} > 

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
