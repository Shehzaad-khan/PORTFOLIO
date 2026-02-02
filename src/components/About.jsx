import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const MindsetIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="5" r="2" />
        <circle cx="19" cy="16" r="2" />
        <circle cx="5" cy="16" r="2" />
        <path d="M12 9 L12 5" />
        <path d="M14.5 13.5 L19 16" />
        <path d="M9.5 13.5 L5 16" />
    </svg>
);

const FoundationIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="4" y="4" width="16" height="4" rx="1" />
        <rect x="4" y="10" width="16" height="4" rx="1" />
        <rect x="4" y="16" width="16" height="4" rx="1" />
    </svg>
);

const DirectionIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 19 C 5 19, 10 12, 12 12 S 19 5, 19 5" />
        <path d="M16 5 L19 5 L19 8" /> {/* Arrow head */}
        <circle cx="5" cy="19" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="5" r="2" />
    </svg>
);

const About = () => {
    const chapters = [
        {
            title: "Mindset",
            icon: <MindsetIcon size={32} />,
            content: "I am a Computer Science undergraduate who views coding as a way of thinking — breaking down real-world problems, reducing complexity, and reasoning through trade-offs."
        },
        {
            title: "Foundation",
            icon: <FoundationIcon size={32} />,
            content: "I began with system-level programming, including data structures, algorithms, and web development, which shaped my problem-solving mindset. My interest deepened with machine learning, where understanding decision-making under uncertainty changed how I approach problems."
        },
        {
            title: "Direction",
            icon: <DirectionIcon size={32} />,
            content: "This naturally led me to data analytics and big data, shifting my focus from individual models to end-to-end pipelines — from data engineering to ML systems. With a strong foundation across systems, data, and machine learning, I am now working toward a career as a Machine Learning Engineer focused on building practical, scalable solutions."
        }
    ];

    return (
        <section id="about" className="section bg-bg-light relative overflow-hidden py-24">
            {/* Background elements for visual interest */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-10 left-[10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-[10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-2 mb-4 text-accent">
                        <BookOpen size={24} />
                        <span className="uppercase tracking-widest text-sm font-semibold">My Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">About Me</h2>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent/20 to-transparent -translate-x-1/2 hidden md:block" />

                    <div className="space-y-24 relative">
                        {chapters.map((chapter, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                className="relative z-10"
                            >
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                                        className="w-16 h-16 mb-8 rounded-full bg-bg-light border-4 border-white shadow-lg flex items-center justify-center text-accent relative z-20 group-hover:scale-110 transition-transform duration-300"
                                    >
                                        {chapter.icon}
                                    </motion.div>

                                    <div className="relative w-full">
                                        {/* Blended Background behind text */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent blur-2xl -z-10 transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 font-serif text-center">
                                            {chapter.title}
                                        </h3>

                                        <div className="bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 md:mx-0">
                                            <p className="text-lg md:text-xl text-slate-800 leading-loose font-medium text-center font-serif">
                                                {chapter.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="w-px h-24 bg-gradient-to-b from-accent/20 to-transparent mx-auto mt-8 hidden md:block"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
