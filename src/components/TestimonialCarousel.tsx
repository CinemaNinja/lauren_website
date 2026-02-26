"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    quote: string;
    name: string;
    context: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            "Lauren made me feel like a goddess in the water. Every image is a work of art I will treasure forever.",
        name: "Sophia M.",
        context: "Underwater Session · Malibu",
    },
    {
        quote:
            "She captured our love story in a way that felt effortless and timeless. We still get chills looking at the photos.",
        name: "Emma & Jack",
        context: "Engagement Session · Santa Monica",
    },
    {
        quote:
            "The most luxurious, empowering experience. Lauren has an incredible eye for light and emotion.",
        name: "Isabella R.",
        context: "Fusion Session · Aspen",
    },
];

export default function TestimonialCarousel() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [isPaused, next]);

    return (
        <section
            className="py-24 md:py-32 px-8 bg-deep-ocean relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Subtle decorative elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />

            <div className="max-w-3xl mx-auto text-center">
                <span className="font-sans text-[0.7rem] font-medium tracking-[0.3em] uppercase text-champagne/60 mb-10 block">
                    Kind Words
                </span>

                <div className="relative min-h-[280px] flex items-center justify-center">
                    {/* Large decorative quote mark */}
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 font-serif text-[8rem] leading-none text-champagne/10 select-none pointer-events-none">
                        &ldquo;
                    </span>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            className="relative z-10"
                        >
                            <blockquote className="font-serif text-2xl md:text-3xl font-light italic text-white/90 leading-relaxed mb-8">
                                &ldquo;{testimonials[current].quote}&rdquo;
                            </blockquote>
                            <div className="flex flex-col items-center gap-2">
                                <span className="font-sans text-sm font-medium tracking-[0.15em] uppercase text-champagne">
                                    {testimonials[current].name}
                                </span>
                                <span className="font-sans text-xs text-white/40 tracking-wider">
                                    {testimonials[current].context}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-3 mt-10">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${i === current
                                ? "bg-champagne w-8"
                                : "bg-white/20 hover:bg-white/40"
                                }`}
                            aria-label={`View testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
