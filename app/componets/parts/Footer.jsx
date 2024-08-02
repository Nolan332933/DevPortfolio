import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-slate-700">
      <div className="flex justify-between mx-5 md:mx-20">
        <div>
          <p className="text-slate-400 text-sm">
            {" "}
            Copyright © 2024. All Rights Reserved.{" "}
          </p>
        </div>
        <div>
          <p className="text-slate-400 text-sm"> Developed By Nolan </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
