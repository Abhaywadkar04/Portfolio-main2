import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <section className='h-full w-full' id='home'>
        <Home/>
      </section>
      <section className='h-full w-full' id='about'>
        <About />
      </section>
      <section className='h-full w-full' id='skills'>
        <Skills />
      </section>
      <section className='h-full w-full' id='projects'>
        <Project />
      </section>
      <section className='h-full w-full' id='contact'>
        <Contact />
      </section>
    </div>
  )
}

export default App