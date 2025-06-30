import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCode, FaArrowDown, FaChevronDown } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const TimelineItem = ({ date, title, subtitle, description, icon, isLeft, delay, index }) => {
  const itemRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    if (isInView && contentRef.current) {
      gsap.fromTo(contentRef.current, 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        }, 
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8, 
          delay: delay + 0.3,
          ease: "power3.out"
        }
      );
    }
  }, [isInView, delay]);

  return (
    <div
      ref={itemRef}
      className={`flex items-start gap-6 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col mb-16 relative`}
    >
      {/* Date column */}
      <motion.div 
        className={`md:w-1/4 flex flex-col items-center ${isLeft ? 'md:items-start' : 'md:items-end'}`}
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay }}
      >
        <motion.div 
          className="text-secondary font-mono text-sm px-4 py-2 rounded-full bg-secondary bg-opacity-10 inline-block shadow-glow"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
          style={{ textShadow: '0 0 10px rgba(100, 255, 218, 0.5)' }}
        >
          {date}
        </motion.div>
      </motion.div>
      
      {/* Icon column */}
      <div className="relative flex-shrink-0 hidden md:block">
        <motion.div 
          className="w-14 h-14 rounded-full bg-dark border-2 border-secondary flex items-center justify-center z-10 relative shadow-glow"
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.1, type: "spring" }}
          style={{ boxShadow: '0 0 15px rgba(100, 255, 218, 0.5)' }}
        >
          {icon}
        </motion.div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-secondary opacity-30 z-0"></div>
      </div>
      
      {/* Content column */}
      <motion.div 
        ref={contentRef}
        className={`md:w-1/2 bg-dark bg-opacity-60 backdrop-blur-sm p-6 rounded-lg border-l-2 border-secondary relative ${isExpanded ? 'shadow-glow-lg' : 'shadow-glow-sm'}`}
        style={{ 
          boxShadow: isExpanded ? '0 0 25px rgba(100, 255, 218, 0.3)' : '0 0 15px rgba(100, 255, 218, 0.1)',
          transition: 'box-shadow 0.3s ease'
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        <div className="absolute -left-3 top-6 w-6 h-6 bg-dark border-2 border-secondary transform rotate-45 hidden md:block"></div>
        
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-light mb-1">{title}</h3>
            <h4 className="text-secondary mb-3 flex items-center">
              {subtitle}
              <span className="inline-block ml-3 md:hidden bg-secondary bg-opacity-20 p-1 rounded-full">
                {icon}
              </span>
            </h4>
          </div>
          <motion.button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-secondary hover:text-light transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </motion.button>
        </div>
        
        <AnimatePresence>
          {(isExpanded || !isMobile) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-tertiary">{description}</p>
              
              {/* Additional content that shows when expanded */}
              {isExpanded && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 pt-4 border-t border-secondary border-opacity-20"
                >
                  <div className="flex gap-2 flex-wrap">
                    {['React', 'Node.js', 'Python', 'Django'].map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-secondary bg-opacity-10 text-secondary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Mobile-only date indicator */}
        <div className="absolute -bottom-8 left-0 md:hidden">
          <span className="text-secondary font-mono text-xs px-2 py-1 rounded-full bg-secondary bg-opacity-10">
            {date}
          </span>
        </div>
        
        {/* Timeline index indicator */}
        <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-dark text-xs font-bold">
          {index + 1}
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Timeline data with categories
  const events = useMemo(() => [
    {
      date: "2020 - 2023",
      title: "Bachelor's Degree in Computer Science",
      subtitle: "University of Oran 1",
      description: "Studied computer science with focus on software engineering, algorithms, and data structures. Graduated with honors and completed a thesis on machine learning applications in healthcare.",
      icon: <FaGraduationCap className="text-secondary text-xl" />,
      category: "education"
    },
    {
      date: "2022",
      title: "National Olympiad - 2nd Place",
      subtitle: "Algerian Olympiad in Informatics",
      description: "Secured 2nd place in the national competition, showcasing problem-solving skills and algorithm optimization. Developed efficient solutions for complex computational problems under time constraints.",
      icon: <FaTrophy className="text-secondary text-xl" />,
      category: "achievement"
    },
    {
      date: "2022 - 2023",
      title: "Software Developer Intern",
      subtitle: "Tech Solutions Inc.",
      description: "Developed web applications using Django and React. Implemented RESTful APIs and integrated third-party services. Worked in an agile team environment and participated in daily stand-ups and sprint planning.",
      icon: <FaBriefcase className="text-secondary text-xl" />,
      category: "work"
    },
    {
      date: "2023",
      title: "Hackathon Winner - Oran",
      subtitle: "Infinite Loop Club",
      description: "Led a team to victory in a 48-hour hackathon, building an innovative solution for smart agriculture using IoT sensors. The project was later featured in a regional tech conference.",
      icon: <FaCode className="text-secondary text-xl" />,
      category: "achievement"
    },
    {
      date: "2023 - Present",
      title: "Full-Stack Developer",
      subtitle: "Freelance",
      description: "Working on various projects including web applications, mobile apps, and machine learning solutions for clients worldwide. Specializing in React, Node.js, and Python-based technologies.",
      icon: <FaBriefcase className="text-secondary text-xl" />,
      category: "work"
    }
  ], []);
  
  // Filter events based on active filter
  const filteredEvents = useMemo(() => 
    activeFilter === 'all' 
      ? events 
      : events.filter(event => event.category === activeFilter),
    [activeFilter, events]
  );
  
  // Animate the timeline line
  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;
    
    // Create the timeline animation with a try-catch to prevent errors
    try {
      gsap.fromTo(
        lineRef.current, 
        { height: '0%' }, 
        {
          height: '100%',
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 70%',
            toggleActions: 'play none none none'
          }
        }
      );
      
      // Add parallax effect to the section
      gsap.to(sectionRef.current, {
        backgroundPositionY: '30%',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    } catch (error) {
      console.error("GSAP animation error:", error);
    }
    
    return () => {
      // Safely clean up ScrollTrigger instances
      try {
        if (ScrollTrigger.getAll) {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      } catch (error) {
        console.error("Error cleaning up ScrollTrigger:", error);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      id="timeline" 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(10,25,47,0) 0%, rgba(10,25,47,0.8) 50%, rgba(10,25,47,0) 100%)',
        backgroundSize: '100% 200%',
        backgroundPosition: '0% 0%'
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-light mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="text-tertiary mt-6 max-w-2xl mx-auto">
            Explore the key milestones in my academic and professional journey,
            from education and competitions to work experience.
          </p>
          
          {/* Category filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['all', 'education', 'work', 'achievement'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-secondary text-dark' 
                    : 'bg-dark text-tertiary hover:text-secondary border border-tertiary border-opacity-30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-secondary bg-opacity-10 h-full rounded-full overflow-hidden">
            <div 
              ref={lineRef} 
              className="w-full bg-secondary h-0 opacity-70"
              style={{ boxShadow: '0 0 10px rgba(100, 255, 218, 0.7)' }}
            ></div>
          </div>
          
          {/* Timeline items */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, index) => (
                    <TimelineItem
                      key={index}
                      date={event.date}
                      title={event.title}
                      subtitle={event.subtitle}
                      description={event.description}
                      icon={event.icon}
                      isLeft={index % 2 === 0}
                      delay={index * 0.1}
                      index={index}
                    />
                  ))
                ) : (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-tertiary text-lg">No events found in this category.</p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Bottom arrow indicator */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-secondary opacity-70"
          >
            <FaArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 