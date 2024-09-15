import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { FaFlag, FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiNextdotjs, SiPython, SiBootstrap, SiPostman } from "react-icons/si";
import ResumeTitle from "./ResumeTitle";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

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
        <div className="py-4 grid grid-cols-3 md:grid-cols-4 gap-6">
          {/* HTML */}
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-6xl text-orange-600" />
            <p className="text-sm text-textColor mt-2">HTML</p>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-6xl text-blue-600" />
            <p className="text-sm text-textColor mt-2">CSS</p>
          </div>

          {/* SASS */}
          <div className="flex flex-col items-center">
            <FaSass className="text-6xl text-pink-500" />
            <p className="text-sm text-textColor mt-2">SASS</p>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <FaJs className="text-6xl text-yellow-500" />
            <p className="text-sm text-textColor mt-2">JavaScript</p>
          </div>

          {/* React */}
          <div className="flex flex-col items-center">
            <FaReact className="text-6xl text-blue-400" />
            <p className="text-sm text-textColor mt-2">React JS</p>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-6xl text-black" />
            <p className="text-sm text-textColor mt-2">Next.js</p>
          </div>

          {/* Java */}
          <div className="flex flex-col items-center">
            <FaJava className="text-6xl text-red-600" />
            <p className="text-sm text-textColor mt-2">Java</p>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center">
            <SiPython className="text-6xl text-yellow-400" />
            <p className="text-sm text-textColor mt-2">Python</p>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-6xl text-green-500" />
            <p className="text-sm text-textColor mt-2">NodeJs</p>
          </div>

          {/* Firesbase */}
          <div className="flex flex-col items-center">
            <SiFirebase className="text-6xl text-yellow-500" />
            <p className="text-sm text-textColor mt-2">Firebase</p>
          </div>

          {/* Git */}
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-6xl text-orange-500" />
            <p className="text-base text-textColor mt-2">Git</p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <FaGithub className="text-6xl text-black" />
            <p className="text-base text-textColor mt-2">GitHub</p>
          </div>

          {/* Tailwind */}
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-6xl text-blue-400" />
            <p className="text-xs text-textColor mt-2">Tailwind</p>
          </div>

          {/* Bootstrap */}
          <div className="flex flex-col items-center">
            <SiBootstrap className="text-6xl text-purple-600" />
            <p className="text-xs text-textColor mt-2">Bootstrap</p>
          </div>

          {/* Postman */}
          <div className="flex flex-col items-center">
            <SiPostman className="text-6xl text-orange-600" />
            <p className="text-xs text-textColor mt-2">Postman</p>
          </div>

          <div className="flex flex-col items-center">
            <FaDatabase className="text-6xl text-blue-700" />
            <p className="text-base text-textColor mt-2">SQL</p>
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

