"use client";

import { motion } from "framer-motion";
interface HandWrittenTitleProps {
    title?: string;
    subtitle?: string;
    className?: string; // Added className prop for flexibility
}

function HandWrittenTitle({
    title = "Hand Written",
    subtitle = "Optional subtitle",
    className,
}: HandWrittenTitleProps) {
    const draw: any = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: "easeInOut" },
                opacity: { duration: 0.5 },
            },
        },
    };

    return (
        <div className={`relative w-full max-w-4xl mx-auto py-12 ${className}`}>
            <div className="absolute inset-0">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 600"
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full"
                >
                    <title>KokonutUI</title>
                    <motion.path
                        d="M 150 300 
                           C 150 100, 1050 100, 1050 300
                           C 1050 500, 150 500, 150 300
                           C 150 200, 300 180, 300 180"
                        fill="none"
                        strokeWidth="12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        className="text-white opacity-40" // Changed to white for dark theme compat
                    />
                </motion.svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                <motion.h1
                    className="text-4xl md:text-6xl text-white tracking-tighter flex items-center gap-2 font-bold uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        className="text-xl text-white/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}

export { HandWrittenTitle }
