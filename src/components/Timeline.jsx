import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCode, FaArrowDown } from 'react-icons/fa';

const TimelineItem = ({ date, title, subtitle, description, icon, isLeft, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.1, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`flex items-start gap-6 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col mb-16 relative w-full`}
    >
      {/* Date column */}
      <div className={`md:w-1/4 flex flex-col items-center ${isLeft ? 'md:items-start' : 'md:items-end'}`}>
        <div className="text-accent font-mono text-sm px-4 py-2 rounded-full bg-primary inline-block border border-accent/30">
          {date}
        </div>
      </div>

      {/* Icon column */}
      <div className="relative flex-shrink-0 hidden md:flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-dark border-2 border-secondary flex items-center justify-center z-10 relative shadow-[0_0_20px_rgba(45,212,191,0.4)] text-secondary text-xl bg-primary">
          {icon}
        </div>
      </div>

      {/* Content column */}
      <motion.div
        whileHover={{ scale: 1.02, backgroundColor: "rgba(45, 212, 191, 0.05)" }}
        className={`md:w-1/2 glass-card p-8 border-l-4 border-secondary relative hover:border-secondary/80 transition-colors`}
      >
        <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
          <div>
            <h3 className="text-xl font-bold text-light mb-1">{title}</h3>
            <h4 className="text-secondary mb-3 flex items-center font-medium">
              {subtitle}
            </h4>
          </div>
          <div className="md:hidden text-2xl text-secondary mb-2">
            {icon}
          </div>
        </div>

        <p className="text-tertiary leading-relaxed text-sm md:text-base">{description}</p>

        {/* Mobile date fallback */}
        <div className="mt-4 md:hidden">
          <span className="text-secondary font-mono text-xs opacity-70">{date}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Timeline data with categories
  const events = useMemo(() => [
    {
      date: "2023 - 2025",
      title: "Master's Degree in Computer Science",
      subtitle: "University of Oran 1 Ahmed Ben Bella",
      description: "Specializing in AI and advanced system architecture.",
      icon: <FaGraduationCap className="text-secondary text-xl" />,
      category: "education"
    },
    {
      date: "2020 - 2023",
      title: "Bachelor's Degree in Computer Science",
      subtitle: "University of Oran 1 Ahmed Ben Bella",
      description: "Graduated with honors. Focus: SE and ML.",
      icon: <FaGraduationCap className="text-secondary text-xl" />,
      category: "education"
    },
    {
      date: "2022",
      title: "National Olympiad - 2nd Place",
      subtitle: "Algerian Olympiad in Informatics",
      description: "2nd nationally after winning 1st regionally.",
      icon: <FaTrophy className="text-secondary text-xl" />,
      category: "achievement"
    },
    {
      date: "2022 - 2023",
      title: "Software Developer Intern",
      subtitle: "Tech Solutions Inc.",
      description: "Django + React development in an agile team.",
      icon: <FaBriefcase className="text-secondary text-xl" />,
      category: "work"
    },
    {
      date: "2023",
      title: "Hackathon Winner - Oran",
      subtitle: "Infinite Loop Club",
      description: "Led team to victory with IoT smart agriculture solution.",
      icon: <FaCode className="text-secondary text-xl" />,
      category: "achievement"
    },
    {
      date: "2023 - Present",
      title: "Full-Stack Developer",
      subtitle: "Freelance",
      description: "Building web/mobile apps and ML solutions for clients.",
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
  const shouldUseAlternateLayout = (index) => index % 2 === 0;

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
          <div className="w-24 h-1 bg-accent mx-auto"></div>
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
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
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-secondary/10 h-full rounded-full overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-secondary to-transparent"
              style={{ boxShadow: '0 0 15px rgba(45, 212, 191, 0.5)' }}
            ></motion.div>
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
