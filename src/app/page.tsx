"use client";

import Image from "next/image";
import { blurDark, blurLight } from "@/lib/blurPlaceholders";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HorizontalGallery from "@/components/HorizontalGallery";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves slower than scroll
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Hero text fades out and moves up on scroll
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* ======== HERO SECTION (Parallax) ======== */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <Image
            src="/images/DSC05834-2.jpg"
            alt="Lauren Strelau Photography"
            fill
            priority
            placeholder="blur"
            blurDataURL={blurDark}
            className="object-cover object-center scale-110"
            quality={100}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,22,40,0.15)] via-[rgba(10,22,40,0.2)] to-[rgba(10,22,40,0.5)]" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-8 max-w-3xl mx-auto flex flex-col items-center"
          style={{ opacity: heroTextOpacity, y: heroTextY }}
        >
          <motion.span
            className="font-sans text-[0.7rem] font-medium tracking-[0.3em] uppercase text-champagne mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Lauren Strelau · Photography
          </motion.span>
          <motion.h1
            className="font-serif text-[clamp(3rem,10vw,6rem)] font-light leading-[1.1] text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Portraits
            <br />
            <em className="italic text-teal-light">of Light</em>
          </motion.h1>
          <motion.p
            className="font-sans text-base font-light text-white/80 max-w-[500px] mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Artistic portraiture and timeless underwater photo sessions
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <span className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase text-white/60">
              Explore
            </span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-champagne to-transparent animate-scroll-pulse" />
          </motion.div>
        </motion.div>
      </section>

      {/* ======== WAVE DIVIDER ======== */}
      <div className="h-24 bg-gradient-to-b from-deep-ocean to-cream" />

      {/* ======== THE APPROACH ======== */}
      <section className="py-24 md:py-32 px-8 bg-cream">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="font-sans text-[0.7rem] font-medium tracking-[0.3em] uppercase text-champagne mb-6 block">
            The Approach
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-charcoal leading-tight mb-8">
            Capturing the <em className="italic">ethereal</em> nature of human
            connection.
          </h2>
          <p className="font-sans text-base font-light text-charcoal/70 leading-relaxed max-w-xl mx-auto">
            Specializing in high-fashion, editorial underwater photography and
            intimate lifestyle portraits. Every session is designed to be a
            luxurious, unhurried experience resulting in museum-quality
            heirlooms.
          </p>
        </AnimatedSection>
      </section>

      {/* ======== ABOUT LAUREN ======== */}
      <section className="py-24 px-8 bg-pearl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <AnimatedSection
            variant="slideLeft"
            className="w-full md:w-1/2 relative aspect-[3/4] max-h-[600px] overflow-hidden"
          >
            <Image
              src="/images/image-asset.jpeg"
              alt="Lauren Strelau"
              fill
              placeholder="blur"
              blurDataURL={blurLight}
              className="object-cover"
            />
          </AnimatedSection>

          <AnimatedSection
            variant="slideRight"
            delay={0.2}
            className="w-full md:w-1/2"
          >
            <span className="font-sans text-[0.7rem] font-medium tracking-[0.3em] uppercase text-champagne mb-6 block">
              The Artist
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-charcoal leading-tight mb-6">
              Meet <em className="italic">Lauren</em>
            </h2>
            <p className="font-sans text-base font-light text-charcoal/70 leading-relaxed mb-6">
              Based in Aspen, Colorado, I create imagery that lives at the
              intersection of fine art and raw emotion. Whether submerged
              beneath the surface or standing in golden-hour light, my goal is
              always the same — to capture something that feels timeless.
            </p>
            <p className="font-sans text-base font-light text-charcoal/70 leading-relaxed mb-10">
              Every session is a collaborative journey. I believe the most
              powerful portraits come from trust, creative freedom, and an
              unhurried approach to the art.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-champagne" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-smoke">
                Aspen, Colorado · Available Worldwide
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ======== PORTFOLIO PREVIEW ======== */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="font-sans text-[0.7rem] font-medium tracking-[0.3em] uppercase text-champagne mb-6 block">
              Selected Works
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-charcoal">
              Portfolio
            </h2>
          </AnimatedSection>

          {/* Asymmetric Grid — photography-first, hover-reveal */}
          <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[280px] md:auto-rows-[340px]">
            {/* Underwater — large hero tile spanning 7 cols, 2 rows */}
            <AnimatedSection
              variant="fadeUp"
              delay={0}
              className="col-span-12 md:col-span-7 row-span-2"
            >
              <Link
                href="/portfolio?category=underwater"
                className="group relative block w-full h-full overflow-hidden cursor-pointer rounded-lg border border-champagne/40 hover:border-champagne transition-colors duration-700"
              >
                <Image
                  src="/images/DSC06311.jpg"
                  alt="Underwater Portfolio"
                  fill
                  placeholder="blur"
                  blurDataURL={blurDark}
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                {/* Persistent gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/70 via-deep-ocean/10 to-transparent" />
                {/* Always-visible text — glows gold on hover */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col">
                  <span className="font-sans text-[0.6rem] font-medium tracking-[0.3em] uppercase text-champagne/70 group-hover:text-champagne transition-colors duration-500 mb-3">
                    Underwater
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl font-light text-white/90 group-hover:text-champagne transition-colors duration-500 mb-4" style={{ textShadow: 'none' }}>
                    <span className="group-hover:[text-shadow:0_0_20px_rgba(212,175,55,0.6),0_0_40px_rgba(212,175,55,0.3)]" style={{ transition: 'text-shadow 0.5s' }}>Weightless</span>
                  </h3>
                  <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-white/50 group-hover:text-champagne group-hover:tracking-[0.35em] transition-all duration-500">
                    Explore →
                  </span>
                </div>
                {/* Corner label */}
                <span className="absolute top-6 left-6 font-sans text-[0.6rem] font-medium tracking-[0.25em] uppercase text-white/50">
                  01
                </span>
              </Link>
            </AnimatedSection>

            {/* Weddings — stacked right, top tile */}
            <AnimatedSection
              variant="fadeUp"
              delay={0.15}
              className="col-span-6 md:col-span-5 row-span-1"
            >
              <Link
                href="/portfolio?category=weddings"
                className="group relative block w-full h-full overflow-hidden cursor-pointer rounded-lg border border-champagne/40 hover:border-champagne transition-colors duration-700"
              >
                <Image
                  src="/images/DSC05444.jpg"
                  alt="Weddings Portfolio"
                  fill
                  placeholder="blur"
                  blurDataURL={blurLight}
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/70 via-deep-ocean/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col">
                  <span className="font-sans text-[0.6rem] font-medium tracking-[0.3em] uppercase text-champagne/70 group-hover:text-champagne transition-colors duration-500 mb-2">
                    Weddings
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-white/90 group-hover:text-champagne transition-colors duration-500 mb-3" style={{ textShadow: 'none' }}>
                    <span className="group-hover:[text-shadow:0_0_20px_rgba(212,175,55,0.6),0_0_40px_rgba(212,175,55,0.3)]" style={{ transition: 'text-shadow 0.5s' }}>Forever</span>
                  </h3>
                  <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-white/50 group-hover:text-champagne group-hover:tracking-[0.35em] transition-all duration-500">
                    Explore →
                  </span>
                </div>
                <span className="absolute top-5 left-5 font-sans text-[0.6rem] font-medium tracking-[0.25em] uppercase text-white/50">
                  02
                </span>
              </Link>
            </AnimatedSection>

            {/* Portraits — stacked right, bottom tile */}
            <AnimatedSection
              variant="fadeUp"
              delay={0.25}
              className="col-span-6 md:col-span-5 row-span-1"
            >
              <Link
                href="/portfolio?category=portraits"
                className="group relative block w-full h-full overflow-hidden cursor-pointer rounded-lg border border-champagne/40 hover:border-champagne transition-colors duration-700"
              >
                <Image
                  src="/images/DSC01293.jpg"
                  alt="Portraits Portfolio"
                  fill
                  placeholder="blur"
                  blurDataURL={blurLight}
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/70 via-deep-ocean/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col">
                  <span className="font-sans text-[0.6rem] font-medium tracking-[0.3em] uppercase text-champagne/70 group-hover:text-champagne transition-colors duration-500 mb-2">
                    Portraits
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-white/90 group-hover:text-champagne transition-colors duration-500 mb-3" style={{ textShadow: 'none' }}>
                    <span className="group-hover:[text-shadow:0_0_20px_rgba(212,175,55,0.6),0_0_40px_rgba(212,175,55,0.3)]" style={{ transition: 'text-shadow 0.5s' }}>Essence</span>
                  </h3>
                  <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-white/50 group-hover:text-champagne group-hover:tracking-[0.35em] transition-all duration-500">
                    Explore →
                  </span>
                </div>
                <span className="absolute top-5 left-5 font-sans text-[0.6rem] font-medium tracking-[0.25em] uppercase text-white/50">
                  03
                </span>
              </Link>
            </AnimatedSection>
          </div>

          {/* View All link */}
          <AnimatedSection className="text-center mt-14">
            <Link
              href="/portfolio"
              className="inline-block font-sans text-[0.7rem] font-medium tracking-[0.25em] uppercase text-charcoal border-b border-champagne pb-1 hover:text-champagne transition-colors duration-500"
            >
              View Full Portfolio
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ======== HORIZONTAL SCROLL GALLERY ======== */}
      <HorizontalGallery />

      {/* ======== BEFORE / AFTER ======== */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="font-sans text-[0.7rem] font-medium tracking-[0.3em] uppercase text-champagne mb-6 block">
              The Edit
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light text-charcoal">
              Before & <em className="italic">After</em>
            </h2>
            <p className="font-sans text-sm text-charcoal/50 mt-4 max-w-lg mx-auto">
              Drag the slider to see how each image transforms through careful color grading and retouching.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <BeforeAfterSlider
              beforeSrc="/images/DSC02135.jpeg"
              afterSrc="/images/DSC05834-2.jpg"
              beforeLabel="Original"
              afterLabel="Final Edit"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ======== TESTIMONIALS ======== */}
      <TestimonialCarousel />

      {/* ======== INSTAGRAM FEED ======== */}
      <InstagramFeed />

      {/* ======== CTA FOOTER ======== */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/DSC09352-2.jpg"
            alt="Let's Connect"
            fill
            placeholder="blur"
            blurDataURL={blurDark}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-deep-ocean/60" />
        </div>
        <AnimatedSection className="relative z-10 text-center px-8">
          <p className="font-sans text-[0.7rem] font-medium tracking-[0.3em] uppercase text-champagne mb-6">
            Ready to create something extraordinary?
          </p>
          <Link
            href="/contact"
            className="inline-block font-sans text-[0.75rem] font-medium tracking-[0.25em] uppercase text-champagne border border-champagne px-10 py-4 hover:bg-champagne hover:text-deep-ocean transition-all duration-500"
          >
            Let&apos;s connect
          </Link>
        </AnimatedSection>
      </section>
    </main>
  );
}
