import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectDrawer from "./ProjectDrawer";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";

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
    filepath?: string;
    about?: string[];
    video?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Evoke AI – Distributed AI Search Engine",
        description:
            "Scalable AI-driven conversational search platform architected for high concurrency, low-latency streaming, and production-grade reliability.",
        tags: [
            "React.js",
            "TypeScript",
            "Express.js",
            "PostgreSQL",
            "Prisma ORM",
            "JWT",
            "SSE",
            "Gemini API",
            "System Design",
        ],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        images: [],
        featured: true,
        category: "AI Search Infrastructure",
        link: "https://evokechat.prashantai.com/",
        github: "https://github.com/prashantmsh1/evoke_chat",
        filepath: "/projects/evokechat",
        about: [
            "Architected a full-stack AI search platform using React.js (TypeScript) and Express.js, implementing a layered backend architecture with separation of concerns across routing, service, and data layers.",
            "Designed a real-time streaming response pipeline using Server-Sent Events (SSE) to efficiently handle 1,000+ concurrent persistent connections, optimizing memory utilization and connection lifecycle management.",
            "Engineered PostgreSQL schema design with indexing strategies, query optimization, and transactional consistency using Prisma ORM to maintain low-latency reads under high throughput.",
            "Integrated Gemini API with streaming token responses and implemented stateless JWT-based authentication, enabling horizontally scalable deployment with minimal session overhead.",
        ],
    },
    {
        id: 2,
        title: "GetGit – AI GitHub Analyzer",
        description:
            "Production-grade AI SaaS platform that enables semantic repository search, contextual Q&A, commit analytics, and meeting transcription with credit-based billing.",
        tags: [
            "Next.js",
            "TypeScript",
            "tRPC",
            "PostgreSQL",
            "Prisma ORM",
            "Gemini AI",
            "pgvector",
            "Stripe",
            "PayPal",
            "Clerk",
            "React Query",
            "AssemblyAI",
            "Tailwind CSS",
            "Radix UI",
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        images: [],
        featured: true,
        category: "AI SaaS Platform",
        link: "https://getgit.prashantai.com/",
        github: "https://github.com/prashantmsh1/getgit",
        filepath: "/projects/getgit",
        about: [
            "GetGit is a production-grade SaaS platform that transforms GitHub repositories into an AI-queryable knowledge base, enabling developers to interact with their codebase using natural language.",
            "Built using Next.js, TypeScript, and tRPC, the application features fully type-safe APIs with server-side rendering and a modular, scalable frontend architecture powered by Tailwind CSS and Radix UI.",
            "A Retrieval-Augmented Generation (RAG) pipeline was engineered using Gemini AI and pgvector, indexing repository content into vector embeddings stored in PostgreSQL for cosine similarity-based semantic search and AI-powered contextual Q&A.",
            "Implemented a robust credit-based billing system with Stripe and PayPal integrations, including secure webhook handling, atomic and idempotent transaction management via Prisma ORM and PostgreSQL.",
            "Designed RESTful and tRPC APIs for GitHub commit analysis and integrated AssemblyAI for meeting transcription, alongside RBAC-based authentication using Clerk and real-time data synchronization with React Query.",
            "Architected with production-readiness in mind, focusing on scalability, system reliability, monetization logic, and developer-centric product experience.",
        ],
    },
    {
        id: 3,
        title: "Sports Engine – Real-Time Event Streaming Platform",
        description:
            "Distributed real-time sports application architected for low-latency bidirectional communication, secure API orchestration, and production-grade deployment.",
        tags: [
            "Next.js",
            "Node.js",
            "Express.js",
            "WebSocket",
            "PostgreSQL",
            "REST API",
            "Rate Limiting",
            "Authentication",
            "VPS Deployment",
            "System Design",
        ],
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
        images: [],
        featured: false,
        category: "Real-Time Web Infrastructure",
        link: "https://sportsocket1.prashantai.com/",
        github: "https://github.com/prashantmsh1/sports-engine",
        filepath: "/projects/sportsengine",
        about: [
            "Architected a full-stack real-time sports application using Next.js and Node.js, implementing WebSocket-based bidirectional communication for low-latency event broadcasting and live state synchronization.",
            "Designed a scalable connection management strategy handling concurrent socket connections, including heartbeat mechanisms, reconnection logic, and event-driven message routing.",
            "Built secure RESTful APIs with Express.js and PostgreSQL, implementing JWT-based authentication, rate limiting, and structured error handling to ensure system reliability under load.",
            "Deployed the application on a VPS with production configuration including reverse proxy setup, environment isolation, logging, and monitoring to maintain uptime and operational stability.",
        ],
    },
];

const Projects = () => {
    const [projectList, setProjectList] = useState<Project[]>(projects);
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            const updatedProjects = await Promise.all(
                projects.map(async (project) => {
                    if (!project.filepath) return project;
                    try {
                        const folderRef = ref(storage, project.filepath);
                        const result = await listAll(folderRef);

                        let mainImageUrl = project.image;
                        let videoUrl = project.video;
                        const otherImages: string[] = [];

                        await Promise.all(
                            result.items.map(async (itemRef) => {
                                const url = await getDownloadURL(itemRef);
                                if (itemRef.name.includes("mainImage")) {
                                    mainImageUrl = url;
                                } else if (
                                    itemRef.name.match(/\\.(mp4|webm|ogg|mov)$/i) ||
                                    itemRef.name.includes("demo-video") ||
                                    itemRef.name.includes("demo_video")
                                ) {
                                    videoUrl = url;
                                } else {
                                    otherImages.push(url);
                                }
                            }),
                        );

                        return {
                            ...project,
                            image: mainImageUrl,
                            video: videoUrl,
                            images: otherImages.length > 0 ? otherImages : project.images,
                        };
                    } catch (error) {
                        console.error("Error fetching images for project " + project.title, error);
                        return project;
                    }
                }),
            );
            setProjectList(updatedProjects);
        };
        fetchImages();
    }, []);

    const categories = ["All", "Web App", "SaaS", "FinTech", "EdTech"];

    const filteredProjects =
        filter === "All" ? projectList : projectList.filter((p) => p.category === filter);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsDrawerOpen(true);
    };

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
                                onClick={() => handleProjectClick(project)}
                                className={`group relative overflow-hidden rounded-3xl bg-brand-gray cursor-pointer ${
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
                                                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md">
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </button>
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

            <ProjectDrawer
                project={selectedProject}
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </section>
    );
};

export default Projects;
