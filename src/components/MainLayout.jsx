import Navbar from './Navbar';
import ParticleBackground from './ParticleBackground';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-bg-light text-text-primary font-sans selection:bg-accent/30 relative">
            <ParticleBackground />
            <Navbar />
            <main className="flex-grow pt-20 relative z-10">
                {children}
            </main>
            <footer className="py-8 bg-indigo-50/40 backdrop-blur-sm relative z-10">
                <div className="container mx-auto px-6 text-center text-text-secondary text-sm">
                    <p>&copy; {new Date().getFullYear()} Mohammed Shehzaad Khan. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
