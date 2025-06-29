import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-1/2 -translate-x-1/2 z-50 py-4">
            <div className="bg-[#111111]/80 backdrop-blur-lg rounded-full px-2 py-1.5">
                <div className="flex items-center space-x-1">
                    <NavLink href="#" active>
                        Home
                    </NavLink>
                    <NavLink href="#">Work</NavLink>
                    <NavLink href="#">About</NavLink>
                    <NavLink href="#">Blog</NavLink>
                    <NavLink href="#">More</NavLink>
                    <button className="bg-[#111111]/30 backdrop-blur-lg text-gray-50 px-4 py-1.5 font-bold rounded-full text-sm  hover:bg-violet-500/25 transition-colors ml-1">
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
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active ? "bg-[#222222] text-white" : "text-gray-300 hover:text-white"
            }`}>
            {children}
        </a>
    );
};

export default Navbar;
