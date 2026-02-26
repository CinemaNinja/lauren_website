"use client";

import Image from "next/image";
import { blurDark } from "@/lib/blurPlaceholders";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

type Category = "all" | "underwater" | "weddings" | "portraits";

interface GalleryImage {
    src: string;
    category: Category;
    alt: string;
}

const images: GalleryImage[] = [
    { src: "DSC06311.jpg", category: "underwater", alt: "Underwater portrait with natural light rays" },
    { src: "DSC02296.jpg", category: "underwater", alt: "Submerged artistic portrait" },
    { src: "DSC02135.jpeg", category: "underwater", alt: "Underwater fashion editorial" },
    { src: "DSC05834-2.jpg", category: "underwater", alt: "Ocean surface split-level shot" },
    { src: "DSC05444.jpg", category: "weddings", alt: "Wedding day portrait" },
    { src: "Re-union-07689.jpg", category: "weddings", alt: "Intimate couple moment" },
    { src: "AfterlightImage.JPG", category: "weddings", alt: "Wedding detail shot" },
    { src: "DSC01293.jpg", category: "portraits", alt: "Lifestyle portrait" },
    { src: "DSC08770.jpg", category: "portraits", alt: "Golden hour portrait" },
    { src: "DSC04506.jpg", category: "portraits", alt: "Natural light portrait" },
    { src: "DSC09352-2.jpg", category: "portraits", alt: "Artistic portrait session" },
    { src: "0CC61743-1465-42C6-BC69-A1F5C837FC6C.JPG", category: "underwater", alt: "Underwater creative shot" },
    { src: "_DSC0880.jpg", category: "portraits", alt: "Studio portrait" },
];

const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All" },
    { key: "underwater", label: "Underwater" },
    { key: "weddings", label: "Weddings" },
    { key: "portraits", label: "Portraits" },
];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filteredImages =
        activeCategory === "all"
            ? images
            : images.filter((img) => img.category === activeCategory);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const navigateLightbox = (direction: number) => {
        if (lightboxIndex === null) return;
        const newIndex =
            (lightboxIndex + direction + filteredImages.length) %
            filteredImages.length;
        setLightboxIndex(newIndex);
    };

    return (
        <>
            <main className="min-h-screen bg-cream text-charcoal pt-32 pb-24 px-4 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection>
                        <header className="mb-16 text-center">
                            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-4 block">
                                Selected Works
                            </span>
                            <h1 className="font-serif text-5xl md:text-7xl font-light text-deep-ocean mb-6">
                                The <em className="text-champagne-light italic">Gallery</em>
                            </h1>
                            <div className="w-12 h-[1px] bg-champagne mx-auto mb-10" />

                            {/* Functional filter buttons */}
                            <div className="flex justify-center gap-8 font-sans text-xs tracking-widest uppercase">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.key}
                                        onClick={() => setActiveCategory(cat.key)}
                                        className={`pb-1 transition-all duration-300 ${activeCategory === cat.key
                                            ? "text-deep-ocean border-b border-deep-ocean"
                                            : "text-smoke hover:text-deep-ocean"
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </header>
                    </AnimatedSection>

                    {/* Masonry-style Grid with AnimatePresence */}
                    <motion.div
                        layout
                        className="columns-1 md:columns-2 lg:columns-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((img, i) => (
                                <motion.div
                                    key={img.src}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: i * 0.05,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                    className="relative break-inside-avoid overflow-hidden group mb-6 cursor-pointer"
                                    onClick={() => openLightbox(i)}
                                >
                                    <Image
                                        src={`/images/${img.src}`}
                                        alt={img.alt}
                                        width={800}
                                        height={1200}
                                        placeholder="blur"
                                        blurDataURL={blurDark}
                                        className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                        quality={90}
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-deep-ocean/0 transition-all duration-500 group-hover:bg-deep-ocean/20 flex items-center justify-center">
                                        <span className="font-sans text-xs tracking-[0.2em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                            View
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </main>

            {/* ====== LIGHTBOX ====== */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-deep-ocean/95 backdrop-blur-xl flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-8 text-white/60 hover:text-champagne transition-colors z-[110] font-sans text-sm tracking-widest uppercase"
                            onClick={closeLightbox}
                        >
                            Close ✕
                        </button>

                        {/* Image counter */}
                        <span className="absolute top-6 left-8 font-sans text-xs text-white/40 tracking-wider">
                            {lightboxIndex + 1} / {filteredImages.length}
                        </span>

                        {/* Previous */}
                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-champagne transition-colors text-4xl z-[110] px-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateLightbox(-1);
                            }}
                        >
                            ‹
                        </button>

                        {/* Next */}
                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-champagne transition-colors text-4xl z-[110] px-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateLightbox(1);
                            }}
                        >
                            ›
                        </button>

                        {/* Lightbox Image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={filteredImages[lightboxIndex].src}
                                className="relative max-w-[85vw] max-h-[85vh] w-auto h-auto"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={`/images/${filteredImages[lightboxIndex].src}`}
                                    alt={filteredImages[lightboxIndex].alt}
                                    width={1400}
                                    height={1000}
                                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                                    quality={95}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
