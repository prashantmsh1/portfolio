import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-6 left-1/2 z-50 -translate-x-1/2 px-4">
            <div className="relative flex items-center gap-1 rounded-full border border-[rgba(201,173,167,0.15)] bg-[rgba(27,27,47,0.65)] px-2 py-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(7,7,12,0.35)]">
                <NavLink href="#home" active>
                    Home
                </NavLink>
                <NavLink href="#projects">Work</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#connect">Connect</NavLink>

                <a
                    href="#connect"
                    className="ml-2  rounded-full bg-[var(--isabelline-500)] px-5 py-2 text-sm font-semibold text-[var(--space_cadet-200)] transition-all hover:bg-[var(--isabelline-100)] hover:scale-105 hover:shadow-[0_0_20px_rgba(242,233,228,0.4)]">
                    Contact
                </a>
            </div>
        </motion.nav>
    );
};

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    active?: boolean;
}

const NavLink = ({ href, children, active }: NavLinkProps) => {
    return (
        <a
            href={href}
            className={` relative px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                active
                    ? "text-[var(--isabelline-900)]"
                    : "text-[rgba(235,232,234,0.6)] hover:text-[var(--isabelline-800)]"
            }`}>
            {children}
            {active && (
                <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0  -z-10 rounded-full bg-[rgba(201,173,167,0.15)] border border-[rgba(201,173,167,0.1)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
        </a>
    );
};

export default Navbar;
