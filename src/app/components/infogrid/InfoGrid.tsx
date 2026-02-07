import React from "react";
import { motion } from "framer-motion";
import {
    Heart,
    MapPin,
    Globe2,
    Bot,
    Mail,
    MonitorSmartphone,
    Star,
    Code,
    Users,
    Award,
    Zap,
    Coffee,
    ArrowRight,
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const Globe3D = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <Sphere args={[1, 32, 32]}>
                <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.8} />
            </Sphere>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
    );
};

const InfoGrid = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        }),
    };

    const services = [
        {
            icon: MonitorSmartphone,
            label: "Product builds",
            description: "Full-stack experiences from architecture to deploy.",
        },
        {
            icon: Bot,
            label: "AI integration",
            description: "Intelligent automations woven into user journeys.",
        },
        {
            icon: Globe2,
            label: "Cloud strategy",
            description: "Scalable infrastructure tuned for growth and reliability.",
        },
    ];

    const highlightMetrics = [
        {
            icon: Users,
            label: "Partners",
            value: "30+",
            sublabel: "teams backed globally",
        },
        {
            icon: Award,
            label: "Delivery",
            value: "98%",
            sublabel: "projects shipped on time",
        },
        {
            icon: Star,
            label: "Satisfaction",
            value: "5.0",
            sublabel: "average client rating",
        },
    ];

    const testimonials = [
        {
            quote: "Exceptional work quality and lightning-fast delivery. The attention to detail is remarkable.",
            author: "Sarah Johnson",
            role: "CEO, TechStart",
        },
        {
            quote: "Professional, reliable, and incredibly talented. Highly recommended for any web project.",
            author: "Mike Chen",
            role: "Founder, LaunchLab",
        },
    ];

    return (
        <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(150deg,rgba(7,7,12,0.94),rgba(34,34,59,0.92))] py-20 px-4 text-[var(--isabelline-800)] sm:px-6 lg:px-8">
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(64,64,111,0.42),transparent)] animate-pulse" />
                <div
                    className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(201,173,167,0.3),transparent)] animate-pulse"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="absolute top-3/4 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(149,149,194,0.28),transparent)] animate-pulse"
                    style={{ animationDelay: "4s" }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 text-center lg:text-left">
                    <span className="mx-auto rounded-full border border-[rgba(149,149,194,0.35)] bg-[rgba(34,34,59,0.6)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.5em] text-[rgba(250,246,244,0.65)] lg:mx-0">
                        Info Grid
                    </span>
                    <h3 className="text-4xl font-semibold text-isabelline-900 sm:text-5xl tracking-tight">
                        Where craft meets dependable delivery
                    </h3>
                    <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[rgba(250,246,244,0.78)] sm:text-base lg:mx-0">
                        A snapshot of the systems, signals, and support that power every project
                        partnership—from immersive product builds to global rollouts.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="group relative overflow-hidden rounded-3xl">
                        <div className="absolute -inset-1 rounded-[32px] bg-[radial-gradient(circle_at_20%_10%,rgba(64,64,111,0.45),transparent_55%)] opacity-80 blur-3xl transition duration-700 group-hover:opacity-100" />
                        <div className="glass-panel relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] p-10 backdrop-blur-2xl">
                            <div className="pointer-events-none absolute inset-0 opacity-50">
                                <div className="absolute -left-10 top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(201,173,167,0.4),transparent)]" />
                                <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(149,149,194,0.35),transparent)]" />
                            </div>

                            <div className="relative flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(235,232,234,0.25)] bg-[rgba(201,173,167,0.18)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.45em] text-[rgba(250,246,244,0.75)]">
                                        <Zap className="h-3.5 w-3.5" />
                                        Available Now
                                    </span>
                                </div>
                                <h2 className="text-4xl font-semibold leading-tight text-isabelline-900 sm:text-5xl">
                                    Launch-ready full-stack builds that feel meticulously
                                    handcrafted.
                                </h2>
                                <p className="max-w-xl text-sm leading-relaxed text-[rgba(250,246,244,0.78)] sm:text-base">
                                    From discovery to deploy, I partner with founders and product
                                    teams to ship resilient experiences backed by scalable
                                    architecture and purposeful UI motion.
                                </p>
                            </div>

                            <div className="relative mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                <div className="flex gap-6 text-sm text-[rgba(250,246,244,0.75)]">
                                    <span className="inline-flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-[rgba(201,173,167,0.9)]" />
                                        Remote • Global
                                    </span>
                                    <span className="inline-flex items-center gap-2">
                                        <Coffee className="h-4 w-4 text-[rgba(149,149,194,0.9)]" />
                                        5+ years shipping
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#40406f,#c9ada7)] px-6 py-3 text-sm font-semibold text-[#07070c] shadow-[0_18px_40px_-18px_rgba(149,149,194,0.65)] transition-all">
                                        View Projects
                                        <ArrowRight className="h-4 w-4" />
                                    </motion.button>
                                    <motion.a
                                        href="#connect"
                                        whileHover={{ scale: 1.05 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,173,167,0.32)] px-6 py-3 text-sm font-semibold text-[rgba(250,246,244,0.78)] transition-all hover:border-[rgba(235,232,234,0.45)] hover:text-isabelline-900">
                                        Book a Call
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid gap-6">
                        <motion.div
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="glass-panel-soft relative rounded-3xl p-8">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-isabelline-900">
                                        Core services
                                    </h4>
                                    <p className="mt-1 text-sm text-[rgba(250,246,244,0.7)]">
                                        Tailored delivery across the product lifecycle.
                                    </p>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(64,64,111,0.35)] text-[rgba(250,246,244,0.85)]">
                                    <Code className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                {services.map((service) => (
                                    <div
                                        key={service.label}
                                        className="flex items-start gap-3 rounded-2xl border border-[rgba(149,149,194,0.2)] bg-[rgba(27,27,47,0.55)] px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(149,149,194,0.12)]">
                                        <service.icon className="mt-1 h-5 w-5 text-[rgba(201,173,167,0.85)]" />
                                        <div>
                                            <p className="text-sm font-medium text-isabelline-900">
                                                {service.label}
                                            </p>
                                            <p className="text-xs text-[rgba(250,246,244,0.65)]">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="glass-panel-soft relative rounded-3xl p-8">
                            <h4 className="text-lg font-semibold text-isabelline-900">
                                Impact snapshot
                            </h4>
                            <div className="mt-6 grid gap-4">
                                {highlightMetrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="flex items-center justify-between rounded-2xl border border-[rgba(235,232,234,0.18)] bg-[rgba(34,34,59,0.55)] px-4 py-4">
                                        <div className="flex items-center gap-3 text-sm">
                                            <metric.icon className="h-5 w-5 text-[rgba(201,173,167,0.85)]" />
                                            <div>
                                                <p className="font-semibold text-isabelline-900">
                                                    {metric.value}
                                                </p>
                                                <p className="text-xs uppercase tracking-[0.3em] text-[rgba(250,246,244,0.55)]">
                                                    {metric.label}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-[0.35em] text-[rgba(250,246,244,0.5)]">
                                            {metric.sublabel}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <motion.div
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="glass-panel relative flex flex-col overflow-hidden rounded-3xl p-8">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h4 className="text-lg font-semibold text-isabelline-900">
                                    Global collaborations
                                </h4>
                                <p className="mt-1 text-sm text-[rgba(250,246,244,0.68)]">
                                    Supporting teams across continents.
                                </p>
                            </div>
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(64,64,111,0.32)] text-[rgba(250,246,244,0.85)]">
                                <Globe2 className="h-6 w-6" />
                            </span>
                        </div>
                        <div className="flex-1">
                            <Globe3D />
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm text-[rgba(250,246,244,0.72)]">
                            <div className="rounded-2xl border border-[rgba(149,149,194,0.2)] bg-[rgba(27,27,47,0.55)] py-4">
                                <p className="text-2xl font-semibold text-isabelline-900">50+</p>
                                <span>Projects shipped</span>
                            </div>
                            <div className="rounded-2xl border border-[rgba(149,149,194,0.2)] bg-[rgba(27,27,47,0.55)] py-4">
                                <p className="text-2xl font-semibold text-isabelline-900">20+</p>
                                <span>Markets reached</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="glass-panel relative rounded-3xl p-8">
                        <div className="flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(201,173,167,0.22)] text-[rgba(201,173,167,0.85)]">
                                <Users className="h-6 w-6" />
                            </span>
                            <h4 className="text-lg font-semibold text-isabelline-900">
                                Voices from partners
                            </h4>
                        </div>
                        <div className="mt-6 space-y-4">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.author}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="rounded-2xl border border-[rgba(235,232,234,0.18)] bg-[rgba(34,34,59,0.58)] px-4 py-4 text-sm text-[rgba(250,246,244,0.75)]">
                                    <div className="mb-3 flex items-center gap-1 text-[rgba(201,173,167,0.85)]">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <Star
                                                key={starIndex}
                                                className="h-4 w-4"
                                                fill="currentColor"
                                            />
                                        ))}
                                    </div>
                                    <p className="leading-relaxed">“{testimonial.quote}”</p>
                                    <div className="mt-3 text-[rgba(250,246,244,0.65)]">
                                        <span className="font-semibold text-isabelline-900">
                                            {testimonial.author}
                                        </span>
                                        <span className="text-xs uppercase tracking-[0.35em] text-[rgba(250,246,244,0.45)] block">
                                            {testimonial.role}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        custom={5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="glass-panel relative rounded-3xl p-8 text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-[rgba(64,64,111,0.35)] text-[rgba(250,246,244,0.9)]">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h4 className="mt-5 text-2xl font-semibold text-isabelline-900">
                            Let's start building
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-[rgba(250,246,244,0.75)]">
                            Share your roadmap, and I'll translate it into a shippable sprint plan
                            within 24 hours.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#c9ada7,#9a8c98)] px-6 py-3 text-sm font-semibold text-[#07070c] shadow-[0_18px_32px_-20px_rgba(201,173,167,0.75)]">
                            <Heart className="h-4 w-4" />
                            Start a conversation
                        </motion.button>
                        <motion.a
                            href="mailto:prashantkr.msh@gmail.com"
                            whileHover={{ scale: 1.03 }}
                            className="mt-4 block text-xs uppercase tracking-[0.4em] text-[rgba(250,246,244,0.55)]">
                            prashantkr.msh@gmail.com
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InfoGrid;
