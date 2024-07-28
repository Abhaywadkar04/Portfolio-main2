import React from 'react'
import qopen from '../Media/qopen.png'
import qclose from '../Media/qclose.png'
import signatureop from '../Media/signatureop.png'
import { motion } from 'framer-motion'

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className='flex bg-radial-gradient py-10 h-auto gap-7 justify-center dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <div className='md:flex m-auto md:flex-col px-5 sm:pl-8 md:px-16 justify-center items-start '>
        <motion.h1 initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5}} className='text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-blue-600 dark:text-blue-400 dark:drop-shadow-[0_0_5px_rgba(0,0,225,1)]'># know me</motion.h1>
        <motion.p initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5}} className='w-full text-base sm:text-lg md:text-xl'>
          <img className='inline w-4 md:w-8 dark:invert-0 invert' src={qopen} alt=""/>
          <p className='inline ml-6'>Hii, I'm Zaid, a Full-stack developer with a passion for building high-quality web applications. I specialize in using ReactJS, NextJS, and Tailwind CSS on the frontend, and NodeJS, Express, and MongoDB on the backend.<br/><br/></p>
          <p className='inline ml-6'>
          I believe in creating websites that look great and perform exceptionally. Whether it's designing responsive layouts, optimizing performance, or developing robust backends, I strive to deliver top-notch results.<br/><br/></p>
          <p className='inline ml-6 mr-6'>
          If you need a developer skilled in the latest technologies with a strong design sense, let's chat about your project and how I can help bring your vision to life.</p>
          <img className='inline w-4 md:w-8 dark:invert-0 invert' src={qclose} alt=""/>
        </motion.p>
      </div>
    </section>
  )
}
