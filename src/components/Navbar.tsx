import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='px-8 py-4 flex items-center sticky top-0 z-50 shadow-sm backdrop-blur-sm justify-between'>
            <Image src={"/logo.png"} height={60} width={60} alt='' />
            <div className='hidden lg:flex gap-8'>
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Services</Link>
                <Link href={"#"}>Works</Link>
                <Link href={"#"}>Pricing</Link>
            </div>
            <button className='bg-black py-2 px-4 rounded-lg text-white hover:opacity-80 cursor-pointer '>Contact</button>
        </nav>
    )
}

export default Navbar
