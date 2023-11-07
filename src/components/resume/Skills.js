import React from "react";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import ResumeTitle from "./ResumeTitle";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const {t} = useTranslation();

  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Design and Languages Start here =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title={t("soft")} icon={<IoIosPaper />} />
        {/* web Development */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor py-2.5 -mb-1.5 uppercase"><span className="text-designColor text-lg">|</span>{t("softSkill1")}</p>
            <p className="text-base text-textColor py-2.5 -mb-1.5 uppercase"><span className="text-designColor text-lg">|</span>{t("softSkill2")}</p>
            <p className="text-base text-textColor py-2.5 -mb-1.5 uppercase"><span className="text-designColor text-lg">|</span>{t("softSkill3")}</p>
            <p className="text-base text-textColor py-2.5 -mb-1.5 uppercase"><span className="text-designColor text-lg">|</span>{t("softSkill4")}</p>
            <p className="text-base text-textColor py-2.5 -mb-1.5 uppercase"><span className="text-designColor text-lg">|</span>{t("softSkill5")}</p>
            <p className="text-base text-textColor py-2.5 -mb-1.5 uppercase"><span className="text-designColor text-lg">|</span>{t("softSkill6")}</p>
            <p className="text-base text-textColor py-2.5 -mb-1.5 uppercase"><span className="text-designColor text-lg">|</span>{t("softSkill7")}</p>
            <p className="text-base text-textColor py-2.5 -mb-1.5 uppercase"><span className="text-designColor text-lg">|</span>{t("softSkill8")}</p>
          </div>
        </div>
        <div className="col-span-9 md:col-span-4">
        <ResumeTitle title={t("lang")} icon={<FaFlag />} />
        {/* English */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">{t("en")}</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[30%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Spanish */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">{t("es")}</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      </div> 
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      
      {/* =============== Design and Languages End here ===================== */}

      {/* =============== Coading Start here ==================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title={t("hard")} icon={<BiCodeAlt />} />
        {/* web Design */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">HTML</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[50%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">CSS</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[45%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">SASS</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[35%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">JavaScript</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[35%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">React JS</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[35%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">NodeJs</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[20%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Firebase</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[30%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Git</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[65%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">GitHub</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[40%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Tailwind</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      
      {/* =============== Coading End here ==================== */}
    </div>
  );
};

export default Skills;

