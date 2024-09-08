import React from "react";
import { BsDatabaseFillGear } from "react-icons/bs";
import { GiGearHammer } from "react-icons/gi";
import { AiFillApi } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { CiServer } from "react-icons/ci";
import Title from "../../utlis/Title";
import ServiceItem from "./ServiceItem";

const data = [
  {
    id: 1,
    name: "Full Stack Development",
    short_desc:
      "Proficient in React, Laravel, CodeIgniter, Next.js, Node.js, Inertia.js, AWS, and Digital Ocean.",
    desc: "I possess skills in React, Laravel, Next.js, Node.js, Inertia.js, AWS, Digital Ocean, Git, Github and Gitlab, ensuring expertise in Full Stack Development.",
    icon: <FaComputer size={40} />,
  },
  {
    id: 2,
    name: "Frontend Technologies",
    short_desc:
      "Expertise in React for building responsive and user-friendly interfaces.",
    desc: "My proficiency lies in Frontend Technologies, with a focus on React, ensuring a strong foundation in building responsive and user-friendly interfaces.",
    icon: <MdOutlineComputer size={40} />,
  },
  {
    id: 3,
    name: "Backend Technologies",
    short_desc:
      "Expert in C# and Node.js for robust and scalable server-side solutions.",
    desc: "In Backend Technologies, I excel in utilizing Node.js and ExpressJS to create robust and scalable server-side solutions, ensuring optimal performance and functionality.",
    icon: <GiGearHammer size={40} />,
  },
  {
    id: 4,
    name: "Database Management",
    short_desc:
      "Proficient in MySQL and MongoDb for efficient database design and management.",
    desc: "Skilled in Database Management, I am well-versed in utilizing MySQL, MongoDb and PostgreSQL to design and manage databases, ensuring efficient data storage and retrieval.",
    icon: <BsDatabaseFillGear size={40} />,
  },
  {
    id: 5,
    name: "API Development",
    short_desc:
      "Specialize in Node.js and Express.js for secure and efficient API development.",
    desc: "Focusing on API Development, I leverage Node.js, Express.js and Laravel to craft secure and efficient APIs, facilitating seamless communication between different components of a software system.",
    icon: <AiFillApi size={40} />,
  },
  {
    id: 6,
    name: "Server Management",
    short_desc:
      "Expertise in AWS and Digital Ocean for reliable and scalable server infrastructure.",
    desc: "My skills extend to Server Management, with a focus on AWS and Digital Ocean, ensuring reliable and scalable infrastructure to support various applications and services.",
    icon: <CiServer size={40} />,
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="mt-10 md:mt-0">
        {/* title  */}
        <Title title="My Service" />
        {/* My service  */}
        <div className="flex flex-wrap mt-20 mb-5 mx-5 md:mx-10">
          {data.map((item) => (
            <ServiceItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
