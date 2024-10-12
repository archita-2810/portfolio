"use client";
import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import Architaimg from '../../assets/Archita.jpg'
import Image from 'next/image';
import SidePanel from "./sidepanel";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky top-0 z-50 mt-4 px-4">
            <nav className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow-lg bg-transparent">
                
            {/* Logo section with circle image and name */}
            <Link href='/' passHref>
                <div className="flex items-center gap-4">
                    {/* Small circular image */}
                    <Image
                        src={Architaimg}
                        alt="Archita Sugandh"
                        className="w-10 h-10 rounded-full"
                    />
                    {/* Name text */}
                        <p className="text-2xl font-semibold">archita.</p>
                </div>
            </Link>

                {/* Links for medium and larger screens */}
                <div className="hidden md:flex gap-8 justify-center items-center">
                    <p onClick={toggleNavbar} className='text-xl hover:underline'>about</p>
                    <p onClick={toggleNavbar} className='text-xl hover:underline'>work</p>
                    <p onClick={toggleNavbar} className='text-xl hover:underline'>contact</p>
                </div>

                {/* Hamburger menu for smaller screens */}
                <div className='md:hidden flex items-center'>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Dropdown for smaller screens */}
            {isOpen && (
                <div className='flex flex-col items-center md:hidden mt-2'>
                    <p onClick={toggleNavbar} className='cursor-pointer p-4 hover:underline'>about</p>
                    <p onClick={toggleNavbar} className='cursor-pointer p-4 hover:underline'>work</p>
                    <p onClick={toggleNavbar} className='cursor-pointer p-4 hover:underline'>contact</p>
                </div>
            )}

            <SidePanel isOpen={isOpen} togglePanel={toggleNavbar} />
        </div>
    );
};

export default Navbar;