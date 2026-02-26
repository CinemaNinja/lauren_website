"use client";

import Image from "next/image";
import { blurLight } from "@/lib/blurPlaceholders";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-charcoal pt-32 pb-24 px-4 lg:px-12 flex flex-col md:flex-row max-w-7xl mx-auto gap-16">
            <AnimatedSection
                variant="slideLeft"
                className="w-full md:w-1/2 flex flex-col justify-center"
            >
                <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-4 block">
                    Inquiries
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-light text-deep-ocean mb-6">
                    Let&apos;s{" "}
                    <em className="text-champagne-light italic">Connect</em>
                </h1>
                <p className="font-sans text-charcoal/80 leading-relaxed mb-10 max-w-md">
                    I&apos;m currently accepting a limited number of bookings for the
                    upcoming season in Aspen, Colorado and worldwide. Please fill out the form
                    below with details about your vision, and my team will be in touch
                    within 48 hours.
                </p>

                <form className="flex flex-col gap-6 w-full max-w-md">
                    <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs tracking-[0.2em] uppercase text-smoke">
                            Name
                        </label>
                        <input
                            type="text"
                            className="border-b border-pearl pb-2 focus:outline-none focus:border-champagne transition-colors bg-transparent"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs tracking-[0.2em] uppercase text-smoke">
                            Email
                        </label>
                        <input
                            type="email"
                            className="border-b border-pearl pb-2 focus:outline-none focus:border-champagne transition-colors bg-transparent"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs tracking-[0.2em] uppercase text-smoke">
                            Session Interest
                        </label>
                        <select className="border-b border-pearl pb-2 focus:outline-none focus:border-champagne transition-colors bg-transparent font-sans text-sm text-charcoal/70 appearance-none cursor-pointer">
                            <option value="">Select a session type...</option>
                            <option value="terra">Terra — Land Session</option>
                            <option value="weightless">Weightless — Underwater</option>
                            <option value="fusion">Fusion — Land + Underwater</option>
                            <option value="wedding">Wedding / Engagement</option>
                            <option value="other">Other / Custom</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs tracking-[0.2em] uppercase text-smoke">
                            Project Details
                        </label>
                        <textarea
                            rows={4}
                            className="border-b border-pearl pb-2 focus:outline-none focus:border-champagne transition-colors bg-transparent resize-none"
                            placeholder="Tell me about your vision..."
                        />
                    </div>
                    <button
                        type="button"
                        className="mt-4 bg-deep-ocean text-white px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-ocean-mid transition-colors duration-400 self-start"
                    >
                        Send Inquiry
                    </button>
                </form>
            </AnimatedSection>

            <AnimatedSection
                variant="scaleIn"
                delay={0.2}
                className="w-full md:w-1/2 relative min-h-[600px]"
            >
                <Image
                    src="/images/DSC04506.jpg"
                    alt="Contact Lauren"
                    fill
                    placeholder="blur"
                    blurDataURL={blurLight}
                    className="object-cover"
                />
            </AnimatedSection>
        </main>
    );
}
