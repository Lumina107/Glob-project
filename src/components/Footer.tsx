import Image from 'next/image';
import Logo from './../assets/logo.png';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='py-10 -mt-5 z-10 relative flex flex-col items-center justify-center gap-5 bg-[#6379C2]'>
            <Image
                src={Logo}
                alt='Logo'
                sizes='100%'
                className='h-16 w-auto' />
            <div className="flex items-center justify-center gap-10 text-2xl text-white md:text-3xl">
                <Link href={'/'}><FaTelegramPlane /></Link>
                <Link href={'/'}> <FaDiscord /></Link>
                <Link href={'https://t.co/LQRAhR7VfJ'}><FaXTwitter /></Link>
            </div>
        </footer>
    )
}
