import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="relative flex min-h-[50vh] w-full items-center justify-center bg-brand-black py-32">
            <div className="container-width relative z-10 flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
                {/* Left: Heading */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                        Design-driven
                        <br />
                        <span className="text-gray-500">Engineering.</span>
                    </motion.h2>
                </div>

                {/* Right: Content */}
                <div className="flex-1 md:pl-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 text-lg leading-relaxed text-gray-400">
                        <p>
                            I'm Prashant, a full-stack developer who bridges the gap between
                            creative design and robust engineering. I don't just write code; I craft
                            experiences that feel natural and intuitive.
                        </p>
                        <p>
                            With a deep understanding of modern web technologies and a passion for
                            minimalism, I help brands and founders launch products that stand out in
                            a crowded digital landscape.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="h-px w-12 bg-white/20"></div>
                            <span className="text-sm font-medium uppercase tracking-widest text-white">
                                Based in India, Working Globally
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
