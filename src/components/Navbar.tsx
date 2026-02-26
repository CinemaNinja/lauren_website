"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // On homepage (not scrolled): transparent bg, white hamburger, gold logo w/ shadows
    // On homepage (scrolled): cream backdrop, dark hamburger, gold logo
    // On all other pages: always cream backdrop, dark hamburger, gold logo
    const showSolidBg = scrolled || !isHome;

    return (
        <>
            {/* Fixed minimal nav trigger */}
            <motion.nav
                className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-12 py-5 transition-all duration-500 ${showSolidBg && !isOpen
                    ? "bg-cream/80 backdrop-blur-xl shadow-[0_1px_0_rgba(212,175,55,0.15)]"
                    : ""
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {/* Subtle gradient for homepage hero contrast */}
                {!showSolidBg && !isOpen && (
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean/50 via-deep-ocean/20 to-transparent pointer-events-none" />
                )}

                {/* Logo — stacked luxury brand mark */}
                <motion.div
                    className="z-50 relative"
                    whileHover={{
                        scale: 1.06,
                        transition: { type: "spring", stiffness: 400, damping: 14 },
                    }}
                    whileTap={{ scale: 0.96 }}
                >
                    <Link
                        href="/"
                        className={`inline-flex flex-col items-center leading-none transition-all duration-500 ${showSolidBg ? "text-champagne" : "text-champagne"
                            }`}
                        style={{
                            textShadow: showSolidBg
                                ? "0 0 12px rgba(212, 175, 55, 0.4), 0 1px 4px rgba(0,0,0,0.15)"
                                : "0 0 16px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.3), 0 2px 8px rgba(0,0,0,0.7)",
                            filter: showSolidBg
                                ? "drop-shadow(0 1px 3px rgba(0,0,0,0.15))"
                                : "drop-shadow(0 2px 6px rgba(0,0,0,0.6))",
                        }}
                    >
                        <span className="font-sans text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.35em] uppercase">
                            Lauren
                        </span>
                        <span className="w-8 h-[1px] bg-champagne/60 my-[4px]" />
                        <span className="font-serif text-2xl md:text-[1.7rem] italic tracking-wider">
                            Strelau
                        </span>
                    </Link>
                </motion.div>

                {/* Hamburger / Menu Toggle — right aligned */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="z-50 relative flex flex-col gap-[5px] w-7 group"
                    aria-label="Toggle Menu"
                >
                    <span
                        className={`block h-[1.5px] transition-all duration-500 ${isOpen
                            ? "rotate-45 translate-y-[6.5px] bg-champagne"
                            : showSolidBg
                                ? "w-7 bg-charcoal"
                                : "w-7 bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                            }`}
                    />
                    <span
                        className={`block h-[1.5px] transition-all duration-500 ${isOpen
                            ? "opacity-0 w-0"
                            : showSolidBg
                                ? "w-5 ml-auto bg-charcoal"
                                : "w-5 ml-auto bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                            }`}
                    />
                    <span
                        className={`block h-[1.5px] transition-all duration-500 ${isOpen
                            ? "-rotate-45 -translate-y-[6.5px] bg-champagne"
                            : showSolidBg
                                ? "w-7 bg-charcoal"
                                : "w-7 bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                            }`}
                    />
                </button>
            </motion.nav>

            {/* Full-screen overlay menu with Framer Motion */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Background image + overlay */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/DSC09352-2.jpg"
                                alt=""
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-deep-ocean/90 backdrop-blur-md" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center gap-2">
                            {/* Nav Links — staggered entrance */}
                            {[
                                { href: "/", label: "Home" },
                                { href: "/portfolio", label: "Portfolio" },
                                { href: "/offerings", label: "Offerings" },
                                { href: "/contact", label: "Contact" },
                            ].map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: i * 0.08 + 0.15,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-serif text-5xl md:text-7xl font-light text-white/90 hover:text-champagne transition-colors duration-500 py-3 block"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Animated gold divider */}
                            <motion.div
                                className="w-12 h-[1px] bg-champagne/40 my-6"
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                exit={{ scaleX: 0 }}
                                transition={{ duration: 0.6, delay: 0.55 }}
                            />

                            {/* Instagram link */}
                            <motion.a
                                href="https://www.instagram.com/laurenstrelau"
                                target="_blank"
                                rel="noopener"
                                className="font-sans text-xs tracking-[0.3em] uppercase text-champagne/70 hover:text-champagne transition-colors duration-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.65 }}
                            >
                                @laurenstrelau
                            </motion.a>

                            {/* Location tagline */}
                            <motion.span
                                className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mt-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.75 }}
                            >
                                Aspen, Colorado · Available Worldwide
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
