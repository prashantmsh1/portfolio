import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MonitorSmartphone } from "lucide-react";
import StarsBackground from "./StarsBackground";

const hero = () => {
    return (
        <section>
            <div className="min h-[900px] bg-[var(--space_cadet-100)] text-[var(--isabelline-900)] relative overflow-hidden ">
                <div className="absolute inset-0 z-0">
                    <StarsBackground />
                </div>
                {/* Hero Content */}
                <main className="relative z-10 px-6 pt-20 pb-32 w-full mx-auto mt-[100px]">
                    {/* New badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-8">
                        <a
                            href="#projects"
                            className="bg-[var(--space_cadet-500)]/30 text-[var(--space_cadet-900)] px-4 py-1 rounded-full flex items-center gap-2 hover:bg-[var(--space_cadet-500)]/50 transition-colors backdrop-blur-sm border border-[var(--space_cadet-600)]/30">
                            <span className="bg-[var(--ultra_violet-600)] text-[var(--isabelline-900)] text-xs px-2 py-0.5 rounded-full">
                                New
                            </span>
                            Latest Projects
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                    {/* Main heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            I help founders turn ideas
                            <br />
                            into seamless{" "}
                            <span className="italic bg-gradient-to-r from-[var(--ultra_violet-700)] via-[var(--rose_quartz-500)] to-[var(--pale_dogwood-500)] bg-clip-text text-transparent">
                                digital experiences
                            </span>
                        </h1>
                    </motion.div>
                    {/* Profile section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center gap-8 mb-12">
                        <div className="flex items-center gap-4 text-lg font-medium text-[var(--isabelline-800)]">
                            <span>Hello, I'm Prashant</span>
                            <div className="flex -space-x-2">
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full border-2 border-[var(--space_cadet-300)]"
                                />
                                <MonitorSmartphone className="w-8 h-8 p-1 rounded-full bg-gradient-to-br from-[var(--ultra_violet-600)] to-[var(--rose_quartz-600)] text-white" />
                            </div>
                            <span>a Full Stack Developer</span>
                        </div>

                        <div className="relative flex flex-col sm:flex-row items-center gap-4 ">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-20 hover:bg-[var(--isabelline-900)] hover:text-[var(--space_cadet-100)] px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 bg-[var(--isabelline-900)]/10 backdrop-blur-sm border border-[var(--isabelline-900)]/10">
                                Let's Connect
                                <div className=" rounded-full bg-[var(--isabelline-900)] text-[var(--space_cadet-100)] p-1">
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </motion.button>

                            <motion.a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=prashantkr.msh@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="relative z-20 flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--isabelline-900)]/5 backdrop-blur-sm hover:bg-[var(--isabelline-900)]/10 transition-colors border border-[var(--isabelline-900)]/10">
                                <Mail fontWeight={600} className="w-4 h-4 font-bold text-xs" />
                                <span>prashantkr.msh@gmail.com</span>
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div className="animate-scaleIn transition-all duration-300 pointer-events-none relative z-10 mx-auto -mt-18 h-96 w-screen max-w-(--breakpoint-2xl) overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--ultra_violet-600),transparent_80%)] before:opacity-60">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                            }}
                            className="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%] rounded-[100%] border-t-4 transition-all border-t-[var(--isabelline-900)] bg-[var(--space_cadet-100)] shadow-[inset_0_2px_20px_var(--isabelline-900),0_-10px_50px_1px_rgba(252,250,249,0.2)]"></motion.div>
                    </motion.div>
                </main>
            </div>
        </section>
    );
};

export default hero;
