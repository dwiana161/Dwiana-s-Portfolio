'use client'

import ContactForm from '@/components/ContactForm'
import React from 'react'
import { motion } from 'framer-motion'
import { Experiences } from '@/constants'

const Page = () => {
  return (
    <div 
    style={{backgroundImage: "url(/bg-3.jpg)"}}
    className='w-screen min-h-screen bg-center flex items-center justify-center'>
    <div className="relative max-w-screen-md">
        {Experiences.map(
          ({ title, description, company, period, tech }) => (
            <div
              key={company}
              className="not-last:pb-12 text-white relative pl-8 [&:not(:last-child)]:pb-10"
            >
              <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.175,
                }}
                viewport={{
                  once: true,
                }}
                className="space-y-3 opacity-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                  </div>
                  <span className="text-lg text-white font-semibold">{company}</span>
                </div>
                <div>
                  <h3 className="text-xl text-white font-medium">{title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <span className='text-white'>{period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-white">{description}</p>
                <div className="flex flex-wrap gap-2">
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