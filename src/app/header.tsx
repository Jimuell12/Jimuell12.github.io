import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex justify-between p-4 items-center font-sans z-10'>
            <Link href="/" className='tracking-widest text-lg font-semibold'>
                Jimuel Flojera
            </Link>
            <div className='mt-5 flex-row flex gap-10'>
                <Link href="/about" className='tracking-widest text-xs font-bold hover:text-[#f5f5f5] text-[#a6a6a6]'>
                    About
                </Link>
                <Link href="/projects" className='tracking-widest text-xs font-bold hover:text-[#f5f5f5] text-[#a6a6a6]'>
                    Projects
                </Link>
                <Link href="/contact" className='tracking-widest text-xs font-bold hover:text-[#f5f5f5] text-[#a6a6a6]'>
                    Contact
                </Link>
            </div>
        </nav>
    )
}
