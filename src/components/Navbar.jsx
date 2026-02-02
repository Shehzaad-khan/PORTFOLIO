import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Scroll Spy Logic
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Only run scroll spy on home page
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

      // Find the current section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is within the viewport middle area or it takes up most of screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'About Me', path: '/#about', id: 'about' },
    { name: 'Skills', path: '/#skills', id: 'skills' },
    { name: 'Experience', path: '/#experience', id: 'experience' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isOpen
        ? 'bg-transparent border-transparent py-6'
        : scrolled
          ? 'bg-[#CED2E5]/90 backdrop-blur-md border-slate-400/20 py-4 shadow-sm'
          : 'bg-[#CED2E5]/30 backdrop-blur-sm border-transparent py-6'
        }`}
    >
      <div className="w-full px-4 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-50 text-2xl md:text-3xl font-bold font-heading text-text-primary tracking-tight group"
          onClick={() => setIsOpen(false)}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shehzaad_khan
            <span className="text-accent inline-block transition-transform duration-300 group-hover:scale-125">.</span>
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link, i) => {
            // Simple active state based on scroll-spy since we are always on home now
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.path}
                className={`relative text-base font-medium transition-colors duration-300 group ${isActive ? 'text-accent' : 'text-text-secondary hover:text-accent'
                  }`}
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                </motion.span>

                {/* Hover Underline - matches active style but animates on hover */}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}

                {/* Active Indicator */}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full"
                  />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            className="px-6 py-2.5 text-base font-medium text-white bg-accent rounded-full shadow-lg shadow-accent/25 hover:bg-accent-hover transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 active:scale-95 transform inline-block"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden relative z-[60] p-2 text-text-primary hover:text-accent focus:outline-none bg-transparent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] right-4 md:right-12 min-w-[200px] bg-transparent lg:hidden flex flex-col items-end space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-bold font-heading transition-colors duration-300 text-right ${location.pathname === link.path
                  ? 'text-accent'
                  : 'text-text-primary hover:text-accent'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 w-full flex justify-end">
              <Link
                to="/#contact"
                className="px-6 py-2.5 text-lg font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
                onClick={() => setIsOpen(false)}
              >
                Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
