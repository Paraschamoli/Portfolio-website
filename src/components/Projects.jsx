import React, { Children } from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    image: "project.jpg",
    title: "Real Estate Web-Application",
    description:
      "A full-featured web application for real estate listings, allowing users to search, filter, and save properties.",
    technologies: ["JavaScript", "ExpressJs", "MongoDb", "ReactJs"],
    link: "https://real-estate-web-application-frontend.onrender.com/",
  },
];

const scrollReveal=({children})=>{
  return(
    <motion.div 
    initial={{opacity:0 ,y:100}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
  {children}
    </motion.div>
  )
}

const Projectcard = ({ project }) => {
  return (
    <scrollReveal>
    <div
      className="flex flex-col items-center gap-8 md:flex-row md:gap-24"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[350px]" // Increased width here
      />
      <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold">{project.title}</div>
        <p className="text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span
              className="rounded-lg bg-black p-3 text-white"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700"
        >
          View Project
        </a>
      </div>
    </div>
    </scrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
     <scrollReveal> <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>
      </scrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <Projectcard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
