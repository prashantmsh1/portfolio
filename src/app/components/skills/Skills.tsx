import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTechIcon } from "../../utils/tech-icons";
import {
    Code,
    Database,
    Palette,
    Cloud,
    Smartphone,
    Shield,
    Star,
    Zap,
    Award,
    Trophy,
} from "lucide-react";

interface Skill {
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    rating: number; // 1-5 stars
    category: string;
    yearsOfExperience: number;
    projects: number;
}

const skillsData: Skill[] = [
    {
        name: "React",
        level: "Expert",
        rating: 5,
        category: "Frontend",
        yearsOfExperience: 4,
        projects: 25,
    },
    {
        name: "TypeScript",
        level: "Advanced",
        rating: 4,
        category: "Frontend",
        yearsOfExperience: 3,
        projects: 20,
    },
    {
        name: "Next.js",
        level: "Advanced",
        rating: 4,
        category: "Frontend",
        yearsOfExperience: 3,
        projects: 15,
    },
    {
        name: "Tailwind CSS",
        level: "Expert",
        rating: 5,
        category: "Frontend",
        yearsOfExperience: 3,
        projects: 30,
    },
    {
        name: "Node.js",
        level: "Expert",
        rating: 5,
        category: "Backend",
        yearsOfExperience: 4,
        projects: 20,
    },
    {
        name: "Express",
        level: "Advanced",
        rating: 4,
        category: "Backend",
        yearsOfExperience: 4,
        projects: 18,
    },
    {
        name: "Python",
        level: "Intermediate",
        rating: 3,
        category: "Backend",
        yearsOfExperience: 2,
        projects: 8,
    },
    {
        name: "MongoDB",
        level: "Advanced",
        rating: 4,
        category: "Database",
        yearsOfExperience: 3,
        projects: 15,
    },
    {
        name: "PostgreSQL",
        level: "Intermediate",
        rating: 3,
        category: "Database",
        yearsOfExperience: 2,
        projects: 10,
    },
    {
        name: "Firebase",
        level: "Advanced",
        rating: 4,
        category: "Database",
        yearsOfExperience: 3,
        projects: 12,
    },
];

const categories = [
    { id: "all", name: "All Skills", icon: Star, color: "from-purple-500 to-pink-500" },
    { id: "Frontend", name: "Frontend", icon: Palette, color: "from-blue-500 to-cyan-500" },
    { id: "Backend", name: "Backend", icon: Database, color: "from-green-500 to-emerald-500" },
    { id: "Database", name: "Database", icon: Cloud, color: "from-orange-500 to-red-500" },
];

const levelColors = {
    Beginner: "from-gray-500 to-gray-600",
    Intermediate: "from-blue-500 to-blue-600",
    Advanced: "from-purple-500 to-purple-600",
    Expert: "from-yellow-500 to-orange-500",
};

const levelIcons = {
    Beginner: Code,
    Intermediate: Zap,
    Advanced: Award,
    Expert: Trophy,
};

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const filteredSkills =
        selectedCategory === "all"
            ? skillsData
            : skillsData.filter((skill) => skill.category === selectedCategory);

    return (
        <section
            id="skills"
            className="relative min-h-screen bg-[#050014] py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-600/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Technical
                        </span>
                        <br />
                        <span className="text-white">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Mastery levels in technologies I use to craft exceptional digital
                        experiences.
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600"
                            }`}>
                            <category.icon className="w-4 h-4" />
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {filteredSkills.map((skill, index) => (
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                                index={index}
                                isHovered={hoveredSkill === skill.name}
                                onHover={setHoveredSkill}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Skills Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {[
                        {
                            label: "Expert Level",
                            count: skillsData.filter((s) => s.level === "Expert").length,
                            color: "text-yellow-400",
                        },
                        {
                            label: "Advanced Level",
                            count: skillsData.filter((s) => s.level === "Advanced").length,
                            color: "text-purple-400",
                        },
                        {
                            label: "Total Projects",
                            count: skillsData.reduce((sum, s) => sum + s.projects, 0),
                            color: "text-cyan-400",
                        },
                        {
                            label: "Years Combined",
                            count: skillsData.reduce((sum, s) => sum + s.yearsOfExperience, 0),
                            color: "text-pink-400",
                        },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center">
                            <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                                {stat.count}
                            </div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="">
                    <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">
                        Additional Tools & Technologies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Git & GitHub",
                            "Docker",
                            "AWS",
                            "REST APIs",
                            "GraphQL",
                            "Jest",
                            "Cypress",
                            "Agile",
                            "UI/UX Design",
                            "Performance Optimization",
                            "Microservices",
                            "CI/CD",
                            "Redis",
                            "WebSockets",
                            "PWA Development",
                        ].map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="bg-gray-800/60 backdrop-blur-sm border border-gray-600 hover:border-purple-400 px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white transition-all cursor-default">
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SkillCard: React.FC<{
    skill: Skill;
    index: number;
    isHovered: boolean;
    onHover: (name: string | null) => void;
}> = ({ skill, index, isHovered, onHover }) => {
    const { icon, color } = getTechIcon(skill.name);
    const LevelIcon = levelIcons[skill.level];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => onHover(skill.name)}
            onHoverEnd={() => onHover(null)}
            whileHover={{
                y: -8,
                scale: 1.05,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                },
            }}
            className="group cursor-pointer">
            <div className="relative">
                <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isHovered ? 0.75 : 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 h-full overflow-hidden"
                    animate={{
                        borderColor: isHovered
                            ? "rgba(156, 163, 175, 0.5)"
                            : "rgba(75, 85, 99, 0.5)",
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <motion.span
                                className={`${color}`}
                                animate={{
                                    scale: isHovered ? 1.15 : 1,
                                    rotate: isHovered ? 5 : 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                }}>
                                {icon}
                            </motion.span>
                            <motion.h4
                                className="text-white font-semibold text-lg"
                                animate={{
                                    color: isHovered ? "#a855f7" : "#ffffff",
                                }}
                                transition={{ duration: 0.3 }}>
                                {skill.name}
                            </motion.h4>
                        </div>
                        <motion.div
                            className={`p-2 rounded-lg bg-gradient-to-r ${
                                levelColors[skill.level]
                            }`}
                            animate={{
                                scale: isHovered ? 1.1 : 1,
                                rotate: isHovered ? -5 : 0,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                            }}>
                            <LevelIcon className="w-4 h-4 text-white" />
                        </motion.div>
                    </div>

                    {/* Level Badge */}
                    <div className="mb-4">
                        <motion.span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${
                                levelColors[skill.level]
                            } text-white`}
                            animate={{
                                scale: isHovered ? 1.05 : 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}>
                            {skill.level}
                        </motion.span>
                    </div>

                    {/* Abstract Proficiency Indicator */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400 text-xs">Proficiency</span>
                            <motion.span
                                className="text-purple-400 text-xs font-medium"
                                animate={{
                                    opacity: isHovered ? 1 : 0.7,
                                }}
                                transition={{ duration: 0.3 }}>
                                {skill.rating * 20}%
                            </motion.span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                            <motion.div
                                className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{
                                    width: `${(skill.rating / 5) * 100}%`,
                                    boxShadow: isHovered
                                        ? "0 0 10px rgba(168, 85, 247, 0.5)"
                                        : "none",
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                            />
                            {/* Animated gradient overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                animate={{
                                    x: isHovered ? "100%" : "-100%",
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-2 gap-4 text-sm"
                        animate={{
                            y: isHovered ? -2 : 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}>
                        <div>
                            <div className="text-gray-400">Experience</div>
                            <motion.div
                                className="text-cyan-400 font-medium"
                                animate={{
                                    scale: isHovered ? 1.05 : 1,
                                    color: isHovered ? "#22d3ee" : "#06b6d4",
                                }}
                                transition={{ duration: 0.3 }}>
                                {skill.yearsOfExperience} years
                            </motion.div>
                        </div>
                        <div>
                            <div className="text-gray-400">Projects</div>
                            <motion.div
                                className="text-pink-400 font-medium"
                                animate={{
                                    scale: isHovered ? 1.05 : 1,
                                    color: isHovered ? "#f472b6" : "#ec4899",
                                }}
                                transition={{ duration: 0.3 }}>
                                {skill.projects}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Hover Effect */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                    y: 10,
                                    scale: 0.95,
                                }}
                                animate={{
                                    opacity: 1,
                                    height: "auto",
                                    y: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                    y: 10,
                                    scale: 0.95,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    height: { duration: 0.3 },
                                }}
                                className="mt-4 pt-4 border-t border-gray-600/50">
                                <motion.div
                                    className="text-xs text-gray-400 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}>
                                    Proficiency based on real-world project experience and
                                    continuous learning
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Animated Background Accent */}
                    <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
                        animate={{
                            scale: isHovered ? 1.5 : 1,
                            opacity: isHovered ? 0.3 : 0,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Skills;
