"use client"
import { NavLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Transition from './Transition'

const Navigation = () => {
    const [isRouting, setisRouting] = useState(false)
    const path = usePathname()
    const [prevPath, setPrevPath] = useState("/")

    useEffect(() => {
        if(prevPath !== path) {
            setisRouting(true)
        }
    }, [path, prevPath])

    useEffect(() => {
        if(isRouting) {
            setPrevPath(path)
            const timeout = setTimeout(() => {
                setisRouting(false)
            }, 1200)

            return() => clearTimeout(timeout)
        }
    },[isRouting])

  return (
    <div 
    className='fixed bottom-4 left-1/2 -translate-x-1/2 z-[50] w-[90%] sm:w-[70%] md:w-[40%] max-w-md rounded-full flex justify-between items-center border bg-black border-white px-4 py-5 backdrop-blur'
    >
        {isRouting}
        {NavLinks.map((nav) => (
            <Link
            key={nav.name}
            href={nav.link}
            className='flex-1 text-center'
            >
                <nav.icon className={`w-6 h-6 mx-auto ${
                    path === nav.name ? "text-purple-800" : "text-white"
                    }`}
                />
            </Link>
        ))}
    </div>
  )
}

export default Navigation