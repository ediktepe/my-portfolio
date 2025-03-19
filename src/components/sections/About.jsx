import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const frontendSkills = [
        "React",
        "TailwindCSS",
        "JavaScript",
        "JQuery"
    ]
    const backendSkills = [
        "PHP",
        "Laravel",
        "MySQL"
    ]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web
                        applications and creating innovative solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong className="text-blue-400">Computer and Information Security</strong><span className="font-light"> - Toros University (2020-2022)</span>
                            </li>
                            <li>
                                <strong className="text-blue-400">Computer Science</strong><span className="font-light"> - AGH University (2021-2022) (Exchange Program)</span>
                            </li>
                            <li>
                                <strong className="text-blue-400">Computer Science in Health Systems</strong><span className="font-light"> - Başkent University (2022-2024)</span>
                            </li>
                            <li>
                                <strong className="text-blue-400">Logistics and Transport</strong><span className="font-light"> - WSB University (2025-Present)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div>
                            <div className="mb-4">
                                <h4 className="font-semibold text-blue-400">Frontend Developer at Enoca</h4>
                                <p className="text-sm text-blue-500 w-fit">(01/2024 - 08/2024)</p>
                                <p className="font-light">Developed and maintained a self-care company's web page</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-semibold text-blue-400">Telecommunications Technician at Başkent Hospital</h4>
                                <p className="text-sm text-blue-500 w-fit">(08/2024 - 02/2025)</p>
                                <p className="font-light">Maintained and repaired landline phones, phone networks and phone servers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}