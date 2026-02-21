import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { useScroll } from "../../context/ScrollContext";

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image: string;
    images?: string[];
    featured?: boolean;
    category: string;
    about?: string[];
}

interface ProjectDrawerProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, isOpen, onClose }) => {
    const { stop, start } = useScroll();

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            stop();
        } else {
            document.body.style.overflow = "unset";
            start();
        }
        return () => {
            document.body.style.overflow = "unset";
            start();
        };
    }, [isOpen, stop, start]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed bottom-0 left-0 rounded-t-4xl right-0 z-50 h-[90vh] w-full  bg-[#0a0a0a] border-t border-white/10 shadow-[0_-10px_40px_-15px_rgba(139,92,246,0.2)]">
                        {/* Drag Handle for Mobile */}
                        <div className="absolute top-0 left-0 right-0 flex justify-center py-4 z-20">
                            <div className="h-1.5 w-16 rounded-full bg-white/20 hover:bg-white/30 transition-colors" />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-20 rounded-full bg-black/50 p-2 text-white/70 hover:bg-black/70 hover:text-white transition-colors backdrop-blur-md border border-white/5">
                            <X className="h-6 w-6" />
                        </button>

                        {/* Content Scroll Container */}
                        <div
                            data-lenis-prevent
                            className="h-full overflow-y-auto rounded-t-4xl overflow-x-hidden scrollbar-hide">
                            {/* Hero Image Section */}
                            <div className="relative h-[45vh] rounded-t-4xl w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0a0a0a]" />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>

                            {/* Content Body */}
                            <div className="relative px-6 pb-20 -mt-20 md:px-12 lg:px-24">
                                <div className="max-w-7xl mx-auto">
                                    <div className="flex flex-col gap-8">
                                        {/* Header */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300 border border-purple-500/20 backdrop-blur-sm">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                                                {project.title}
                                            </h2>

                                            {/* Links */}
                                            <div className="flex flex-wrap gap-4">
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 font-bold text-lg hover:scale-105 transition-transform">
                                                        <ExternalLink className="h-5 w-5" />
                                                        Visit Site
                                                    </a>
                                                )}
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 rounded-full bg-white/5 text-white px-8 py-4 font-semibold text-lg hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-md">
                                                        <Github className="h-5 w-5" />
                                                        View Code
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent my-4" />

                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                            {/* Description - Takes up 2 columns */}
                                            <div className="lg:col-span-2 space-y-6">
                                                <h3 className="text-2xl font-semibold text-white">
                                                    About the Project
                                                </h3>
                                                <div className="prose prose-invert prose-lg max-w-none">
                                                    <p className="text-gray-300 leading-relaxed">
                                                        {project.description}
                                                    </p>
                                                    {project.about?.map((paragraph, index) => (
                                                        <p
                                                            key={index}
                                                            className="text-gray-400 leading-relaxed text-base">
                                                            {paragraph}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Sidebar - Takes up 1 column */}
                                            <div className="space-y-8">
                                                {/* Tech Stack */}
                                                <div>
                                                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                                                        Technologies
                                                    </h3>
                                                    <div className="flex flex-wrap gap-3">
                                                        {project.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 border border-white/5 hover:border-purple-500/30 transition-colors">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Project Info */}
                                                <div className="p-6 rounded-2xl bg-white/3 border border-white/5 space-y-4">
                                                    <div>
                                                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                                            Year
                                                        </h4>
                                                        <p className="text-white font-medium">
                                                            2024
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                                            Role
                                                        </h4>
                                                        <p className="text-white font-medium">
                                                            Lead Developer
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Image Gallery */}
                                        {project.images && project.images.length > 0 && (
                                            <div className="mt-8 pt-8 border-t border-white/10">
                                                <h3 className="text-2xl font-semibold text-white mb-6">
                                                    Gallery
                                                </h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                    {project.images.map((img, index) => (
                                                        <motion.div
                                                            key={`gallery-${index}`}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="relative aspect-video rounded-2xl overflow-hidden group border border-white/5 bg-white/5">
                                                            <img
                                                                src={img}
                                                                alt={`${project.title} gallery image ${index + 1}`}
                                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                            />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDrawer;
