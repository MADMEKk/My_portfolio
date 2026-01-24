import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaTiktok, FaTelegram, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const name = "Mekkaoui Mohammed Ala Eddine";

  const scrollToAbout = () => {
    // Smooth scroll to a section or just down a bit
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Letter animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <ParticleBackground variant="hero" />

      <div className="container mx-auto px-4 pt-5 pb-12 md:py-0 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-3/5 mb-12 md:mb-0">
          <motion.span
            className="text-accent font-medium tracking-widest uppercase text-sm mb-4 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Software Engineer
          </motion.span>

          <motion.div
            initial="hidden"
            animate="visible"
            className="mb-4 min-h-[4rem]"
          >
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">
              Mekkaoui <br />
              <span className="text-secondary opacity-80">Mohammed.</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-tertiary max-w-xl mt-6 text-lg leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            Constructing elegant digital experiences with precision and clarity.
            Specializing in full-stack architecture and machine learning solutions.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            <Link to="/projects" className="px-8 py-3 bg-white text-black font-medium hover:bg-neutral-200 transition-colors duration-300 rounded-sm">
              View Work
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-white/20 text-white font-medium hover:border-accent hover:text-accent transition-colors duration-300 rounded-sm">
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            <a href="https://github.com/AlaEddineMEKKAOUI" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alaeddine-mekkaoui/" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
              <FaLinkedinIn />
            </a>
            <a href="https://www.tiktok.com/@alaeddine5744" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
              <FaTiktok />
            </a>
            <a href="https://t.me/AlaEddineMek" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
              <FaTelegram />
            </a>
            <a href="mailto:aeddine360@gmail.com" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="md:w-2/5 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-secondary/50 shadow-[0_0_20px_rgba(45,212,191,0.3)] z-10 glass-card">
              <img
                src="/images/profile.png"
                alt="Mekkaoui Mohammed Ala Eddine"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            {/* Spinning orbital rings */}
            <motion.div
              className="absolute -inset-4 border border-secondary/30 rounded-full border-dashed"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-8 border border-secondary/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}

    </section>
  );
};

export default HeroSection; 
