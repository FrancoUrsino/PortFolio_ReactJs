import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import MyServices from "./MyServices";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation()

  return (
    <section id="about" className="w-full">
      <Title title={t("title1")} subTitle={t("subTitle1")} />
      <AboutMe />
      <Title title={t("title2")} subTitle={t("subTitle2")} />
      <MyServices />
      <Title title={t("title3")} subTitle={t("subTitle3")} />
      <FunFact />
    </section>
  );
};

export default About;
