import React from "react";
import html from "../Media/skills/html.png";
import css from "../Media/skills/css.png";
import atom from "../Media/skills/atom.png";
import redux from "../Media/skills/redux.png";
import tailwind from "../Media/skills/tailwind.png";
import nodejs from "../Media/skills/nodejs.png";
import appwrite from "../Media/skills/appwrite.png";
import flask from "../Media/skills/flask.png"
import framer from "../Media/skills/framer.png";
import js from "../Media/skills/js.png";
import cpp from "../Media/skills/cpp.png";
import java from "../Media/skills/java.png";
import mysql from "../Media/skills/mysql.png";
import mongodb from "../Media/skills/mongodb.png";
import git from "../Media/skills/git.png";
import github from "../Media/skills/github.png";
import { delay, easeIn, easeInOut, motion, stagger } from "framer-motion";

function Skills() {
  const img = [
    html,
    css,
    redux,
    tailwind,
    nodejs,
    appwrite,
    framer,
    js,
    cpp,
    java,
    mysql,
    mongodb,
    git,
    github,
    flask
  ];
  const skills = [
    ["HTML 5", "CSS 3", "ReactJs", "Redux", "Tailwind", "Framer Motion"],
    ["NodeJs", "Express", "Appwrite"],
    ["Javascript", "Python", "c++"],
    ["MongoDb", "MySQL"],
    ["Github", "Git"],
  ];
  const totalCells = 6 * 6;
  const gridCells = Array.from({ length: totalCells }, (_, index) => index);

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, easeInOut },
    }),
  };

  return (
    <section className="h-full px-5 py-10 gap-5 bg-radial-gradient dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black">
      <h1 className="px-2 sm:pl-5 md:px-12 text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-blue-600 dark:text-blue-400 dark:drop-shadow-[0_0_5px_rgba(0,0,225,1)]">
        # Skills
      </h1>
      <div className="flex flex-col md:flex-row ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          id="shapeContainer"
          className="p-5 -mt-5 grid grid-cols-7 grid-rows-4 justify-items-center items-center w-full md:w-3/5"
        >
          {gridCells.map((cellIndex) => {
            const isImageCell = cellIndex % 2 === 0;
            return (
              <motion.div variants={variants} key={cellIndex}>
                {isImageCell && img[cellIndex / 2] && (
                  <img
                    src={img[cellIndex / 2]}
                    alt=""
                    className="p-1 md:p-2 border border-blue-700 dark:border-blue-400 rounded-full w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
        <div className="flex flex-1">
          <div className="flex flex-col w-full flex-wrap gap-5">
            <div className="flex justify-between sm:justify-around">
              <div>
                <div className="text-xl md:text-2xl font-semibold  text-blue-700 dark:text-blue-400">
                  Frontend
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  className="flex flex-col"
                >
                  {skills[0].map((item, i) => {
                    return (
                      <motion.span key={i} variants={textVariants} custom={i}>
                        {item}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-400">
                  Backend
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  className="flex flex-col"
                >
                  {skills[1].map((item, i) => {
                    return (
                      <motion.span key={i} variants={textVariants} custom={i}>
                        {item}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
            </div>
            <div className="mx-0 md:mx-20 flex flex-col gap-5">
              <div className="">
                <span className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-400">
                  Languages known
                </span>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  className="flex flex-col"
                >
                  {skills[2].map((item, i) => {
                    return (
                      <motion.span key={i} variants={textVariants} custom={i}>
                        {item}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
              <div className="">
                <span className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-400">
                  Database Management
                </span>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  className="flex flex-col"
                >
                  {skills[3].map((item, i) => {
                    return (
                      <motion.span key={i} variants={textVariants} custom={i}>
                        {item}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                className=""
              >
                <span className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-400">
                  Version Control
                </span>
                <div className="flex flex-col">
                  {skills[4].map((item, i) => {
                    return (
                      <motion.span key={i} variants={textVariants} custom={i}>
                        {item}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
