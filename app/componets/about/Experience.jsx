import Title from "../../utils/Title";

import React from "react";
import education from "../../../public/data/education.json";
import experience from "../../../public/data/experience.json";

const Experience = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2">
        <div className="md:me-4">
          <Title title="Education" />
          {/* exp component  */}
          {education.map((item) => (
            <StepBox item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <Title title="Experience" />
        {/* exp component  */}
        {experience.map((item) => (
          <StepBox item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Experience;

const StepBox = ({ item }) => {
  return (
    <div
      data-aos="fade-up"
      className="flex mt-5"
      data-aos-delay="40"
      data-aos-duration="1500"
    >
      <div className="me-3">
        {/* exp step  */}
        <div className="relative w-4 h-4 rounded-full bg-indigo-700">
          <div className="absolute h-[210px] md:h-[165px] bg-indigo-700 w-[2px] top-2 left-2"></div>
        </div>
      </div>
      {/* exp box */}
      <ExperienceBox
        year={item.year}
        title={item.title}
        description={item.description}
      />
    </div>
  );
};

const ExperienceBox = ({ year, title, description }) => {
  return (
    <div className="bg-slate-100 p-3 rounded-md shadow-slate-600 shadow-sm">
      <div className="flex flex-col">
        <span className="text-indigo-700"> {year} </span> {/* year  */}
        <h3 className="text-xl font-bold text-slate-700 mt-2">{title}</h3>
        {/* Title */}
        <p className="text-slate-500 text-sm mt-4 mb-3">{description}</p>
        {/* description */}
      </div>
    </div>
  );
};
