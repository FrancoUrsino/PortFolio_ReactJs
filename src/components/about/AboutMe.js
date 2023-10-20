import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hola! soy Franco</h2>
          <p className="text-sm leading-6 ">
          Desde 2022 empecé a estudiar como autodidacta diferentes lenguajes de programación tanto de Front como de Back, pero mi pasión por mejorar la experiencia del usuario hizo que me interese más la parte FrontEnd. Al haber realizado varios cursos en diferentes instituciones me incentivo a querer incursionar más por lo que actualmente me encuentro estudiando una carrera de grado en el área. 
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Edad:</span>
            23
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residencia:</span>
            Argentina
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Disponible
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Dirección:</span>
            Caballito | Buenos Aires
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Teléfono:</span>
            +54 1138460917
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Mail:</span>
            francooursinoo@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
