'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Experiences } from '@/constants'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const Page = () => {
  return (
    <div 
  className='w-screen min-h-screen bg-center flex items-center bg-amber-50 justify-center px-4 sm:px-6 md:px-10'>
  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-screen-md pt-20 mb-20 left-2 sm:left-4 md:left-0">
    <h1 className="font-extrabold font-serif text-orange-800 text-2xl sm:text-3xl md:text-5xl mb-8 text-center">
      My Experiences
    </h1>
  
    <div className="absolute top-40 sm:top-43 left-0 w-[2px] h-[93%] sm:h-[87%] bg-orange-200 z-0"></div>

    {Experiences.map(({ title, description, company, period, tech }) => (
      <div
        key={company}
        className="relative pl-6 sm:pl-8 pb-10 text-white"
      >
       <div className="border-primary bg-orange-800 absolute left-[-5px] md:left-[-5px] top-1 sm:top-0 size-3 rounded-full border-2 z-10" />
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='border-3 p-2 border-white rounded-2xl bg-orange-200 shadow-lg'
        >
          <div className="flex items-center gap-3">
            <span className="md:text-lg text-orange-800 font-serif font-semibold">{company}</span>
          </div>
          <div>
            <h3 className="md:text-xl text-yellow-800 font-serif italic font-medium">{title}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm">
              <span className='text-white font-serif'>{period}</span>
            </div>
          </div>
          <p className="text-orange-800 text-justify font-serif mt-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((tech) => (
              <div
                key={tech}
                className="rounded-full font-serif text-white border-2 bg-orange-800 px-3 py-1 text-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Page