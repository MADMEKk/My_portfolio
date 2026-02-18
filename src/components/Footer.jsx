import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTiktok, FaTelegram, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const Footer = () => {
  // Social links with actual URLs
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/MADMEKk', ariaLabel: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/ala-eddine-946536275/', ariaLabel: 'LinkedIn' },
    { icon: <FaTiktok />, url: 'https://www.tiktok.com/@alaeddine5744', ariaLabel: 'TikTok' },
    { icon: <FaTelegram />, url: 'https://t.me/AlaEddineMek', ariaLabel: 'Telegram' },
    { icon: <FaEnvelope />, url: 'mailto:aeddine360@gmail.com', ariaLabel: 'Email' },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark py-16 px-4 relative overflow-hidden">
      <ParticleBackground variant="footer" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Back to top button */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={scrollToTop}
            className="bg-accent/20 hover:bg-opacity-30 text-secondary p-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaChevronUp />
          </motion.button>
        </div>

        {/* Logo and tagline */}
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl font-bold text-light mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ala Eddine
          </motion.h2>
          <motion.p
            className="text-tertiary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full-Stack Developer & ML Enthusiast
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="text-tertiary hover:text-secondary text-xl transition-colors duration-300 transform hover:scale-110"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/" className="text-tertiary hover:text-secondary transition-colors relative group font-mono text-sm">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/projects" className="text-tertiary hover:text-secondary transition-colors relative group font-mono text-sm">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="text-tertiary hover:text-secondary transition-colors relative group font-mono text-sm">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-tertiary">aeddine360@gmail.com </p>
          <p className="text-tertiary mt-2">Oran, Algeria</p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-tertiary text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>Designed & Built with ❤️ by Ala Eddine Mekkaoui</p>
          <p className="mt-2 text-xs opacity-60">© {new Date().getFullYear()} All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
