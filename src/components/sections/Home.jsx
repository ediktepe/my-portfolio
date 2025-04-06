export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent select-none leading-right">Hi, I'm <span className="text-nowrap">Esad Diktepe</span></h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a fullstack developer who build modern, scalable web applications using technologies like PHP, Laravel, React, Node.js, and JavaScript. From backend logic to responsive frontends, I enjoy crafting complete solutions that are fast, functional, and user-friendly.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,139,246,0.4)]">View Projects</a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,139,246,0.4)] hover:bg-blue-500/10">Contact Me</a>
                </div>
            </div>
        </section>
    )
}