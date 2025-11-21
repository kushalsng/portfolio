import React from 'react'
import { motion } from 'framer-motion'
import { ComputerCanvas } from './canvas'
import { styles } from '../style'
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { leetcode } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Kushal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}>
            Software Developer building scalable systems. <br className='sm:block hidden' />
            I specialize in Java Spring Boot, Microservices, and Cloud-Native backend— with frontend proficiency.
          </p>

          <div className="mt-5 sm:mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-3 py-1 sm:px-6 sm:py-3 rounded-2xl text-sm sm:text-base font-medium bg-purple-700 text-white shadow-lg shadow-purple-800/30 hover:bg-purple-800 transition"
            >
              View Projects
            </a>

            <a
              href="/Kushal Singh Resume.pdf"
              download="Kushal Singh Resume.pdf"
              className="px-3 py-1 sm:px-6 sm:py-3 rounded-2xl text-sm sm:text-base font-medium border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:bg-gray-100 hover:text-black transition flex items-center gap-2"
            >
              <Download className="w-4 h-4 sm:w-6 sm:h-6" /> Resume
            </a>
            {/* <a
              href="/Kushal Singh Resume.pdf"
              download="Kushal Singh Resume.pdf"
              className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-primary transition-colors"
            >
              Download Resume <Download size={20} />
            </a> */}
          </div>

          <div className="mt-4 sm:mt-6 flex gap-4">
            <a href="https://github.com/kushalsng" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm sm:text-base hover:text-white transition-colors">
              <Github className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>
            <a href="https://linkedin.com/in/kushalsng" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
              <Linkedin className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>
            <a href="https://leetcode.com/u/kushalsng" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
              <img src={leetcode} alt="leetcode" className="w-4 h-4 sm:w-6 sm:h-6 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      <ComputerCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
