// components/Tech.js
import React, { memo } from "react";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
} from "react-icons/bi";
import {
  SiTailwindcss,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiGit,
  SiGo,
  SiCypress,
  SiDocker,
} from "react-icons/si";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const icons = [
    { Icon: BiLogoJavascript, color: "text-yellow-400", name: "JavaScript" },
    { Icon: BiLogoReact, color: "text-cyan-400", name: "React" },
    { Icon: BiLogoNodejs, color: "text-green-500", name: "Node.js" },
    { Icon: BiLogoMongodb, color: "text-green-600", name: "MongoDB" },
    { Icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind CSS" },
    { Icon: SiCplusplus, color: "text-blue-400", name: "C++" },
    { Icon: SiPython, color: "text-yellow-500", name: "Python" },
    { Icon: SiMysql, color: "text-blue-300", name: "MySQL" },
    { Icon: SiGit, color: "text-orange-500", name: "Git" },
    { Icon: SiGo, color: "text-cyan-300", name: "Go" },
    { Icon: SiCypress, color: "text-gray-300", name: "Cypress" },
    { Icon: SiDocker, color: "text-blue-400", name: "Docker" },
  ];

  return (
    <section
      id="tech"
      className="min-h-[70vh] w-full flex flex-col items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Tools and technologies I use to build amazing digital experiences
        </p>
      </motion.div>

      {/* Icons Grid */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
          {icons.map(({ Icon, color, name }, index) => (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group flex flex-col items-center"
            >
              {/* Icon Container */}
              <div className="p-3 md:p-4 bg-[#112240]/40 rounded-xl md:rounded-2xl group-hover:bg-[#112240]/70 transition-all duration-300 w-full aspect-square flex items-center justify-center">
                <Icon
                  className={`${color} text-3xl sm:text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110`}
                />
              </div>
              
              {/* Technology Name */}
              <p className="text-center mt-3 text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                {name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Continuously learning and adapting to new technologies to stay at the forefront of web development
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Tech);