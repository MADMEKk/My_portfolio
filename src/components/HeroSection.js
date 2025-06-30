import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaTiktok, FaTelegram, FaWhatsapp, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  const nameRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Animated text effect for name
  useEffect(() => {
    const nameElement = nameRef.current;
    if (nameElement) {
      const text = "Mekkaoui Mohammed Ala Eddine";
      nameElement.innerHTML = '';
      
      [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.display = 'inline-block';
        span.style.transition = 'all 0.5s ease';
        span.style.transitionDelay = `${index * 0.05}s`;
        
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        }, 100);
        
        nameElement.appendChild(span);
      });
    }
  }, []);
  
  // Particle animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const numParticles = 100;
    const mouse = { x: null, y: null, radius: 150 };
    let animationFrameId;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Mouse move event
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        density: (Math.random() * 30) + 1,
        color: 'rgba(100, 255, 218, 0.5)'
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Initial position
        let dx = mouse.x - particle.x;
        let dy = mouse.y - particle.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        // Max distance, past that the force will be 0
        const maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        
        // If we're too far away, no force is applied
        if (force < 0) force = 0;
        
        // Movement based on mouse position
        let directionX = (forceDirectionX * force * particle.density);
        let directionY = (forceDirectionY * force * particle.density);
        
        if (distance < mouse.radius) {
          particle.x -= directionX;
          particle.y -= directionY;
        } else {
          // Return to original position
          if (particle.x !== particle.baseX) {
            let dx = particle.x - particle.baseX;
            particle.x -= dx / 10;
          }
          if (particle.y !== particle.baseY) {
            let dy = particle.y - particle.baseY;
            particle.y -= dy / 10;
          }
        }
        
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
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.2 * (1 - distance / 120)})`;
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
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      
      <div className="container mx-auto px-4 pt-24 pb-12 md:py-0 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-3/5 mb-12 md:mb-0">
          <motion.span 
            className="text-secondary font-mono mb-4 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, my name is
          </motion.span>
          
          <h1 ref={nameRef} className="text-5xl md:text-7xl font-bold text-light mb-2 min-h-[4rem]"></h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-tertiary mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Full-Stack Developer & ML Enthusiast
          </motion.h2>
          
          <motion.p 
            className="text-tertiary max-w-2xl mt-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            I'm a passionate full-stack developer specializing in Django, React, and ML/AI solutions. 
            Born on August 17, 2000 in Mechria, Algeria. Graduate from University of Oran 1 with a 
            Bachelor's in Computer Science (2023).
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            <Link to="/projects" className="btn btn-outline group relative overflow-hidden">
              <span className="absolute inset-0 bg-secondary opacity-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10">View My Projects</span>
            </Link>
            <Link to="/contact" className="btn btn-primary relative overflow-hidden group">
              <span className="absolute inset-0 bg-white opacity-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            <a href="https://github.com/AlaEddineMEKKAOUI" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alaeddine-mekkaoui/" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1">
              <FaLinkedinIn />
            </a>
            <a href="https://www.tiktok.com/@alaeddine5744" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1">
              <FaTiktok />
            </a>
            <a href="https://t.me/AlaEddineMek" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1">
              <FaTelegram />
            </a>
            <a href="https://wa.me/213668629989" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1">
              <FaWhatsapp />
            </a>
            <a href="mailto:aeddine360@gmail.com" className="text-tertiary hover:text-secondary text-2xl transition-all duration-300 hover:-translate-y-1">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="md:w-2/5 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-secondary shadow-xl transform rotate-3">
              <img 
                src="/images/profile.jpg" 
                alt="Mekkaoui Mohammed Ala Eddine - Full-Stack Developer & ML Enthusiast" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-20"></div>
            </div>
            <motion.div 
              className="absolute -inset-2 border-2 border-secondary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.5 }}
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center">
          <span className="text-tertiary text-sm mb-2 font-mono">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaChevronDown className="text-secondary text-xl" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 