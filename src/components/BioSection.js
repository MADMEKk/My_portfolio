import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCode, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';

const BioSection = () => {
  const canvasRef = useRef(null);
  
  // Neural network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const connections = [];
    const numParticles = 50;
    const connectionDistance = 100;
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
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        color: 'rgba(100, 255, 218, 0.5)'
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
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
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(100, 255, 218, ${1 - distance / connectionDistance})`;
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
    <section id="bio" className="py-20 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-light mb-4">Personal Information</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card bg-dark bg-opacity-80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
                <span className="w-2 h-6 bg-secondary mr-3"></span>
                Personal Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <FaBirthdayCake className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Birth Date</h4>
                    <p className="text-light">August 17, 2000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Birth Place</h4>
                    <p className="text-light">Mechria, Algeria</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card bg-dark bg-opacity-80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
                <span className="w-2 h-6 bg-secondary mr-3"></span>
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <FaGraduationCap className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Bachelor's Degree in Computer Science</h4>
                    <p className="text-light">University of Oran 1</p>
                    <p className="text-tertiary text-sm">2020 - 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="card bg-dark bg-opacity-80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
                <span className="w-2 h-6 bg-secondary mr-3"></span>
                Certifications
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <FaCertificate className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Fondamental of deep learning</h4>
                    <p className="text-light">NVIDIA - University of Oran 1</p>
                    <p className="text-tertiary text-sm">2023</p>
                  </div>
                </div>
                
                
              </div>
            </div>
            
            <div className="card bg-dark bg-opacity-80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
                <span className="w-2 h-6 bg-secondary mr-3"></span>
                Skills Overview
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <FaCode className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Programming Languages</h4>
                    <p className="text-light">Python, JavaScript, C++, Java, Dart</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <FaCode className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Frameworks & Tools</h4>
                    <p className="text-light">Django, React, Flutter, TensorFlow, PyTorch</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection; 