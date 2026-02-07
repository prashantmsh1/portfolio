import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Zap, Target, Rocket, Users, Award, Coffee } from "lucide-react";

const stats = [
    {
        icon: Zap,
        label: "Years Experience",
        value: "5+",
        gradient: "from-[#c9ada7] to-[#9a8c98]",
        accent: "text-[#f4efed]",
    },
    {
        icon: Rocket,
        label: "Projects Completed",
        value: "50+",
        gradient: "from-[#4a4e69] to-[#6060a3]",
        accent: "text-[#fcfaf9]",
    },
    {
        icon: Users,
        label: "Happy Clients",
        value: "30+",
        gradient: "from-[#9a8c98] to-[#c9ada7]",
        accent: "text-[#f7f1ee]",
    },
    {
        icon: Award,
        label: "Success Rate",
        value: "98%",
        gradient: "from-[#40406f] to-[#6060a3]",
        accent: "text-[#faf6f4]",
    },
];

const valueCards = [
    {
        icon: Target,
        title: "Goal-Oriented",
        description:
            "Every line of code serves a purpose, driving measurable results and user satisfaction.",
        gradient: "from-[rgba(64,64,111,0.28)] to-[rgba(201,173,167,0.22)]",
        border: "border-[rgba(149,149,194,0.28)]",
    },
    {
        icon: Sparkles,
        title: "Innovation First",
        description:
            "Constantly exploring emerging technologies to deliver cutting-edge solutions.",
        gradient: "from-[rgba(34,34,59,0.3)] to-[rgba(154,140,152,0.22)]",
        border: "border-[rgba(149,149,194,0.28)]",
    },
    {
        icon: Coffee,
        title: "Always Learning",
        description: "Committed to continuous growth and staying ahead of industry trends.",
        gradient: "from-[rgba(201,173,167,0.24)] to-[rgba(242,233,228,0.18)]",
        border: "border-[rgba(235,232,234,0.25)]",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen overflow-hidden bg-[linear-gradient(160deg,rgba(7,7,12,0.94),rgba(27,27,47,0.92))] py-24 px-4 text-[var(--isabelline-800)] sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(64,64,111,0.45),transparent)]" />
                <div className="absolute bottom-1/5 right-1/4 h-96 w-96 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(201,173,167,0.32),transparent)]" />
                <div className="absolute top-8 right-1/3 h-40 w-40 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(154,140,152,0.28),transparent)]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center">
                    <motion.div
                        initial={{ scale: 0.85 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(149,149,194,0.3)] bg-[rgba(64,64,111,0.18)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--isabelline-700)]">
                        <Sparkles className="h-4 w-4 text-[var(--pale_dogwood-600)]" />
                        Meet The Developer
                    </motion.div>
                    <h2 className="text-4xl font-semibold tracking-tight text-[var(--isabelline-900)] sm:text-5xl md:text-7xl">
                        <span className="bg-[linear-gradient(120deg,#9595c2,#c9ada7)] bg-clip-text text-transparent">
                            Crafting Digital
                        </span>
                        <br />
                        Experiences With Intent
                    </h2>
                    <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[rgba(250,246,244,0.78)] sm:text-lg">
                        I'm Prashant, a full-stack engineer translating complex problems into
                        tactile, human-centered products. Every deliverable marries thoughtful
                        design with resilient architecture.
                    </p>
                </motion.div>

                <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5">
                        <div className="group relative">
                            <div className="absolute -inset-0.5 rounded-3xl bg-[linear-gradient(135deg,rgba(64,64,111,0.85),rgba(201,173,167,0.65))] opacity-70 blur transition duration-700 group-hover:opacity-100" />
                            <div className="relative h-full rounded-3xl border border-[rgba(149,149,194,0.28)] bg-[rgba(13,13,23,0.84)] p-8 backdrop-blur-2xl">
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="relative">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(145deg,#40406f,#c9ada7)]">
                                            <Code2 className="h-8 w-8 text-[#fcfaf9]" />
                                        </div>
                                        <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[rgba(27,27,47,0.92)] bg-[rgba(201,173,167,0.9)]">
                                            <div className="h-2 w-2 animate-ping rounded-full bg-[#fcfaf9]" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-[var(--isabelline-900)]">
                                            Prashant Kumar
                                        </h3>
                                        <p className="text-sm font-medium text-[var(--rose_quartz-700)]">
                                            Full Stack Developer
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 space-y-4 text-[rgba(250,246,244,0.78)]">
                                    <p>
                                        With 5+ years designing and shipping digital products, I
                                        architect performant interfaces and services using React,
                                        Node.js, and modern cloud-native tooling.
                                    </p>
                                    <p>
                                        I obsess over details—building flows that feel intuitive,
                                        accessible, and responsive while keeping codebases scalable
                                        and maintainable.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "React",
                                        "TypeScript",
                                        "Node.js",
                                        "Python",
                                        "AWS",
                                        "Docker",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-[rgba(201,173,167,0.35)] bg-[rgba(201,173,167,0.12)] px-3 py-1 text-sm font-medium text-[var(--isabelline-800)]">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="grid grid-cols-2 gap-4 lg:col-span-7">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.12 }}
                                className="group">
                                <div className="relative">
                                    <div className="absolute -inset-0.5 rounded-2xl bg-[linear-gradient(140deg,rgba(96,96,163,0.45),rgba(201,173,167,0.35))] opacity-0 blur transition duration-500 group-hover:opacity-100" />
                                    <div className="relative h-full rounded-2xl border border-[rgba(149,149,194,0.28)] bg-[rgba(18,18,32,0.78)] p-6 backdrop-blur-2xl transition-all duration-300 group-hover:border-[rgba(235,232,234,0.35)]">
                                        <div
                                            className={`mb-4 inline-flex rounded-lg bg-gradient-to-r ${stat.gradient} p-3 shadow-[0_12px_30px_rgba(7,7,12,0.35)]`}>
                                            <stat.icon className="h-6 w-6 text-[#07070c]" />
                                        </div>
                                        <div className={`text-3xl font-semibold ${stat.accent}`}>
                                            {stat.value}
                                        </div>
                                        <div className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-[rgba(250,246,244,0.6)]">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {valueCards.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="group">
                            <div
                                className={`h-full rounded-2xl border ${value.border} bg-gradient-to-br ${value.gradient} p-6 transition-all duration-300 backdrop-blur-2xl group-hover:scale-[1.02]`}>
                                <value.icon className="mb-4 h-8 w-8 text-[var(--isabelline-700)] transition-transform group-hover:scale-110" />
                                <h3 className="text-xl font-semibold text-[var(--isabelline-900)]">
                                    {value.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-[rgba(250,246,244,0.75)]">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
