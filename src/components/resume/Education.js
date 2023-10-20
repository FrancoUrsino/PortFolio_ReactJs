import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experiencia laboral" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Santander Rio (Entidad bancaria)"
          subTitle="Empleado"
          des="Lorem ipsum dolor sit amet,consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="Sep 2023 - Nov 2023"
          title="BA Multiplica (Programa del gobierno)"
          subTitle="Profesor"
          des="Capacitación a personas de diferentes para conocimientos tanto de habilidades blandas como habilidades duras de:
          formación en linkedin y búsqueda de empleo, microsoft excel, análisis de datos, microsoft powerpoint, desarrollo del pensamiento creativo, desarrollo web (HTML, CSS Y JAVASCRIPT) y pensamiento lógico formal"
        />
        <ResumeCard
          badge="Dic 2022 - Ene 2023"
          title="Eficap (Diseño y desarrollo de sitio web)"
          subTitle="Desarrollador web"
          des="Sitio web adaptable a múltiples dispositivos realizado con HTML, SCSS, JS. Reuniones semanales para que el cliente pudiera ver como iba quedando el diseño de la web, además de escucha activa para la conformidad del mismo"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Educación" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2023 - Actualidad"
          title="Tecnicatura universitaria en tecnologias web"
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
