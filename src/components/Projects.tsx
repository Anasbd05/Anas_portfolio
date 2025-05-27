import {projects} from '@/assets/assets'
import {Send} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Projects = () => {
    return (
        <section className='py-20 px-4 md:px-10 lg:px-12'>
            <h1 className='tag mb-8'>Projects</h1>
            <main className='flex flex-col gap-16 px-6 md:px-10 '>
                {projects.map((project,index) => (
                    <div key={index} className={`flex flex-col lg:flex gap-8 lg:gap-16 ring ring-neutral-600 p-4 lg:ring-0 rounded-lg ${(project.url === "https://delivery-food-sigma.vercel.app" || project.url === "https://uiimage.vercel.app/")
                        ? "lg:flex-row-reverse"
                        : "lg:flex-row"
                        }`}>
                        <Image src={project.image} alt={project.title} width={500} height={600} className='rounded-md' />
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
