"use client"
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'

const Page = () => {
  return (
    <div 
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center overflow-auto px-4"
    >
      <div className="flex flex-col gap-12 sm:gap-20 w-full max-w-6xl text-center items-center pt-20">
        
        {/* About Me Section */}
        <div className="flex flex-col items-center gap-6 sm:gap-4 w-full">
          <h1 className="font-semibold text-purple-300 text-3xl sm:text-5xl">
            About Me
          </h1>
          <p className="text-white text-base sm:text-lg text-center sm:text-justify font-medium leading-relaxed">
            Hi!, I'm Dwiana. I'm a QA Engineer with a strong interest in automation and a background in front-end development.
            While my core experience is in manual testing and semi-automate testing, I’m currently expanding my skills in test automation 
            exploring tools like Mocha, Cypress, Katalon, Cucumber, Appium and Selenium WebDriver to improve test efficiency and reliability.
            My front-end background helps me better understand how users interact with the interface, allowing me to identify issues early and 
            design more targeted, meaningful test cases especially in UI/UX areas. I'm detail-oriented, curious, and always looking for ways to 
            improve both the product and the process behind it. Always learning, always improving.
          </p>
        </div>

        {/* Swiper 1 */}
        <Swiper
          breakpoints={{
            0: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          modules={[Autoplay]}
          className="w-full"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper 2 */}
        <Swiper
          breakpoints={{
            0: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
          speed={5000}
          modules={[Autoplay]}
          className="w-full"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center mb-30">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                className='w-12 sm:w-16 md:w-20'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page