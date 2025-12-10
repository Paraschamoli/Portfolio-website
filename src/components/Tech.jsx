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
    hidden: { opacity: 0, y: 50 },
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
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 py-12"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white md:text-6xl"
      >
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Technologies
        </span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {icons.map(({ Icon, color, name }, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            title={name}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="p-6 bg-[#112240]/50 rounded-2xl group-hover:bg-[#112240] transition-colors duration-300">
              <Icon
                className={`cursor-pointer text-6xl ${color} transition-all duration-300 group-hover:scale-110 sm:text-7xl md:text-8xl`}
              />
            </div>
            <p className="text-center mt-4 text-gray-300 group-hover:text-white transition-colors duration-300">
              {name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default memo(Tech);