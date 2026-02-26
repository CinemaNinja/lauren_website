"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
    const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });

    const onMouseMove = useCallback((e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
    }, [cursorX, cursorY, isVisible]);

    useEffect(() => {
        // Detect touch device
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(isTouch);
        if (isTouch) return;

        window.addEventListener("mousemove", onMouseMove);

        // Track hover on interactive elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.closest("a") ||
                target.closest("button") ||
                target.closest("[data-cursor-hover]") ||
                target.tagName === "IMG"
            ) {
                setIsHovering(true);
            }
        };
        const handleMouseOut = () => setIsHovering(false);

        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, [onMouseMove]);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                }}
            >
                <motion.div
                    className="rounded-full border border-champagne/80 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        width: isHovering ? 52 : 28,
                        height: isHovering ? 52 : 28,
                        borderColor: isHovering
                            ? "rgba(212, 175, 55, 0.9)"
                            : "rgba(212, 175, 55, 0.5)",
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            >
                <motion.div
                    className="rounded-full bg-champagne -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        width: isHovering ? 6 : 4,
                        height: isHovering ? 6 : 4,
                        opacity: isVisible ? 0.8 : 0,
                    }}
                    transition={{ duration: 0.15 }}
                />
            </motion.div>
        </>
    );
}
