"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen min-h-screen overflow-auto relative">
      <div
        className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-16 py-10 lg:py-16 bg-cover bg-center"
        style={{ backgroundImage: 'url(/main-bg4.jpg)' }}
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 justify-center text-center lg:text-left max-w-2xl px-4 lg:pl-20 pt-10 pb-28 sm:pb-30 flex flex-col gap-5 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-snug">
            I don't know what the future holds, but I do know that the world is
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-pink-400">
              full of opportunities.
            </span>
          </h1>
          <p className="italic text-lg text-pink-400">– Anne Shirley</p>

          <p className="text-white text-justify text-sm sm:text-base leading-relaxed font-medium">
            Hi! I'm Dwiana. Quality Assurance (QA) Engineer with 2+ years of experience in manual and automated testing.
            Skilled in test planning, execution, bug reporting, and cross-functional collaboration to ensure seamless product releases.
            Experienced in front-end development using ReactJS, with a strong foundation in agile methodologies and QA automation tools.
            Detail-oriented, fast learner, and committed to software quality excellence.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link href="/my-skills" className="rounded-2xl bg-purple-400 px-5 py-3 text-lg text-white w-full sm:w-auto text-center">
              About Me
            </Link>
            <Link href="/my-projects" className="relative group rounded-2xl border border-white px-5 py-3 text-lg text-white w-full sm:w-auto text-center">
              <div className="absolute rounded-2xl z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition" />
              My Projects
            </Link>
            <Link href="/contact-me" className="relative group rounded-2xl border border-white px-5 py-3 text-lg text-white w-full sm:w-auto text-center">
              <div className="absolute rounded-2xl z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition" />
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="mb-10 lg:mb-0 flex justify-center lg:justify-start lg:pl-50 w-full lg:w-1/2">
          <Image
            src="/photo.png"
            alt="photo"
            height={300}
            width={300}
            className="
           translate-y-1/2 lg:translate-y-0 rounded-full object-cover border-4 border-white shadow-lg w-36 h-36 sm:w-48 sm:h-48 lg:w-72 lg:h-72"
          />
        </div>

        {/* Stars Decoration */}
        <Image
          src="/stars.png"
          alt="stars"
          width={300}
          height={300}
          className="absolute top-10 left-0 z-10"
        />
      </div>
    </main>
  );
}
