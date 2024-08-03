"use client";
import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { useState } from "react";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setVisible(scrollY > 100); // You can adjust the value based on when you want the button to appear
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    visible && (
      <div
        className="fixed bottom-[100px] right-[50px] z-50 cursor-pointer"
        onClick={scrollTop}
      >
        <div className="p-2 border-2 border-violet-600 rounded-full bg-violet-300">
          <FaArrowUp size={30} className="text-violet-700" />
        </div>
      </div>
    )
  );
};

export default ScrollUpButton;
