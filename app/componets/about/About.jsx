"use client";
import Title from "@/app/utlis/Title";
import { LiaDownloadSolid } from "react-icons/lia";
import ProfileImg from "../../../public/image/profile.png";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import { BsEye } from "react-icons/bs";

const data = [
  {
    id: 1,
    number: 3,
    name: "Years Experience",
  },
  {
    id: 2,
    number: 5,
    name: "Happy Clients",
  },
  {
    id: 3,
    number: 10,
    name: "Project Done",
  },
  {
    id: 4,
    number: 2,
    name: "Rewards",
  },
];

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="my-10 min-h-screen">
      <Title title="Know Me More" />
      {/* Information  */}
      <div className="flex flex-wrap mt-20">
        {/* About me info */}
        <div className="lg:w-2/3">
          <div className="mx-10 md:mx-20">
            <h1 className="text-2xl text-slate-800 font-bold">
              I'm
              <span className="text-2xl text-violet-700 ms-3">
                Min Thet Paing
              </span>
              , a Full Stack Web Developer
            </h1>
            <br />
            <p
              data-aos="fade-up"
              className="text-slate-500 leading-loose text-justify font-semibold"
            >
              I have a genuine passion for technology and innovation. With a
              background in marine electrical and electronics studies at Myanmar
              Maritime University, I've always been fascinated by the
              possibilities of technology.
            </p>
            <br />
            <div className="flex flex-wrap flex-col-reverse md:flex-row-reverse">
              <div className="lg:w-1/2 mt-3 md:mt-0">
                <p
                  data-aos="fade-up"
                  className="text-slate-500 leading-loose text-justify md:ms-3"
                >
                  However, the Covid-19 pandemic provided a unique opportunity
                  for reflection and exploration, leading me to dive into new
                  areas such as astronomy and science. This period of
                  self-discovery sparked a newfound passion for programming,
                  prompting me to transition my career to become a web
                  developer. From teaching web development assignments at MST
                  University to making significant contributions to web
                  application development at Myanmar ICT Solutions Co. Ltd. for
                  two and a half-year, I've
                </p>
              </div>
              <div data-aos="flip-up" className="lg:w-1/2">
                <Image
                  src={ProfileImg}
                  width={400}
                  height={400}
                  alt="profile_img"
                />
              </div>
            </div>
          </div>
          <div className="mx-10 md:mx-20">
            <p
              data-aos="fade-up"
              className="text-slate-500 leading-loose text-justify md:ms-3"
            >
              {" "}
              been fortunate to pursue my passion and make meaningful impacts in
              the field. Recently, I joined Mysol Co. Ltd., further expanding my
              expertise in Laravel and React development. I passed NCC level 4
              education during my worktime, and I'm currently attending NCC
              level 5 to deepen my knowledge and skills in web development. I am
              deeply interested in the intersection of technology and
              creativity, and I'm excited to continue my journey of growth and
              exploration in the dynamic world of web development. Feel free to
              reach out to me.
            </p>
          </div>
        </div>
        {/* Contact me info */}
        <div data-aos="slide-left" className="w-full lg:w-1/3 text-lg ">
          <div className="mx-10 md:mx-20 lg:mx-0 mt-5 lg:mt-0">
            <div>
              <div className="relative">
                <div className="mb-2 py-3">
                  <span className="font-bold text-slate-800"> Name: </span>
                  <span className="ms-3 text-slate-500"> Min Thet Paing </span>
                </div>
                <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
              </div>
              <div className="relative">
                <div className="mb-2 py-3">
                  <span className="font-bold text-slate-800">Email:</span>
                  <a
                    href="mailto:minthetpaing376@gmail.com"
                    className="ms-3 text-violet-700"
                  >
                    nolanshelby81@gmail.com
                  </a>
                </div>
                <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
              </div>
              <div className="relative">
                <div className="mb-2 py-3">
                  <span className="font-bold text-slate-800"> Age: </span>
                  <span className="ms-3 text-slate-500"> 25 </span>
                </div>
                <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
              </div>
              <div className="relative">
                <div className="mb-2 py-3">
                  <span className="font-bold text-slate-800"> From: </span>
                  <span className="ms-3 text-slate-500">
                    157 Petchkasem 42 yak 1 Bangjak
                  </span>
                  <span className="ms-3 text-slate-500 block">
                    Phasrijareon Bangkok 10160
                  </span>
                </div>
                <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
              </div>
            </div>
          </div>
          {/* Download button  */}
          <div className="mx-10 flex justify-start gap-2">
            <div className="text-center mt-10">
              <a
                href="/pdf/minthetpaing_cv.pdf"
                download="MinThetPaingCV.pdf"
                className="py-3 px-4 bg-violet-700 text-white transition-all ease-out delay-100  rounded-3xl shadow-md shadow-violet-500 hover:bg-red-400"
              >
                Download CV <LiaDownloadSolid className="inline" />
              </a>
            </div>
            <div className="text-center mt-10">
              <a
                href="/pdf/minthetpaing_cv.pdf"
                target="_blank"
                title="MinThetPaingCV"
                className="py-3 px-4 bg-violet-700 text-white transition-all ease-out delay-100  rounded-3xl shadow-md shadow-violet-500 hover:bg-red-400"
              >
                View CV <BsEye className="inline" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="my-10 mx-5 md:mx-20">
        <Skills />
      </div>
      {/* status section  */}
      <div className="flex flex-wrap mt-20 md:mx-20 md:mb-10 lg:mb-0">
        {data.map((item) => (
          <div data-aos="fade-up" className="w-1/2 lg:w-1/4" key={item.id}>
            <div className="border-r-2 border-r-slate-300 px-4  mx-5 mt-3 md:mt-0">
              <div className="flex text-slate-800  font-bold items-center justify-center mb-5">
                <h1 className="text-6xl">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={item.number}
                        duration={2}
                        delay={0}
                      />
                    )}
                  </ScrollTrigger>
                </h1>
                <div>
                  <span className="text-5xl"> + </span>
                </div>
              </div>
              <div>
                <h1 className="text-slate-500 text-center"> {item.name} </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Experience  */}
      <div className="my-20 mx-5 md:mx-20">
        <Experience />
      </div>
    </div>
  );
};

export default About;
