import React from "react";
import TechnologyComponent from "./TechnologyComponent";

export default function SkillsComponent() {
  return (
    <div className="skills">
      <h2
        className="secondary-heading"
        style={{ fontWeight: 800, marginLeft: "9vh" }}
      >
        Skills
      </h2>
      <TechnologyComponent />
    </div>

    //    <div className="skills">
    //  <div className="card flex md:justify-content-center">
    //       <ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
    //         {technologies.map((technology) => (
    //           <li
    //             key={technology.id}
    //             className={`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 flex align-items-center justify-content-between ${
    //               selectedTechnology?.id === technology.id && "border-primary"
    //             }`}
    //           >
    //             <div className="flex align-items-center gap-2">
    //               <img
    //                 alt="technology.name"
    //                 src={technology.logo}
    //                 style={{ width: "32px"}}
    //               />
    //               <span className="font-bold">{technology.name}</span>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>  </div>
  );
}
