import React from "react";
import { Link } from "react-router-dom";

const ProjectsCard = ({ url, image, title, category, technologies = [] }) => {
  return (
    <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
      <Link
        to={url}
        target="blank"
        className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group"
      >
        <img
          className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt={title}
        />
        <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div>
      </Link>
      <h3 className="font-titleFont text-lg font-semibold text-[#ccc]">
        {title}
      </h3>
      <p className="text-base text-gray-400 -mt-1">{category}</p>
      {/* Sección de Tecnologías con íconos */}
      <div className="flex space-x-4 mt-4">
        {technologies.length > 0 ? (
          technologies.map((tech) => (
            <span key={tech.name} className="text-2xl text-gray-500">
              {tech.icon} {/* Mostrar el ícono */}
            </span>
          ))
        ) : (
          <p className="text-sm text-gray-500">No technologies listed</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
