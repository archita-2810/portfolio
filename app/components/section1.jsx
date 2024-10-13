"use client"
import Link from "next/link";

const Section1 = () => {

    return (
        <div className="flex flex-col gap-y-10">
            <div className="flex flex-col lg:flex-row p-5 justify-between mt-8">
                {/* This will showcase name and introduction */}
                <div className="flex flex-col justify-between gap-y-10 ml-0 lg:ml-10">
                    <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold animate-gradient pb-2">
                        I'm Archita<br></br> Sugandh.
                    </h1>
                    <p className="text-xl sm:text-3xl lg:text-3xl font-normal">
                    I'm a pre-final year student who loves building websites and bringing<br></br> creative ideas to life through web development.
                    </p>
                </div>

                {/* This will showcase project sections */}
                <div className="flex flex-col gap-y-10 mr-5 lg:mr-10 mt-10 lg:mt-0">
                    <p className="text-gray-500 text-xl sm:text-2xl lg:text-3xl font-medium">
                        COMPLETED PROJECTS
                    </p>
                    {/* Div for all projects */}
                    <div className="flex flex-col gap-y-8">
                        {["Expense Tracker", "WTM official website", "Gizmo Innovations", "Project 4", "Project 5"].map((project, index) => (
                            <Link key={index} href="/" className="group">
                                <div className="flex justify-between items-center pb-1 border-b-2 border-gray-300 transition-all duration-300 group-hover:border-black">
                                    <p className="text-xl sm:text-2xl font-medium transition-all duration-300 group-hover:text-black">
                                        {project}
                                    </p>
                                    <span className="text-xl sm:text-2xl transition-all duration-300 transform group-hover:translate-x-2 opacity-0 group-hover:opacity-100">
                                        →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* for marqueue */}
            <div className="w-full bg-cream h-20 lg:h-24 mt-9 relative bottom-0 left-0 flex items-center overflow-hidden">
                <div className="animate-marquee whitespace-nowrap text-xl sm:text-3xl font-normal text-center w-full">
                    <span className="mx-2 sm:mx-4">• From Nagpur, Maharashtra •</span>
                    <span className="mx-2 sm:mx-4">• Develops Websites •</span>
                    <span className="mx-2 sm:mx-4">• Competitive Programmer •</span>
                    <span className="mx-2 sm:mx-4">• Public Speaker •</span>
                    <span className="mx-2 sm:mx-4">• Loves Problem Solving •</span>
                </div>
            </div>

            <style jsx>{`
                .animate-gradient {
                    background: linear-gradient(90deg, black, #444, #888, black);
                    background-size: 200% 200%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradient-flow 4s ease infinite;
                }

                @keyframes gradient-flow {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                .animate-marquee {
                    display: inline-block;
                    animation: marquee 15s linear infinite;
                }

                @keyframes marquee {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }

                .bg-cream {
                    background-color: #f5f5dc;
                }

            `}</style>
        </div>
        
    );
}

export default Section1;
