import React, { useRef } from "react";
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
    Sparkles,
    Target,
    Clock,
    TrendingUp,
    Shield,
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

    return (
        <section className="relative min-h-screen bg-[#050014] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "2s" }}></div>
                <div
                    className="absolute top-3/4 left-1/2 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "4s" }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* First Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                    {/* Main Hero Card - Spans 3 columns */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="md:col-span-3 group cursor-pointer">
                        <div className="relative h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full hover:border-purple-400/50 transition-all duration-500 overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-2xl"></div>
                                </div>

                                <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
                                    <div>
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                            className="mb-6">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                                                    <Code className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full">
                                                    <span className="text-purple-300 text-sm font-medium">
                                                        Available for hire
                                                    </span>
                                                </div>
                                            </div>
                                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                                Full Stack
                                                <br />
                                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                    Developer
                                                </span>
                                            </h2>
                                            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                                                Crafting exceptional digital experiences with
                                                cutting-edge technologies. Specialized in React,
                                                Node.js, and modern cloud architecture.
                                            </p>
                                        </motion.div>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-center gap-6 mb-6">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-5 h-5 text-cyan-400" />
                                                <span className="text-gray-100 font-medium">
                                                    Remote • Global
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Coffee className="w-5 h-5 text-amber-400" />
                                                <span className="text-gray-100 font-medium">
                                                    5+ Years Experience
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <motion.button
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                                                View Projects
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50 hover:border-cyan-400 text-white px-6 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm">
                                                Contact Me
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Services Card */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="md:col-span-2 group cursor-pointer">
                        <div className="relative h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-emerald-400/50 transition-all duration-500">
                                <div className="flex flex-col justify-center h-full text-center min-h-[200px]">
                                    <div className="mb-6">
                                        <div className="inline-flex p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl mb-4">
                                            <MonitorSmartphone className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            Services
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            {
                                                icon: Zap,
                                                text: "Web Development",
                                                color: "text-emerald-400",
                                            },
                                            {
                                                icon: Bot,
                                                text: "AI Integration",
                                                color: "text-teal-400",
                                            },
                                            {
                                                icon: Globe2,
                                                text: "Cloud Solutions",
                                                color: "text-cyan-400",
                                            },
                                        ].map((service, index) => (
                                            <motion.div
                                                key={service.text}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * index }}
                                                className="flex items-center justify-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                                                <service.icon
                                                    className={`w-5 h-5 ${service.color}`}
                                                />
                                                <span className="text-gray-100 font-medium">
                                                    {service.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Second Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                    {/* 3D Globe Card */}
                    <motion.div
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="lg:col-span-2 group cursor-pointer">
                        <div className="relative h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-blue-400/50 transition-all duration-500">
                                <div className="flex flex-col h-full min-h-[300px]">
                                    <div className="text-center mb-4">
                                        <div className="inline-flex p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-3">
                                            <Globe2 className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            Global Reach
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            Serving clients worldwide
                                        </p>
                                    </div>
                                    <div className="flex-1 min-h-0 mb-4">
                                        <Globe3D />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="p-3 bg-gray-800/30 rounded-lg">
                                            <div className="text-blue-400 font-bold text-2xl">
                                                50+
                                            </div>
                                            <div className="text-gray-300 text-sm">Projects</div>
                                        </div>
                                        <div className="p-3 bg-gray-800/30 rounded-lg">
                                            <div className="text-purple-400 font-bold text-2xl">
                                                20+
                                            </div>
                                            <div className="text-gray-300 text-sm">Countries</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="group cursor-pointer">
                        <div className="relative h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-amber-400/50 transition-all duration-500">
                                <div className="flex flex-col justify-center h-full text-center min-h-[150px]">
                                    <div className="inline-flex p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl mx-auto mb-4">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-4">
                                        Success Rate
                                    </h3>
                                    <div className="text-3xl font-bold text-amber-400 mb-2">
                                        98%
                                    </div>
                                    <div className="text-gray-300 text-sm">Project Completion</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="group cursor-pointer">
                        <div className="relative h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-yellow-400/50 transition-all duration-500">
                                <div className="flex flex-col justify-center h-full text-center min-h-[150px]">
                                    <div className="flex justify-center mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-yellow-400 fill-current"
                                            />
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Rating</h3>
                                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                                        5.0
                                    </div>
                                    <div className="text-gray-300 text-sm">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="group cursor-pointer">
                        <div className="relative h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-green-400/50 transition-all duration-500">
                                <div className="flex flex-col justify-center h-full text-center min-h-[150px]">
                                    <div className="inline-flex p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Response</h3>
                                    <div className="text-3xl font-bold text-green-400 mb-2">
                                        24h
                                    </div>
                                    <div className="text-gray-300 text-sm">Average Time</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Third Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Client Reviews Card */}
                    <motion.div
                        custom={6}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="group cursor-pointer">
                        <div className="relative h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-pink-400/50 transition-all duration-500">
                                <div className="h-full min-h-[300px]">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="inline-flex p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg">
                                            <Users className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            Client Reviews
                                        </h3>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            {
                                                text: "Exceptional work quality and lightning-fast delivery. The attention to detail is remarkable.",
                                                author: "Sarah Johnson",
                                                role: "CEO, TechStart",
                                            },
                                            {
                                                text: "Professional, reliable, and incredibly talented. Highly recommended for any web project.",
                                                author: "Mike Chen",
                                                role: "Startup Founder",
                                            },
                                        ].map((review, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * index }}
                                                whileHover={{ scale: 1.02 }}
                                                className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-600/50 hover:border-pink-400/50 transition-all">
                                                <div className="flex items-center gap-1 mb-3">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="w-4 h-4 text-yellow-400 fill-current"
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-gray-100 text-sm mb-3 leading-relaxed">
                                                    "{review.text}"
                                                </p>
                                                <div className="text-pink-400 font-semibold text-sm">
                                                    {review.author}
                                                </div>
                                                <div className="text-gray-400 text-xs">
                                                    {review.role}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Card */}
                    <motion.div
                        custom={7}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="group cursor-pointer">
                        <div className="relative h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-violet-400/50 transition-all duration-500">
                                <div className="flex flex-col justify-center h-full text-center min-h-[300px]">
                                    <div className="mb-6">
                                        <div className="inline-flex p-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl mb-4">
                                            <Mail className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            Let's Connect
                                        </h3>
                                        <p className="text-gray-300 mb-6">
                                            Ready to bring your ideas to life? Let's discuss your
                                            next project.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-violet-500/25 flex items-center justify-center gap-2">
                                            <Heart className="w-5 h-5" />
                                            Get In Touch
                                        </motion.button>
                                        <motion.a
                                            href="mailto:prashantkr.msh@gmail.com"
                                            whileHover={{ scale: 1.05 }}
                                            className="block text-violet-400 hover:text-violet-300 transition-colors text-sm">
                                            prashantkr.msh@gmail.com
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InfoGrid;
