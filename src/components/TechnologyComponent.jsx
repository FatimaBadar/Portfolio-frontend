import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
// import axios from "axios";

export default function TechnologyComponent() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  // const server = import.meta.SERVER_URL || "http://localhost:3000";

  // const [webDev, setWebDev] = useState([]);
  // const [database, setDatabase] = useState([]);
  // const [programming, setProgramming] = useState([]);
  // const [dataAnalytics, setDataAnalytics] = useState([]);
  // const [design, setDesign] = useState([]);
  // const [cloud, setCloud] = useState([]);
  const [webDev, setWebDev] = useState([
    { id: 0, name: "HTML", logo: "icons/HTML.svg" },
    { id: 1, name: "CSS", logo: "icons/CSS.svg" },
    { id: 2, name: "Javascript", logo: "icons/Javascript.svg" },
    { id: 3, name: "React", logo: "icons/React.svg" },
    { id: 4, name: "Angular", logo: "icons/Angular.svg" },
    { id: 5, name: ".NET", logo: "icons/.NET.svg" },
  ]);
  const [database, setDatabase] = useState([
    { id: 0, name: "MySQL", logo: "icons/MySQL.svg" },
    { id: 1, name: "MongoDB", logo: "icons/MongoDB.svg" },
  ]);
  const [programming, setProgramming] = useState([
    { id: 0, name: "C", logo: "icons/C.svg" },
    { id: 1, name: "C++", logo: "icons/C++.svg" },
    { id: 2, name: "C#", logo: "icons/Csharp.svg" },
    { id: 3, name: "Python", logo: "icons/Python.svg" },
  ]);
  const [dataAnalytics, setDataAnalytics] = useState([
    { id: 0, name: "Ms Excel", logo: "icons/Excel.svg" },
    { id: 1, name: "Power BI", logo: "icons/PowerBI.svg" },
  ]);
  const [design, setDesign] = useState([
    { id: 0, name: "Figma", logo: "icons/Figma2.svg" },
    { id: 0, name: "Lucidchart", logo: "icons/LucidChart.png" },
    { id: 0, name: "Spline", logo: "icons/Spline.webp" },
  ]);
  const [cloud, setCloud] = useState([
    { id: 0, name: "AWS", logo: "icons/AWS.svg" },
    { id: 1, name: "Azure DevOps", logo: "icons/AzureDevops.png" },
  ]);
  // useEffect(() => {
    // getTechnologies();
  // }, [])

  // const getTechnologies = async () => {
  //   await axios
  //   .get(`${server}/api/getTechnologies`)
  //   .then((response) => {
  //     console.log(response.data);
      
  //     response.data.data.forEach(item => {
  //       switch(item.category){
  //         case "Web Development":
  //           setWebDev((prev) => [...prev, item]);
  //           break;
  //         case "Database":
  //           setDatabase((prev) => [...prev, item]);
  //           break;
  //         case "Programming":
  //           setProgramming((prev) => [...prev, item]);
  //           break;
  //         case "Data Analytics":
  //           setDataAnalytics((prev) => [...prev, item]);
  //           break;
  //         case "Design":
  //           setDesign((prev) => [...prev, item]);
  //           break;
  //         case "Cloud":
  //           setCloud((prev) => [...prev, item]);
  //           break;
  //         default:
  //           console.warn(`Unknown category: ${item.category}`);
  //       }  
  //     });

  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   });
  // }

  return (
    <div className="skills" ref={ref} id="skills">
      <div className={`${inView ? "about-visible" : "about-hidden"}`}>
        <h2
          className="secondary-heading"
          style={{ fontWeight: 900, letterSpacing: "2px" }}
        >
          Skills
        </h2>

        <div
          className="grid justify-content-center"
          style={{ marginTop: "15px", marginLeft: "3%", margin: "auto" }}
        >
          <div className="lg:col-5 md:col-5 sm:col-8">  {/* sm:col-7  */}
            <div className="prog">
              <h3 className="tertiary-heading">Web Development</h3>
              <ul className="tools-container">
                {webDev.map((tool, index) => (
                  <li className="tool-box" key={`webDev-${index}`}>
                    <img src={tool.logo} alt={tool.name} />
                    <h2 className="tech-name">{tool.name}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-7 md:col-7 "> {/* sm:col-5 */}
            <div className="prog">
              <h3 className="tertiary-heading">Programming Languages</h3>
              <ul className="tools-container">
                {programming.map((tool, index) => (
                  <li className="tool-box" key={`prog-${index}`}>
                    <img src={tool.logo} alt={tool.name} />
                    <h2 className="tech-name">{tool.name}</h2>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid justify-content-center">
              <div className="lg:col-6 sm:col-6">
                <div className="prog">
                  <h3 className="tertiary-heading">Databases</h3>
                  <ul className="tools-container">
                    {database.map((tool, index) => (
                      <li className="tool-box" key={`db-${index}`}>
                        <img src={tool.logo} alt={tool.name} />
                        <h2 className="tech-name">{tool.name}</h2>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-6 sm:col-6">
                <div className="prog">
                  <h3 className="tertiary-heading">Data Analytics</h3>
                  <ul className="tools-container">
                    {dataAnalytics.map((tool, index) => (
                      <li className="tool-box" key={`analytics-${index}`}>
                        <img src={tool.logo} alt={tool.name} />
                        <h2 className="tech-name">{tool.name}</h2>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid ml-5 justify-content-center">
          <div className="md:col-6 lg:col-6 lg:col-offset-0 small-margin">
            <div className="prog design">
              <h3 className="tertiary-heading">Design</h3>
              <ul className="tools-container">
                {design.map((tool, index) => (
                  <li className="tool-box" key={`design-${index}`}>
                    <img src={tool.logo} alt={tool.name}/>
                    <h2 className="tech-name">{tool.name}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-6 small-margin">
            <div className="prog">
              <h3 className="tertiary-heading">Cloud/ DevOps</h3>
              <ul className="tools-container">
                {cloud.map((tool, index) => (
                  <li className="tool-box" key={`cloud-${index}`}>
                    <img src={tool.logo} alt={tool.name} />
                    <h2 className="tech-name">{tool.name}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
