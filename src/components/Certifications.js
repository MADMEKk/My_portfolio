import React from 'react';
import { motion } from 'framer-motion';
import certifications from '../data/certifications';
import { FaExternalLinkAlt } from 'react-icons/fa';

const CertificationCard = ({ cert }) => {
  return (
    <motion.div 
      className="bg-dark bg-opacity-60 rounded-lg overflow-hidden border border-secondary border-opacity-20 hover:border-opacity-50 transition-all duration-300"
      whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(100, 255, 218, 0.2)' }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={cert.image} 
          alt={`${cert.title} certificate`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-light">{cert.title}</h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-secondary">{cert.issuer}</p>
          <p className="text-tertiary text-sm">{cert.date}</p>
        </div>
        <p className="text-tertiary text-sm mb-3">{cert.description}</p>
        {cert.url && (
          <a 
            href={cert.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary inline-flex items-center hover:text-light transition-colors duration-300"
          >
            Verify <FaExternalLinkAlt className="ml-1 text-xs" />
          </a>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {cert.skills.map((skill, i) => (
            <span 
              key={i}
              className="px-2 py-1 bg-secondary bg-opacity-10 text-secondary text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-light mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="text-tertiary mt-6 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise in various technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificationCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 