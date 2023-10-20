import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-3 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="7 certificados" />
      <FunFactCard icon={<SiAntdesign />} des="6 proyectos finalizados" />
      <FunFactCard icon={<BiCodeAlt />} des="100 hours of coding" />
    </div>
  );
};

export default FunFact;
