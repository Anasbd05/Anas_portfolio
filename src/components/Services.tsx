"use client"
import React from 'react'
import {Services} from '@/assets/assets'
import {motion} from 'framer-motion'

const ServicesPage = () => {
    return (
        <section id='services' className='py-14 px-4 md:px-10 lg:px-12 '>
            <motion.div
                initial={{opacity: 0,scale: .8}}
                whileInView={{opacity: 1,scale: 1}}
                transition={{duration: 0.6}} className="flex mb-10 max-w-xl mx-auto flex-col items-center">
                <h1 className=' tag mb-2 '>Services</h1>
                <p className='text-to text-center font-medium'>We offer landing pages, e-commerce, SEO, and more — all tailored to grow your online presence.</p>
            </motion.div>
            <motion.main
                initial={{opacity: 0,scale: .8}}
                whileInView={{opacity: 1,scale: 1}}
                transition={{duration: 0.6}}
                className='grid gap-6 px-6 md:px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {Services.map((service,index) => (
                    <div className='p-5 rounded-lg shadow border border-neutral-500 hover:shadow-[3px_3px] shadow-to duration-500 ' key={index}>
                        <span>{service.icon}</span>
                        <h1 className='font-bold text-lg mt-5 mb-2'>{service.title}</h1>
                        <p className="text-neutral-700 ">{service.description}</p>
                    </div>
                ))}
            </motion.main>
        </section >
    )
}

export default ServicesPage
