import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary bg-opacity-90 shadow-lg backdrop-blur-sm py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-secondary font-mono">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link font-medium ${
                location.pathname === link.path ? 'text-secondary' : ''
              }`}
            >
              <span className="text-secondary font-mono mr-1">0{index + 1}.</span>
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <RiCloseLine /> : <RiMenu4Line />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-dark fixed top-20 left-0 right-0 p-4 shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link font-medium text-lg ${
                  location.pathname === link.path ? 'text-secondary' : ''
                }`}
              >
                <span className="text-secondary font-mono mr-1">0{index + 1}.</span>
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              className="btn btn-outline w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar; 