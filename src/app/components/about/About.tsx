import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Zap, Target, Rocket, Users, Award, Coffee } from "lucide-react";

const About = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen bg-[#050014] py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
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
                        <span className="text-purple-300 text-sm font-medium">
                            Meet the Developer
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            Crafting Digital
                        </span>
                        <br />
                        <span className="text-white">Experiences</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        I'm Prashant, a passionate full-stack developer who turns complex problems
                        into elegant digital solutions that users love.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                            <Code2 className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            Prashant Kumar
                                        </h3>
                                        <p className="text-purple-400 font-medium">
                                            Full Stack Developer
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <p className="text-gray-300 leading-relaxed">
                                        With 5+ years of experience in the tech industry, I
                                        specialize in creating scalable web applications using
                                        cutting-edge technologies like React, Node.js, and modern
                                        cloud platforms.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        My passion lies in solving complex problems with clean,
                                        efficient code and creating user experiences that are both
                                        beautiful and functional.
                                    </p>
                                </div>

                                {/* Skills Tags */}
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
                                            className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 grid grid-cols-2 gap-4">
                        {[
                            {
                                icon: Zap,
                                label: "Years Experience",
                                value: "5+",
                                color: "from-yellow-500 to-orange-500",
                            },
                            {
                                icon: Rocket,
                                label: "Projects Completed",
                                value: "50+",
                                color: "from-purple-500 to-pink-500",
                            },
                            {
                                icon: Users,
                                label: "Happy Clients",
                                value: "30+",
                                color: "from-cyan-500 to-blue-500",
                            },
                            {
                                icon: Award,
                                label: "Success Rate",
                                value: "98%",
                                color: "from-green-500 to-emerald-500",
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group">
                                <div className="relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-75 transition duration-500 rounded-xl blur"></div>
                                    <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                                        <div
                                            className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
                                            <stat.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-400 text-sm font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Target,
                            title: "Goal-Oriented",
                            description:
                                "Every line of code serves a purpose, driving measurable results and user satisfaction.",
                            gradient: "from-purple-600/20 to-pink-600/20",
                            border: "border-purple-500/20",
                        },
                        {
                            icon: Sparkles,
                            title: "Innovation First",
                            description:
                                "Constantly exploring emerging technologies to deliver cutting-edge solutions.",
                            gradient: "from-cyan-600/20 to-blue-600/20",
                            border: "border-cyan-500/20",
                        },
                        {
                            icon: Coffee,
                            title: "Always Learning",
                            description:
                                "Committed to continuous growth and staying ahead of industry trends.",
                            gradient: "from-amber-600/20 to-orange-600/20",
                            border: "border-amber-500/20",
                        },
                    ].map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group">
                            <div
                                className={`bg-gradient-to-br ${value.gradient} border ${value.border} rounded-xl p-6 h-full hover:scale-105 transition-all duration-300`}>
                                <value.icon className="w-8 h-8 text-white mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
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
