import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Configuration for "High Energy" density - Light Theme Adapted
        const particleCount = 60;
        const connectionDistance = 100;
        const particleColor = 'rgba(79, 70, 229, 0.2)'; // Indigo with low opacity
        const lineColor = 'rgba(79, 70, 229, 0.1)';

        const init = () => {
            resize();
            createParticles();
        };

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 1,
                    vy: (Math.random() - 0.5) * 1,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();

                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener('resize', () => {
            resize();
            createParticles();
        });

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="contact" className="relative w-full py-44 min-h-[60vh] flex flex-col justify-center overflow-hidden bg-indigo-50/40">
            {/* Local Particle Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="max-w-3xl mx-auto"
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="text-4xl md:text-5xl font-bold mb-8 font-heading tracking-tight leading-tight text-slate-900"
                    >
                        Let's build something <br /> <span className="text-accent">efficient</span> together.
                    </motion.h2>


                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-6"
                    >
                        {/* Email Button (Primary) */}
                        <motion.a
                            href="mailto:mdshehzaadkhan001@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: ["0px 10px 15px -3px rgba(79, 70, 229, 0.3)", "0px 10px 25px -3px rgba(79, 70, 229, 0.5)", "0px 10px 15px -3px rgba(79, 70, 229, 0.3)"]
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full text-lg font-bold shadow-lg hover:bg-accent-hover transition-all duration-300"
                        >
                            <Mail size={20} />
                            <span>Say Hello</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        {/* LinkedIn (Secondary) */}
                        <motion.a
                            href="https://www.linkedin.com/in/shehzaad-khan-b25619346"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full text-lg font-medium hover:border-accent hover:text-accent hover:shadow-md transition-all duration-300"
                        >
                            <Linkedin size={20} />
                            <span>LinkedIn</span>
                        </motion.a>

                        {/* GitHub (Secondary) */}
                        <motion.a
                            href="https://github.com/Shehzaad-khan"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full text-lg font-medium hover:border-accent hover:text-accent hover:shadow-md transition-all duration-300"
                        >
                            <Github size={20} />
                            <span>GitHub</span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
