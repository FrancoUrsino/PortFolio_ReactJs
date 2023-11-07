import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
// import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";
import { useTranslation } from "react-i18next";

const MyServices = () => {
  const {t} = useTranslation();

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ServicesCard
          icons={<BiCodeAlt />}
          title={t("webD")}
          subTitle={t("webDText")}
        />
        <ServicesCard
          icons={<SiAntdesign />}
          title={t("webDesing")}
          subTitle={t("webDesingText")}
        />
      </div>
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle={t("seoText")}
      />
    </div>
  );
};

export default MyServices;
