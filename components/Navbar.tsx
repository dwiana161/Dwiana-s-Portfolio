"use client"
import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={
      `fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300
       ${scrolled ? "backdrop-blur-md bg-black/40 shadow-md" : "bg-transparent"}
      `}>
        <div className='flex flex-row gap-3 items-center'>
            <div className='relative'>
                {/* <Image
                    src=""
                    alt="logo"
                    width={40}
                    height={40}
                    className='w-full h-full object-contain rounded-full'
                /> */}
            </div>
            <h1 className="text-white text-lg font-semibold">
          Dwiana's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Portfolio{" "}
          </span>
        </h1>
        </div>
        <div className='flex flex-row gap-5 mb-2'>
          <h1 className='text-white border-1 rounded p-2 hidden md:block'>Get in touch &rarr;</h1>
            {Socials.map((social) => (
              <Link key={social.name} href={social.link} className='flex'>
                <Image
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    width={30}
                    height={30}
                />
              </Link>
            ))

            }
        </div>
    </div>
  )
}

export default Navbar