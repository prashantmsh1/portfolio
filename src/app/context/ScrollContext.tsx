"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

interface ScrollContextType {
    lenis: Lenis | null;
    stop: () => void;
    start: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const reqIdRef = useRef<number | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        setLenis(lenisInstance);

        function raf(time: number) {
            lenisInstance.raf(time);
            reqIdRef.current = requestAnimationFrame(raf);
        }

        reqIdRef.current = requestAnimationFrame(raf);

        return () => {
            if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
            lenisInstance.destroy();
        };
    }, []);

    const stop = () => lenis?.stop();
    const start = () => lenis?.start();

    return (
        <ScrollContext.Provider value={{ lenis, stop, start }}>{children}</ScrollContext.Provider>
    );
};

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScroll must be used within a ScrollProvider");
    }
    return context;
};
