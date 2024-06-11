import React from "react";
import {DiscoverArg, ExtremeShop, PlanesPareja, Eficap, PalAlma, BioTrust} from "../../assets";
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
          <ProjectsCard
            title="Biotrust"
            category={t("categoryProjects")}
            image={BioTrust}
          />
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/ProyectoFinal_Ursino"}
            title="Extreme Combat Shop"
            category={t("categoryProjects")}
            image={ExtremeShop}
          />
          
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/eficap"}
            title="EFICAP"
            category={t("categoryProjects")}
            image={Eficap}
          />
        </div>
        <div className="px-6">
        <ProjectsCard
            title="Pa'l Alma"
            category={t("categoryProjects")}
            image={PalAlma}
          />
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/PF-js_URSINO"}
            title="Disc.over Arg"
            category={t("categoryProjects")}
            image={DiscoverArg}
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
