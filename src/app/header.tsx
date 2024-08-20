import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

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
            <div className='lg:hidden flex flex-row justify-start items-start'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#a6a6a6] cursor-pointer lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />

                    </svg>
                </button>
                {isOpen && (
                    <div data-aos="fade-down" onClick={() => setIsOpen(!isOpen)} className='h-screen bg-black/50 inset-0 absolute top-0 right-0 z-0'>
                        <div className='flex flex-col justify-center h-full items-center gap-10 bg-black/75 z-10'>
                            <Link href="/#about" onClick={() => setIsOpen(!isOpen)} className='w-full tracking-widest flex hover:bg-black/90 text-lg justify-center gap-3 items-center py-5 font-extrabold text-[#f5f5f5]'>
                                About
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </Link>
                            <Link href="/#experiences" onClick={() => setIsOpen(!isOpen)} className='w-full tracking-widest flex hover:bg-black/90 text-lg justify-center gap-3 items-center py-5 font-extrabold text-[#f5f5f5]'>
                                Experiences
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </Link>
                            <Link href="/#projects" onClick={() => setIsOpen(!isOpen)} className='w-full tracking-widest flex hover:bg-black/90 text-lg justify-center gap-3 items-center py-5 font-extrabold text-[#f5f5f5]'>
                                Projects
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </Link>
                            <Link href="/#contact" onClick={() => setIsOpen(!isOpen)} className='w-full tracking-widest flex hover:bg-black/90 text-lg justify-center gap-3 items-center py-5 font-extrabold text-[#f5f5f5]'>
                                Contacts
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
