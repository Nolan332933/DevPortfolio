import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/image/hero.png";
import { Typewriter } from "react-simple-typewriter";
import Button from "../../utils/Button";

const HeroSection = () => {
  return (
    <div className="relative bg-indigo-300">
      <Image
        src={HeroImage}
        alt="HeroImage"
        className="min-h-screen object-cover md:opacity-70 object-center-right opacity-70"
      />
      <div className="text-center absolute top-1/2 text-white w-full md:w-2/3 translate-y-[-50%]">
        <div className="text-2xl">
          {" "}
          Hello, my soon-to-be co-workers!{" "}
          <span>
            {" "}
            I am <span className="text-3xl text-black-700">Nolan</span>
          </span>
        </div>
        <h1 style={{ fontSize: "45px" }} className="font-bold mt-10">
          I am
          <span className="ms-3 text-violet-700">
            <Typewriter
              words={["Full-stack", "C#", "React", "Laravel", "Node"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span> Developer </span>
        </h1>
        <Button link="/contact" name="Hire Me" />
      </div>
    </div>
  );
};

export default HeroSection;
