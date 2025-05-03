import React from "react";
import Projects from "@/app/Utils/Projects";
import Header from "@/app/Utils/Header";

function Work() {
  return (
    <div className="flex flex-col items-center justify-between">
      <Header tag="My Work" bgColor="bg-indigo-100" />
      <Projects />
    </div>
  );
}

export default Work;
