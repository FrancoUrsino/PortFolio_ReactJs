import React from "react";
import Title from "../home/Title";
import Education from "./Education";
import Skills from "./Skills";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const {t} = useTranslation();

  return (
    <section id="resume">
      <Title title={t("my1")} subTitle={t("formation")} />
      <Education />
      <Title title={t("title2")} subTitle={t("skills")} />
      <Skills />
    </section>
  );
};

export default Resume;
