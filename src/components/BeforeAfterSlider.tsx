"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { blurDark } from "@/lib/blurPlaceholders";

interface BeforeAfterSliderProps {
    beforeSrc: string;
    afterSrc: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export default function BeforeAfterSlider({
    beforeSrc,
    afterSrc,
    beforeLabel = "Before",
    afterLabel = "After",
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback(
        (clientX: number) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percent = Math.min(Math.max((x / rect.width) * 100, 2), 98);
            setSliderPosition(percent);
        },
        []
    );

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (isDragging) handleMove(e.clientX);
        },
        [isDragging, handleMove]
    );

    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            handleMove(e.touches[0].clientX);
        },
        [handleMove]
    );

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] md:aspect-[16/8] overflow-hidden rounded-lg select-none cursor-col-resize"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
        >
            {/* After image (full width, always behind) */}
            <div className="absolute inset-0">
                <Image
                    src={afterSrc}
                    alt={afterLabel}
                    fill
                    placeholder="blur"
                    blurDataURL={blurDark}
                    className="object-cover"
                    draggable={false}
                />
            </div>

            {/* Before image (clipped by slider position) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <div className="relative w-full h-full" style={{ width: `${100 / (sliderPosition / 100)}%` }}>
                    <Image
                        src={beforeSrc}
                        alt={beforeLabel}
                        fill
                        placeholder="blur"
                        blurDataURL={blurDark}
                        className="object-cover"
                        draggable={false}
                    />
                </div>
                {/* Before label */}
                <span className="absolute top-4 left-4 font-sans text-[0.6rem] font-medium tracking-[0.25em] uppercase text-white/70 bg-deep-ocean/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {beforeLabel}
                </span>
            </div>

            {/* After label */}
            <span className="absolute top-4 right-4 font-sans text-[0.6rem] font-medium tracking-[0.25em] uppercase text-white/70 bg-deep-ocean/50 px-3 py-1 rounded-full backdrop-blur-sm">
                {afterLabel}
            </span>

            {/* Slider line + handle */}
            <div
                className="absolute top-0 bottom-0 w-[2px] bg-champagne z-10 -translate-x-1/2"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* Handle circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-champagne bg-deep-ocean/60 backdrop-blur-sm flex items-center justify-center cursor-col-resize shadow-lg">
                    {/* Arrows */}
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M6 1L1 6L6 11" stroke="currentColor" strokeWidth="1.5" className="text-champagne" />
                        <path d="M14 1L19 6L14 11" stroke="currentColor" strokeWidth="1.5" className="text-champagne" />
                    </svg>
                </div>

                {/* Gold glow on the line */}
                <div
                    className="absolute inset-0 bg-champagne/30 blur-sm"
                    style={{ width: 4, left: -1 }}
                />
            </div>
        </div>
    );
}
