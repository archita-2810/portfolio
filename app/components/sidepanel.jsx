import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Architaimg2 from '../../assets/imgwsquare.svg';
import Link from 'next/link';
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaLock } from 'react-icons/fa'; 
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import Carousel from "./carousel";

const SidePanel = ({ isOpen, togglePanel }) => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setShowText(true);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setShowText(false);
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-black text-white transition-transform duration-400 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } w-full lg:w-2/3 overflow-y-auto`} // Full width on mobile, 2/3 on larger screens, and make it scrollable
        >
            <div className='flex justify-between p-4 items-center'>
                <button onClick={togglePanel} className="bg-gray-800 text-white px-6 py-4 rounded-full transition duration-300 hover:bg-gray-700">
                    Close
                </button>
            </div>

            <div className='flex flex-col lg:flex-row items-center p-4 gap-10 ml-8 mr-8 mt-10'>
                {/* Image section */}
                <div className="w-full lg:w-auto flex justify-center">
                    <Image
                        src={Architaimg2}
                        alt='Archita Sugandh'
                        className='rounded-lg'
                        style={{ height: 'auto', width: '100%', maxWidth: '500px' }}
                    />
                </div>

                {/* Text section */}
                <div>
                    {showText && (
                        <div className='flex flex-col gap-y-4'>
                            <div className='transition-opacity duration-700'>
                                <p id="scroll-text" className="text-base text-gray-300 animate-fadeInSlideUp delay-[200ms]">
                                    Hello, I am <span className="text-pastel-pink">Archita Sugandh :)</span><br />
                                    I am currently pursuing a Bachelor's degree in Artificial Intelligence and Machine Learning from
                                    <span className="text-pastel-pink"> Ramdeobaba University (RBU)</span>.<br />
                                    I have a passion for <span className="text-pastel-pink">web development</span>,
                                    <span className="text-pastel-pink"> problem-solving</span>, and
                                    <span className="text-pastel-pink"> public speaking</span>. I really enjoy
                                    <span className="text-pastel-pink"> communicating ideas</span> clearly and effectively, whether it's through
                                    <span className="text-pastel-pink"> presentations</span> or <span className="text-pastel-pink">debates</span>.
                                </p>
                            </div>

                            {/* Social Media Section */}
                            <div className='flex flex-col gap-4'>
                                {/* <p className='text-3xl font-bold'>Social Media:</p> */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                                    <Link href='https://www.instagram.com/archita_.04/' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-pink-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-pink-700">
                                        Instagram
                                    </Link>
                                    <Link href='https://www.linkedin.com/in/archita28' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-blue-700">
                                        LinkedIn
                                    </Link>
                                    <Link href='https://github.com/archita-2810' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                                        Github
                                    </Link>
                                    <Link href='https://leetcode.com' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-yellow-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-yellow-700">
                                        Leetcode
                                    </Link>
                                    <Link href='https://www.codechef.com/users/archita2810' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-amber-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-amber-700">
                                        Codechef
                                    </Link>
                                    <Link href='mailto:architasugandh@gmail.com' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-red-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-red-700">
                                        Gmail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Skills Section */}
            <div className='p-4 ml-8 mr-8 mt-10'>
                {/* Language Skills */}
                <div className='mb-8 flex flex-col gap-4'>
                    <p className='text-3xl font-bold'>Languages:</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <FaJava className='mr-2' /> Java
                        </div>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <FaPython className='mr-2' /> Python
                        </div>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <FaJsSquare className='mr-2' /> JavaScript
                        </div>
                    </div>
                </div>

                {/* Frontend Skills */}
                <div className='mb-8 flex flex-col gap-4'>
                    <p className='text-3xl font-bold'>Frontend:</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <FaHtml5 className='mr-2' /> HTML
                        </div>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <FaCss3Alt className='mr-2' /> CSS
                        </div>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <FaReact className='mr-2' /> ReactJS
                        </div>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <FaNodeJs className='mr-2' /> NextJS
                        </div>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <FaDatabase className='mr-2' /> Flask
                        </div>
                    </div>
                </div>

                {/* Database Skills */}
                <div className='mb-8 flex flex-col gap-4'>
                    <p className='text-3xl font-bold'>Database:</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <IoLogoFirebase className='mr-2'/> Firebase
                        </div>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <BiLogoPostgresql className='mr-2'/>PostgreSQL
                        </div>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <SiMongodb className='mr-2'/> MongoDB
                        </div>
                    </div>
                </div>

                {/* Authentication Skills */}
                <div className='flex flex-col gap-4'>
                    <p className='text-3xl font-bold'>Authentications:</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <FaLock className='mr-2' /> OAuth
                        </div>
                        <div className="flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-700">
                            <SiClerk className='mr-2'/> Clerk
                        </div>
                    </div>
                </div>
            </div>

            {/*carousel */}
            <div className='p-6 ml-4 mr-4'>
                <Carousel />
            </div>
        </div>
    );
};

export default SidePanel;
