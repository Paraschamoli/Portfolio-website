// components/Hero.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-0"
    >
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 100 
          }}
          className="relative"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
            
            <img
              src="./image.jpg"
              alt="Paras Chamoli - Web Developer"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-[#112240] shadow-2xl shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-105 cursor-pointer"
              loading="eager"
              fetchpriority="high"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 100 
          }}
          className="text-center lg:text-left"
        >
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Paras Chamoli
                </span>
              </h1>
              <div className="inline-flex items-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <h2 className="text-xl sm:text-2xl text-gray-300 font-medium">
                  Full Stack Developer
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Computer Science Engineering graduate specializing in modern web technologies.
              Passionate about building scalable applications with React.js, Node.js, and Go.
              Focused on creating efficient solutions with clean code and best practices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-700 text-gray-300 rounded-lg font-medium hover:bg-[#112240] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;