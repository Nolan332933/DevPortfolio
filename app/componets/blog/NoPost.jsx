import React from "react";
import { MdDoNotDisturb } from "react-icons/md";

const NoPost = ({ text = "Sorry! No posts for this section." }) => {
  return (
    <div className="flex justify-center flex-col items-center w-full p-3 border border-slate-400 rounded-md">
      <MdDoNotDisturb size={60} className="text-red-700" />
      <p className="text-slate-500 text-md mt-5 italic">{text}</p>
    </div>
  );
};

export default NoPost;
