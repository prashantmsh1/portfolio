"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        company: "Rapipay Fintech Pvt Ltd",
        role: "Product Engineer",
        period: "September 2024 – February 2026",
        location: "Noida, India",
        description: [
            "Led full-stack migration of legacy dashboards to React 18 and MUI v5, improving performance and reducing page load time by 30% through code-splitting and frontend optimization.",
            "Designed and implemented secure Role-Based Access Control (RBAC) and authentication middleware in Node.js, enforcing data protection and authorization policies.",
            "Architected a scalable Transaction Reconciliation System using Node.js and MongoDB aggregation pipelines, automating verification of 10,000+ daily transactions.",
            "Developed and maintained RESTful APIs using Express.js for a Credit Disbursement Portal with multi-level approval workflows, reducing processing time by 40%.",
            "Optimized backend performance by implementing indexing strategies and query optimization in MongoDB, increasing system throughput by 25%.",
            "Managed application deployment using AWS, CI/CD pipelines, and version control within an Agile development environment.",
        ],
    },
    {
        id: 2,
        company: "HyggexWorld",
        role: "React Developer Intern",
        period: "May 2024 – July 2024",
        location: "Remote",
        description: [
            "Developed responsive and reusable UI components using React.js and Tailwind CSS, improving user engagement by 20%.",
            "Implemented complex client-side state management and API integration for a Quiz Assessment Module, supporting 5,000+ concurrent users.",
            "Built modular analytics dashboards using Chart.js, transforming raw datasets into actionable visual insights and reducing reporting time by 50%.",
            "Collaborated with backend teams to integrate REST APIs and optimize frontend performance.",
        ],
    },
];

const ExperienceCard = ({ exp, index }: { exp: ExperienceItem; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 md:pl-0 flex flex-col md:flex-row gap-8 items-start w-full group">
            {/* Timeline Line & Dot */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 group-last:bottom-auto group-last:h-full">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: "spring" }}
                    className="absolute top-8 md:top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-accent border-4 border-brand-black z-10 box-content"
                />
            </div>

            {/* Content Container */}
            <div
                className={`w-full md:w-1/2 flex flex-col ${index % 2 === 0 ? "md:pr-12 md:items-end md:text-right" : "md:pl-12 md:ml-auto md:items-start text-left"} `}>
                {/* Card Background Container */}
                <div className="bg-brand-gray/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-white/20 transition-colors w-full relative overflow-hidden group/card shadow-2xl">
                    {/* Hover Gradient Effect */}
                    <div
                        className={`absolute top-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -z-10 transition-opacity opacity-0 group-hover/card:opacity-100 ${index % 2 === 0 ? "-right-32 -top-32" : "-left-32 -top-32"}`}
                    />

                    <div
                        className={`flex flex-col gap-4 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                        <div className="flex items-center gap-3 text-brand-accent font-medium mb-1">
                            <span className="bg-brand-accent/10 px-3 py-1 rounded-full text-xs md:text-sm border border-brand-accent/20 flex gap-1.5 items-center">
                                <Calendar className="w-3.5 h-3.5" />
                                {exp.period}
                            </span>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                {exp.role}
                            </h3>
                            <div
                                className={`flex items-center gap-2 text-gray-400 font-medium text-lg ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                <Briefcase className="w-4.5 h-4.5" />
                                <span>{exp.company}</span>
                            </div>
                            <div
                                className={`flex items-center gap-1.5 text-gray-500 text-sm mt-1.5 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-white/10 my-2" />

                        <ul className="flex flex-col gap-3">
                            {exp.description.map((item, i) => (
                                <li
                                    key={i}
                                    className={`text-gray-300 text-sm md:text-base leading-relaxed flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                    <ChevronRight
                                        className={`w-4 h-4 mt-1 shrink-0 text-brand-accent/70 ${index % 2 === 0 ? "rotate-180 md:rotate-0" : ""}`}
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const headerY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section
            id="experience"
            ref={containerRef}
            className="relative bg-brand-black py-32 text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/5 rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="container-width relative z-10">
                <motion.div
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="mb-24 flex flex-col items-start md:items-center text-left md:text-center">
                    <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                        Career Path
                    </span>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl max-w-2xl">
                        Professional <span className="text-gray-500">Experience</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-400 max-w-xl md:mx-auto">
                        A timeline of my journey, roles, and the impact I've created along the way.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12 md:gap-0 mt-16 relative">
                    {/* Main Timeline Line for Mobile */}
                    <div className="absolute left-[15px] top-8 bottom-8 w-1 bg-white/5 md:hidden" />

                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.id} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
