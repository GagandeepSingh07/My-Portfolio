'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Work', href: '/work' },
        { name: 'Contact', href: '/#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    return (
        <>
            <motion.nav className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${isScrolled ? 'bg-white/15 backdrop-blur-lg' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link href='/' className='text-2xl font-bold tracking-tight'>
                    <span className='text-white'>Portfolio</span><span className='text-[#89D1D1]'>.</span>
                </Link>

                <div className='hidden items-center space-x-10 md:flex'>
                    {links.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className={`py-2 px-1 transition hover:text-gray-300 ${
                                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) 
                                    ? 'text-[#89D1D1]' 
                                    : ''
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a 
                        href='https://drive.google.com/file/d/1VUl3psB8Pkk5g15UYmqgui1bkNQgVhXN/view?usp=sharing' 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn glass'
                        data-cursor='download'
                    >
                        Resume
                    </a>
                </div>

                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                    <MenuIcon className='size-6.5' />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </Link>
                ))}

                <a 
                    href='https://drive.google.com/file/d/1VUl3psB8Pkk5g15UYmqgui1bkNQgVhXN/view?usp=sharing' 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn glass' 
                    onClick={() => setIsOpen(false)}
                    data-cursor='download'
                >
                    Resume
                </a>

                <button onClick={() => setIsOpen(false)} className='rounded-md p-2 glass'>
                    <XIcon />
                </button>
            </div >
        </>
    );
}
