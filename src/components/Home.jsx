import React, { useEffect, useRef } from "react";
import github from "../Media/github.png";
import linkedin from "../Media/linkedin.png";
import twitter from "../Media/twitter.png";
import instagram from "../Media/instagram.png";
import Typed from "typed.js";
import abhay from "../Media/abhay2.png";
import { motion } from "framer-motion";
import resume_fullStack from "../asset/abhaywadkar.pdf";

function Home() {
  const element = useRef(null);
  const desc = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      new Typed(element.current, {
        strings: [
          "Abhay wadkar.",
          "a Web Developer.",
          "a Web Designer.",
          "a Programmer.",
          "a Cuber.",
        ],
        typeSpeed: 80,
      });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      new Typed(desc.current, {
        strings: [
          "A Creative Exlorer, on a compellong journey to reshape the future of Tech, guided by the thirst for innovation.",
        ],
        typeSpeed: 3,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="h-full bg-radial-gradient dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black w-full md:flex justify-center m-auto">
      <div className="flex flex-1 flex-col justify-center pl-5 pt-20 sm:pl-10 md:pl-16">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 0.5 }}
          className="pt-5 text-base sm:text-lg md:text-2xl"
        >
          Hi, There!
        </motion.h3>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-3 font-extrabold text-2xl sm:text-3xl md:text-5xl"
        >
          I am{" "}
          <span
            ref={element}
            className="dark:drop-shadow-[0_0_5px_rgba(0,0,225,1)] dark:text-blue-500 text-blue-600"
          ></span>
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-base pr-2 sm:text-lg md:text-xl w-full"
        >
          <span ref={desc}></span>
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex gap-5"
        >
          <a href="https://www.instagram.com/abhhay____/" target="_blank">
            <img
              className="dark:invert w-7 md:w-8 my-2 hover:bg-blue-500 p-1 rounded"
              src={instagram}
              alt="instagram"
            />
          </a>
          
          <a
            href="https://www.linkedin.com/in/abhay-wadkar-078b25283/"
            target="_blank"
          >
            <img
              className="dark:invert w-7 md:w-8 my-2 hover:bg-blue-500 p-1 rounded"
              src={linkedin}
              alt="linked in"
            />
          </a>
          <a href="https://github.com/Abhaywadkar04" target="_blank">
            <img
              className="dark:invert w-8 md:w-9 my-2 hover:bg-blue-500 p-1 rounded"
              src={github}
              alt="github"
            />
          </a>
        </motion.div>
        <motion.a
          href={resume_fullStack}
          download
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 2 }}
          className="my-2 dark:bg-blue-500 bg-blue-600 dark:hover:bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-fit px-3 py-1 text-base sm:text-lg md:text-xl"
        >
          Download CV
        </motion.a>
      </div>
      <div className="flex flex-1 items-center m-auto">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="md:pl-10 md:mt-10 h-1/6 md:h-2/5 lg:h-3/4 w-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_20px_rgba(225,225,225,0.25)]"
          src={abhay}
          alt=""
        />
      </div>
    </section>
  );
}

export default Home;
