"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingIntro() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on first visit per session
        if (typeof window !== "undefined") {
            const hasVisited = sessionStorage.getItem("ls-intro-shown");
            if (!hasVisited) {
                setIsVisible(true);
                sessionStorage.setItem("ls-intro-shown", "true");
                const timer = setTimeout(() => setIsVisible(false), 2800);
                return () => clearTimeout(timer);
            }
        }
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-deep-ocean"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Logo mark */}
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        <motion.span
                            className="font-sans text-[0.7rem] md:text-[0.8rem] font-bold tracking-[0.4em] uppercase text-champagne"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Lauren
                        </motion.span>

                        <motion.span
                            className="w-10 h-[1px] bg-champagne/50 my-2"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        />

                        <motion.span
                            className="font-serif text-4xl md:text-5xl italic tracking-wider text-champagne"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            style={{
                                textShadow: "0 0 20px rgba(212, 175, 55, 0.5), 0 0 50px rgba(212, 175, 55, 0.2)",
                            }}
                        >
                            Strelau
                        </motion.span>

                        {/* Tagline */}
                        <motion.span
                            className="font-sans text-[0.55rem] tracking-[0.3em] uppercase text-white/30 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            Photography
                        </motion.span>

                        {/* Shimmer line */}
                        <motion.div
                            className="w-32 h-[1px] mt-8 overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}
                        >
                            <motion.div
                                className="w-full h-full bg-gradient-to-r from-transparent via-champagne/60 to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                    duration: 1.5,
                                    delay: 1.8,
                                    repeat: 1,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
