'use client'

import ContactForm from '@/components/ContactForm'
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
    // style={{backgroundImage: "url(/bg-3.jpg)"}}
    className='w-screen min-h-screen bg-center flex items-center bg-black justify-center'>
    <div className="relative w-[360px] md:w-full md:max-w-screen-md pt-20 mb-20 items-center left-4 md:left-0 ">
      <h1 className="font-extrabold text-purple-300 text-3xl sm:text-5xl mb-8 text-center">
        My Experiences
      </h1>
        {Experiences.map(
          ({ title, description, company, period, tech }) => (
            <div
              key={company}
              className="not-last:pb-12 left-[-20px] md:left-0 text-white relative pl-8 [&:not(:last-child)]:pb-10"
            >
              <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]">
                <div className="border-primary bg-background absolute md:left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <span className="md:text-lg text-white font-semibold">{company}</span>
                </div>
                <div>
                  <h3 className="md:text-xl text-white font-medium">{title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <span className='text-white'>{period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-white text-justify">{description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tech.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-full text-white border px-3 py-1 text-sm "
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Page