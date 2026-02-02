import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-12"
                >
                    <Briefcase className="text-accent" />
                    <h2 className="text-3xl font-bold text-text-primary">Professional Experience</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Focused Impact Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                            <h3 className="text-2xl font-bold text-text-primary">Freelance Software Engineer</h3>
                            <span className="text-text-secondary text-sm font-medium mt-1 sm:mt-0 font-mono">
                                Nov 2024 – Present
                            </span>
                        </div>

                        {/* Sub-header */}
                        <div className="mb-8">
                            <span className="text-accent font-semibold tracking-wide">
                                Independent Project · Darshix AutoML
                            </span>
                        </div>

                        {/* Content */}
                        <motion.ul
                            className="space-y-4 mb-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            <motion.li
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className="flex items-start text-text-primary"
                            >
                                <span className="mr-3 text-accent mt-1.5 text-xs">●</span>
                                <span className="leading-relaxed">
                                    <strong>Architected and delivered</strong> a complete end-to-end authentication and user onboarding system for a production-grade machine learning platform.
                                </span>
                            </motion.li>
                            <motion.li
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className="flex items-start text-text-primary"
                            >
                                <span className="mr-3 text-accent mt-1.5 text-xs">●</span>
                                <span className="leading-relaxed">
                                    <strong>Implemented</strong> secure login and account lifecycle flows, including backend verification and protected access control.
                                </span>
                            </motion.li>
                            <motion.li
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className="flex items-start text-text-primary"
                            >
                                <span className="mr-3 text-accent mt-1.5 text-xs">●</span>
                                <span className="leading-relaxed">
                                    <strong>Designed</strong> seamless user data synchronization between frontend, backend services, and the database to ensure consistency and reliability.
                                </span>
                            </motion.li>
                            <motion.li
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className="flex items-start text-text-primary"
                            >
                                <span className="mr-3 text-accent mt-1.5 text-xs">●</span>
                                <span className="leading-relaxed">
                                    <strong>Focused</strong> on scalability, security, and UX, laying a robust foundation for future platform expansion.
                                </span>
                            </motion.li>
                        </motion.ul>

                        {/* Tech Stack */}
                        <div className="pt-6 border-t border-slate-100 flex items-center gap-4 flex-wrap">
                            <span className="text-sm font-medium text-text-secondary">Tools Used:</span>
                            <div className="flex gap-2 flex-wrap">
                                {['React', 'FastAPI', 'Firebase Authentication', 'MongoDB'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-indigo-50 text-accent text-xs font-semibold rounded-full border border-indigo-100"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
