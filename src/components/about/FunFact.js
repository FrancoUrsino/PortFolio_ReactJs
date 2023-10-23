import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-1 md:grid-cols-3 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="7 certificados" />
      <FunFactCard icon={<SiAntdesign />} des="+6 años de experiencia laboral" />
      <FunFactCard icon={<BiCodeAlt />} des="5 proyectos finalizados" />
    </div>
  );
};

export default FunFact;
