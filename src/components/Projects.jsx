// components/Projects.js
import React from "react";
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
  {
    image: "project2.png",
    title: "Credence~Stirov",
    description:
      "A modern, responsive React + Vite web application delivering hiring and background verification solutions with smooth UI and optimized performance.",
    technologies: ["React", "Vite", "Tailwind CSS", "GitHub Pages"],
    link: "https://credencestirov.com/",
  },
];

const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <ScrollReveal delay={index * 0.2}>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 bg-[#112240]/30 rounded-3xl p-6 hover:bg-[#112240]/50 transition-colors duration-300">
        <div className="w-full md:w-1/2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-400 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                className="px-4 py-2 bg-[#0a192f] text-gray-300 rounded-full text-sm font-medium"
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
            className="mt-4 inline-block w-fit px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            View Project
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 p-4 md:px-8 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-bold text-white md:text-6xl text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>
      </ScrollReveal>
      
      <div className="w-full max-w-6xl flex flex-col gap-12 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;