import React from 'react'
import { motion } from 'framer-motion'
import { ShapesCanvas, ComputerCanvas } from './canvas'
import { styles } from '../style'
import { ArrowRight } from "lucide-react";


const Hero3D = () => {
  return (
    <section className='relative w-full mx-auto h-screen hover:cursor-move'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className='w-5 h-5 rounded-full bg-[#5e5eff] ' />
          <div className='w-1 sm:h-80 h-40 blue-gradient  ' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>Hi, I'm <span className='text-[#5e5eff]'>Kushal</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a Full Stack Web Developer. <br className='sm:block hidden' />I also develop 3D visuals for fun
          </p>
        </div>
      </div>
      {/* <ShapesCanvas /> */}
      <ComputerCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-secondary justify-center flex border-4 items-start p-2'>
            <motion.dev
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

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-semibold tracking-widest text-gray-600 dark:text-gray-300"
        >
          Hi, I’m <span className="font-semibold">Kushal Singh</span>
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
        >
          Software Developer <br />
          <span className="text-blue-600 dark:text-blue-400">Building Scalable Systems</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          I specialize in Java Spring Boot, Microservices, and Cloud-Native backend engineering—creating
          clean, high-performance systems with modern architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4 mt-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl text-base font-medium bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl text-base font-medium border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-2"
          >
            Contact Me <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero3D;
