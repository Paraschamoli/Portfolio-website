import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-6 sm:px-12 md:px-32 flex min-h-screen w-full items-center justify-center py-20"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="./image.jpg"
            alt="Portrait of Paras, a Web Developer"
            className="w-[250px] sm:w-[300px] md:w-[350px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 
            transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Paras
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
            Web Developer
          </h3>
          <p className="text-sm md:text-base text-gray-400">
            Computer Science Engineering graduate with experience in full-stack
            development using React.js, Node.js, Go, and Gin. Skilled in
            building scalable apps, RESTful APIs, and managing databases. Eager
            to contribute to impactful projects and grow as a developer.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
