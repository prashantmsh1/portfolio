import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image: string;
    featured?: boolean;
    category: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "NexCommerce",
        description: "AI-powered e-commerce platform with real-time analytics.",
        tags: ["Next.js", "Stripe", "AI"],
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
        featured: true,
        category: "Web App",
    },
    {
        id: 2,
        title: "TaskFlow",
        description: "Smart project management for remote teams.",
        tags: ["Vue", "Python", "Redis"],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
        category: "SaaS",
    },
    {
        id: 3,
        title: "FinanceAI",
        description: "Deep learning finance dashboard.",
        tags: ["React", "D3.js", "Node"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        category: "FinTech",
    },
    {
        id: 4,
        title: "CodeMentor",
        description: "Interactive coding education platform.",
        tags: ["Next.js", "Supabase"],
        image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
        category: "EdTech",
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Web App", "SaaS", "FinTech", "EdTech"];

    const filteredProjects =
        filter === "All" ? projects : projects.filter((p) => p.category === filter);

    return (
        <section id="projects" className="relative z-10 bg-brand-black py-32 text-white">
            <div className="container-width">
                <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            Selected <span className="text-gray-600">Works</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`rounded-full border border-white/10 px-4 py-2 text-sm transition-colors ${
                                    filter === cat
                                        ? "bg-white text-black"
                                        : "bg-transparent text-gray-400 hover:text-white"
                                }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                                className={`group relative overflow-hidden rounded-3xl bg-brand-gray ${
                                    project.featured
                                        ? "md:col-span-2 lg:col-span-2 aspect-video"
                                        : "aspect-square"
                                }`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                        <div className="flex justify-between items-end mb-2">
                                            <h3 className="text-2xl font-bold">{project.title}</h3>
                                            <div className="flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md">
                                                        <ArrowUpRight className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 delay-100">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
