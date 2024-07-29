import React,{useState} from "react";
import { ThemeProvider,Switcher } from '../context/Theme'
import z from '../Media/z.png'
import menu from '../Media/menu.png'
import close from '../Media/close.png'
import { motion } from "framer-motion";

export default function Header() {
  const [ham, setHam] = useState(false);
  const handleHam = () => setHam(!ham); 

  const navItems=[
    {
      name:'Home',
      slug:'#'
    },
    {
      name: "About",
      slug: "#about"
    },
    {
      name: "Skills",
      slug: "#skills"
    },
    {
      name: "Projects",
      slug: "#projects"
    }
  ]
  const headerstyle = {
    boxShadow: '0 1px 4px rgba(30, 136, 229, 0.4)',
  };

  return (
    <section className="fixed top-0 w-full z-10 flex justify-around items-center py-2 backdrop-blur-sm tracking-normal md:tracking-wider" style={headerstyle}>
          <a href='/'>
            <motion.img initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1.2}} transition={{duration:0.5}} className="w-10 sm:w-24 dark:invert" src={z} alt="" />
          </a>
          <div className="flex ">
            <div onClick={handleHam} className="sm:hidden">
              {ham ? (
                <img className="w-5 mt-1.5 dark:invert rounded-sm" src={close} alt="close" />
              ) : (
                <img className="w-7 mt-1 dark:invert rounded-sm" src={menu} alt="menu" />
              )}
            </div>
            <ul 
              onClick={handleHam}
              className={` dark:text-white sm:text-base w-auto rounded-lg sm:rounded-none p-2 sm:p-0 absolute sm:static top-16 right-2 ${
                ham
                  ? "opacity-100 translate-y-0 bg-black/60"
                  : "opacity-0 sm:opacity-100 -translate-y-[140%] sm:translate-y-0"
              } flex flex-col sm:flex-row items-end sm:items-center gap-3 sm:gap-4 sm:text-lg transition-all duration-200 ease-in-out`}
            >
            {navItems.map((item,id)=>(
              <a key={id} className='active:text-blue-500 mx-3 hover:underline text-xl underline-offset-4' href={item.slug}>{item.name}</a>
            ))}
              <a href='#contact' className='active:text-blue-500 mx-3 rounded-md dark:bg-blue-600 text-white px-2 py-0.5 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 text-xl'>Contact Me</a>            
            </ul>
            <div className="ml-2 w-10 sm:w-12 invert dark:invert-0"><ThemeProvider><Switcher/></ThemeProvider></div>
          </div>
      </section>
  )
} 
 