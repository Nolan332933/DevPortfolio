import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = ({ link, name }) => {
  return (
    <button className="mt-10">
      <Link
        href={link}
        className="bg-violet-700 text-white py-4 px-5 rounded-3xl  shadow-md shadow-violet-400 transition-all ease-out delay-100 hover:bg-red-400"
      >
        {" "}
        {name} <AiOutlineArrowRight className="inline" />{" "}
      </Link>
    </button>
  );
};

export default Button;
