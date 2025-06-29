import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MonitorSmartphone } from "lucide-react";
import StarsBackground from "./StarsBackground";
import { section } from "framer-motion/client";

type Props = {};

const hero = (props: Props) => {
    return (
        <section>
            <div className="min h-[900px] bg-[#050014] text-white relative overflow-hidden ">
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
                            href="#ventures"
                            className="bg-blue-500/10 text-blue-300 px-4 py-1 rounded-full flex items-center gap-2 hover:bg-blue-500/20 transition-colors backdrop-blur-sm">
                            <span className="bg-blue-500/30 text-xs px-2 py-0.5 rounded-full">
                                New
                            </span>
                            Next Ventures is live!
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                    {/* Main heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            I help founders turn ideas
                            <br />
                            into seamless{" "}
                            <span className="italic bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent">
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
                        <div className="flex items-center gap-4 text-lg font-bold">
                            <span>Hello, I'm Prashant</span>
                            <div className="flex -space-x-2">
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full border-2 border-white/10"
                                />
                                <MonitorSmartphone className="w-8 h-8 p-1 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                            </div>
                            <span>a Full Stack Developer</span>
                        </div>

                        <div className="relative flex flex-col sm:flex-row items-center gap-4 ">
                            {/* First crescent gradient layer */}
                            {/* <div className="absolute top-[-150%] left-[-20%] w-[140%] h-[400%] bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-transparent blur-3xl rounded-l-[100%] transform -rotate-12" /> */}

                            {/* Second crescent gradient layer for more intensity */}
                            {/* <div className="absolute top-[-120%] left-[-15%] w-[130%] h-[350%] bg-gradient-to-r from-fuchsia-500/40 via-purple-500/30 to-transparent blur-2xl rounded-l-[100%] transform -rotate-12" /> */}

                            {/* Third crescent gradient layer for core brightness */}
                            {/* <div className="absolute top-[-100%] left-[-10%] w-[120%] h-[300%] bg-gradient-to-r from-pink-500/50 to-transparent blur-xl rounded-l-[100%] transform -rotate-12" /> */}

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-20 hover:bg-gray-50 hover:text-gray-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 bg-white/5 backdrop-blur-sm">
                                Let's Connect
                                <div className=" rounded-full bg-gray-50">
                                    <ArrowRight
                                        color="black"
                                        className="rounded-full p- hover:text-gray-50 "
                                    />
                                </div>
                            </motion.button>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative z-20 flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Mail fontWeight={600} className="w-4 h-4 font-bold text-xs" />
                                <span>prashantkr.msh@gmail.com</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div className="animate-scaleIn transition-all duration-300 pointer-events-none relative z-10 mx-auto -mt-18 h-96 w-screen max-w-(--breakpoint-2xl) overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_80%)] before:opacity-60">
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
                            className="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%] rounded-[100%] border-t-4 transition-all  border-t-[#ffffff] bg-[#0a0a0a] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff6e]"></motion.div>
                    </motion.div>
                </main>
            </div>
        </section>
    );
};

export default hero;
