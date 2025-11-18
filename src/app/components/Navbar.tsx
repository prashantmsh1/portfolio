import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-6 left-1/2 z-50 -translate-x-1/2 px-4">
            <div className="relative overflow-hidden rounded-full border border-[rgba(149,149,194,0.18)] bg-[rgba(27,27,47,0.78)] px-3 py-1.5 text-[var(--isabelline-800)] backdrop-blur-xl shadow-[0_12px_34px_rgba(7,7,12,0.45)]">
                <div className="absolute inset-0 opacity-60">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(120deg,rgba(74,78,105,0.35),transparent)]" />
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(310deg,rgba(201,173,167,0.2),transparent)]" />
                </div>
                <div className="relative flex items-center space-x-1.5">
                    <NavLink href="#home" active>
                        Home
                    </NavLink>
                    <NavLink href="#projects">Work</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#connect">Connect</NavLink>
                    <button className="ml-1 inline-flex items-center rounded-full border border-[rgba(201,173,167,0.32)] bg-[linear-gradient(135deg,rgba(34,34,59,0.9),rgba(64,64,111,0.94))] px-4 py-1.5 text-sm font-semibold text-[var(--isabelline-800)] transition-all hover:border-[rgba(235,232,234,0.45)] hover:text-[var(--isabelline-900)] hover:shadow-[0_10px_30px_rgba(64,64,111,0.35)]">
                        Contact
                    </button>
                </div>
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
            className={`relative px-4 py-1.5 text-sm font-medium transition-all ${
                active
                    ? "rounded-full bg-[linear-gradient(135deg,rgba(64,64,111,0.85),rgba(201,173,167,0.85))] text-[var(--isabelline-900)] shadow-[0_8px_20px_rgba(96,96,163,0.35)]"
                    : "text-[rgba(250,246,244,0.72)] hover:text-[var(--isabelline-900)]"
            }`}>
            {children}
            {active && (
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-full border border-[rgba(149,149,194,0.35)]" />
            )}
        </a>
    );
};

export default Navbar;
