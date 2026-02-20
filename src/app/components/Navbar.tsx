import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Work", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full transition-all duration-300 ${
                scrolled ? "py-4" : "py-6"
            }`}>
            <div
                className={`
                glass-panel relative flex items-center gap-1 rounded-full px-4 py-3
                transition-all duration-300
                ${scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 shadow-lg" : "bg-transparent border-transparent shadow-none"}
            `}>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <NavLink key={link.name} href={link.href}>
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="mx-2 h-4 w-px bg-white/10"></div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center pr-2">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
                        aria-label="Toggle menu">
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                    <div className="mx-2 h-4 w-px bg-white/10"></div>
                </div>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#connect"
                    onClick={() => setMobileMenuOpen(false)}
                    className="ml-1 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
                    Let's Talk
                </motion.a>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-4 w-[90%] max-w-sm rounded-3xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 p-6 shadow-2xl md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
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
