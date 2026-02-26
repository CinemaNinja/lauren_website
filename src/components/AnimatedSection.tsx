"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Variant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";

interface AnimatedSectionProps {
    children: React.ReactNode;
    variant?: Variant;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    threshold?: number;
}

const variants: Record<
    Variant,
    {
        hidden: { opacity: number; y?: number; x?: number; scale?: number };
        visible: { opacity: number; y?: number; x?: number; scale?: number };
    }
> = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.92 },
        visible: { opacity: 1, scale: 1 },
    },
};

export default function AnimatedSection({
    children,
    variant = "fadeUp",
    delay = 0,
    duration = 0.8,
    className = "",
    once = true,
    threshold = 0.15,
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const v = variants[variant];

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: v.hidden,
                visible: {
                    ...v.visible,
                    transition: {
                        duration,
                        delay,
                        ease: [0.25, 0.1, 0.25, 1],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
