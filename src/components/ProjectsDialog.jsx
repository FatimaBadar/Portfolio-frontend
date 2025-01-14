import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";
import { Sidebar } from "primereact/sidebar";
import {Dialog} from "primereact/dialog"

const ProjectDialog = ({ projectData }) => {
  const [visible, setVisible] = useState(false);
  let projectTitle = projectData.title + " - " + projectData.description;

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
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    // console.log("item: ", item)
    // let thumbnailImages = item.files
    // console.log("thumbnail images: ",thumbnailImages)
    return (
      <>
        <img
          src={item.fileName}
          alt={item.title}
          style={{ display: "block", width: "150px", height: "50px" }}
        />
      </>
    );
  };

  return (
    <div className="project-description card flex justify-content-center">
      {/* <Sidebar visible={visible} onHide={() => setVisible(false)}  */}
      {/* fullScreen position="top" >*/} 
        <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
        <div className="image-gallery">
          <Galleria
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            style={{
              // maxWidth: "640px",
              width: "420px",
              height: "700px",
            }}
            item={itemTemplate}
            // showThumbnails={false}
            showItemNavigators
            thumbnail={thumbnailTemplate}
            // circular
            // autoPlay
            transitionInterval={2000}
          />
        </div>
        <h2 className="project-title">{projectTitle}</h2>
        
    <p className="mb-5">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
        non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        </Dialog>

      {/* </Sidebar> */}
      <Button
        label="MORE"
        icon="pi pi-window-maximize"
        onClick={() => setVisible(true)}
        className="item inner-button-carousel2"
      />
    </div>
  );
};

export default ProjectDialog;
