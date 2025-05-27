import Image from 'next/image'
import React from 'react'

import profile from '@/assets/user-image.png'
import {infoList,tools} from '@/assets/assets'


const About = () => {
    return (
        <section className='py-12 bg-[#FEFEFA] bg-forground md:py-14 px-4 md:px-10 lg:px-12 '>
            <h1 className=' tag mb-10 '>About Me</h1>
            <main className='flex flex-col items-center lg:flex-row gap-10 lg:gap-20 px-6 md:px-10 '>
                <Image alt='Profile image' src={profile} width={360} height={500} className='' />
                <div className="flex flex-col gap-6">
                    <p className='text-justify'>
                        I&rsquo;m a self-taught developer driven by curiosity and a passion
                        for creating meaningful digital experiences. I enjoy turning ideas into
                        practical solutions through clean code, thoughtful design, and continuous
                        learning. With a strong focus on growth and creativity, I’m always looking for
                        new challenges that push my skills and expand my perspective.

                    </p>
                    <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
                        {infoList.map((info,index) => (
                            <div key={index} className="flex flex-col gap-5 p-5 rounded-lg border duration-700 border-neutral-900 hover:shadow-[3px_3px_#000] hover:bg-indigo-100 ">
                                <span>{info.icon}</span>
                                <h2 className='font-bold tracking-tight text-xl font-head'>{info.title} </h2>
                                <p>{info.description}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h4 className='font-semibold mb-1'>Tools i use : </h4>
                        <div className="flex gap-2 md:gap-4 flex-wrap">
                            {tools.map((tool,index) => (
                                <Image src={tool} key={index} alt='' width={55} height={55} className='p-2 border w-11 h-11 md:w-14 md:h-14 border-neutral-800 rounded-md hover:scale-110 duration-500 ' />
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </section>
    )
}

export default About
