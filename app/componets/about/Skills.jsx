import React from "react";
import skills from "../../../public/data/skills.json";
import Title from "../../utils/Title";
import { Progress } from "flowbite-react";

const Skills = () => {
  return (
    <div>
      <Title title="Skills" />
      {skills.map((item) => (
        <div className="flex justify-between items-center my-3" key={item.id}>
          <div className="w-2/12 md:w-1/12">
            <img
              className="w-[30px] md:w-[40px]"
              src={item.logo}
              alt={`skill logo of ${item.name}`}
              width={30}
              height={30}
            />
          </div>
          <div className="w-10/12 md:w-11/12">
            <div className="text-base font-medium text-slate-700">
              {item.name}
            </div>
            <Progress
              progress={parseInt(item.percentage)}
              size="md"
              color={item.color}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
