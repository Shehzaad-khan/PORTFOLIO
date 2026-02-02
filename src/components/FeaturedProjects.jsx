import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Brain, Network, Activity, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom Hangman Icon Component
const HangmanIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Gallows */}
        <path d="M10 95 L90 95" /> {/* Base */}
        <path d="M80 95 L80 5" />  {/* Pole */}
        <path d="M80 5 L40 5" />   {/* Top Bar */}
        <path d="M40 5 L40 20" />  {/* Rope */}
        <path d="M80 20 L65 5" />  {/* Support */}

        {/* Figure */}
        <circle cx="40" cy="30" r="10" /> {/* Head */}
        <path d="M40 40 L40 70" />  {/* Body */}
        <path d="M40 50 L25 65" />  {/* Left Arm */}
        <path d="M40 50 L55 65" />  {/* Right Arm */}
        <path d="M40 70 L30 85" />  {/* Left Leg */}
        <path d="M40 70 L50 85" />  {/* Right Leg */}

        {/* Dead Eyes (XX) */}
        <path d="M36 28 L38 30" strokeWidth="2" />
        <path d="M38 28 L36 30" strokeWidth="2" />
        <path d="M42 28 L44 30" strokeWidth="2" />
        <path d="M44 28 L42 30" strokeWidth="2" />
    </svg>
);

const FileServerIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Adjusted ViewBox and coordinates to prevent cropping */}
        <g transform="translate(10, 10)">
            {/* Cloud */}
            <path d="M75 35 C75 25 65 15 55 15 C45 15 38 20 36 28 C28 28 20 32 20 42 C20 52 28 58 38 58 L72 58 C82 58 90 50 90 40 C90 38 85 35 75 35 Z" strokeWidth="3" />

            {/* Folder inside Cloud */}
            <path d="M48 30 L62 30 L62 42 L48 42 Z" strokeWidth="2" />
            <path d="M48 30 L52 26 L60 26" strokeWidth="2" />

            {/* Distributed Arrows */}
            <path d="M40 65 L30 75" strokeDasharray="4 4" strokeWidth="2" />
            <path d="M55 65 L55 75" strokeDasharray="4 4" strokeWidth="2" />
            <path d="M70 65 L80 75" strokeDasharray="4 4" strokeWidth="2" />

            {/* Server Clusters */}
            <rect x="15" y="75" width="20" height="20" rx="2" strokeWidth="2" />
            <line x1="18" y1="80" x2="32" y2="80" strokeWidth="1" />
            <line x1="18" y1="85" x2="32" y2="85" strokeWidth="1" />
            <line x1="18" y1="90" x2="32" y2="90" strokeWidth="1" />

            <rect x="45" y="75" width="20" height="20" rx="2" strokeWidth="2" />
            <line x1="48" y1="80" x2="62" y2="80" strokeWidth="1" />
            <line x1="48" y1="85" x2="62" y2="85" strokeWidth="1" />
            <line x1="48" y1="90" x2="62" y2="90" strokeWidth="1" />

            <rect x="75" y="75" width="20" height="20" rx="2" strokeWidth="2" />
            <line x1="78" y1="80" x2="92" y2="80" strokeWidth="1" />
            <line x1="78" y1="85" x2="92" y2="85" strokeWidth="1" />
            <line x1="78" y1="90" x2="92" y2="90" strokeWidth="1" />
        </g>
    </svg>
);

const RobotIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Headphones */}
        <path d="M20 50 L20 40 C20 25 35 10 50 10 C65 10 80 25 80 40 L80 50" />
        <rect x="10" y="45" width="15" height="25" rx="5" />
        <rect x="75" y="45" width="15" height="25" rx="5" />

        {/* Robot Head */}
        <rect x="25" y="35" width="50" height="50" rx="10" />

        {/* Face */}
        <line x1="40" y1="55" x2="42" y2="55" strokeWidth="6" /> {/* Left Eye */}
        <line x1="58" y1="55" x2="60" y2="55" strokeWidth="6" /> {/* Right Eye */}
        <path d="M40 70 Q50 75 60 70" /> {/* Smile */}

        {/* Antenna */}
        <line x1="50" y1="35" x2="50" y2="20" />
        <circle cx="50" cy="15" r="5" />
    </svg>
);

const HouseIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* House Structure */}
        <path d="M10 50 L50 15 L90 50" /> {/* Roof */}
        <path d="M20 50 L20 90 L80 90 L80 50" /> {/* Body */}

        {/* Windows/Door */}
        <rect x="40" y="65" width="20" height="25" />
        <rect x="30" y="55" width="15" height="15" /> {/* Left Window */}
        <rect x="55" y="55" width="15" height="15" /> {/* Right Window */}

        {/* Chimney with Smoke (representing data analytics) */}
        <path d="M70 32 L70 20 L80 20 L80 41" />
    </svg>
);

const FinalHouseIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className} overflow-visible`}
    >
        {/* House Structure - Max Width for Infinite Scale */}
        <path d="M2 55 L50 20 L98 55" /> {/* Roof */}

        {/* Infinite Walls - Drawn way past viewbox */}
        <path d="M8 55 L8 300" /> {/* Left Wall */}
        <path d="M92 55 L92 300" /> {/* Right Wall */}

        {/* Infinite Door */}
        <path d="M42 300 L42 75 L58 75 L58 300" />

        {/* Windows - Keeping them effectively square/floating */}
        <rect x="20" y="65" width="12" height="12" /> {/* Left Window */}
        <rect x="68" y="65" width="12" height="12" /> {/* Right Window */}

        {/* Chimney */}
        <path d="M75 42 L75 25 L85 25 L85 49" />
    </svg>
);

const RefinedHouseIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* House Structure - Lowered roof and shortened body */}
        <path d="M10 55 L50 25 L90 55" /> {/* Roof */}
        <path d="M20 55 L20 90 L80 90 L80 55" /> {/* Body */}

        {/* Windows and Door - Spaced out */}
        <rect x="42" y="65" width="16" height="25" /> {/* Door */}
        <rect x="25" y="60" width="12" height="12" /> {/* Left Window */}
        <rect x="63" y="60" width="12" height="12" /> {/* Right Window */}

        {/* Chimney */}
        <path d="M70 40 L70 25 L80 25 L80 48" />
    </svg>
);

const ChartIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Axes */}
        <path d="M10 90 L90 90" /> {/* X Axis */}

        {/* Rising Bars (Financial Growth) */}
        <rect x="15" y="65" width="14" height="30" />
        <rect x="35" y="50" width="14" height="45" />
        <rect x="55" y="30" width="14" height="65" />
        <rect x="75" y="10" width="14" height="85" />


    </svg>
);

const MonitorIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Monitor Screen caused */}
        <rect x="10" y="20" width="80" height="50" rx="4" />

        {/* Inner Screen Area (Graph) */}
        <polyline points="20 50 35 55 50 40 65 50 80 30" />

        {/* Stand */}
        <path d="M50 70 L50 80" />
        <path d="M35 80 L65 80" /> {/* Base */}
    </svg>
);

const FeaturedProjects = () => {
    // Data with enhanced structure
    const projects = [
        {
            title: "HangmanMind",
            category: "Machine Learning · Reinforcement Learning",
            overview: "An intelligent Hangman AI that combines probabilistic modeling with reinforcement learning to make context-aware letter guesses instead of naive frequency-based approaches.",
            highlights: [
                "Hidden Markov Models capture position-wise letter probabilities",
                "Real-time word filtering dynamically narrows the search space",
                "Deep Q-Network (DQN) learns optimal guessing strategies under uncertainty",
                "Hybrid decision logic blends statistical models and learned policies"
            ],
            highlightsLabel: "How It Works:",
            results: "94.40% win rate on 2,000 unseen test words",
            tech: ["Python", "PyTorch", "NumPy", "Matplotlib"],
            link: "https://github.com/Shehzaad-khan/HangmanMind",
            color: "#4F46E5", // Indigo
            watermark: HangmanIcon,
            watermarkOffset: "-bottom-32"
        },
        {
            title: "MetricFlow",
            category: "Distributed Systems · Streaming Analytics · Big Data",
            overview: "A real-time monitoring system that streams server metrics using Apache Kafka and performs near real-time analytics and alerting with Apache Spark Streaming.",
            highlights: [
                "Metric producers → Kafka topics → consumers → Spark windowed analytics → alerts",
                "Designed for fault tolerance, scalability, and multi-node deployment."
            ],
            highlightsLabel: "Architecture:",
            tech: ["Python", "Apache Kafka", "Apache Spark (PySpark)", "Distributed Systems"],
            link: "https://github.com/Shehzaad-khan/kafka-spark-metrics-pipeline",
            color: "#f59e0b", // Amber
            watermark: MonitorIcon,
            watermarkOffset: "-bottom-20 -right-20"
        },
        {
            title: "MarketPulse",
            category: "Data Analytics · Time Series · Statistical Modeling",
            overview: "An end-to-end analysis of real stock market data that models trends, seasonality, volatility, and future prices using classical time-series techniques and stochastic models.",
            highlights: [
                "Seasonal decomposition and trend smoothing (SMA, EWMA)",
                "Stationarity testing and transformations (ADF, log differencing)",
                "SARIMA-based forecasting for Apple stock prices",
                "Markov chain modeling of stock price states and crash scenarios"
            ],
            highlightsLabel: "What It Covers:",
            tech: ["Python", "Pandas", "NumPy", "Statsmodels", "Matplotlib", "Seaborn"],
            link: "https://github.com/Shehzaad-khan/Data_Analytics_ProblemSolving/blob/main/Time_series_analytics.ipynb",
            color: "#f43f5e", // Rose
            watermark: ChartIcon,
            watermarkOffset: "-bottom-20 -right-14"
        },
        {
            title: "RentWise",
            category: "Data Analytics · Machine Learning",
            overview: "An end-to-end machine learning project that predicts Airbnb rental prices by analyzing listing attributes, host details, location factors, and review-based features using real-world Airbnb data.",
            highlights: [
                "Linear Regression",
                "Random Forest Regressor",
                "Support Vector Regression (SVR)",
                "Neural Networks",
                "K-Means Clustering (pattern discovery)"
            ],
            highlightsLabel: "Models Used:",
            tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
            link: "https://github.com/Shehzaad-khan/Predicting-Airbnb-Rental-Prices",
            color: "#10b981", // Emerald
            watermark: FinalHouseIcon,
            watermarkOffset: "-bottom-16 -right-16"
        }
    ];

    return (
        <section id="projects" className="section bg-slate-50 py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Featured Projects</h2>
                        <p className="text-slate-500 uppercase tracking-widest text-sm font-medium">Selected Work</p>
                    </motion.div>

                    <a href="https://github.com/Shehzaad-khan?tab=repositories" target="_blank" rel="noreferrer noopener" className="group flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors">
                        View All Projects
                        <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        damping: 25,
                                        stiffness: 100,
                                        delay: (index % 2) * 0.1 // Slight stagger for grid items
                                    }
                                }
                            }}
                            className="group relative bg-white rounded-2xl overflow-hidden h-[480px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out"
                        >
                            {/* Technical Dot Grid Background */}
                            <div
                                className="absolute inset-0 opacity-[0.4]"
                                style={{
                                    backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                                    backgroundSize: '20px 20px'
                                }}
                            />

                            {/* Decorative Accent Gradient */}
                            <div
                                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ '--accent-color': project.color }}
                            />

                            <div className="absolute inset-0 p-8 flex flex-col justify-start pt-32 transition-all duration-500 group-hover:justify-start group-hover:pt-8">
                                {/* Header Section (Target for animation) */}
                                <div className="space-y-4 z-10 relative">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-[2px] rounded-full transition-all duration-300 group-hover:w-12"
                                            style={{ backgroundColor: project.color }}
                                        />
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-slate-900 leading-tight group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Hidden Content Reveal */}
                                <div className="mt-3 space-y-3 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out relative z-10">
                                    {project.overview ? (
                                        // Layout for Structured Content (HDFS & HangmanMind)
                                        <div className="space-y-2">
                                            <div className="space-y-1">
                                                <span className="text-slate-400 font-serif italic text-xs">Overview:</span>
                                                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                                                    {project.overview}
                                                </p>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-slate-400 font-serif italic text-xs">
                                                    {project.highlightsLabel || "Highlights:"}
                                                </span>
                                                <ul className="text-slate-600 text-xs font-medium space-y-1 list-disc pl-4">
                                                    {project.highlights.map((highlight, hIndex) => (
                                                        <li key={hIndex}>{highlight}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {project.results && (
                                                Array.isArray(project.results) ? (
                                                    <div className="space-y-1">
                                                        <span className="text-slate-400 font-serif italic text-xs">Results:</span>
                                                        <ul className="text-slate-600 text-xs font-medium space-y-1 list-disc pl-4">
                                                            {project.results.map((result, rIndex) => (
                                                                <li key={rIndex}>{result}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-slate-400 font-serif italic text-xs flex-shrink-0">Results:</span>
                                                        <p className="text-slate-600 text-xs font-bold leading-relaxed line-clamp-1">
                                                            {project.results}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        // Original Layout (Problem/Solution)
                                        <div className="space-y-3">
                                            <div className="flex gap-2">
                                                <span className="text-slate-400 font-serif italic">Problem:</span>
                                                <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-slate-400 font-serif italic">Solution:</span>
                                                <p className="text-slate-600 text-sm leading-relaxed">{project.contribution}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-full border border-slate-200 transition-all duration-300 hover:border-slate-900 hover:text-slate-900 hover:bg-white hover:shadow-sm cursor-default"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    <div className="pt-2 flex items-center gap-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-full text-sm font-bold border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md"
                                        >
                                            <Github size={18} />
                                            <span>View Code</span>
                                            <ArrowUpRight
                                                size={16}
                                                className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                                            />
                                        </a>
                                    </div>
                                </div>

                                {/* Watermark Icon (Visual Feature - Enhanced) */}
                                <div
                                    className={`absolute ${project.watermarkOffset || "-bottom-12"} -right-12 opacity-[0.15] group-hover:opacity-[0.05] scale-110 group-hover:scale-100 transition-all duration-700 pointer-events-none`}
                                    style={{ color: project.color }}
                                >
                                    <project.watermark size={project.watermarkSize || 400} strokeWidth={1.5} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
