import React, { useState } from "react";
import { Card } from "primereact/card";

export default function TechnologyComponent() {
  const [technology, setTechnology] = useState([
    {
      type: "Web Development",
      tools: [
        { id: 0, name: "HTML", logo: "HTML.svg" },
        { id: 1, name: "CSS", logo: "CSS.svg" },
        { id: 2, name: "Javascript", logo: "Javascript.svg" },
        { id: 3, name: "React", logo: "React.svg" },
        { id: 4, name: "Angular", logo: "Angular.svg" },
        { id: 5, name: ".NET", logo: ".NET.svg" },
      ],
    },
    {
        type: "Database",
        tools: [
          { id: 0, name: "MySQL", logo: "MySQL.svg" },
          { id: 1, name: "MongoDB", logo: "MongoDB.svg" }
        ],
    },
    {
      type: "Programming Language",
      tools: [
        { id: 0, name: "C", logo: "C.svg" },
        { id: 1, name: "C++", logo: "C++.svg" },
        { id: 2, name: "C#", logo: "Csharp.svg" },
        { id: 3, name: "Python", logo: "Python.svg" }
      ],
    },
    {
        type: "DataAnalytics",
        tools: [
          { id: 0, name: "Ms Excel", logo: "Excel.svg" },
          { id: 1, name: "Power BI", logo: "PowerBI.svg" }
        ],
    },
    {
        type: "Cloud and DevOps",
        tools: [
          { id: 0, name: "AWS", logo: "AWS.svg" },
          { id: 1, name: "Azure DevOps", logo: "AzureDevOps.svg" }
        ],
    },   
    {
        type: "Design - UX",
        tools: [
          { id: 0, name: "Figma", logo: "Figma.svg" },
        ],
    },   
  ]);

  return (
    <div className="technology-container">
   {technology.map((x, index) => (
        <div key={index}  className="type-container">
            <h3 className="tertiary-heading">{x.type}</h3>
          <ul className="tools-container">
            {x.tools.map((tool) => (
              <li className="tool-box" key={tool.id}>
                {/* #140c1c #0F0715 */}
                <img src={tool.logo} alt={tool.name} />
                <h2 className="tech-name">{tool.name}</h2>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
