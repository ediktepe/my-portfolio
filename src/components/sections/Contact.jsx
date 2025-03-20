import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com"

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""})
        }).catch(() => alert("Oops! Something went wrong. Please try again later."))
    }

    return (
        <RevealOnScroll>
            <section id="contact" className="min-h-screen flex items-center justify-center py-20">
                    <div className="px-4 md:w-xl w-full">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get in Touch</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name..."/>
                            </div>
                            <div className="relative">
                                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Email..."/>
                            </div>
                            <div className="relative">
                                <textarea id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} name="message" rows={5} required className="min-h-12.5 w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Message..."/>
                            </div>

                            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send Message</button>
                        </form>
                    </div>
            </section>
        </RevealOnScroll>
    )
}