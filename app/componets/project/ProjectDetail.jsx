"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "../../../public/data/project";
import ProjectDetailImg from "../../../public/image/projects/project_details.png";
import ProjectCardInfo from "./ProjectCardInfo";

const ProjectDetail = ({ id }) => {
  const [item, setItem] = useState({});
  const filteredResult = data.filter((item) => item.id == id);

  useEffect(() => {
    setItem(filteredResult[0]);
  }, [id]);

  return (
    <div>
      {/* image  */}
      <div className="mx-10 pt-5">
        <Image
          src={ProjectDetailImg}
          alt="project cover image"
          width={1920}
          height={350}
          className="rounded-lg"
        />
      </div>
      <div className="mx-10 md:mx-20 mt-20">
        {/* Project details || Image  project information */}
        <div className="flex flex-wrap">
          {/* project details  */}
          <div className="w-full lg:w-2/3">
            <img
              src={item.project_img?.main ?? "https://placehold.co/803x488"}
              alt="project cover image"
              width={803}
              height={488}
            />
            {/* Heading One  */}
            <h1 className="text-2xl font-bold text-slate-700 mt-10">
              {item.title}
            </h1>
            {/* paragraph  */}
            <p className="text-slate-500 text-justify"> {item.project_desc} </p>
            {/* technologies  */}
            <div className="my-5">
              <h2 className="mb-2 text-lg font-semibold text-gray-700">
                Project Technologies:
              </h2>
              <div className="flex flex-wrap">
                {item.project_tech?.map((proj, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    className="w-1/2 md:w-1/3"
                  >
                    <div
                      className="flex flex-col p-2 border me-3 mt-3 shadow-sm shadow-gray-600 items-center justify-center"
                      key={index}
                    >
                      <img
                        src={getSvg(proj)}
                        alt="tech"
                        width={40}
                        height={40}
                      />
                      <span className="mt-2 italic text-sm text-gray-500">
                        {" "}
                        {proj}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Heading Two  */}
            <h2 className="text-2xl font-bold text-slate-700 mt-10">
              The Challange of Project
            </h2>
            {/* paragraph two  */}
            <p className="text-slate-500 text-justify">
              {" "}
              {item.project_challenge?.intro}{" "}
            </p>
            {/* Two Image  */}
            <div className="flex flex-wrap mt-10">
              {/* Image one  */}
              <div className="w-full md:w-1/2">
                <div data-aos="fade-up" className="me-0 md:me-3">
                  <img
                    src={
                      item.project_img?.imageone ??
                      "https://placehold.co/387x350"
                    }
                    alt="project cover image"
                    width={387}
                    height={350}
                  />
                </div>
              </div>
              {/* Image two  */}
              <div className="w-full md:w-1/2">
                <div className="ms-0 md:ms-3 mt-3 md:mt-0" data-aos="fade-up">
                  <img
                    src={
                      item.project_img?.imagetwo ??
                      "https://placehold.co/387x350"
                    }
                    alt="project cover image"
                    width={387}
                    height={350}
                  />
                </div>
              </div>
            </div>
            {/* Paragraph three */}
            <p className="text-slate-500 text-justify my-10" data-aos="fade-up">
              {" "}
              {item.project_challenge?.short_desc}{" "}
            </p>
          </div>
          {/* project info */}
          <div className="w-full lg:w-1/3">
            <div className="ms-5" data-aos="slide-left">
              <ProjectCardInfo item={item} />
              <ContactNow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function getSvg(name) {
  switch (name) {
    case "Laravel":
      return "/image/svg/laravel.svg";
    case "React":
      return "/image/svg/react.svg";
    case "Nextjs":
      return "/image/svg/nextjs.svg";
    case "Mongo DB":
      return "/image/svg/mongo.svg";
    case "Mysql":
      return "/image/svg/mysql.svg";
    case "Nodejs":
      return "/image/svg/nodejs.svg";
    case "Tailwind css":
      return "/image/svg/tailwind.svg";
    case "Bootstrap5":
    case "Bootstrap4":
      return "/image/svg/bootstrap.svg";
    case "Expressjs":
      return "/image/svg/express.svg";
    case "Jquery":
      return "/image/svg/jquery.svg";
    case "Inertia Js":
      return "/image/svg/inertiajs.png";
    case "AWS":
      return "/image/svg/aws.svg";
    case "Docker":
      return "/image/svg/docker.svg";
    case "PHP":
      return "/image/svg/php.svg";
    case "Code Igniter":
      return "/image/svg/codeigniter.svg";
    default:
      return "/image/svg/cpu.svg";
  }
}

export const ContactNow = () => {
  return (
    <div className="mt-10">
      <p> contact now </p>
    </div>
  );
};

export default ProjectDetail;
