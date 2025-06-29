import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Heart,
    Mail,
    MapPin,
    Github,
    Linkedin,
    Twitter,
    MessageCircle,
    ArrowUp,
    ExternalLink,
    Star,
    Zap,
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const footerSections = [
        {
            title: "Navigation",
            links: [
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Connect", href: "#connect" },
            ],
        },
        {
            title: "Services",
            links: [
                { name: "Web Development", href: "#" },
                { name: "Mobile Apps", href: "#" },
                { name: "UI/UX Design", href: "#" },
                { name: "API Development", href: "#" },
                { name: "Consulting", href: "#" },
            ],
        },
        {
            title: "Technologies",
            links: [
                { name: "React & Next.js", href: "#" },
                { name: "Node.js & Express", href: "#" },
                { name: "TypeScript", href: "#" },
                { name: "Cloud Solutions", href: "#" },
                { name: "Database Design", href: "#" },
            ],
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/prashant",
            label: "GitHub",
            color: "hover:text-gray-300",
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/prashant",
            label: "LinkedIn",
            color: "hover:text-blue-400",
        },
        {
            icon: Twitter,
            href: "https://twitter.com/prashant",
            label: "Twitter",
            color: "hover:text-cyan-400",
        },
        { icon: MessageCircle, href: "#", label: "Discord", color: "hover:text-purple-400" },
    ];

    return (
        <footer className="relative bg-[#050014] border-t border-gray-800/50 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-5">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                                    <Code2 className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Prashant Kumar
                                    </h3>
                                    <p className="text-gray-400">Full Stack Developer</p>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                                Crafting exceptional digital experiences with modern technologies.
                                Specializing in scalable web applications and user-centric design.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-8">
                                <motion.a
                                    href="mailto:prashantkr.msh@gmail.com"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-all duration-300">
                                    <Mail className="w-5 h-5" />
                                    <span>prashantkr.msh@gmail.com</span>
                                </motion.a>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 text-gray-400">
                                    <MapPin className="w-5 h-5" />
                                    <span>Remote • Available Worldwide</span>
                                </motion.div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-3 bg-gray-800/50 hover:bg-purple-600/20 border border-gray-700 hover:border-purple-400 rounded-xl transition-all duration-300 text-gray-400 ${social.color}`}>
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Footer Links */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {footerSections.map((section, sectionIndex) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}>
                                    <h4 className="text-white font-semibold text-lg mb-6">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-3">
                                        {section.links.map((link, linkIndex) => (
                                            <motion.li
                                                key={link.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: linkIndex * 0.05,
                                                }}>
                                                <a
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group">
                                                    <span className="group-hover:translate-x-1 transition-transform">
                                                        {link.name}
                                                    </span>
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter/CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-16 pt-8 border-t border-gray-800/50">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-center md:text-left">
                                <h4 className="text-xl font-bold text-white mb-2">
                                    Ready to start your project?
                                </h4>
                                <p className="text-gray-400">
                                    Let's bring your ideas to life with cutting-edge technology.
                                </p>
                            </div>
                            <motion.a
                                href="#connect"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-purple-500/25">
                                <Zap className="w-5 h-5" />
                                Start Project
                                <ExternalLink className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 text-gray-400 text-sm">
                                <span>© {currentYear}</span>
                                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                                <span>Crafted with passion by Prashant Kumar</span>
                                <Star className="w-4 h-4 text-yellow-400" />
                            </motion.div>

                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 bg-gray-800/50 hover:bg-purple-600/20 border border-gray-700 hover:border-purple-400 rounded-xl transition-all duration-300 text-gray-400 hover:text-purple-400 group">
                                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
