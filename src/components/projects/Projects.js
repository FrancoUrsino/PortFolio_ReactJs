import React from "react";
import { DiscoverArg, ExtremeShop, PlanesPareja, Eficap, PalAlma, BioTrust, MingArtInk, CineFilm } from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import { useTranslation } from "react-i18next";
import { FaFlag, FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiNextdotjs, SiPython, SiBootstrap, SiPostman } from "react-icons/si";



const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title title={t("projectTitle")} subTitle={t("projectSubTitle")} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/CineFilm"}
            title="CineFilm"
            category={t("categoryProjects")}
            image={CineFilm}
            technologies={[
              { name: "React js", icon: <FaReact /> },
              { name: "Tailwind", icon: <SiTailwindcss /> },
              { name: "FireBase", icon: <SiFirebase /> },
            ]}
          />
          <ProjectsCard
            url={"https://pal-alma.vercel.app/"}
            title="Pa'l Alma"
            category={t("categoryProjects2")}
            image={PalAlma}
            technologies={[
              { name: "Next js", icon: <SiNextdotjs /> },
              { name: "Tailwind", icon: <SiTailwindcss /> },
              { name: "Sass", icon: <FaSass /> },
            ]}
          />
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/Extreme-combat-shop"}
            title="Extreme Combat Shop"
            category={t("categoryProjects")}
            image={ExtremeShop}
            technologies={[
              { name: "React js", icon: <FaReact /> },
              { name: "Tailwind", icon: <SiTailwindcss /> },
              { name: "FireBase", icon: <SiFirebase /> },
            ]}
          />

          <ProjectsCard
            url={"https://github.com/FrancoUrsino/eficap"}
            title="EFICAP"
            category={t("categoryProjects")}
            image={Eficap}
            technologies={[
              { name: "Html", icon: <FaHtml5 /> },
              { name: "Sass", icon: <FaSass/> },
              { name: "Javascript", icon: <FaJs /> },
            ]}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/biotrust"}
            title="Biotrust"
            category={t("categoryProjects2")}
            image={BioTrust}
            technologies={[
              { name: "Next js", icon: <SiNextdotjs /> },
              { name: "Tailwind", icon: <SiTailwindcss /> },
              { name: "Sass", icon: <FaSass /> },
            ]}
          />
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/Ming-ink-art"}
            title="Ming Art Ink"
            category={t("categoryProjects")}
            image={MingArtInk}
            technologies={[
              { name: "Html", icon: <FaHtml5 /> },
              { name: "Sass", icon: <FaSass/> },
              { name: "Javascript", icon: <FaJs /> },
            ]}
          />
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/Disc.over-ARG"}
            title="Disc.over Arg"
            category={t("categoryProjects")}
            image={DiscoverArg}
            technologies={[
              { name: "Html", icon: <FaHtml5 /> },
              { name: "Sass", icon: <FaSass/> },
              { name: "Javascript", icon: <FaJs /> },
            ]}
          />
          <ProjectsCard
            url={"https://github.com/FrancoUrsino/PF-Ursino"}
            title="Planes en Pareja"
            category={t("categoryProjects")}
            image={PlanesPareja}
            technologies={[
              { name: "Html", icon: <FaHtml5 /> },
              { name: "Sass", icon: <FaSass/> },
              { name: "Javascript", icon: <FaJs /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
