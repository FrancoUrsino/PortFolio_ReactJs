import React from "react";
import {DiscoverArg, ExtremeShop, PlanesPareja, Eficap, VayAdmin} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          {/* <ProjectsCard
            title="Blog Website"
            category="Website"
            image={VayAdmin}
          /> */}
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/eficap"}
            title="EFICAP"
            category="Diseño y programación"
            image={Eficap}
          />
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/ProyectoFinal_Ursino"}
            title="Mobile Application"
            category="Diseño y programación"
            image={DiscoverArg}
          />
        </div>
        <div className="px-6">

          <ProjectsCard
            url={"https://github.com/FrancoUrsino/PF-js_URSINO"}
            title="Infinity Logo"
            category="Diseño y programación"
            image={ExtremeShop}
          />
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/PF-Ursino"}
            title="Responsive website"
            category="Diseño y programación"
            image={PlanesPareja}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;