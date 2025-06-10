import React from "react";
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
} from "react-icons/si";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const icons = [
    { Icon: BiLogoJavascript, color: "text-yellow-500", name: "JavaScript" },
    { Icon: BiLogoReact, color: "text-blue-500", name: "React" },
    { Icon: BiLogoNodejs, color: "text-green-500", name: "Node.js" },
    { Icon: BiLogoMongodb, color: "text-green-700", name: "MongoDB" },
    { Icon: SiTailwindcss, color: "text-sky-500", name: "Tailwind CSS" },
    { Icon: SiCplusplus, color: "text-blue-600", name: "C++" },
    { Icon: SiPython, color: "text-yellow-500", name: "Python" },
    { Icon: SiMysql, color: "text-blue-500", name: "MySQL" },
    { Icon: SiGit, color: "text-red-600", name: "Git" },
    { Icon: SiGo, color: "text-cyan-500", name: "Go" },
    //{ Icon: SiGo, color: "text-emerald-500", name: "Gin (Go)" }, // Reuse Go icon for Gin
    { Icon: SiCypress, color: "text-gray-700", name: "Cypress" },
  ];

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {icons.map(({ Icon, color, name }, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            title={name}
          >
            <Icon
              className={`cursor-pointer text-[80px] ${color} transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
