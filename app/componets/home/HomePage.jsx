"use client";
import React from "react";
import HeroSection from "./HeroSection";
import About from "../about/About";
import Service from "../service/Service";
import Contact from "../contact/Contact";
import Project from "../project/Project";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Service />
      <Project />
      <Contact />
    </div>
  );
};

export default HomePage;
