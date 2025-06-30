import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  hideSectionNumber = false,
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: 'easeOut' 
      } 
    }
  };

  return (
    <motion.section 
      id={id} 
      className={`section ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      {title && (
        <h2 className={`${hideSectionNumber ? 'text-3xl md:text-4xl font-bold text-light mb-10' : 'section-title'}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-tertiary mb-10 max-w-2xl">{subtitle}</p>
      )}
      {children}
    </motion.section>
  );
};

export default Section; 