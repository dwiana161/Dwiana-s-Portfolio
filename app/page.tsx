"use client"
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'

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

export default function Home() {
  return (
    <main className="w-screen overflow-auto relative">
      <div
        className="min-h-screen w-screen flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-16 py-10 lg:py-16 bg-center"
        style={{ backgroundImage: 'url(/bg-5.jpg)' }}
      >
        <div className="w-full lg:w-1/2 justify-center text-center lg:text-left max-w-2xl px-4 lg:pl-20 pt-10 pb-28 sm:pb-30 flex flex-col gap-5 z-10">
           <motion.div
            className="w-full"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-yellow-800 font-semibold leading-snug font-sans">
            I don&apos;t know what the future holds, but I do know that the world is
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-200">
              full of opportunities.
            </span>
          </h1>
          <p className="italic text-lg text-amber-800 mb-2">– Anne Shirley</p>

          <p className="text-yellow-800 text-justify text-sm sm:text-base leading-relaxed font-serif rounded border-1 p-2 backdrop-blur-md">
            A Quality Assurance (QA) Engineer with 2+ years of experience in manual and automated testing.
            Skilled in test planning, execution, bug reporting, and cross-functional collaboration to ensure seamless product releases.
            Experienced in front-end development using ReactJS & NextJS, with a strong foundation in agile methodologies and QA automation tools.
            Detail-oriented, fast learner, and committed to software quality excellence. <br/>
            <span className="font-extrabold inline-block text-left">You can contact me at: dwianakas@gmail.com</span>
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link href="/my-skills" className="rounded-2xl bg-amber-800 shadow-xl/30 border-3 px-5 py-3 font-medium font-serif text-lg text-white w-full sm:w-auto text-center">
              About Me
            </Link>
            <Link href="/my-projects" className="relative group rounded-2xl border-2 px-5 py-3 text-lg font-medium text-yellow-800 w-full sm:w-auto text-center font-serif">
              <div className="absolute rounded-2xl z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition" />
              My Projects
            </Link>
            <Link href="/my-experiences" className="relative group rounded-2xl border-2 px-5 py-3 text-lg font-medium text-yellow-800 w-full sm:w-auto text-center font-serif">
              <div className="absolute rounded-2xl z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition" />
              My Experiences
            </Link>
          </div>
          </motion.div>
        </div>
       
        {/* Right Section (Image) */}
        <div className="mb-10 lg:mb-0 flex justify-center lg:justify-start lg:pl-50 w-full lg:w-1/2">
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
          >
          <Image
            src="/foto2.png"
            alt="photo"
            height={300}
            width={300}
            className="
           translate-y-1/2 lg:translate-y-0 rounded-full object-cover border-4 border-yellow-800 shadow-lg w-36 h-36 sm:w-48 sm:h-48 lg:w-72 lg:h-72"
          />
          </motion.div>
        </div>
        <Image
          src="/stars.png"
          alt="stars"
          width={300}
          height={300}
          unoptimized
          className="absolute top-10 left-0 z-10"
        />
      </div>
    </main>
  );
}
