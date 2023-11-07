import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import FunFactCard from "./FunFactCard";
import { useTranslation } from "react-i18next";

const FunFact = () => {
  const {t} = useTranslation();

  return (
    <div className="px-0 grid grid-cols-1 md:grid-cols-3 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des={t("7cert")} />
      <FunFactCard icon={<SiAntdesign />} des={t("laborExper")} />
      <FunFactCard icon={<BiCodeAlt />} des={t("finalProjects")} />
    </div>
  );
};

export default FunFact;
