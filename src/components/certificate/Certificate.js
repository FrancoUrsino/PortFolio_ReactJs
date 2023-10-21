import React from "react";
import Title from "../home/Title";
import { CarreraFlex, Carrera, DesarrolloWeb, ReactJs, JavaScript, Python } from "../../assets";
import BlogCard from "./CertificateCard";

const Blog = () => {
  return (
    <div>
      <Title title="Certificados" subTitle="Obtenidos" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={CarreraFlex}
            title="Septiembre 2023"
            subTitle="Carrera React Flex"
            category="Carrera | CODERHOUSE"
          />
          <BlogCard
            image={ReactJs}
            title="Septiembre 2023"
            subTitle="React Js"
            category="Curso | CODERHOUSE"
          />
          <BlogCard
            image={DesarrolloWeb}
            title="Enero 2023"
            subTitle="Desarrollo Web"
            category="Curso | CODERHOUSE"
          />
        </div>
        <div className="px-6">
          <BlogCard
            image={Carrera}
            title="Septiembre 2023"
            subTitle="Carrera React"
            category="Carrera | CODERHOUSE"
          />
          <BlogCard
            image={JavaScript}
            title="Junio 2023"
            subTitle="Javascript"
            category="Curso | CODERHOUSE"
          />
          <BlogCard
            image={Python}
            title="Febrero 2023"
            subTitle="Python"
            category="Curso | UNLU (universidad nacional de lujan)"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
