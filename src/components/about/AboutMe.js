import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
const {t} = useTranslation();

  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">{t("greeting")}</h2>
          <p className="text-sm leading-6 ">{t("aboutText")}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">{t("age")}</span>
            23
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">{t("residence")}</span>
            Argentina
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">{t("freelance")}</span>
            {t("freeAvail")}
          </li>
          <li className="aboutRightLi lg:text-xs">
            <span className="aboutRightLiSpan text-base">{t("direction")}</span>
            Caballito | Buenos Aires
          </li>
          <li className="aboutRightLi lg:text-xs">
            <span className="aboutRightLiSpan text-base">{t("phone")}</span>
            +541138460917
          </li>
          <li className="aboutRightLi lg:text-xs">
            <span className="aboutRightLiSpan text-base">{t("mail")}</span>
            francooursinoo@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
