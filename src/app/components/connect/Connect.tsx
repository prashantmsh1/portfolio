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
    Calendar,
    Coffee,
    Zap,
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
            color: "from-purple-500 to-pink-500",
            href: "mailto:prashantkr.msh@gmail.com",
        },
        {
            icon: Phone,
            label: "Call",
            value: "+91 9876543210",
            description: "Mon-Fri from 9am to 6pm",
            color: "from-cyan-500 to-blue-500",
            href: "tel:+919876543210",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Remote Worldwide",
            description: "Available globally",
            color: "from-green-500 to-emerald-500",
            href: "#",
        },
        {
            icon: Clock,
            label: "Response Time",
            value: "< 24 hours",
            description: "Quick turnaround guaranteed",
            color: "from-orange-500 to-red-500",
            href: "#",
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/prashant",
            label: "GitHub",
            color: "hover:text-gray-300",
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/prashant",
            label: "LinkedIn",
            color: "hover:text-blue-400",
        },
        {
            icon: Twitter,
            href: "https://twitter.com/prashant",
            label: "Twitter",
            color: "hover:text-cyan-400",
        },
        { icon: MessageCircle, href: "#", label: "Discord", color: "hover:text-purple-400" },
    ];

    return (
        <section
            id="connect"
            className="relative min-h-screen bg-[#050014] py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
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
                        <Coffee className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">
                            Let's Work Together
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            Start Your
                        </span>
                        <br />
                        <span className="text-white">Next Project</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to bring your ideas to life? Let's discuss your project and create
                        something amazing together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
                            <p className="text-gray-300 mb-8">
                                Have a project in mind? I'd love to discuss how we can work together
                                to create something exceptional.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.label}
                                    href={method.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="block group">
                                    <div className="relative">
                                        <div
                                            className={`absolute -inset-0.5 bg-gradient-to-r ${method.color} rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500`}></div>
                                        <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`p-3 rounded-lg bg-gradient-to-r ${method.color}`}>
                                                    <method.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-white font-semibold text-lg mb-1">
                                                        {method.label}
                                                    </h4>
                                                    <p className="text-gray-300 font-medium mb-1">
                                                        {method.value}
                                                    </p>
                                                    <p className="text-gray-400 text-sm">
                                                        {method.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400 rounded-xl transition-all duration-300 text-gray-400 ${social.color}`}>
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-8">
                                    <Zap className="w-8 h-8 text-purple-400" />
                                    <h3 className="text-3xl font-bold text-white">Send Message</h3>
                                </div>

                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-xl flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-green-300">
                                            Message sent successfully! I'll get back to you within
                                            24 hours.
                                        </span>
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Project Budget
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white transition-all">
                                                <option value="">Select budget range</option>
                                                <option value="5k-10k">$5,000 - $10,000</option>
                                                <option value="10k-25k">$10,000 - $25,000</option>
                                                <option value="25k-50k">$25,000 - $50,000</option>
                                                <option value="50k+">$50,000+</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Timeline
                                            </label>
                                            <select
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white transition-all">
                                                <option value="">Select timeline</option>
                                                <option value="1-2weeks">1-2 weeks</option>
                                                <option value="1month">1 month</option>
                                                <option value="2-3months">2-3 months</option>
                                                <option value="3months+">3+ months</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all"
                                            placeholder="Project Discussion"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Project Details *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all resize-none"
                                            placeholder="Tell me about your project, goals, and any specific requirements..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg">
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
