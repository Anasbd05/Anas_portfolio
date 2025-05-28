import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='py-12 px-4 md:px-10 bg-gradient-to-b from-white to-[#d2dcffad] lg:px-12'>
            <main className='flex gap-8 lg:gap-20 flex-col items-center lg:items-start justify-center lg:flex-row'>
                <div className="flex flex-col  w-3/4 lg:w-2/4">
                    <h1 className='font-semibold mb-4 text-to'>Contact</h1>
                    <p className='tag lg:leading-[58px] mb-6'>Have a Project? <br /> Let&#39;s talk! </p>
                    <button className='bg-to cursor-pointer hover:opacity-80 text-white py-2 w-32 font-medium rounded-lg hidden lg:block '>Send</button>
                </div>
                <div className="flex flex-col gap-3 w-3/4  lg:w-2/4">
                    <div className='flex flex-col mb-1'>
                        <label className='font-medium text-black/70'>Name</label>
                        <input type="text" className='py-1.5 px-2 ring ring-black/30 shadow-sm rounded-lg  outline-none  ' placeholder='example' />
                    </div>
                    <div className='flex flex-col mb-1'>
                        <label className='font-medium text-black/70'>Email</label>
                        <input type="text" className='py-1.5 px-2 ring ring-black/30 shadow-sm rounded-lg outline-none  ' placeholder='example@gmail.com' />
                    </div>
                    <div className='flex flex-col mb-1'>
                        <label className='font-medium text-black/70'>Message</label>
                        <textarea className='py-1.5 px-2 ring ring-black/30 shadow-sm rounded-lg  h-32 outline-none ' placeholder='Enter you message here...' />
                    </div>
                    <button className='bg-to cursor-pointer hover:opacity-80 text-white py-2 w-32 lg:hidden block font-medium rounded-lg'>Send</button>
                </div>

            </main>

        </section>
    )
}

export default Contact
