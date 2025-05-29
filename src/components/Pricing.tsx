"use client"
import {pricingPlans} from '@/assets/assets'
import {motion} from 'framer-motion'
import {Check} from 'lucide-react'
import React from 'react'

const Pricing = () => {
    return (
        <motion.section
            initial={{opacity: 0,translateY: 400}}
            whileInView={{opacity: 1,translateY: 0}}
            transition={{duration: 0.4}}
            id='pricing' className='py-10 bg-[#FEFEFA] md:py-14 lg:py-16'>
            <div className="flex mb-10 max-w-xl mx-auto flex-col items-center">
                <h1 className=' tag mb-2'>Pricing</h1>
                <p className='text-to text-center font-medium'>
                    Flexible pricing tailored to your needs.
                </p>
            </div>
            <main className=' flex gap-10 mt-10 flex-col lg:flex-row items-center justify-center'>
                {
                    pricingPlans.map((pricing) => (
                        <div
                            key={pricing.id}
                            className={`flex p-10 shadow w-[350px] lg:w-[300px] flex-col rounded-3xl ${pricing.title === 'E-commerce' && "bg-black text-gray-200"} `}>
                            <h4 className={`mb-5 font-bold text-lg text-black/50 ${pricing.title === 'E-commerce' && "text-white/60"}`}>{pricing.title}</h4>
                            <h1 className='font-bold text-3xl '>{pricing.price}</h1>
                            <button className={` mt-8 py-2 w-full  rounded-lg font-medium hover:opacity-80 ${pricing.title === 'E-commerce' ? " bg-white text-black" : "bg-black text-white"} `}>Get started</button>
                            <ul className='flex gap-5 flex-col mt-10'>
                                {pricing.features.map((feature,index) => (
                                    <div key={index} className='flex gap-5' >
                                        <Check />
                                        <li>{feature}</li>
                                    </div>
                                ))}
                            </ul>

                        </div>
                    ))
                }
            </main>
        </motion.section>
    )
}

export default Pricing
