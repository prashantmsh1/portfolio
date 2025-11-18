import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Twitter,
    MessageCircle,
    Clock,
    CheckCircle,
    Sparkles,
    Zap,
    ShieldCheck,
    Globe2,
    Compass,
    Layers,
    Rocket,
    ArrowUpRight,
    Calendar,
} from "lucide-react";

const Connect = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "", budget: "", timeline: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "prashantkr.msh@gmail.com",
            description: "Drop me a line anytime",
            color: "from-[rgba(64,64,111,0.85)] to-[rgba(201,173,167,0.78)]",
            href: "mailto:prashantkr.msh@gmail.com",
        },
        {
            icon: Phone,
            label: "Call",
            value: "+91 9876543210",
            description: "Mon-Fri from 9am to 6pm",
            color: "from-[rgba(201,173,167,0.78)] to-[rgba(252,250,249,0.75)]",
            href: "tel:+919876543210",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Remote Worldwide",
            description: "Available globally",
            color: "from-[rgba(64,64,111,0.7)] to-[rgba(201,173,167,0.6)]",
            href: "#",
        },
        {
            icon: Clock,
            label: "Response Time",
            value: "< 24 hours",
            description: "Quick turnaround guaranteed",
            color: "from-[rgba(201,173,167,0.72)] to-[rgba(252,250,249,0.78)]",
            href: "#",
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/prashant",
            label: "GitHub",
            color: "hover:text-[var(--pale_dogwood-500)]",
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/prashant",
            label: "LinkedIn",
            color: "hover:text-[var(--rose_quartz-500)]",
        },
        {
            icon: Twitter,
            href: "https://twitter.com/prashant",
            label: "Twitter",
            color: "hover:text-[var(--pale_dogwood-500)]",
        },
        {
            icon: MessageCircle,
            href: "#",
            label: "Discord",
            color: "hover:text-[var(--isabelline-900)]",
        },
    ];

    const fieldClass =
        "w-full rounded-lg border border-[rgba(201,173,167,0.28)] bg-[rgba(27,27,47,0.6)] px-4 py-3 text-[var(--isabelline-900)] placeholder-[rgba(235,232,234,0.45)] transition-all focus:border-[rgba(201,173,167,0.55)] focus:outline-none focus:ring-2 focus:ring-[rgba(201,173,167,0.25)]";

    const quickStats = [
        {
            label: "Avg response time",
            value: "< 4h",
            description: "Across direct channels",
            icon: Clock,
        },
        {
            label: "Launch velocity",
            value: "25+ launches",
            description: "Shipped end-to-end with measurable outcomes",
            icon: ShieldCheck,
        },
        {
            label: "Global presence",
            value: "8 timezones",
            description: "Async-first collaboration",
            icon: Globe2,
        },
    ];

    const availabilitySlots = [
        {
            title: "Discovery Call",
            slot: "Wed, Nov 06 · 09:00 IST",
            status: "2 seats left",
        },
        {
            title: "Design Audit",
            slot: "Thu, Nov 07 · 17:30 IST",
            status: "1 seat left",
        },
        {
            title: "Strategy Session",
            slot: "Mon, Nov 11 · 11:00 IST",
            status: "Booking open",
        },
    ];

    const collaborationPhases = [
        {
            title: "Discover & align",
            description: "Decode vision, metrics, and constraints in a high-signal kickoff.",
            icon: Compass,
        },
        {
            title: "Design & prototype",
            description: "Craft lo-fi to polished flows with rapid feedback and stakeholder loops.",
            icon: Sparkles,
        },
        {
            title: "Build & iterate",
            description: "Ship in orchestrated sprints with integrated QA and observability.",
            icon: Layers,
        },
        {
            title: "Launch & scale",
            description: "Track adoption, optimise funnels, and scale the roadmap with confidence.",
            icon: Rocket,
        },
    ];

    const engagementSignals = [
        "Weekly demo loops with Loom recaps",
        "Design systems & accessibility baked into sprints",
        "Experiment tracking inside Notion/Linear dashboards",
        "Co-create KPIs so releases tie back to business goals",
    ];

    return (
        <section
            id="connect"
            className="relative min-h-screen overflow-hidden py-24 px-4 text-[var(--isabelline-800)] sm:px-6 lg:px-8"
            style={{
                background:
                    "radial-gradient(circle at 12% 22%, rgba(96,96,163,0.45), transparent 55%), radial-gradient(circle at 84% 16%, rgba(201,173,167,0.32), transparent 52%), radial-gradient(circle at 48% 82%, rgba(154,140,152,0.35), transparent 58%), linear-gradient(140deg, var(--space_cadet-300), var(--ultra_violet-500))",
            }}>
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full blur-3xl"
                    style={{
                        background:
                            "linear-gradient(130deg, rgba(64,64,111,0.38), rgba(201,173,167,0.22))",
                    }}></div>
                <div
                    className="absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full blur-3xl"
                    style={{
                        background:
                            "linear-gradient(120deg, rgba(201,173,167,0.26), rgba(252,250,249,0.16))",
                    }}></div>
            </div>

            <div className="relative mx-auto max-w-7xl space-y-16">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-3xl border border-[rgba(201,173,167,0.24)] bg-[rgba(18,18,32,0.78)] p-10 shadow-[0_40px_120px_-60px_rgba(7,7,12,0.85)]">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-80"
                            style={{
                                background:
                                    "radial-gradient(circle at 20% 15%, rgba(201,173,167,0.24), transparent 55%), radial-gradient(circle at 80% 25%, rgba(96,96,163,0.35), transparent 60%)",
                            }}
                        />
                        <div className="relative flex h-full flex-col justify-between gap-10">
                            <div className="flex flex-col gap-6">
                                <span className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(201,173,167,0.35)] bg-[rgba(27,27,47,0.6)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--pale_dogwood-500)]">
                                    <Sparkles className="h-4 w-4" />
                                    Open for Q4 builds
                                </span>
                                <h2 className="text-4xl font-semibold text-[var(--isabelline-900)] sm:text-5xl">
                                    Build the next release with a partner obsessed about detail.
                                </h2>
                                <p className="max-w-xl text-[rgba(235,232,234,0.75)]">
                                    Decode your product vision, align outcomes, and move from
                                    discovery to launch with a transparent rhythm and measurable
                                    wins.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                {quickStats.map((stat) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div
                                            key={stat.label}
                                            className="group relative overflow-hidden rounded-2xl border border-[rgba(201,173,167,0.24)] bg-[rgba(27,27,47,0.6)] p-4">
                                            <div
                                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                                style={{
                                                    background:
                                                        "linear-gradient(140deg, rgba(64,64,111,0.35), rgba(201,173,167,0.2))",
                                                }}
                                            />
                                            <div className="relative flex flex-col gap-2">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(201,173,167,0.3)] bg-[rgba(18,18,32,0.65)]">
                                                    <Icon
                                                        className="h-5 w-5"
                                                        style={{ color: "var(--pale_dogwood-500)" }}
                                                    />
                                                </span>
                                                <p className="text-2xl font-semibold text-[var(--isabelline-900)]">
                                                    {stat.value}
                                                </p>
                                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(201,173,167,0.7)]">
                                                    {stat.label}
                                                </p>
                                                <p className="text-sm text-[rgba(235,232,234,0.68)]">
                                                    {stat.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.12 }}
                        className="relative overflow-hidden rounded-3xl border border-[rgba(201,173,167,0.24)] bg-[rgba(18,18,32,0.78)] p-10">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-80"
                            style={{
                                background:
                                    "linear-gradient(140deg, rgba(64,64,111,0.45), rgba(201,173,167,0.28))",
                            }}
                        />
                        <div className="relative flex h-full flex-col gap-8">
                            <div className="flex items-start justify-between gap-6">
                                <div className="flex items-start gap-4">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(201,173,167,0.35)] bg-[rgba(27,27,47,0.6)]">
                                        <Calendar
                                            className="h-6 w-6"
                                            style={{ color: "var(--pale_dogwood-500)" }}
                                        />
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(201,173,167,0.7)]">
                                            Reserve a slot
                                        </p>
                                        <h3 className="mt-2 text-2xl font-semibold text-[var(--isabelline-900)]">
                                            Discovery sessions open
                                        </h3>
                                    </div>
                                </div>
                                <span className="rounded-full border border-[rgba(201,173,167,0.28)] bg-[rgba(27,27,47,0.55)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(201,173,167,0.65)]">
                                    Limited spots
                                </span>
                            </div>

                            <div className="space-y-4">
                                {availabilitySlots.map((slot) => (
                                    <div
                                        key={slot.title}
                                        className="group relative overflow-hidden rounded-2xl border border-[rgba(201,173,167,0.24)] bg-[rgba(18,18,32,0.65)] p-4">
                                        <div
                                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                            style={{
                                                background:
                                                    "linear-gradient(120deg, rgba(201,173,167,0.28), rgba(252,250,249,0.16))",
                                            }}
                                        />
                                        <div className="relative flex items-start justify-between gap-6">
                                            <div>
                                                <p className="text-sm font-semibold text-[var(--isabelline-900)]">
                                                    {slot.title}
                                                </p>
                                                <p className="text-xs uppercase tracking-[0.28em] text-[rgba(201,173,167,0.7)]">
                                                    {slot.slot}
                                                </p>
                                            </div>
                                            <span className="rounded-full border border-[rgba(201,173,167,0.24)] bg-[rgba(27,27,47,0.55)] px-3 py-1 text-xs font-semibold text-[rgba(235,232,234,0.75)]">
                                                {slot.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <a
                                    href="mailto:prashantkr.msh@gmail.com?subject=Book%20a%20Discovery%20Session"
                                    className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(201,173,167,0.35)] bg-gradient-to-r from-[rgba(64,64,111,0.9)] to-[rgba(201,173,167,0.82)] px-6 py-3 text-sm font-semibold text-[var(--space_cadet-100)] shadow-[0_18px_36px_-20px_rgba(201,173,167,0.55)] transition-transform duration-300 hover:-translate-y-0.5">
                                    Book a 30 min intro
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                                <p className="text-sm text-[rgba(235,232,234,0.72)]">
                                    Prefer async? Share context via email and receive a tailored
                                    proposal within 48 hours.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid gap-12 xl:grid-cols-[360px_minmax(0,1fr)]">
                    <motion.aside
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8">
                        <div className="relative overflow-hidden rounded-3xl border border-[rgba(201,173,167,0.24)] bg-[rgba(18,18,32,0.75)] p-8">
                            <div
                                className="pointer-events-none absolute inset-0 opacity-70"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(64,64,111,0.35), rgba(201,173,167,0.22))",
                                }}
                            />
                            <div className="relative flex flex-col gap-6">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(201,173,167,0.68)]">
                                        Direct channels
                                    </p>
                                    <h3 className="mt-2 text-2xl font-semibold text-[var(--isabelline-900)]">
                                        Quick alignments, faster decisions.
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {contactMethods.map((method) => (
                                        <a
                                            key={method.label}
                                            href={method.href}
                                            className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-[rgba(201,173,167,0.24)] bg-[rgba(27,27,47,0.55)] px-4 py-4 transition-all duration-300 hover:border-[rgba(201,173,167,0.45)]">
                                            <div
                                                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r ${method.color}`}
                                            />
                                            <div className="relative flex items-center gap-4">
                                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(201,173,167,0.32)] bg-[rgba(18,18,32,0.6)]">
                                                    <method.icon
                                                        className="h-6 w-6"
                                                        style={{ color: "var(--space_cadet-100)" }}
                                                    />
                                                </span>
                                                <div>
                                                    <p className="text-sm font-semibold text-[var(--isabelline-900)]">
                                                        {method.label}
                                                    </p>
                                                    <p className="text-sm text-[rgba(235,232,234,0.78)]">
                                                        {method.value}
                                                    </p>
                                                    <p className="text-xs uppercase tracking-[0.28em] text-[rgba(201,173,167,0.7)]">
                                                        {method.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <ArrowUpRight
                                                className="relative h-4 w-4"
                                                style={{ color: "var(--isabelline-900)" }}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl border border-[rgba(201,173,167,0.24)] bg-[rgba(18,18,32,0.72)] p-8">
                            <div
                                className="pointer-events-none absolute inset-0 opacity-60"
                                style={{
                                    background:
                                        "linear-gradient(140deg, rgba(201,173,167,0.22), rgba(64,64,111,0.28))",
                                }}
                            />
                            <div className="relative flex flex-col gap-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-[var(--isabelline-900)]">
                                        Social footprint
                                    </h4>
                                    <p className="text-sm text-[rgba(235,232,234,0.72)]">
                                        Stay in the loop with build threads, concept drops, and
                                        real-time experiments.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.08 }}
                                            className={`rounded-xl border border-[rgba(201,173,167,0.28)] bg-[rgba(27,27,47,0.58)] p-3 text-[rgba(201,173,167,0.7)] transition-all duration-300 hover:border-[rgba(201,173,167,0.45)] ${social.color}`}>
                                            <social.icon className="h-5 w-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.aside>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="space-y-12">
                        <div className="relative overflow-hidden rounded-3xl border border-[rgba(201,173,167,0.24)] bg-[rgba(18,18,32,0.78)] p-10">
                            <div
                                className="pointer-events-none absolute inset-0 opacity-70"
                                style={{
                                    background:
                                        "linear-gradient(130deg, rgba(64,64,111,0.32), rgba(201,173,167,0.22))",
                                }}
                            />
                            <div className="relative flex flex-col gap-8">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <Zap
                                            className="h-8 w-8"
                                            style={{ color: "var(--pale_dogwood-500)" }}
                                        />
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(201,173,167,0.7)]">
                                                Tell me about your build
                                            </p>
                                            <h3 className="text-3xl font-semibold text-[var(--isabelline-900)]">
                                                Craft the brief
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="rounded-full border border-[rgba(201,173,167,0.28)] bg-[rgba(27,27,47,0.55)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(201,173,167,0.68)]">
                                        Avg reply &lt; 4h
                                    </span>
                                </div>

                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="rounded-2xl border border-[rgba(201,173,167,0.3)] bg-[rgba(201,173,167,0.16)] p-4 text-[rgba(235,232,234,0.85)]">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle
                                                className="h-5 w-5"
                                                style={{ color: "var(--isabelline-900)" }}
                                            />
                                            <span>
                                                Message sent. Expect a tailored plan within the next
                                                24 hours.
                                            </span>
                                        </div>
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(201,173,167,0.68)]">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className={fieldClass}
                                                placeholder="Jordan Carter"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(201,173,167,0.68)]">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className={fieldClass}
                                                placeholder="jordan@team.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(201,173,167,0.68)]">
                                                Project Budget
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className={fieldClass}>
                                                <option value="">Select range</option>
                                                <option value="5k-10k">$5k - $10k</option>
                                                <option value="10k-25k">$10k - $25k</option>
                                                <option value="25k-50k">$25k - $50k</option>
                                                <option value="50k+">$50k+</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(201,173,167,0.68)]">
                                                Timeline
                                            </label>
                                            <select
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleInputChange}
                                                className={fieldClass}>
                                                <option value="">Choose timeline</option>
                                                <option value="1-2weeks">1-2 weeks</option>
                                                <option value="1month">1 month</option>
                                                <option value="2-3months">2-3 months</option>
                                                <option value="3months+">3+ months</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(201,173,167,0.68)]">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                                className={fieldClass}
                                                placeholder="AI product strategy sprint"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(201,173,167,0.68)]">
                                                Project Details *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={6}
                                                className={`${fieldClass} min-h-[160px] resize-none`}
                                                placeholder="Share the challenge, users, and the outcome you're chasing. Links welcome."
                                            />
                                        </div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[rgba(64,64,111,0.9)] to-[rgba(201,173,167,0.82)] px-6 py-4 text-lg font-semibold text-[var(--space_cadet-100)] shadow-[0_24px_48px_-22px_rgba(201,173,167,0.6)] transition-all duration-300 disabled:from-[rgba(34,34,59,0.6)] disabled:to-[rgba(64,64,111,0.6)] disabled:text-[rgba(201,173,167,0.6)]">
                                        {isSubmitting ? (
                                            <div className="h-6 w-6 animate-spin rounded-full border-2 border-[rgba(252,250,249,0.85)] border-t-transparent" />
                                        ) : (
                                            <>
                                                <Send
                                                    className="h-5 w-5"
                                                    style={{ color: "var(--space_cadet-100)" }}
                                                />
                                                Send message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative overflow-hidden rounded-3xl border border-[rgba(201,173,167,0.24)] bg-[rgba(18,18,32,0.75)] p-8">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-60"
                                    style={{
                                        background:
                                            "linear-gradient(140deg, rgba(64,64,111,0.35), rgba(201,173,167,0.2))",
                                    }}
                                />
                                <div className="relative">
                                    <div className="flex items-center gap-3">
                                        <Sparkles
                                            className="h-6 w-6"
                                            style={{ color: "var(--pale_dogwood-500)" }}
                                        />
                                        <h4 className="text-xl font-semibold text-[var(--isabelline-900)]">
                                            Collaboration blueprint
                                        </h4>
                                    </div>
                                    <p className="mt-2 text-sm text-[rgba(235,232,234,0.72)]">
                                        A transparent cadence built for velocity and clarity.
                                    </p>
                                    <div className="relative mt-6 space-y-6 pl-8">
                                        <span className="absolute left-3 top-0 h-full w-px bg-[rgba(201,173,167,0.2)]" />
                                        {collaborationPhases.map((phase, index) => {
                                            const Icon = phase.icon;
                                            return (
                                                <div
                                                    key={phase.title}
                                                    className="relative flex gap-4">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,173,167,0.35)] bg-[rgba(27,27,47,0.6)]">
                                                        <Icon
                                                            className="h-5 w-5"
                                                            style={{
                                                                color: "var(--pale_dogwood-500)",
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(201,173,167,0.7)]">
                                                            0{index + 1}
                                                        </p>
                                                        <h5 className="text-sm font-semibold text-[var(--isabelline-900)]">
                                                            {phase.title}
                                                        </h5>
                                                        <p className="text-sm text-[rgba(235,232,234,0.72)]">
                                                            {phase.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="relative overflow-hidden rounded-3xl border border-[rgba(201,173,167,0.24)] bg-[rgba(18,18,32,0.75)] p-8">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-60"
                                    style={{
                                        background:
                                            "linear-gradient(160deg, rgba(201,173,167,0.22), rgba(64,64,111,0.3))",
                                    }}
                                />
                                <div className="relative flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck
                                            className="h-6 w-6"
                                            style={{ color: "var(--pale_dogwood-500)" }}
                                        />
                                        <h4 className="text-xl font-semibold text-[var(--isabelline-900)]">
                                            What to expect
                                        </h4>
                                    </div>
                                    <p className="text-sm text-[rgba(235,232,234,0.72)]">
                                        Signals we bring into every engagement to keep momentum
                                        visible.
                                    </p>
                                    <div className="space-y-4">
                                        {engagementSignals.map((signal) => (
                                            <div key={signal} className="flex items-start gap-3">
                                                <CheckCircle
                                                    className="mt-1 h-4 w-4"
                                                    style={{ color: "var(--pale_dogwood-500)" }}
                                                />
                                                <p className="text-sm text-[rgba(235,232,234,0.75)]">
                                                    {signal}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
