import React, { useState } from "react";

export default function SkillsComponent() {
  const [webDev, setWebDev] = useState([
    { id: 0, name: "HTML", logo: "HTML.svg" },
    { id: 1, name: "CSS", logo: "CSS.svg" },
    { id: 2, name: "Javascript", logo: "Javascript.svg" },
    { id: 3, name: "React", logo: "React.svg" },
    { id: 4, name: "Angular", logo: "Angular.svg" },
    { id: 5, name: ".NET", logo: ".NET.svg" },
  ]);
  const [database, setDatabase] = useState([
    { id: 0, name: "MySQL", logo: "MySQL.svg" },
    { id: 1, name: "MongoDB", logo: "MongoDB.svg" },
  ]);
  const [programming, setProgramming] = useState([
    { id: 0, name: "C", logo: "C.svg" },
    { id: 1, name: "C++", logo: "C++.svg" },
    { id: 2, name: "C#", logo: "Csharp.svg" },
    { id: 3, name: "Python", logo: "Python.svg" },
  ]);
  const [dataAnalytics, setDataAnalytics] = useState([
    { id: 0, name: "Ms Excel", logo: "Excel.svg" },
    { id: 1, name: "Power BI", logo: "PowerBI.svg" },
  ]);
  const [design, setDesign] = useState([
    { id: 0, name: "Figma", logo: "Figma.svg" },
    { id: 0, name: "Lucidchart", logo: "LucidChart.png" },
    { id: 0, name: "Spline", logo: "Spline.png" },
  ]);
  const [cloud, setCloud] = useState([
    { id: 0, name: "AWS", logo: "AWS.svg" },
    { id: 1, name: "Azure DevOps", logo: "AzureDevops.png" },
  ]);

  return (
    <div className="skills">
      <h2
        className="secondary-heading"
        style={{ fontWeight: 800, marginLeft: "9vh" }}
      >
        Skills
      </h2>

      <div className="grid">
        <div className="md:col-9 sm:col-7">
          <div>
            <h3 className="tertiary-heading">Web Development</h3>
            <ul className="tools-container">
              {webDev.map((tool) => (
                <li className="tool-box" key={tool.id}>
                  {/* #140c1c #0F0715 */}
                  <img src={tool.logo} alt={tool.name} />
                  <h2 className="tech-name">{tool.name}</h2>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-3 sm:col-5">
          <div>
            <h3 className="tertiary-heading">Database Systems</h3>
            <ul className="tools-container">
              {database.map((tool) => (
                <li className="tool-box" key={tool.id}>
                  {/* #140c1c #0F0715 */}
                  <img src={tool.logo} alt={tool.name} />
                  <h2 className="tech-name">{tool.name}</h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid ml-4">
        <div lassName="col-4">
          <div>
            <h3 className="tertiary-heading">Programming language</h3>
            <ul className="tools-container">
              {programming.map((tool) => (
                <li className="tool-box" key={tool.id}>
                  <img src={tool.logo} alt={tool.name} />
                  <h2 className="tech-name">{tool.name}</h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-5 col-offset-1">
          <div>
            <h3 className="tertiary-heading">Design</h3>
            <ul className="tools-container">
              {design.map((tool) => (
                <li className="tool-box" key={tool.id}>
                  {/* #140c1c #0F0715 */}
                  <img src={tool.logo} alt={tool.name} />
                  <h2 className="tech-name">{tool.name}</h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid">
        <div>
          <h3 className="tertiary-heading">Cloud</h3>
          <ul className="tools-container">
            {cloud.map((tool) => (
              <li className="tool-box" key={tool.id}>
                <img src={tool.logo} alt={tool.name} />
                <h2 className="tech-name">{tool.name}</h2>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3 className="tertiary-heading">Data Analytics</h3>
          <ul className="tools-container">
            {dataAnalytics.map((tool) => (
              <li className="tool-box" key={tool.id}>
                <img src={tool.logo} alt={tool.name} />
                <h2 className="tech-name">{tool.name}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
