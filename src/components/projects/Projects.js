import React from "react";
import {DiscoverArg, ExtremeShop, PlanesPareja, Eficap, VayAdmin} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const {t} = useTranslation();

  return (
    <div>
      <Title title={t("projectTitle")} subTitle={t("projectSubTitle")} />
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
            category={t("categoryProjects")}
            image={Eficap}
          />
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/PF-js_URSINO"}
            title="Disc.over Arg"
            category={t("categoryProjects")}
            image={DiscoverArg}
          />
        </div>
        <div className="px-6">

          <ProjectsCard
            url={"https://github.com/FrancoUrsino/ProyectoFinal_Ursino"}
            title="Extreme Combat Shop"
            category={t("categoryProjects")}
            image={ExtremeShop}
          />
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/PF-Ursino"}
            title="Planes en Pareja"
            category={t("categoryProjects")}
            image={PlanesPareja}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
