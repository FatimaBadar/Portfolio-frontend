import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function TechnologyComponent() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

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
          className="grid"
          style={{ marginTop: "15px", marginLeft: "3%", margin: "auto" }}
        >
          <div className="lg:col-5 md:col-5 sm:col-7 mt-5">
            <div>
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

          <div className="lg:col-7 md:col-7 sm:col-5">
            {/* <div className="grid"> */}
            <div>
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

            <div className="grid">
              <div className="col">
                <div>
                  <h3 className="tertiary-heading">Database Systems</h3>
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

              <div className="col">
                <div>
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

            {/* </div> */}
          </div>
        </div>

        <div className="grid ml-5">
          <div style={{ marginTop: "-40px" }} className="col-5 col-offset-1">
            <div>
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

          <div className="col-4" style={{ marginTop: "-40px" }}>
            <div>
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
