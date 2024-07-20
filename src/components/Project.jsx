import React, { useState, useEffect } from 'react';
import ecommercehero from '../Media/showoff/poki1.png';
import ecommerce1 from '../Media/showoff/poki2.png';
import ecommerce2 from '../Media/showoff/poki3.png';
import ecommerce3 from '../Media/showoff/poki4.png';
import bloggerhero from '../Media/showoff/bloggerhero.png';
import blogger1 from '../Media/showoff/blogger1.png';
import blogger2 from '../Media/showoff/blogger2.png';
import blogger3 from '../Media/showoff/blogger3.png';
import blog1 from '../Media/showoff/blog1.png';
import blog2 from '../Media/showoff/blog2.png';
import blog3 from '../Media/showoff/blog3.png';
import blog4 from '../Media/showoff/blog4.png';
import blog5 from '../Media/showoff/blog5.png';
import blog6 from '../Media/showoff/blog6.png';
import quiz1 from '../Media/showoff/quiz1.png';
import quiz2 from '../Media/showoff/quiz2.png';
import quiz3 from '../Media/showoff/quiz3.png';
import quiz4 from '../Media/showoff/quiz4.png';
import quiz5 from '../Media/showoff/quiz5.png';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "pokedex",
    subtitle: "pokedex",
    description: "A vibrant React.js Pokédex app that utilizes APIs, allowing users to search for Pokémon by name or number. This project helped me learn API usage and UI creation. The app features a colorful interface to enhance the overall user experience.",
    images: [ecommercehero, ecommerce1, ecommerce2,ecommerce3],
    liveDemo: "https://abhaywadkar04.github.io/newpokidex/",
    github: "https://github.com/Abhaywadkar04/newpokidex"
  },
  {
    title: "Blogger",
    subtitle: "echoes",
    description: "Built and deployed a production-quality blog application using Appwrite (backend-as-a-service). Utilizing a modern tech stack, including React.js, Tailwind CSS, and various other libraries, I engineered the application for seamless performance and robust functionality.",
    images: [blog1,blog2, blog3, blog4,blog5,blog6],
    liveDemo: "https://appwriteblog-two-tau.vercel.app/",
    github: "https://github.com/Abhaywadkar04/appwriteblog"
  },
  {
    title: "quiz-game",
    subtitle: "quiz-game",
    description: "Build with python py-flask and mysql as the backend for the database",
    images: [quiz1,quiz2,quiz3,quiz4,quiz5],
    github: "https://github.com/Abhaywadkar04/quiz-game"
  },
  // {
  //   title: "Youtube",
  //   subtitle: "A legit clone",
  //   description: "Built a full-stack web application with Express.js and React.js, seamlessly integrating MongoDB using Mongoose and optimizing for SEO to enhance visibility. Collaborating closely with 3 friends in pair programming sessions, we took Git to the next level, refining our development workflow and achieving outstanding results.",
  //   images: [bloggerhero, blogger1, blogger2, blogger3],
  //   liveDemo: "",
  //   github: "https://github.com/MohdZaid259/Youtube.git"
  // }
];

function Project() {
  const [mainImageIndices, setMainImageIndices] = useState(Array(projects.length).fill(0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainImageIndices(Array(projects.length).fill(0));
    }, 4000); 
    
    return () => clearTimeout(timer);
  }, [mainImageIndices]);

  const handleImageClick = (projectIndex, subImageIndex) => {
    setMainImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] = subImageIndex;
      return newIndices;c
    });
  };

  const projectVarient = {
    visible:{
      opacity:1,
      x:0,
      transition:{
        staggerChildren: 0.3,
        ease:'easeInOut'
      }
    },
    hidden:{
      opacity:0,
      x:100
    }
  }
  const variants = {
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5
      }
    },
    hidden:{
      opacity:0,
      y:50
    }
  }

  return (
    <section className='h-full px-2 bg-radial-gradient md:px-4 lg:px-10 py-10 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <h1 className='dark:drop-shadow-[0_0_5px_rgba(0,0,225,1)] px-2 sm:pl-5 md:px-12 text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400'># Projects</h1>
      {projects.map((project, projectIndex) => {
        const mainImageIndex = mainImageIndices[projectIndex];
        const mainImage = project.images[mainImageIndex];
        return (
          <div key={projectIndex}>
            <div className='flex mx-2 md:mx-4 lg:mx-12 my-3 gap-3'>
              <div className='h-full flex-1'>
                <motion.img
                  initial={{opacity:0,x:-100}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.7}}
                  className='border border-black rounded-sm transition-opacity duration-1000' 
                  src={mainImage} 
                  alt={project.title} 
                />
              </div>
              <motion.div initial='hidden' whileInView='visible' variants={projectVarient} className='h-auto  flex flex-col items-center -mt-1 gap-2 lg:gap-3 flex-[0.32]'>
                {project.images.map((image, subImageIndex) => (
                  subImageIndex !== mainImageIndex && (
                    <div key={subImageIndex}>
                      <img
                        className='border border-black rounded-sm aspect-video transition-opacity duration-1000'
                        src={image}
                        onClick={() => handleImageClick(projectIndex, subImageIndex)}
                        alt={project.title}
                      />
                    </div>
                  )
                ))}
              </motion.div>
            </div>
            <div className='px-4 lg:px-12'>
              <div className='flex gap-3 lg:gap-5 mx-2 lg:mx-6 mt-5 mb-5'>
                <motion.button initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}}>
                  <a href={project.github} target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Github</a>
                </motion.button>
                <motion.button initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.7,delay:1}}>
                  <a href={project.liveDemo} target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Live Demo</a>
                </motion.button>
              </div>
              <div className='tracking-wider text-xl'>
                <motion.span initial='hidden' whileInView='visible' variants={variants} transition={{transition:1,delay:0.5}} className='text-3xl font-bold text-pink-600 dark:text-green-400'>{project.title} : </motion.span>
                <motion.span initial='hidden' whileInView='visible' variants={variants} transition={{transition:1,delay:0.7}} className='text-2xl font-semibold'>{project.subtitle}</motion.span>
                <motion.span initial='hidden' whileInView='visible' variants={variants } transition={{transition:1,delay:0.9}} className='inline-block mt-3 pb-3'>{project.description}</motion.span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Project;