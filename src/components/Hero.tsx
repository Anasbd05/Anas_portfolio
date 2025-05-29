"use client"
import React from 'react'
import profile from "@/assets/profile-img.png"
import {Download} from 'lucide-react'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Hero = () => {
    return (
        <section className=' py-14 px-4 -mt-5 flex flex-col items-center bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7886C7,#EAEEFE_100%)] '>
            <motion.img src={profile.src}
                initial={{opacity: 0,scale: 0.9}}
                whileInView={{opacity: 1,scale: 1}}
                transition={{duration: 0.4}} alt='' width={180} height={180} />
            <motion.div
                initial={{opacity: 0,scale: 0.9}}
                whileInView={{opacity: 1,scale: 1}}
                transition={{duration: 0.6}} className="max-w-xl flex-col flex items-center ">
                <span className='mt-5 font-head font-medium '>Hi! I&#39;m Anas Boumediani  </span>
                <h1 className='mt-4 tag text-center '>FullStack web devloper <br className='hidden lg:block' /> <span>Based in morocco.</span> </h1>
                <p className=' mt-3 text-center font-medium'>Building modern, responsive, and high-performance web applications using the latest frontend and backend technologies.</p>
                <div className="flex gap-4 justify-center mt-4">
                    <button className='py-2 px-5 rounded-full duration-500 hover:opacity-80 cursor-pointer  bg-black text-white'>
                        <Link href={""} className='flex gap-1 items-center ' download={"/sample-resume.pdf"} >Download resume
                            <Download className='text-white h-4 w-4' />
                        </Link>
                    </button>
                    <button className='py-2 px-5 rounded-full hidden md:block ring ring-neutral-950 duration-500 cursor-pointer text-black hover:bg-white '>Contact me</button>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
