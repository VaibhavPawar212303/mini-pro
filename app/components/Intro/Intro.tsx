'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Intro() {
    // Animation variants for smooth transitions
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="w-full flex flex-col lg:flex-row justify-between items-center lg:py-20 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-100 to-white shadow-lg rounded-2xl">
            {/* Left Section */}
            <motion.div
                className="relative w-full lg:w-1/2 py-16 px-8 lg:px-12 flex flex-col items-start justify-center space-y-10 bg-gradient-to-br from-gray-800/10 to-gray-900/10 rounded-2xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 z-10"
                    variants={childVariants}
                >
                    Welcome to <span className="text-green-500 underline decoration-wavy decoration-2 underline-offset-4">Testrig Community</span>
                </motion.h1>
                <motion.p
                    className="relative text-lg sm:text-xl text-gray-700 z-10 max-w-md"
                    variants={childVariants}
                >
                    Discover a world of insightful articles, tutorials, and the latest updates crafted for curious minds.
                </motion.p>
                <motion.div variants={childVariants}>
                    <Link href="/blogs">
                        <button className="relative px-6 py-3 bg-green-500 hover:bg-green-600 text-gray-900 font-semibold rounded-full hover:shadow-lg transition-all duration-300 z-10">
                            Explore Blogs
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
                className="relative w-full lg:w-1/2 py-16 px-8 lg:px-12 flex flex-col items-start justify-center space-y-6 bg-gradient-to-br rounded-2xl mt-14"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 z-10"
                    variants={childVariants}
                >
                    Start Your Journey with Testrig Community
                </motion.h2>
                <motion.p
                    className="text-lg sm:text-xl text-gray-600 z-10 max-w-md"
                    variants={childVariants}
                >
                    Join our vibrant Testrig Community to access exclusive resources, stories, and insights from industry experts. Let’s grow together!
                </motion.p>
                <motion.div variants={childVariants}>
                    <Link href="/sign-up">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
                            Sign Up Now
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}