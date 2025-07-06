import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div 
    // style={{backgroundImage: "url(/bg-3.jpg)"}}
    className='w-screen min-h-screen flex flex-col items-center justify-start bg-black bg-center pt-20'
    >
      <h1 className="font-extrabold text-purple-300 text-3xl sm:text-5xl text-center">
        My Projects
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[90%] max-h-[90%] pt-10 mb-30'>
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            link={project.link}
            title={project.title}
            text={project.text}
            image={project.src}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  )
}

export default Page