import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-300 ${
                scrolled ? "py-4" : "py-6"
            }`}>
            <div
                className={`
                glass-panel relative flex items-center gap-1 rounded-full px-4 py-3
                transition-all duration-300
                ${scrolled ? "bg-white/5 border-white/10 shadow-lg" : "bg-transparent border-transparent shadow-none"}
            `}>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#projects">Work</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <div className="mx-2 h-4 w-px bg-white/10"></div>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#connect"
                    className="ml-1 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
                    Let's Talk
                </motion.a>
            </div>
        </motion.nav>
    );
};

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white">
            {children}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        layoutId="nav-hover"
                        className="absolute inset-0 -z-10 rounded-full bg-white/5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>
        </a>
    );
};

export default Navbar;
