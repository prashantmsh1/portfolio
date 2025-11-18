import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTechIcon } from "../../utils/tech-icons";
import {
    Code,
    Database,
    Palette,
    Cloud,
    Star,
    Zap,
    Award,
    Trophy,
    Sparkles,
    Target,
    Compass,
} from "lucide-react";

interface Skill {
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    rating: number; // 1-5 stars
    category: string;
    description: string;
}

const skillsData: Skill[] = [
    {
        name: "React",
        level: "Expert",
        rating: 5,
        category: "Frontend",
        description:
            "Building dynamic and responsive user interfaces with advanced state management.",
    },
    {
        name: "TypeScript",
        level: "Advanced",
        rating: 4,
        category: "Frontend",
        description: "Ensuring type safety and scalability in large-scale applications.",
    },
    {
        name: "Next.js",
        level: "Advanced",
        rating: 4,
        category: "Frontend",
        description: "Server-side rendering and static site generation for performant React apps.",
    },
    {
        name: "Tailwind CSS",
        level: "Expert",
        rating: 5,
        category: "Frontend",
        description: "Rapidly building custom designs with a utility-first CSS framework.",
    },
    {
        name: "Node.js",
        level: "Expert",
        rating: 5,
        category: "Backend",
        description: "Creating robust and scalable server-side applications and APIs.",
    },
    {
        name: "Express",
        level: "Advanced",
        rating: 4,
        category: "Backend",
        description: "Building web applications and APIs with a minimalist and flexible framework.",
    },
    {
        name: "Python",
        level: "Intermediate",
        rating: 3,
        category: "Backend",
        description: "Using Python for scripting, data analysis, and backend development.",
    },
    {
        name: "MongoDB",
        level: "Advanced",
        rating: 4,
        category: "Database",
        description:
            "Designing and managing NoSQL databases for flexible and scalable data storage.",
    },
    {
        name: "PostgreSQL",
        level: "Intermediate",
        rating: 3,
        category: "Database",
        description: "Working with relational databases and complex queries.",
    },
    {
        name: "Firebase",
        level: "Advanced",
        rating: 4,
        category: "Database",
        description:
            "Leveraging Google's platform for real-time databases, authentication, and hosting.",
    },
];

const categories = [
    {
        id: "all",
        name: "All Skills",
        icon: Star,
        color: "from-[rgba(64,64,111,0.85)] to-[rgba(201,173,167,0.8)]",
    },
    {
        id: "Frontend",
        name: "Frontend",
        icon: Palette,
        color: "from-[rgba(201,173,167,0.75)] to-[rgba(252,250,249,0.78)]",
    },
    {
        id: "Backend",
        name: "Backend",
        icon: Database,
        color: "from-[rgba(64,64,111,0.82)] to-[rgba(96,96,163,0.75)]",
    },
    {
        id: "Database",
        name: "Database",
        icon: Cloud,
        color: "from-[rgba(201,173,167,0.72)] to-[rgba(154,140,152,0.65)]",
    },
];

const levelConfig = {
    Beginner: { icon: Code, color: "text-[rgba(201,173,167,0.62)]" },
    Intermediate: { icon: Zap, color: "text-[var(--rose_quartz-500)]" },
    Advanced: { icon: Award, color: "text-[var(--pale_dogwood-500)]" },
    Expert: { icon: Trophy, color: "text-[rgba(252,250,249,0.85)]" },
};

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const topSkills = useMemo(() => {
        return [...skillsData].sort((a, b) => b.rating - a.rating).slice(0, 3);
    }, []);

    const filteredSkills =
        selectedCategory === "all"
            ? skillsData
            : skillsData.filter((skill) => skill.category === selectedCategory);

    return (
        <section
            id="skills"
            className="relative isolate overflow-hidden py-28 px-4 sm:px-6 lg:px-8 text-[var(--isabelline-800)]"
            style={{
                background:
                    "radial-gradient(circle at 12% 18%, rgba(96,96,163,0.45), transparent 55%), radial-gradient(circle at 82% 16%, rgba(201,173,167,0.32), transparent 52%), radial-gradient(circle at 50% 82%, rgba(154,140,152,0.35), transparent 58%), linear-gradient(135deg, var(--space_cadet-300), var(--ultra_violet-400))",
            }}>
            {/* Layered background for subtle depth */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 20%, rgba(149,149,194,0.18), transparent 55%), radial-gradient(circle at 80% 25%, rgba(201,173,167,0.16), transparent 55%)",
                    }}
                />
                <div
                    className="absolute inset-y-0 right-[-22%] w-[62%] rounded-full blur-3xl"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(64,64,111,0.4), rgba(201,173,167,0.28))",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at top, rgba(96,96,163,0.18), transparent 65%)",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,173,167,0.35)] bg-[rgba(34,34,59,0.45)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--pale_dogwood-500)] shadow-[0_6px_18px_rgba(13,13,23,0.45)]">
                        <Sparkles className="h-4 w-4" style={{ color: "var(--isabelline-500)" }} />
                        Skill Matrix
                    </div>
                    <h2 className="text-4xl font-semibold tracking-tight text-[var(--isabelline-900)] sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-[var(--space_cadet-700)] via-[var(--rose_quartz-500)] to-[var(--pale_dogwood-500)] bg-clip-text text-transparent">
                            Modern Engineering Superpowers
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-base text-[rgba(235,232,234,0.72)] sm:text-lg">
                        A curated blend of frontend craft, backend architecture, and data fluency
                        that lets me ship thoughtful experiences end-to-end.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
                    <motion.aside
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6">
                        <div className="relative overflow-hidden rounded-3xl border border-[rgba(201,173,167,0.22)] bg-[rgba(18,18,32,0.72)] p-8 shadow-[0_24px_45px_-28px_rgba(7,7,12,0.7)]">
                            <div
                                className="pointer-events-none absolute -top-24 -right-14 h-44 w-44 rounded-full blur-3xl"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(64,64,111,0.45), rgba(201,173,167,0.2))",
                                }}
                            />
                            <div
                                className="pointer-events-none absolute -bottom-16 left-20 h-36 w-36 rounded-full blur-3xl"
                                style={{
                                    background:
                                        "linear-gradient(120deg, rgba(201,173,167,0.22), rgba(252,250,249,0.15))",
                                }}
                            />
                            <div className="relative">
                                <div className="flex items-center gap-3 text-sm font-medium text-[color:var(--pale_dogwood-500)]">
                                    <Compass className="h-5 w-5" />
                                    Full-Stack Navigator
                                </div>
                                <h3 className="mt-4 text-2xl font-semibold text-[var(--isabelline-900)]">
                                    Crafting resilient experiences from idea to deploy
                                </h3>
                                <p className="mt-4 text-sm text-[rgba(235,232,234,0.72)]">
                                    I combine product intuition with strong fundamentals in modern
                                    web tooling, ensuring every project balances velocity,
                                    accessibility, and performance.
                                </p>

                                <div className="mt-8 grid gap-4">
                                    {[
                                        {
                                            label: "Products shipped",
                                            value: "25+",
                                            sublabel:
                                                "Production-ready launches delivering measurable outcomes.",
                                        },
                                        {
                                            label: "Years crafting UI",
                                            value: "4",
                                            sublabel:
                                                "Design systems, micro-interactions, and responsive layouts.",
                                        },
                                        {
                                            label: "Cloud & data stack",
                                            value: "End-to-end",
                                            sublabel:
                                                "From real-time databases to serverless deployments.",
                                        },
                                    ].map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="relative overflow-hidden rounded-2xl border border-[rgba(201,173,167,0.18)] bg-[rgba(27,27,47,0.65)] px-4 py-5">
                                            <div
                                                className="pointer-events-none absolute inset-0"
                                                style={{
                                                    background:
                                                        "linear-gradient(120deg, rgba(64,64,111,0.24), transparent 55%), linear-gradient(300deg, rgba(201,173,167,0.18), transparent 60%)",
                                                }}
                                            />
                                            <div className="relative">
                                                <p className="text-xs uppercase tracking-[0.25em] text-[rgba(201,173,167,0.75)]">
                                                    {stat.label}
                                                </p>
                                                <p className="mt-1 text-3xl font-semibold text-[var(--isabelline-900)]">
                                                    {stat.value}
                                                </p>
                                                <p className="mt-1 text-xs text-[rgba(235,232,234,0.68)]">
                                                    {stat.sublabel}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-[rgba(201,173,167,0.18)] bg-[rgba(18,18,32,0.65)] p-6">
                            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-[rgba(201,173,167,0.68)]">
                                Explore
                                <Target
                                    className="h-4 w-4"
                                    style={{ color: "var(--isabelline-600)" }}
                                />
                            </div>
                            <p className="mt-4 text-sm font-medium text-[rgba(235,232,234,0.72)]">
                                Filter the toolkit by discipline and zoom in on the layers powering
                                recent builds.
                            </p>
                            <div className="mt-6 grid gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`group flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition-all duration-300 ${
                                            selectedCategory === category.id
                                                ? "border-[rgba(201,173,167,0.4)] bg-[linear-gradient(135deg,rgba(64,64,111,0.75),rgba(201,173,167,0.75))] text-[var(--isabelline-900)] shadow-[0_14px_34px_-18px_rgba(96,96,163,0.55)]"
                                                : "border-[rgba(201,173,167,0.18)] bg-[rgba(34,34,59,0.4)] text-[rgba(235,232,234,0.68)] hover:border-[rgba(201,173,167,0.35)] hover:bg-[rgba(44,44,68,0.55)]"
                                        }`}>
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(252,250,249,0.08)]">
                                                <category.icon className="h-5 w-5" />
                                            </span>
                                            <span className="text-sm font-medium">
                                                {category.name}
                                            </span>
                                        </div>
                                        <span className="text-xs uppercase tracking-[0.28em] text-[rgba(201,173,167,0.7)]">
                                            {category.id === "all"
                                                ? skillsData.length
                                                : skillsData.filter(
                                                      (skill) => skill.category === category.id
                                                  ).length}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-[rgba(201,173,167,0.18)] bg-[rgba(18,18,32,0.65)] p-6">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[rgba(201,173,167,0.68)]">
                                <Star
                                    className="h-4 w-4"
                                    style={{ color: "rgba(252,250,249,0.85)" }}
                                />
                                Featured focus
                            </div>
                            <p className="mt-4 text-sm text-[rgba(235,232,234,0.72)]">
                                High-leverage skills I lean on to architect performant, scalable
                                products.
                            </p>
                            <div className="mt-6 space-y-4">
                                {topSkills.map((skill) => {
                                    const { icon, color } = getTechIcon(skill.name);
                                    return (
                                        <div
                                            key={skill.name}
                                            className="flex items-start gap-4 rounded-2xl border border-[rgba(201,173,167,0.18)] bg-[rgba(27,27,47,0.6)] px-4 py-3">
                                            <span
                                                className={`flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(252,250,249,0.08)] text-lg ${color}`}>
                                                {icon}
                                            </span>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm font-semibold text-[var(--isabelline-900)]">
                                                        {skill.name}
                                                    </p>
                                                    <span className="text-[10px] uppercase tracking-[0.3em] text-[rgba(201,173,167,0.65)]">
                                                        {skill.level}
                                                    </span>
                                                </div>
                                                <p className="mt-1 text-xs text-[rgba(235,232,234,0.68)]">
                                                    {skill.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.aside>

                    <div className="flex flex-col gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="flex items-center justify-between gap-4 rounded-3xl border border-[rgba(201,173,167,0.2)] px-6 py-4"
                            style={{
                                background:
                                    "linear-gradient(120deg, rgba(34,34,59,0.65), rgba(96,96,163,0.28))",
                            }}>
                            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[rgba(201,173,167,0.72)]">
                                Skillboard
                            </div>
                            <p className="text-xs text-[rgba(235,232,234,0.7)]">
                                Showing {filteredSkills.length}{" "}
                                {filteredSkills.length === 1 ? "capability" : "capabilities"}
                                {selectedCategory !== "all"
                                    ? ` in ${selectedCategory}`
                                    : " across the stack"}
                                .
                            </p>
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.45 }}
                                className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {filteredSkills.map((skill, index) => (
                                    <SkillCard key={skill.name} skill={skill} index={index} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    const { icon, color } = getTechIcon(skill.name);
    const LevelIcon = levelConfig[skill.level].icon;
    const ratingSegments = Array.from({ length: 5 }, (_, idx) => idx < skill.rating);

    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-[rgba(201,173,167,0.2)] bg-[rgba(18,18,32,0.68)] p-6 text-[var(--isabelline-800)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_24px_45px_-20px_rgba(7,7,12,0.7)]">
            <div className="pointer-events-none absolute inset-0 border border-[rgba(201,173,167,0.08)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background:
                        "linear-gradient(130deg, rgba(96,96,163,0.22), rgba(201,173,167,0.18))",
                }}
            />

            <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                    <span
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(252,250,249,0.08)] text-2xl ${color}`}>
                        {icon}
                    </span>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-semibold text-[var(--isabelline-900)]">
                                {skill.name}
                            </h3>
                            <span className="rounded-full border border-[rgba(201,173,167,0.28)] bg-[rgba(27,27,47,0.6)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[rgba(201,173,167,0.68)]">
                                {skill.category}
                            </span>
                        </div>
                        <p className="mt-2 text-sm text-[rgba(235,232,234,0.72)]">
                            {skill.description}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(201,173,167,0.24)] bg-[rgba(34,34,59,0.5)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgba(235,232,234,0.78)]">
                        <LevelIcon className={`h-3.5 w-3.5 ${levelConfig[skill.level].color}`} />
                        {skill.level}
                    </span>
                    <div className="flex items-center gap-1">
                        {ratingSegments.map((filled, idx) => (
                            <Star
                                key={idx}
                                className="h-3.5 w-3.5 transition-colors duration-300"
                                style={{
                                    color: filled
                                        ? "var(--pale_dogwood-400)"
                                        : "rgba(252,250,249,0.12)",
                                }}
                                fill={filled ? "currentColor" : "none"}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative mt-6">
                <div className="flex items-center justify-between text-xs font-medium text-[rgba(235,232,234,0.68)]">
                    <span>{skill.rating * 20}% Mastery</span>
                    <span>Growth mindset</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[rgba(34,34,59,0.55)]">
                    <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[rgba(64,64,111,0.9)] via-[rgba(201,173,167,0.85)] to-[rgba(252,250,249,0.92)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.rating / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
