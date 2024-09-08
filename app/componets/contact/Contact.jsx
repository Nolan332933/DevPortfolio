import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa6";
import Title from "../../utils/Title";

import ContactForm from "./ContactForm";
import { FaWhatsapp } from "react-icons/fa";
import Freelancer from "./Freelancer";

const data = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100077580763408",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: "https://www.facebook.com/profile.php?id=100077580763408",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/kaung-myat-kywal-894a76275/",
  },
  {
    id: 4,
    icon: <FaTelegram />,
    link: "https://www.linkedin.com/in/kaung-myat-kywal-894a76275/",
  },
  {
    id: 5,
    icon: <FaWhatsapp />,
    link: "https://wa.me/+66969498913",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-50">
      <div className="w-full pt-10 ">
        <Title title="Get In Touch" />

        <div className="mt-20">
          <div className="flex flex-col-reverse md:flex-row flex-wrap justify-between">
            {/* personal info  */}
            <div className="w-full lg:w-1/4">
              <div
                data-aos="fade-up"
                data-aos-delay="20"
                data-aos-duration="1500"
                className="mx-10 md:me-0  mt-5 md:mt-0 px-3 bg-white rounded-lg pt-3 shadow-md shadow-violet-400"
              >
                <div>
                  <h1 className="text-2xl font-bold text-slate-600 mb-5">
                    Address
                  </h1>
                  <p className="text-slate-500 text-justify">
                    SukSawat(40), Wattanavit Place
                  </p>
                </div>
                {/* contact info  */}
                <div className="mt-10">
                  <div>
                    <BsTelephoneInbound
                      size={20}
                      className="text-violet-700 inline me-3"
                    />
                    <a
                      href="phoneto:+6588571785"
                      className="text-slate-500 text-sm"
                    >
                      +66966498913
                    </a>
                  </div>
                  <div className="mt-3">
                    <AiOutlineMail
                      size={20}
                      className="text-violet-700 inline me-3"
                    />
                    <a
                      href="mailto:minthetpaing376@gmail.com"
                      className="text-slate-500 text-sm"
                    >
                      nolanshelby81@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social info  */}
                <div className="mt-5">
                  <h1 className="font-bold text-slate-600 text-2xl">
                    Follow Me
                  </h1>
                  <div className="flex justify-center my-3 bg-violet-700 px-5 py-3 rounded-tl-lg rounded-tr-lg">
                    {data.map((item) => (
                      <Link
                        href={item.link}
                        key={item.id}
                        className=" text-xl mx-2 hover:scale-150"
                        target="_blank"
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* contact form  */}
            <div className="lg:w-3/4">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* freelancer link  */}
        <div className="mx-10 my-20 border border-violet-500 rounded-md p-3 flex bg-violet-700 shadow-md shadow-violet-400">
          <Freelancer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
