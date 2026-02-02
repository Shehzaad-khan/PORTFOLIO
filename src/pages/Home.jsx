import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Technologies from '../components/Technologies';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <About />
            <Skills />
            <Technologies />
            <FeaturedProjects />
            <Experience />
            <Contact />
        </div>
    );
};

export default Home;
