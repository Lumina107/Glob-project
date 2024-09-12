'use client'
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import Image from 'next/image';
import Logo from './../assets/logo.png';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Navbar() {
    const [open, setOpen] = React.useState(false)
    return (
        <nav className="fixed inset-x-0 top-0 md:top-4 flex items-center justify-center md:px-10 z-50">
            <div className="max-w-5xl w-full py-4 px-6 rounded-none md:rounded-2xl lg:border border-white flex items-center justify-between bg-[#3371B4]">
                <Link href={'/'} className='relative z-50'>
                    <Image src={Logo} alt="Logo" className='h-12 w-auto' />
                </Link>
                <button className='md:hidden z-50 relative' onClick={() => setOpen(!open)}>
                    <div className="h-5 w-7 grid gap-1 justify-center">
                        <span className={`h-0.5 w-7 rounded-md bg-white relative ${open && 'rotate-45 translate-y-1'} transition-all ease-in-out duration-500 block`}></span>
                        <span className={`h-0.5 w-7 rounded-md bg-white relative ${open && '-rotate-45 -translate-y-1'} transition-all ease-in-out duration-500 block`}></span>
                        <span className={`h-0.5 w-7 rounded-md bg-white relative ${open && '-rotate-45 -translate-y-3 opacity-0'} transition-all ease-in-out duration-500 block`}></span>
                    </div>
                </button>

                <div className={`fixed md:relative md:bg-transparent md:h-fit h-screen w-screen inset-x-0 px-8 pb-10 md:pb-0 md:px-0 z-40 text-center gap-6 top-0 flex flex-col md:flex-row items-center justify-center md:translate-x-0 md:w-fit ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-linear duration-300 bg-[#3371B4] md:bg-white/0`}>

                    <ul className='md:flex md:space-y-0 space-y-4 gap-5'>
                        {
                            [
                                {
                                    hash: 'About',
                                    url: '#about'
                                },
                                {
                                    hash: 'How to buy',
                                    url: '#how-to-buy'
                                },
                                {
                                    hash: 'Tokenomics',
                                    url: '#how-to-buy'
                                },
                                {
                                    hash: 'FAQ',
                                    url: '#faq'
                                }

                            ].map((items, idx) => {
                                return (
                                    <li key={idx} onClick={() => setOpen(false)} className='text-3xl md:text-base'>
                                        {

                                            <Link className='inline-block hover:text-black text-white transition-all ease-in-out duration-300 font-chivo font-light' href={items.url}>{items.hash}</Link>

                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='md:hidden flex items-center gap-2 text-white'>
                        <Link href={'/'} className='bg-white/20 p-1.5 text-2xl rounded-[3px] border border-white'><FaTelegramPlane /></Link>
                        <Link href={'/'} className='bg-white/20 p-1.5 text-2xl rounded-[3px] border border-white'> <FaDiscord /></Link>
                        <Link href={'https://t.co/LQRAhR7VfJ'} className='bg-white/20 p-1.5 text-2xl rounded-[3px] border border-white'><FaXTwitter /></Link>
                    </div>
                </div>
                <div className='hidden md:flex items-center gap-2 text-white'>
                    <Link href={'/'} className='bg-white/20 p-1.5 text-lg  rounded-[3px] border border-white'><FaTelegramPlane /></Link>
                    <Link href={'/'} className='bg-white/20 p-1.5 text-lg  rounded-[3px] border border-white'> <FaDiscord /></Link>
                    <Link href={'https://t.co/LQRAhR7VfJ'} className='bg-white/20 p-1.5 text-lg  rounded-[3px] border border-white'><FaXTwitter /></Link>
                </div>
            </div>
        </nav>
    )
}
