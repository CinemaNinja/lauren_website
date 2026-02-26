"use client";

import Image from "next/image";
import { blurDark } from "@/lib/blurPlaceholders";
import { Instagram } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const instagramImages = [
    "/images/DSC06311.jpg",
    "/images/DSC05444.jpg",
    "/images/DSC01293.jpg",
    "/images/DSC08770.jpg",
    "/images/DSC09352-2.jpg",
    "/images/DSC02296.jpg",
];

export default function InstagramFeed() {
    return (
        <section className="py-20 px-4 md:px-8 bg-pearl">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection className="text-center mb-12">
                    <span className="font-sans text-[0.7rem] font-medium tracking-[0.3em] uppercase text-champagne mb-4 block">
                        Follow Along
                    </span>
                    <h2 className="font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-light text-charcoal">
                        <a
                            href="https://www.instagram.com/laurenstrelau"
                            target="_blank"
                            rel="noopener"
                            className="hover:text-champagne transition-colors duration-500"
                        >
                            @laurenstrelau
                        </a>
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
                    {instagramImages.map((src, i) => (
                        <AnimatedSection key={i} variant="fadeUp" delay={i * 0.05}>
                            <a
                                href="https://www.instagram.com/laurenstrelau"
                                target="_blank"
                                rel="noopener"
                                className="group relative aspect-square block overflow-hidden rounded-sm"
                            >
                                <Image
                                    src={src}
                                    alt={`Instagram post ${i + 1}`}
                                    fill
                                    placeholder="blur"
                                    blurDataURL={blurDark}
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-deep-ocean/0 group-hover:bg-deep-ocean/50 transition-colors duration-500 flex items-center justify-center">
                                    <Instagram
                                        className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                                        size={24}
                                    />
                                </div>
                            </a>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
