import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full px-6">
      <div className="grid grid-cols-1 mdl:grid-cols-2 gap-6">
        <div className="col-span-1 mdl:col-span-2">
          <ResumeTitle title={t("laboralExpTitle")} icon={<MdWork />} />
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <ResumeCard
            badge=""
            title={"Santander Rio" + t("bankEnt")}
            subTitle={t("employee")}
            des={t("santanderDes")}
          />
          <ResumeCard
            badge="Oct 2023 - Dic 2023"
            title={"Pa'l Alma" + t("Web")}
            subTitle={t("Dev")}
            des={t("palDes")}
          />

        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <ResumeCard
            badge="Feb 2024 - May 2024"
            title={"BioTrust" + t("Web")}
            subTitle={t("Dev")}
            des={t("BioDes")}
          />
          <ResumeCard
            badge="Sep 2023 - Nov 2023"
            title={"BA Multiplica" + t("BAM")}
            subTitle="Profesor"
            des={t("bamDes")}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <ResumeCard
            badge={"Dic 2022 - " + t("jan") + " 2023"}
            title={"Eficap" + t("Web")}
            subTitle={t("eficap")}
            des={t("eficapDes")} />
        </div>
      </div>

      <div className="w-full h-full hidden lgl:flex justify-center items-center my-8">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      <div className="grid grid-cols-1 mdl:grid-cols-2">
        <div className="col-span-1 mdl:col-span-2">
          <ResumeTitle title={t("education")} icon={<GiGraduateCap />} />
        </div>
        <div className="col-span-1">
          <ResumeCard
            badge="2023 - Actualidad"
            title={t("uno")}
            subTitle="UNO (universidad nacional del oeste)"
          />
          <ResumeCard
            badge="Oct 2022 - Sep 2023"
            title="Carrera de desarrollador Front-End React"
            subTitle="Coderhouse"
          />
        </div>
        <div className="col-span-1">
          <ResumeCard
            badge="2017 - 2020"
            title="Bachiller con orientación en gestión y administración especializado en comercio exterior"
            subTitle="IEA secundario acelerado"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;

