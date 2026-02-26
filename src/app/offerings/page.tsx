"use client";

import Image from "next/image";
import { blurDark, blurLight } from "@/lib/blurPlaceholders";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function OfferingsPage() {
    return (
        <main className="min-h-screen bg-cream text-charcoal pt-32 pb-24 px-4 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <AnimatedSection>
                    <header className="mb-20 text-center">
                        <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-4 block">
                            Investment
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl font-light text-deep-ocean mb-6">
                            Session <em className="text-champagne-light italic">Packages</em>
                        </h1>
                        <div className="w-12 h-[1px] bg-champagne mx-auto mb-10" />
                    </header>
                </AnimatedSection>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {/* TERRA Package */}
                    <AnimatedSection delay={0}>
                        <article className="bg-white border border-pearl p-6 md:p-8 flex flex-col group relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,22,40,0.08)] h-full">
                            <div className="relative aspect-[4/5] w-full overflow-hidden mb-8">
                                <Image
                                    src="/images/DSC08770.jpg"
                                    alt="Terra Land Session"
                                    fill
                                    placeholder="blur"
                                    blurDataURL={blurLight}
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col flex-grow items-center text-center">
                                <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-smoke mb-4">
                                    Land Session
                                </span>
                                <h3 className="font-serif text-3xl font-light text-deep-ocean mb-2">
                                    Terra
                                </h3>
                                <p className="font-serif text-xl italic text-teal mb-6 price-glow">
                                    $1,500
                                </p>

                                <ul className="text-sm font-sans text-charcoal/80 space-y-3 mb-8 text-left w-full pl-4 border-l border-champagne-light/30">
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        1 hour of professional shooting
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        at home or steeped in nature
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        40 artistically edited images
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </AnimatedSection>

                    {/* WEIGHTLESS Package */}
                    <AnimatedSection delay={0.15}>
                        <article className="bg-white border border-pearl p-6 md:p-8 flex flex-col group relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,22,40,0.08)] h-full">
                            <div className="relative aspect-[4/5] w-full overflow-hidden mb-8">
                                <Image
                                    src="/images/DSC02296.jpg"
                                    alt="Weightless Underwater Session"
                                    fill
                                    placeholder="blur"
                                    blurDataURL={blurDark}
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col flex-grow items-center text-center">
                                <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-smoke mb-4">
                                    Underwater Session
                                </span>
                                <h3 className="font-serif text-3xl font-light text-deep-ocean mb-2">
                                    Weightless
                                </h3>
                                <p className="font-serif text-xl italic text-teal mb-6 price-glow">
                                    $2,200
                                </p>

                                <ul className="text-sm font-sans text-charcoal/80 space-y-3 mb-8 text-left w-full pl-4 border-l border-champagne-light/30">
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        1.5 hours of fully submerged underwater photography
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        this session can be shot in the sea or pool!
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        50 artistically edited images
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </AnimatedSection>

                    {/* FUSION Package (Signature) */}
                    <AnimatedSection delay={0.3}>
                        <article className="bg-deep-ocean border border-ocean-mid p-6 md:p-8 flex flex-col group relative transition-all duration-500 hover:-translate-y-2 shadow-xl z-10 h-full">
                            <div className="absolute top-0 right-0 py-2 px-4 shadow-md z-20 translate-x-2 -translate-y-2 bg-gradient-to-r from-champagne to-champagne-light">
                                <span className="font-sans text-white text-[0.65rem] font-bold tracking-[0.2em] uppercase">
                                    Signature Experience
                                </span>
                            </div>
                            <div className="relative aspect-[4/5] w-full overflow-hidden mb-8">
                                <Image
                                    src="/images/DSC06311.jpg"
                                    alt="Fusion Land and Underwater"
                                    fill
                                    placeholder="blur"
                                    blurDataURL={blurDark}
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                                />
                            </div>
                            <div className="flex flex-col flex-grow items-center text-center">
                                <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-champagne-light mb-4">
                                    Land + Underwater
                                </span>
                                <h3 className="font-serif text-3xl font-light text-white mb-2">
                                    Fusion
                                </h3>
                                <p className="font-serif text-xl italic text-champagne mb-6 price-glow">
                                    $3,200
                                </p>

                                <ul className="text-sm font-sans text-white/80 space-y-3 mb-8 text-left w-full pl-4 border-l border-champagne/30">
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        2 hour session
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        Combined land & underwater shooting
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        Best of both worlds experience
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        75 artistically edited images
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </AnimatedSection>

                    {/* DRIFT Add-On — beside Fusion */}
                    <AnimatedSection delay={0.4}>
                        <article className="bg-white border border-pearl p-6 md:p-8 flex flex-col group relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,22,40,0.08)] h-full">
                            <div className="relative aspect-[4/5] w-full overflow-hidden mb-8">
                                <Image
                                    src="/images/0CC61743-1465-42C6-BC69-A1F5C837FC6C.JPG"
                                    alt="Drift Add-On"
                                    fill
                                    placeholder="blur"
                                    blurDataURL={blurDark}
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col flex-grow items-center text-center">
                                <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-teal mb-4">
                                    Extension Add-On
                                </span>
                                <h3 className="font-serif text-3xl font-light text-deep-ocean mb-2">
                                    Drift
                                </h3>
                                <p className="font-serif text-xl italic text-champagne mb-6 price-glow">
                                    +$750
                                </p>

                                <ul className="text-sm font-sans text-charcoal/80 space-y-3 mb-8 text-left w-full pl-4 border-l border-champagne/30">
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        +1 hour additional shooting time
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        40 more artistically edited images
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-champagne text-[10px] mt-1">◇</span>
                                        Available with any package
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
