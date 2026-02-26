"use client";

import { useRef } from "react";
import Image from "next/image";
import { blurDark } from "@/lib/blurPlaceholders";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
    { src: "/images/DSC06311.jpg", label: "Underwater" },
    { src: "/images/DSC05444.jpg", label: "Weddings" },
    { src: "/images/DSC09352-2.jpg", label: "Editorial" },
    { src: "/images/DSC08770.jpg", label: "Portraits" },
    { src: "/images/DSC02296.jpg", label: "Underwater" },
    { src: "/images/Re-union-07689.jpg", label: "Moments" },
    { src: "/images/DSC04506.jpg", label: "Nature" },
    { src: "/images/AfterlightImage.JPG", label: "Lifestyle" },
];

export default function HorizontalGallery() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Move gallery left as user scrolls down
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

    return (
        <section
            ref={containerRef}
            className="py-16 md:py-24 overflow-hidden bg-deep-ocean"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
                <span className="font-sans text-[0.7rem] font-medium tracking-[0.3em] uppercase text-champagne/60 block mb-4">
                    A Glimpse
                </span>
                <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light text-white/90 italic">
                    Through the Lens
                </h2>
            </div>

            <motion.div
                className="flex gap-4 md:gap-6 pl-8 md:pl-16"
                style={{ x }}
            >
                {galleryImages.map((img, i) => (
                    <div
                        key={i}
                        className="relative flex-shrink-0 w-[280px] md:w-[380px] aspect-[3/4] rounded-sm overflow-hidden group"
                    >
                        <Image
                            src={img.src}
                            alt={img.label}
                            fill
                            placeholder="blur"
                            blurDataURL={blurDark}
                            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Label */}
                        <span className="absolute bottom-4 left-4 font-sans text-[0.6rem] tracking-[0.25em] uppercase text-white/50 group-hover:text-champagne transition-colors duration-500">
                            {img.label}
                        </span>
                        {/* Gold frame on hover */}
                        <div className="absolute inset-0 border border-champagne/0 group-hover:border-champagne/40 rounded-sm transition-colors duration-700 pointer-events-none" />
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
