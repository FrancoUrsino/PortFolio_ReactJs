import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="Acerca" subTitle="de mi" />
      <AboutMe />
      <Title title="Mis" subTitle="servicios" />
      <MyServices />
      <Title title="Otros" subTitle="datos" />
      <FunFact />
    </section>
  );
};

export default About;
