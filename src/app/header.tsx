import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav data-aos="fade-down" data-aos-delay="1000" className='flex justify-between p-4 h-min mx-auto container font-sans z-10 absolute lg:px-20 border-none inset-0'>
            <Link href="/" className='tracking-widest text-xs lg:text-lg font-bold'>
                Jimuel Flojera
            </Link>
            <div className='mt-5 flex-row gap-10 hidden lg:flex'>
                <Link href="/#about" className='tracking-widest text-xs font-bold hover:text-[#f5f5f5] text-[#a6a6a6]'>
                    About
                </Link>
                <Link href="/#experiences" className='tracking-widest text-xs font-bold hover:text-[#f5f5f5] text-[#a6a6a6]'>
                    Experiences
                </Link>
                <Link href="/#projects" className='tracking-widest text-xs font-bold hover:text-[#f5f5f5] text-[#a6a6a6]'>
                    Projects
                </Link>
                <Link href="/#contact" className='tracking-widest text-xs font-bold hover:text-[#f5f5f5] text-[#a6a6a6]'>
                    Contact
                </Link>
            </div>
        </nav>
    )
}
