"use client"
import {projects} from '@/assets/assets'
import {motion} from 'framer-motion'
import {Send} from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Projects = () => {
    return (
        <section id='projects' className='py-20 px-4 md:px-10 lg:px-12 bg-gradient-to-b from-white to-[#D2DCFF] '>
            <h1 className='tag mb-8 text-center'>Projects</h1>
            <main className='flex flex-col gap-16 px-6 md:px-10 lg:px-8 xl:px10 '>
                {projects.map((project,index) => (
                    <div key={index} className={`flex flex-col gap-8 xl:gap-24 ring ring-neutral-600 p-4 lg:ring-0 rounded-lg ${(project.url === "https://delivery-food-sigma.vercel.app" || project.url === "https://uiimage.vercel.app/")
                        ? "lg:flex-row-reverse "
                        : "lg:flex-row"
                        }`}>
                        <motion.img src={project.image.src}
                            initial={{opacity: 0,scale: .8}}
                            whileInView={{opacity: 1,scale: 1}}
                            transition={{duration: 0.6}}
                            alt={project.title} width={500} height={600} className={` rounded-xl hidden lg:block ${(project.url === "https://delivery-food-sigma.vercel.app" || project.url === "https://uiimage.vercel.app/")
                                ? " shadow-[-20px_-20px] shadow-[#cbd1eabe] "
                                : "shadow-[20px_-20px] shadow-[#cbd1eabe]"
                                }`} />
                        <main className='flex flex-col'>
                            <h1 className='text-xl font-bold mb-2'>{project.title}</h1>
                            <div className='flex gap-4 flex-wrap mb-3.5'>
                                {project.tools.map((tool,index) => (
                                    <span key={index} className='rounded-md py-1 px-4 shadow hover:bg-indigo-300 duration-500'>{tool}</span>
                                ))}
                            </div>
                            <p className='text-neutral-700 mb-7'>{project.description}</p>
                            <div className="flex gap-6 items-center">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='bg-black text-white rounded-md cursor-pointer py-2 px-5 hover:opacity-80'>
                                    View Github
                                </Link>
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='bg-indigo-300 cursor-pointer hover:shadow-[2px_2px_#000] duration-500 rounded-md p-2 flex items-center justify-center'>
                                    <Send className='h-6 w-6' />
                                </Link>
                            </div>
                        </main>
                    </div>
                ))}

            </main>
        </section>
    )
}

export default Projects
