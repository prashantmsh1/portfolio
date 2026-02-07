import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative z-10 bg-brand-black border-t border-white/10 py-12 text-white">
            <div className="container-width">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-400 text-sm">
                        &copy; {currentYear} Prashant Kumar. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/prashant"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/prashant"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://twitter.com/prashant"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-gray-400 hover:text-white"
                        aria-label="Scroll to top">
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
