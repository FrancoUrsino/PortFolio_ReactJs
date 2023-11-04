import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
// import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ServicesCard
          icons={<BiCodeAlt />}
          title="Web Development"
          subTitle="Actualmente realizo los sitios webs en React.js con uso de buenas prácticas y sintaxsis inclusiva para un mejor rendimiento"
        />
        <ServicesCard
          icons={<SiAntdesign />}
          title="Web Design"
          subTitle="Si bien no tengo certificados de diseño, pienso en cómo puede al usuario quedarle todo cómodo y con una bonita interfaz"
        />
      </div>
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Lo que es el seo de las webs que realizo, chequeo que todo esté correcto y de la manera más eficiente posible para posicionar estas webs en lo más alto"
      />
    </div>
  );
};

export default MyServices;
