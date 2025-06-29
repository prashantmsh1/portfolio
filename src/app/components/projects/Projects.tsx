import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { getTechIcon } from "../../utils/tech-icons";
import {
    ExternalLink,
    Github,
    Play,
    Code,
    Calendar,
    Users,
    Star,
    ArrowRight,
    Sparkles,
    Zap,
} from "lucide-react";

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
        <section className="relative min-h-screen bg-[#050014] py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/20 rounded-full px-6 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">Featured Work</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            Creative
                        </span>
                        <br />
                        <span className="text-white">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                    className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setFilter(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                filter === category
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600"
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
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative h-96 lg:h-auto overflow-hidden">
                        <motion.img
                            src={project.imageUrl}
                            alt={project.title}
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            className="absolute inset-0 bg-purple-600/20 backdrop-blur-sm flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: isHovered ? 1 : 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                <Play className="w-8 h-8 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                                FEATURED
                            </span>
                            <span className="text-gray-400 text-sm">{project.year}</span>
                        </div>

                        <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-xl text-purple-400 mb-4">{project.subtitle}</p>
                        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">
                                    {project.metrics.users}
                                </div>
                                <div className="text-xs text-gray-400">Active Users</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-400">
                                    {project.metrics.performance}
                                </div>
                                <div className="text-xs text-gray-400">Performance</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-2xl font-bold text-yellow-400">
                                        {project.metrics.rating}
                                    </span>
                                </div>
                                <div className="text-xs text-gray-400">Rating</div>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 4).map((tech) => {
                                const { icon, color } = getTechIcon(tech);
                                return (
                                    <span
                                        key={tech}
                                        className="flex items-center gap-2 bg-gray-800/50 border border-gray-600 px-3 py-1 rounded-full text-sm">
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
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all">
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
                                    className="bg-gray-800 border border-gray-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:border-gray-500 transition-all">
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
        completed: "from-green-500 to-emerald-500",
        "in-progress": "from-yellow-500 to-orange-500",
        featured: "from-purple-500 to-pink-500",
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                        <motion.img
                            src={project.imageUrl}
                            alt={project.title}
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                            <span
                                className={`bg-gradient-to-r ${
                                    statusColors[project.status]
                                } text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}>
                                {project.status.replace("-", " ")}
                            </span>
                        </div>

                        {/* Hover Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            className="absolute inset-0 bg-purple-600/20 backdrop-blur-sm flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{
                                    scale: isHovered ? 1 : 0,
                                    rotate: isHovered ? 0 : -180,
                                }}
                                transition={{ delay: 0.1, type: "spring", damping: 15 }}
                                className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                <ArrowRight className="w-6 h-6 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-purple-400 text-sm font-medium">
                                {project.category}
                            </span>
                            <span className="text-gray-400 text-sm">{project.year}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech) => {
                                const { icon, color } = getTechIcon(tech);
                                return (
                                    <span
                                        key={tech}
                                        className="flex items-center gap-1 bg-gray-800/50 px-2 py-1 rounded text-xs">
                                        <span className={`${color} scale-75`}>{icon}</span>
                                        {tech}
                                    </span>
                                );
                            })}
                            {project.technologies.length > 3 && (
                                <span className="bg-gray-700/50 px-2 py-1 rounded text-xs text-gray-400">
                                    +{project.technologies.length - 3}
                                </span>
                            )}
                        </div>

                        {/* Metrics */}
                        {project.metrics.users && (
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4 text-cyan-400" />
                                    <span className="text-gray-400">{project.metrics.users}</span>
                                </div>
                                {project.metrics.rating && (
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-gray-400">
                                            {project.metrics.rating}
                                        </span>
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors">
                            ✕
                        </button>
                    </div>

                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-xl mb-6"
                    />

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => {
                                    const { icon, color } = getTechIcon(tech);
                                    return (
                                        <span
                                            key={tech}
                                            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg text-sm">
                                            <span className={color}>{icon}</span>
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Project Links</h3>
                            <div className="space-y-3">
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
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
