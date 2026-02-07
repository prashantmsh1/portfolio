import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, Globe, Rocket } from "lucide-react";

const services = [
    {
        icon: Monitor,
        title: "Frontend Engineering",
        description: "Pixel-perfect, responsive interfaces with React, Next.js, and Tailwind CSS.",
        colSpan: "col-span-1 md:col-span-2",
        class: "bg-gradient-to-br from-brand-gray to-brand-black",
    },
    {
        icon: Cpu,
        title: "Backend Systems",
        description: "Scalable APIs and microservices using Node.js, Go, or Python.",
        colSpan: "col-span-1",
        class: "bg-brand-gray",
    },
    {
        icon: Globe,
        title: "Web3 Integration",
        description: "Connecting traditional web apps with blockchain utilizing Wagmi/Viem.",
        colSpan: "col-span-1",
        class: "bg-brand-gray",
    },
    {
        icon: Rocket,
        title: "Performance Optimization",
        description: "Speed is a feature. I ensure 100/100 Lighthouse scores.",
        colSpan: "col-span-1 md:col-span-2",
        class: "bg-gradient-to-br from-brand-black to-brand-gray",
    },
];

const InfoGrid = () => {
    return (
        <section className="relative z-10 bg-brand-black py-32 text-white">
            <div className="container-width">
                <div className="mb-20 flex flex-col items-center text-center">
                    <span className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                        Capabilities
                    </span>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Everything you need <br />
                        <span className="text-gray-500">to scale your product.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className={`${service.colSpan} ${service.class} group relative overflow-hidden rounded-3xl border border-white/5 p-8 shadow-2xl transition-all hover:border-brand-accent/50`}>
                            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-brand-accent/5 blur-3xl transition-all group-hover:bg-brand-accent/10" />

                            <div className="relative z-10 flex flex-col items-start gap-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white transition-colors group-hover:bg-brand-accent group-hover:text-white">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoGrid;
