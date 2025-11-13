import ProjectCarousel from "@/components/ProjectCarousel";
import React from "react";

const Projects = () => {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-6 sm:p-20 gap-12">
      <h1 className="text-2xl sm:text-4xl font-bold text-blue-600 text-center">
        My Projects
      </h1>
      <div className="w-full max-w-4xl">
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default Projects;
