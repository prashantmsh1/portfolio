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
            color: "hover:text-[var(--pale_dogwood-500)]",
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/prashant",
            label: "LinkedIn",
            color: "hover:text-[var(--rose_quartz-500)]",
        },
        {
            icon: Twitter,
            href: "https://twitter.com/prashant",
            label: "Twitter",
            color: "hover:text-[var(--pale_dogwood-500)]",
        },
        {
            icon: MessageCircle,
            href: "#",
            label: "Discord",
            color: "hover:text-[var(--isabelline-900)]",
        },
    ];

    return (
        <footer
            className="relative overflow-hidden border-t border-[rgba(201,173,167,0.24)]"
            style={{
                background:
                    "radial-gradient(circle at 15% 10%, rgba(96,96,163,0.42), transparent 55%), radial-gradient(circle at 85% 20%, rgba(201,173,167,0.3), transparent 55%), radial-gradient(circle at 50% 100%, rgba(154,140,152,0.32), transparent 60%), linear-gradient(150deg, var(--space_cadet-300), var(--ultra_violet-500))",
            }}>
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 opacity-45">
                <div
                    className="absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(64,64,111,0.4), rgba(201,173,167,0.22))",
                    }}></div>
                <div
                    className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full blur-3xl"
                    style={{
                        background:
                            "linear-gradient(310deg, rgba(201,173,167,0.26), rgba(252,250,249,0.16))",
                    }}></div>
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
                            <div className="mb-6 flex items-center gap-3">
                                <div className="rounded-xl bg-gradient-to-r from-[rgba(64,64,111,0.9)] to-[rgba(201,173,167,0.8)] p-3 shadow-[0_12px_28px_-18px_rgba(96,96,163,0.55)]">
                                    <Code2
                                        className="h-8 w-8"
                                        style={{ color: "var(--space_cadet-100)" }}
                                    />
                                </div>
                                <div>
                                    <h3 className="bg-gradient-to-r from-[var(--space_cadet-700)] to-[var(--pale_dogwood-500)] bg-clip-text text-2xl font-bold text-transparent">
                                        Prashant Kumar
                                    </h3>
                                    <p className="text-[rgba(201,173,167,0.68)]">
                                        Full Stack Developer
                                    </p>
                                </div>
                            </div>

                            <p className="mb-8 max-w-md leading-relaxed text-[rgba(235,232,234,0.75)]">
                                Crafting exceptional digital experiences with modern technologies.
                                Specializing in scalable web applications and user-centric design.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-8">
                                <motion.a
                                    href="mailto:prashantkr.msh@gmail.com"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 text-[rgba(201,173,167,0.68)] transition-all duration-300 hover:text-[var(--pale_dogwood-500)]">
                                    <Mail className="h-5 w-5" />
                                    <span>prashantkr.msh@gmail.com</span>
                                </motion.a>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 text-[rgba(201,173,167,0.68)]">
                                    <MapPin className="h-5 w-5" />
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
                                        className={`rounded-xl border border-[rgba(201,173,167,0.24)] bg-[rgba(27,27,47,0.6)] p-3 text-[rgba(201,173,167,0.68)] transition-all duration-300 backdrop-blur-2xl hover:border-[rgba(201,173,167,0.45)] ${social.color}`}>
                                        <social.icon className="h-5 w-5" />
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
                                    <h4 className="mb-6 text-lg font-semibold text-[var(--isabelline-900)]">
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
                                                    className="group flex items-center gap-2 text-sm text-[rgba(201,173,167,0.68)] transition-colors hover:text-[var(--pale_dogwood-500)]">
                                                    <span className="transition-transform group-hover:translate-x-1">
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
                        className="mt-16 border-t border-[rgba(201,173,167,0.24)] pt-8">
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                            <div className="text-center text-[rgba(235,232,234,0.75)] md:text-left">
                                <h4 className="mb-2 text-xl font-bold text-[var(--isabelline-900)]">
                                    Ready to start your project?
                                </h4>
                                <p>Let's bring your ideas to life with cutting-edge technology.</p>
                            </div>
                            <motion.a
                                href="#connect"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[rgba(64,64,111,0.9)] to-[rgba(201,173,167,0.82)] px-8 py-3 font-semibold text-[var(--space_cadet-100)] shadow-[0_16px_34px_-18px_rgba(96,96,163,0.6)] transition-all duration-300 hover:shadow-[0_20px_42px_-16px_rgba(201,173,167,0.5)]">
                                <Zap className="h-5 w-5" />
                                Start Project
                                <ExternalLink className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[rgba(201,173,167,0.24)] bg-[rgba(18,18,32,0.65)] backdrop-blur-2xl">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 text-sm text-[rgba(201,173,167,0.7)]">
                                <span>© {currentYear}</span>
                                <Heart
                                    className="h-4 w-4 animate-pulse"
                                    style={{ color: "var(--pale_dogwood-400)" }}
                                />
                                <span>Crafted with passion by Prashant Kumar</span>
                                <Star
                                    className="h-4 w-4"
                                    style={{ color: "var(--isabelline-900)" }}
                                />
                            </motion.div>

                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group rounded-xl border border-[rgba(201,173,167,0.24)] bg-[rgba(27,27,47,0.6)] p-3 text-[rgba(201,173,167,0.68)] transition-all duration-300 hover:border-[rgba(201,173,167,0.45)] hover:text-[var(--pale_dogwood-500)]">
                                <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
