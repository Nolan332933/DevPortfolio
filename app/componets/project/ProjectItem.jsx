import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { renderTransition } from "../../helper/helper";

const ProjectItem = ({ item, index }) => {
  return <CardItemTwo item={item} index={index} />;
};

export const CardItemOne = ({ item }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="me-3 mt-2 group relative transition ease-in-out delay-150">
        <Image src={item.image} alt="project image" width={300} height={150} />
        {/* overlay div  */}
        <div className="hidden absolute top-0 group-hover:block bg-black bg-opacity-50 w-full h-full">
          <div className="flex flex-col justify-center items-center mx-5 md:mx-10 mt-10">
            <h1 className="text-slate-50 text-2xl font-bold mb-3">
              {item.title}
            </h1>
            <p className="text-slate-200 text-justify mb-3">
              {item.desc.slice(0, 100)}
            </p>
            <Link
              href={`/project/detail/${item.id}`}
              className="px-4 py-3 bg-violet-700 rounded-3xl"
            >
              See Details <AiOutlineArrowRight className="ms-2 inline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardItemTwo = ({ item, index }) => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/3">
      <div
        data-aos={renderTransition(index)}
        data-aos-delay="10"
        data-aos-duration="1200"
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow me-0 md:me-3 mt-3 relative group z-0"
      >
        <Link href={`/project/detail/${item.id}`}>
          <Image
            className="rounded-t-lg"
            src={item.image}
            alt=""
            width={300}
            height={150}
            priority
          />
        </Link>
        <div className="hidden p-5 absolute top-0 group-hover:block bg-black bg-opacity-75 w-full h-full">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
              {item.title}
            </h5>
          </a>
          <p className="mb-3 text-xs text-justify font-normal text-gray-400">
            {item.short_desc}
          </p>
          <Link
            href={`/project/detail/${item.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300"
          >
            <span className="me-3"> See Details </span>{" "}
            <AiOutlineArrowRight className="inline" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
