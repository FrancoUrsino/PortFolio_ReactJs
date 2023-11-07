import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";
import { useTranslation } from "react-i18next";

const Education = () => {
  const {t} = useTranslation();

  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title={t("laboralExpTitle")} icon={<MdWork />} />
        <ResumeCard
          badge=""
          title={"Santander Rio"+t("bankEnt")}
          subTitle={t("employee")}
          des={t("santanderDes")}
        />
        <ResumeCard
          badge="Sep 2023 - Nov 2023"
          title={"BA Multiplica"+t("BAM")}
          subTitle="Profesor"
          des={t("bamDes")}
        />
        <ResumeCard
          badge={"Dic 2022 - "+t("jan")+" 2023"}
          title={"Eficap"+t("eficapWeb")}
          subTitle={t("eficap")}
          des={t("eficapDes")}
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title={t("education")} icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2023 - Actualidad"
          title={t("uno")}
          subTitle="UNO (universidad nacional del oeste)"
          // des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="Oct 2022 - Sep 2023"
          title="Carrera de desarrollador Front-End React"
          subTitle="Coderhouse"
          // des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2017 - 2020"
          title="Bachiller con orientación en gestión y administración especializado en comercio exterior"
          subTitle="IEA secundario acelerado"
          // des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
      </div>
    </div>
  );
};

export default Education;
