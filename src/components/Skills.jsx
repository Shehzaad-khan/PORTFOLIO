import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(0);

    const skillSet = [
        {
            title: "Data Structures & Algorithms",
            desc: "Using structured approaches to solve problems efficiently, correctly, and at scale."
        },
        {
            title: "System-Level Thinking",
            desc: "Designing solutions by reasoning about components, interactions, data flow, and failure cases."
        },
        {
            title: "Trade-off & Complexity Reasoning",
            desc: "Making informed decisions by balancing performance, accuracy, scalability, and maintainability."
        },
        {
            title: "Databases & Data Systems",
            desc: "Experience working with relational (SQL), NoSQL, and distributed databases, with a focus on data modeling, querying, and scalability."
        },
        {
            title: "Data Analytics Thinking",
            desc: "Interpreting data to extract patterns, insights, and meaningful signals for decision-making."
        },
        {
            title: "Machine Learning Fundamentals",
            desc: "Understanding how models learn, generalize, and behave under real-world constraints and noisy data."
        },
        {
            title: "Version Control & Development Workflow",
            desc: "Well-versed in collaborative development workflows, including branching strategies, code reviews, and iterative development."
        },
        {
            title: "Collaboration & Communication",
            desc: "Working effectively as both an individual contributor and a team member, clearly communicating ideas, decisions, and trade-offs."
        }
    ];

    return (
        <section id="skills" className="section bg-bg-light py-24 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Skills</h2>
                    <p className="text-slate-500 uppercase tracking-widest text-sm font-medium">
                        How I approach and solve engineering problems
                    </p>
                </motion.div>

                {/* Skill Cloud */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {skillSet.map((skill, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActiveSkill(index)}
                            onMouseEnter={() => setActiveSkill(index)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${activeSkill === index
                                ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-accent hover:text-accent'
                                }`}
                        >
                            {skill.title}
                        </motion.button>
                    ))}
                </div>

                {/* Dynamic Description Area */}
                <div className="min-h-[120px] md:min-h-[100px] flex items-center justify-center relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSkill}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-center max-w-2xl px-6"
                        >
                            <p className="text-xl md:text-2xl font-serif text-slate-800 leading-relaxed font-medium">
                                "{skillSet[activeSkill].desc}"
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;
