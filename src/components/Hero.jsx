import React from "react";
import {motion } from  "framer-motion"
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y:-50, opacity:0}}
        animate={{y:0 ,opacity:1}}
        transition={{duration:0.8, delay:0.2}}
        >
          <img
            src="/image.jpg"
            alt="Hero section image"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 
           transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div
        initial={{y:50, opacity:0}}
        animate={{y:0 ,opacity:1}}
        transition={{duration:0.8, delay:0.2}}
          className="flex max-w-[600px] flex-col
         items-center justify-center gap-3 text-center "
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Paras
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            Driven and detail-oriented final-year Computer Science Engineering
            student with a focus on full-stack web development. Proficient in
            designing dynamic, scalable applications using React.js and Node.js,
            and skilled in building RESTful APIs and managing databases.
            Passionate about solving complex technical challenges and eager to
            contribute to impactful software projects in a collaborative
            environment. Seeking an internship to apply technical expertise,
            improve problem-solving abilities, and develop industry-ready skill.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;