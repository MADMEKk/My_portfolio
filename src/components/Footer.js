import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTiktok, FaTelegram, FaWhatsapp, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const canvasRef = useRef(null);
  
  // Social links with actual URLs
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/AlaEddineMEKKAOUI', ariaLabel: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/alaeddine-mekkaoui/', ariaLabel: 'LinkedIn' },
    { icon: <FaTiktok />, url: 'https://www.tiktok.com/@alaeddine5744', ariaLabel: 'TikTok' },
    { icon: <FaTelegram />, url: 'https://t.me/AlaEddineMek', ariaLabel: 'Telegram' },
    // { icon: <FaWhatsapp />, url: 'https://wa.me/213', ariaLabel: 'WhatsApp' },
    { icon: <FaEnvelope />, url: 'mailto:aeddine360@gmail.com', ariaLabel: 'Email' },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Particle animation for footer background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const numParticles = 30;
    let animationFrameId;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 1 - 0.5,
        vy: Math.random() * 1 - 0.5,
        color: 'rgba(100, 255, 218, 0.3)'
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer className="bg-dark py-16 px-4 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Back to top button */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={scrollToTop}
            className="bg-secondary bg-opacity-20 hover:bg-opacity-30 text-secondary p-3 rounded-full transition-all duration-300"
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
              className="text-tertiary hover:text-secondary text-xl transition-colors duration-300"
              whileHover={{ y: -5, scale: 1.2 }}
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
          <Link to="/" className="text-tertiary hover:text-secondary transition-colors relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/projects" className="text-tertiary hover:text-secondary transition-colors relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="text-tertiary hover:text-secondary transition-colors relative group">
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
          <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 