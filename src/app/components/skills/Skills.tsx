import { getTechIcon } from "../../utils/tech-icons";

const skills = [
    { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
    { category: "Backend", techs: ["Node.js", "Express", "Python", "Go", "PostgreSQL"] },
    { category: "Tools & DevOps", techs: ["Docker", "AWS", "Git", "Figma", "Linux"] },
];

const Skills = () => {
    return (
        <section id="skills" className="relative z-10 bg-brand-black py-32 text-white">
            <div className="container-width">
                <div className="mb-20 text-center">
                    <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                        Expertise
                    </span>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Tools of the <span className="text-gray-600">Trade</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {skills.map((group) => (
                        <div key={group.category} className="flex flex-col gap-6">
                            <h3 className="text-xl font-semibold text-gray-400 border-b border-white/10 pb-4">
                                {group.category}
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {group.techs.map((tech) => {
                                    const { icon, color } = getTechIcon(tech);
                                    return (
                                        <div
                                            key={tech}
                                            className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:border-white/10 hover:bg-white/10">
                                            <span
                                                className={`text-2xl transition-transform group-hover:scale-110 ${color}`}>
                                                {icon}
                                            </span>
                                            <span className="font-medium text-gray-300 group-hover:text-white">
                                                {tech}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
