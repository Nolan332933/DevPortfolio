import React from "react";

const Title = ({ title, className }) => {
  return (
    <div className={`relative text-center ${className}`}>
      <h1 className="text-3xl inline leading-normal font-bold text-slate-800">
        {title}
      </h1>
      <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-32 bg-violet-700 h-1"></span>
    </div>
  );
};

export default Title;
