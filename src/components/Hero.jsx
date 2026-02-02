import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    // Placeholder image or use a nice gradient circle if no image yet.
    // Ideally, I'd ask the user for a photo, but I can use a placeholder for now.
    // Ideally, I'd ask the user for a photo, but I can use a placeholder for now.
    const profileImage = "/ProfilePic.jpeg";

    return (
        <section id="home" className="min-h-[85vh] flex items-center pt-10">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <div className="order-2 md:order-1 text-center">
                    <span
                        className="text-accent font-semibold tracking-wider text-lg uppercase my-4 block"
                    >
                        Computer Science Engineer
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight">
                        Mohammed <br />
                        <span className="text-text-secondary whitespace-nowrap">Shehzaad Khan</span>
                    </h1>
                    <p className="text-xl text-text-secondary mb-8 max-w-lg leading-relaxed mx-auto">
                        An adaptive engineer — improving with <span className="text-accent font-medium">experience</span>, <span className="text-accent font-medium">iteration</span>, and <span className="text-accent font-medium">real-world feedback</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#projects" className="btn btn-primary flex items-center justify-center gap-2 group">
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/Shehzaad's Resume 2.pdf" download className="btn btn-outline flex items-center justify-center gap-2 group">
                            Download Resume
                            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Abstract Background Element */}
                        <div className="absolute inset-0 bg-accent-light rounded-full blur-3xl animate-pulse"></div>

                        {/* Profile Image Container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-white">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
