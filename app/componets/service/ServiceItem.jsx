"use client";
import React from "react";
import { usePathname } from "next/navigation";
import "./app.css";
import { renderTransition } from "@/app/helper/helper";

const ServiceItem = ({ item }) => {
  const pathname = usePathname();
  if (pathname == "/") {
    return <HomeServie item={item} />;
  } else {
    return <Service item={item} />;
  }
};

export default ServiceItem;

export const Service = ({ item }) => {
  return (
    <div className="lg:w-1/3 md:w-1/2 group service-item">
      <div
        data-aos={renderTransition(item.id)}
        className="bg-slate-300 mx-5 mt-5 rounded-md group-hover:bg-violet-700 shadow-sm shadow-slate-600 group-hover:shadow-violet-900 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-115  h-[300px]"
      >
        <div className="flex justify-center">
          <div className="p-3">
            <div className="text-center text-violet-700 group-hover:text-slate-100 inline transition-transform duration-300 ease-in-out transform scale-100 hover:scale-115">
              {item.icon}
            </div>
            <h1 className="text-slate-700 text-2xl font-bold mt-5 group-hover:text-white transition-transform duration-300 ease-in-out transform scale-100 hover:scale-115">
              {item.name}
            </h1>
            <p className="text-slate-500 leading-normal mt-5 text-justify group-hover:text-white transition-transform duration-300 ease-in-out transform scale-100 hover:scale-115 text-sm">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomeServie = ({ item }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="2000"
      className="lg:w-1/2"
      key={item.id}
    >
      <div className="flex justify-between mx-5 md:mx-10 items-center mt-10">
        <div className="w-1/4">
          <div className="bg-slate-200 rounded-2xl text-violet-700 text-center px-3 py-5 flex justify-center shadow-md shadow-violet-500">
            {item.icon}
          </div>
        </div>
        <div className="w-3/4">
          <div className="ms-5">
            <h2 className="text-slate-800 text-2xl font-bold mb-2">
              {item.name}
            </h2>
            <p className="text-slate-500"> {item.short_desc} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
