"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTechIcon } from "../../utils/tech-icons";
import { ExternalLink, Github, Play, Users, Star, ArrowRight, Sparkles } from "lucide-react";

interface Project {
    id: number;
    imageUrl: string;
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    category: string;
    year: string;
    status: "completed" | "in-progress" | "featured";
    metrics: {
        users?: string;
        performance?: string;
        rating?: number;
    };
    links: {
        live?: string;
        github?: string;
        case?: string;
    };
    featured?: boolean;
}

const projectData: Project[] = [
    {
        id: 1,
        imageUrl:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "NexCommerce",
        subtitle: "Next-Gen E-commerce Platform",
        description:
            "A revolutionary e-commerce platform built with cutting-edge technology, featuring AI-powered recommendations, real-time inventory management, and seamless payment processing.",
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
        category: "Web Application",
        year: "2024",
        status: "featured",
        metrics: {
            users: "10K+",
            performance: "98%",
            rating: 4.9,
        },
        links: {
            live: "https://nexcommerce.demo",
            github: "https://github.com/prashant/nexcommerce",
            case: "#",
        },
        featured: true,
    },
    {
        id: 2,
        imageUrl:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "TaskFlow Pro",
        subtitle: "AI-Powered Project Management",
        description:
            "An intelligent project management solution that uses machine learning to predict project timelines, optimize resource allocation, and enhance team collaboration.",
        technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
        category: "SaaS Platform",
        year: "2024",
        status: "completed",
        metrics: {
            users: "5K+",
            performance: "95%",
            rating: 4.7,
        },
        links: {
            live: "https://taskflow.demo",
            github: "https://github.com/prashant/taskflow",
        },
    },
    {
        id: 3,
        imageUrl:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "FinanceAI",
        subtitle: "Smart Financial Dashboard",
        description:
            "A comprehensive financial analytics platform with AI-driven insights, real-time market data, and personalized investment recommendations.",
        technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
        category: "FinTech",
        year: "2023",
        status: "completed",
        metrics: {
            users: "3K+",
            performance: "97%",
            rating: 4.8,
        },
        links: {
            live: "https://financeai.demo",
            case: "#",
        },
    },
    {
        id: 4,
        imageUrl:
            "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "CodeMentor",
        subtitle: "Interactive Learning Platform",
        description:
            "An innovative coding education platform with interactive tutorials, real-time code execution, and AI-powered code review and feedback system.",
        technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Docker"],
        category: "EdTech",
        year: "2023",
        status: "in-progress",
        metrics: {
            users: "2K+",
            performance: "94%",
            rating: 4.6,
        },
        links: {
            github: "https://github.com/prashant/codementor",
            case: "#",
        },
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [filter, setFilter] = useState("all");

    const categories = ["all", "Web Application", "SaaS Platform", "FinTech", "EdTech"];

    const filteredProjects =
        filter === "all"
            ? projectData
            : projectData.filter((project) => project.category === filter);

    const featuredProject = projectData.find((p) => p.featured);

    return (
        <section
            id="projects"
            className="relative min-h-screen overflow-hidden py-24 px-4 text-[var(--isabelline-800)] sm:px-6 lg:px-8"
            style={{
                background:
                    "radial-gradient(circle at 10% 20%, rgba(96,96,163,0.45), transparent 55%), radial-gradient(circle at 88% 18%, rgba(201,173,167,0.3), transparent 55%), radial-gradient(circle at 45% 80%, rgba(154,140,152,0.35), transparent 60%), linear-gradient(150deg, var(--space_cadet-300), var(--ultra_violet-500))",
            }}>
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full blur-3xl"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(64,64,111,0.45), rgba(201,173,167,0.22))",
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full blur-3xl"
                    style={{
                        animationDelay: "1s",
                        background:
                            "linear-gradient(120deg, rgba(201,173,167,0.24), rgba(252,250,249,0.16))",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,173,167,0.32)] bg-[rgba(27,27,47,0.6)] px-6 py-2 shadow-[0_12px_28px_-18px_rgba(7,7,12,0.65)]">
                        <Sparkles className="h-4 w-4" style={{ color: "var(--isabelline-600)" }} />
                        <span className="text-sm font-medium text-[var(--pale_dogwood-500)]">
                            Featured Work
                        </span>
                    </motion.div>
                    <h2 className="mb-6 text-5xl font-bold text-[var(--isabelline-900)] md:text-7xl tracking-tight">
                        <span className="bg-gradient-to-r from-[var(--space_cadet-700)] via-[var(--rose_quartz-500)] to-[var(--pale_dogwood-500)] bg-clip-text text-transparent">
                            Creative
                        </span>
                        <br />
                        <span className="text-[rgba(252,250,249,0.9)]">Projects</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-[rgba(235,232,234,0.75)] leading-relaxed">
                        Explore my latest work where innovation meets functionality. Each project
                        represents a unique challenge solved with modern technology and creative
                        thinking.
                    </p>
                </motion.div>

                {/* Featured Project Hero */}
                {featuredProject && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20">
                        <FeaturedProjectCard project={featuredProject} />
                    </motion.div>
                )}

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setFilter(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                                filter === category
                                    ? "bg-gradient-to-r from-[rgba(64,64,111,0.85)] to-[rgba(201,173,167,0.8)] text-[var(--space_cadet-100)] shadow-[0_16px_32px_-18px_rgba(96,96,163,0.6)]"
                                    : "border border-[rgba(201,173,167,0.28)] bg-[rgba(27,27,47,0.55)] text-[rgba(235,232,234,0.72)] hover:border-[rgba(201,173,167,0.45)] hover:bg-[rgba(34,34,59,0.65)]"
                            }`}>
                            {category === "all" ? "All Projects" : category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects
                            .filter((p) => !p.featured)
                            .map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                    isHovered={hoveredId === project.id}
                                    onHover={setHoveredId}
                                    onClick={setSelectedProject}
                                />
                            ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

const FeaturedProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group">
            <div
                className="absolute -inset-1 rounded-3xl opacity-25 blur transition duration-1000 group-hover:opacity-60"
                style={{
                    background:
                        "linear-gradient(130deg, rgba(64,64,111,0.6), rgba(201,173,167,0.45))",
                }}></div>
            <div className="relative overflow-hidden rounded-3xl border border-[rgba(201,173,167,0.22)] bg-[rgba(18,18,32,0.78)] backdrop-blur-2xl shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative h-96 overflow-hidden lg:h-auto">
                        <motion.img
                            src={project.imageUrl}
                            alt={project.title}
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(7,7,12,0.2), rgba(7,7,12,0.75))",
                            }}></div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                                background: "rgba(64,64,111,0.28)",
                                backdropFilter: "blur(6px)",
                            }}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: isHovered ? 1 : 0 }}
                                transition={{ delay: 0.1 }}
                                className="rounded-full bg-[rgba(252,250,249,0.12)] p-4 backdrop-blur">
                                <Play
                                    className="h-8 w-8"
                                    style={{ color: "var(--isabelline-900)" }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-center p-8 lg:p-12">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="rounded-full bg-gradient-to-r from-[rgba(64,64,111,0.92)] to-[rgba(201,173,167,0.85)] px-3 py-1 text-sm font-bold text-[var(--space_cadet-100)]">
                                FEATURED
                            </span>
                            <span className="text-sm text-[rgba(201,173,167,0.68)]">
                                {project.year}
                            </span>
                        </div>

                        <h3 className="mb-2 text-4xl font-bold text-[var(--isabelline-900)]">
                            {project.title}
                        </h3>
                        <p className="mb-4 text-xl text-[var(--pale_dogwood-500)]">
                            {project.subtitle}
                        </p>
                        <p className="mb-6 leading-relaxed text-[rgba(235,232,234,0.75)]">
                            {project.description}
                        </p>

                        {/* Metrics */}
                        <div className="mb-6 grid grid-cols-3 gap-4">
                            <div className="rounded-2xl border border-[rgba(201,173,167,0.18)] bg-[rgba(27,27,47,0.55)] p-4 text-center">
                                <div className="text-2xl font-bold text-[var(--isabelline-900)]">
                                    {project.metrics.users}
                                </div>
                                <div className="text-xs text-[rgba(201,173,167,0.68)]">
                                    Active Users
                                </div>
                            </div>
                            <div className="rounded-2xl border border-[rgba(201,173,167,0.18)] bg-[rgba(27,27,47,0.55)] p-4 text-center">
                                <div className="text-2xl font-bold text-[var(--isabelline-900)]">
                                    {project.metrics.performance}
                                </div>
                                <div className="text-xs text-[rgba(201,173,167,0.68)]">
                                    Performance
                                </div>
                            </div>
                            <div className="rounded-2xl border border-[rgba(201,173,167,0.18)] bg-[rgba(27,27,47,0.55)] p-4 text-center">
                                <div className="flex items-center justify-center gap-1">
                                    <Star
                                        className="h-4 w-4"
                                        style={{ color: "var(--pale_dogwood-400)" }}
                                    />
                                    <span className="text-2xl font-bold text-[var(--pale_dogwood-400)]">
                                        {project.metrics.rating}
                                    </span>
                                </div>
                                <div className="text-xs text-[rgba(201,173,167,0.68)]">Rating</div>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 4).map((tech) => {
                                const { icon, color } = getTechIcon(tech);
                                return (
                                    <span
                                        key={tech}
                                        className="flex items-center gap-2 rounded-full border border-[rgba(201,173,167,0.22)] bg-[rgba(27,27,47,0.55)] px-3 py-1 text-sm">
                                        <span className={color}>{icon}</span>
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                            {project.links.live && (
                                <motion.a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[rgba(64,64,111,0.9)] to-[rgba(201,173,167,0.85)] px-6 py-3 font-semibold text-[var(--space_cadet-100)] shadow-[0_16px_34px_-18px_rgba(96,96,163,0.6)] transition-all hover:shadow-[0_20px_40px_-16px_rgba(201,173,167,0.45)]">
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </motion.a>
                            )}
                            {project.links.github && (
                                <motion.a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 rounded-full border border-[rgba(201,173,167,0.28)] bg-[rgba(27,27,47,0.65)] px-6 py-3 font-semibold text-[var(--isabelline-800)] transition-all hover:border-[rgba(201,173,167,0.45)]">
                                    <Github className="w-5 h-5" />
                                    Code
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectCard: React.FC<{
    project: Project;
    index: number;
    isHovered: boolean;
    onHover: (id: number | null) => void;
    onClick: (project: Project) => void;
}> = ({ project, index, isHovered, onHover, onClick }) => {
    const statusColors = {
        completed: "from-[rgba(64,64,111,0.85)] to-[rgba(201,173,167,0.7)]",
        "in-progress": "from-[rgba(201,173,167,0.85)] to-[rgba(252,250,249,0.78)]",
        featured: "from-[rgba(96,96,163,0.9)] to-[rgba(201,173,167,0.82)]",
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => onHover(project.id)}
            onHoverEnd={() => onHover(null)}
            onClick={() => onClick(project)}
            className="group cursor-pointer">
            <div className="relative">
                <div
                    className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition duration-500 group-hover:opacity-75"
                    style={{
                        background:
                            "linear-gradient(130deg, rgba(64,64,111,0.55), rgba(201,173,167,0.38))",
                    }}></div>
                <div className="relative overflow-hidden rounded-2xl border border-[rgba(201,173,167,0.22)] bg-[rgba(18,18,32,0.7)] backdrop-blur-2xl transition-all duration-300 hover:border-[rgba(201,173,167,0.4)] hover:shadow-xl">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                        <motion.img
                            src={project.imageUrl}
                            alt={project.title}
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(7,7,12,0.25), rgba(7,7,12,0.6))",
                            }}></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                            <span
                                className={`bg-gradient-to-r ${
                                    statusColors[project.status]
                                } rounded-full px-3 py-1 text-xs font-bold uppercase text-[var(--space_cadet-100)] shadow-[0_12px_24px_-16px_rgba(201,173,167,0.45)]`}>
                                {project.status.replace("-", " ")}
                            </span>
                        </div>

                        {/* Hover Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                                background: "rgba(64,64,111,0.28)",
                                backdropFilter: "blur(6px)",
                            }}>
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{
                                    scale: isHovered ? 1 : 0,
                                    rotate: isHovered ? 0 : -180,
                                }}
                                transition={{ delay: 0.1, type: "spring", damping: 15 }}
                                className="rounded-full bg-[rgba(252,250,249,0.12)] p-3 backdrop-blur-sm">
                                <ArrowRight
                                    className="h-6 w-6"
                                    style={{ color: "var(--isabelline-900)" }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-[var(--pale_dogwood-500)]">
                                {project.category}
                            </span>
                            <span className="text-sm text-[rgba(201,173,167,0.68)]">
                                {project.year}
                            </span>
                        </div>

                        <h3 className="mb-2 text-xl font-bold text-[var(--isabelline-900)] transition-colors group-hover:text-[var(--pale_dogwood-500)]">
                            {project.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-sm text-[rgba(235,232,234,0.7)]">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech) => {
                                const { icon, color } = getTechIcon(tech);
                                return (
                                    <span
                                        key={tech}
                                        className="flex items-center gap-1 rounded border border-[rgba(201,173,167,0.2)] bg-[rgba(27,27,47,0.55)] px-2 py-1 text-xs">
                                        <span className={`${color} scale-75`}>{icon}</span>
                                        {tech}
                                    </span>
                                );
                            })}
                            {project.technologies.length > 3 && (
                                <span className="rounded border border-[rgba(201,173,167,0.18)] bg-[rgba(34,34,59,0.55)] px-2 py-1 text-xs text-[rgba(201,173,167,0.68)]">
                                    +{project.technologies.length - 3}
                                </span>
                            )}
                        </div>

                        {/* Metrics */}
                        {project.metrics.users && (
                            <div className="flex items-center gap-4 text-sm text-[rgba(201,173,167,0.7)]">
                                <div className="flex items-center gap-1">
                                    <Users
                                        className="h-4 w-4"
                                        style={{ color: "var(--pale_dogwood-500)" }}
                                    />
                                    <span>{project.metrics.users}</span>
                                </div>
                                {project.metrics.rating && (
                                    <div className="flex items-center gap-1">
                                        <Star
                                            className="h-4 w-4"
                                            style={{ color: "var(--pale_dogwood-400)" }}
                                        />
                                        <span>{project.metrics.rating}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectModal: React.FC<{
    project: Project;
    onClose: () => void;
}> = ({ project, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur"
            style={{ background: "rgba(7,7,12,0.85)" }}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[rgba(201,173,167,0.22)] bg-[rgba(18,18,32,0.85)]">
                <div className="p-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-[var(--isabelline-900)]">
                            {project.title}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-[rgba(201,173,167,0.65)] transition-colors hover:text-[var(--isabelline-900)]">
                            ✕
                        </button>
                    </div>

                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="mb-6 h-64 w-full rounded-xl object-cover"
                    />

                    <p className="mb-6 leading-relaxed text-[rgba(235,232,234,0.75)]">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="mb-3 text-lg font-semibold text-[var(--isabelline-900)]">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => {
                                    const { icon, color } = getTechIcon(tech);
                                    return (
                                        <span
                                            key={tech}
                                            className="flex items-center gap-2 rounded-lg border border-[rgba(201,173,167,0.2)] bg-[rgba(27,27,47,0.6)] px-3 py-2 text-sm">
                                            <span className={color}>{icon}</span>
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-3 text-lg font-semibold text-[var(--isabelline-900)]">
                                Project Links
                            </h3>
                            <div className="space-y-3">
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[var(--pale_dogwood-500)] transition-colors hover:text-[var(--pale_dogwood-400)]">
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[rgba(201,173,167,0.68)] transition-colors hover:text-[var(--isabelline-900)]">
                                        <Github className="w-4 h-4" />
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Projects;
