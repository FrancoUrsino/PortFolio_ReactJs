import React from "react";
import Title from "../home/Title";
import { CarreraFlex, Carrera, DesarrolloWeb, ReactJs, JavaScript, Python, BaAlumno, BaProfesor } from "../../assets";
import BlogCard from "./CertificateCard";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title title={t("certificateTitle")} subTitle={t("certificateSubTitle")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={BaProfesor}
            title={t("courseNov")}
            subTitle="Profesor de Herramientas digitales"
            category={t("courseCategoryCourse") + " | Gobierno de la Ciudad"}
          />
          <BlogCard
            image={CarreraFlex}
            title={t("courseSep")}
            subTitle="Carrera React Flex"
            category={t("courseCategoryCarrer") + " | CODERHOUSE"}
          />
          <BlogCard
            image={ReactJs}
            title={t("courseSep")}
            subTitle="React Js"
            category={t("courseCategoryCourse") + " | CODERHOUSE"}
          />
          <BlogCard
            image={DesarrolloWeb}
            title={t("courseJan")}
            subTitle="Desarrollo Web"
            category={t("courseCategoryCourse") + " | CODERHOUSE"}
          />
        </div>
        <div className="px-6">
          <BlogCard
            image={Carrera}
            title={t("courseSep")}
            subTitle="Carrera React"
            category={t("courseCategoryCarrer") + " | CODERHOUSE"}
          />
          <BlogCard
            image={JavaScript}
            title={t("courseJun")}
            subTitle="Javascript"
            category={t("courseCategoryCourse") + " | CODERHOUSE"}
          />
          <BlogCard
            image={BaAlumno}
            title={t("courseJan")}
            subTitle="Herramientas Digitales"
            category={t("courseCategoryCourse") + " | Gobierno de la Ciudad"}
          />
          <BlogCard
            image={Python}
            title={t("courseFeb")}
            subTitle="Python"
            category={t("courseCategoryCourse") + " | UNLU (universidad nacional de lujan)"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
