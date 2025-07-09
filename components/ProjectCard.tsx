"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    image: string;
    title: string;
    text: string;
    link: string;
    tech: string[];
}

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

const ProjectCard = ({ image, title, text, link, tech}: Props ) => {

  return (
    <div className="flex flex-col p-4 sm:p-5 w-full sm:w-[500px] rounded-md border-3 border-orange-200 cursor-pointer">
      <motion.div
        className="w-full"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href={link}
          aria-label={title}
          target="_blank"
          className="overflow-hidden rounded block"
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={390}
            className="rounded transition-transform hover:scale-105 w-full h-[200px] object-cover sm:h-[250px]"
          />
        </Link>

        <h3 className="mt-3 text-lg sm:text-xl text-white font-extrabold font-serif">
          {title}
        </h3>
        <p className="text-white text-sm sm:text-base mt-1 mb-2 text-justify font-serif">
          {text}
        </p>
        <div className="flex flex-wrap gap-2">
            {
                tech.map((item, index) => (
                    <span
                    key={index}
                     className="rounded-full font-serif border-2 px-3 py-1 text-xs sm:text-sm text-white ">
                        {item}
                    </span>
                ))
            }
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard