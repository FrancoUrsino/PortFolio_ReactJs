import React from "react";
import { useTranslation } from "react-i18next";

const ResumeCard = ({ badge, title, subTitle, des }) => {
  const {t} = useTranslation();
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
      {badge === "" ? (
        <h6 className="w-26 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">
          Dic 2022-{t("present")}
        </h6>
      ) : (
        <h6 className="w-24 text-center text-sm py-[1px] text-[#999] border-[1px] border-zinc-600 rounded-sm">
          {badge}
        </h6>
      )}
      <h2 className="text-lg font-titleFont text-gray-200 font-medium">
        {title}
      </h2>
      <p className="text-sm text-[#999] -mt-2">{subTitle}</p>
      <p className="text-base text-[#999] font-medium pr-10">{des}</p>
    </div>
  );
};

export default ResumeCard;
