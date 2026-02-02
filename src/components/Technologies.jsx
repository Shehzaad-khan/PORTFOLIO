import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiPython, SiC, SiCplusplus, SiOpenjdk, SiJavascript,
    SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiFastapi, SiDjango, SiFlask, SiJquery,
    SiScikitlearn, SiPytorch, SiTensorflow, SiNumpy, SiPandas, SiScipy,
    SiApachespark, SiApachekafka, SiApachehadoop, SiApachehive,
    SiMysql, SiPostgresql, SiSqlite, SiMongodb, SiApachecassandra, SiRedis, SiFirebase, SiSupabase,
    SiGit, SiGithub, SiGithubactions, SiNpm, SiLinux, SiTailwindcss, SiScala, SiApachehbase
} from 'react-icons/si';

import {
    Network, Cpu, Lock, ShieldCheck, Monitor, FileCode, Container, Globe, Terminal, Layers, Database,
    Settings, Workflow, ScrollText, ArrowLeftRight, Share2, Brain
} from 'lucide-react';

const Technologies = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const categories = [
        {
            title: "Languages",
            items: [
                { name: "C", icon: SiC, color: "#A8B9CC" },
                { name: "C++", icon: SiCplusplus, color: "#00599C" },
                { name: "Java", icon: SiOpenjdk, color: "#007396" },
                { name: "Scala", icon: SiScala, color: "#DC322F" },
                { name: "Python", icon: SiPython, color: "#3776AB" },
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                { name: "ARM Assembly", icon: Cpu, color: "#0091BD" },
            ]
        },
        {
            title: "Web & Backend",
            items: [
                { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
                { name: "CSS3", icon: SiCss3, color: "#1572B6" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "jQuery", icon: SiJquery, color: "#0769AD" },
                { name: "AJAX", icon: Network, color: "#2563eb" },
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
                { name: "Express", icon: SiExpress, color: "#000000" },
                { name: "Flask", icon: SiFlask, color: "#000000" },
                { name: "FastAPI", icon: SiFastapi, color: "#009688" },
                { name: "Django", icon: SiDjango, color: "#092E20" },
                { name: "Jinja", icon: FileCode, color: "#B41717" },
                { name: "Tkinter", icon: Monitor, color: "#3776AB" },
            ]
        },
        {
            title: "AI & Data Science",
            items: [
                { name: "NumPy", icon: SiNumpy, color: "#013243" },
                { name: "Pandas", icon: SiPandas, color: "#150458" },
                { name: "SciPy", icon: SiScipy, color: "#8CAAE6" },
                { name: "Matplotlib", icon: Globe, color: "#11557c" },
                { name: "Seaborn", icon: Globe, color: "#11557c" },
                { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
                { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
                { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
                { name: "Transformers", icon: Brain, color: "#8B5CF6" },
            ]
        },
        {
            title: "Big Data",
            items: [
                { name: "Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
                { name: "YARN", icon: Cpu, color: "#2C3E50" },
                { name: "Zookeeper", icon: Share2, color: "#FF6F00" },
                { name: "Sqoop", icon: ArrowLeftRight, color: "#FFD700" },
                { name: "Flume", icon: Database, color: "#198C19" },
                { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
                { name: "Hive", icon: SiApachehive, color: "#FDEE21" },
                { name: "Pig", icon: ScrollText, color: "#EB1F28" },
                { name: "Oozie", icon: Workflow, color: "#F5F5F5" },
                { name: "Ambari", icon: Settings, color: "#32CD32" },
                { name: "Spark", icon: SiApachespark, color: "#E25A1C" },
            ]
        },
        {
            title: "Databases",
            items: [
                { name: "SQLite", icon: SiSqlite, color: "#003B57" },
                { name: "MySQL", icon: SiMysql, color: "#4479A1" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "Redis", icon: SiRedis, color: "#DC382D" },
                { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
                { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
                { name: "Cassandra", icon: SiApachecassandra, color: "#1287B1" },
                { name: "HBase", icon: SiApachehbase, color: "#D22128" },
                { name: "Neo4j", icon: Database, color: "#008CC1" },
            ]
        },
        {
            title: "Systems & Platform Engineering",
            items: [
                { name: "Linux", icon: SiLinux, color: "#FCC624" },
                { name: "Windows", icon: Monitor, color: "#0078D6" },
                { name: "Networking", icon: Network, color: "#64748b" },
                { name: "Threading", icon: Cpu, color: "#64748b" },
                { name: "Concurrency", icon: Cpu, color: "#64748b" },
                { name: "Security", icon: ShieldCheck, color: "#64748b" },
                { name: "Auth & JWT", icon: Lock, color: "#64748b" },
                { name: "LEX", icon: FileCode, color: "#64748b" },
                { name: "YACC", icon: FileCode, color: "#64748b" },
                { name: "Git", icon: SiGit, color: "#F05032" },
                { name: "GitHub", icon: SiGithub, color: "#181717" },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="technologies" className="section bg-slate-50 py-24 relative z-20 overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Technologies</h2>
                    <p className="text-slate-500 uppercase tracking-widest text-sm font-medium">
                        My Technical Arsenal
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className="space-y-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                        >
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1 border-l-2 border-slate-300">
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {cat.items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="relative group"
                                        onMouseEnter={() => setHoveredSkill(item.name)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 3 }}
                                            className="p-3 bg-white rounded-xl border border-slate-200 text-slate-400 shadow-sm hover:border-accent hover:shadow-md transition-all duration-300 cursor-pointer"
                                            style={{ '--hover-color': item.color }}
                                        >
                                            <item.icon
                                                className="w-8 h-8 transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                                            />
                                        </motion.div>

                                        {/* Tooltip */}
                                        <AnimatePresence>
                                            {hoveredSkill === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 5, scale: 0.8 }}
                                                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs font-bold rounded shadow-xl whitespace-nowrap z-50 pointer-events-none"
                                                >
                                                    {item.name}
                                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
