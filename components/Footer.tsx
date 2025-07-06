import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bottom-0 w-full z-50 px-6 py-4 items-center backdrop-blur-md bg-black">
    <div className='gap-2 text-white p-2 flex mb-2 sm:mb-0 justify-center'>
      <span className='font-medium sm:text-base text-xs'>Made with</span>
      <Image
        src="/love.svg"
        alt="heart"
        height={20}
        width={20}
        className='h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6'
      />
       <span className='font-medium sm:text-base text-xs'> by dwianakmlas © 2025</span>
      </div>
    </div>
  )
}

export default Footer