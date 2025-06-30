import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

// Components
import Section from '../components/Section';

// Data
import { projects } from '../data/projects';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('');

  // Get all unique technologies from projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))].sort();

  // Filter projects based on search query and selected technology
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTech = selectedTech === '' || project.technologies.includes(selectedTech);
    
    return matchesSearch && matchesTech;
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTechChange = (e) => {
    setSelectedTech(e.target.value);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 pb-16">
      <Section 
        title="Projects" 
        subtitle="A collection of projects I've worked on. Each project showcases different skills and technologies."
        hideSectionNumber
      >
        {/* Filters
        <div className="mb-10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full py-3 pl-10 pr-4 bg-dark border border-tertiary border-opacity-30 rounded-md text-light focus:border-secondary focus:outline-none transition-colors"
            />
          </div>
          <div className="md:w-64">
            <select
              value={selectedTech}
              onChange={handleTechChange}
              className="w-full py-3 px-4 bg-dark border border-tertiary border-opacity-30 rounded-md text-light focus:border-secondary focus:outline-none transition-colors appearance-none"
            >
              <option value="">All Technologies</option>
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div> */}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map(project => (
              <motion.div key={project.id} variants={itemVariants}>
                <Link to={`/projects/${project.id}`} className="group">
                  <div className="card overflow-hidden h-full flex flex-col hover:translate-y-[-5px]">
                    <div className="relative overflow-hidden h-48 rounded-t-md">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-light">{project.title}</h3>
                      <p className="text-tertiary mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span 
                            key={i} 
                            className={`text-xs py-1 px-2 rounded-full bg-dark text-secondary border border-secondary ${
                              selectedTech === tech ? 'bg-secondary bg-opacity-20' : ''
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs py-1 px-2 rounded-full bg-dark text-tertiary">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-6 py-3 border-t border-tertiary border-opacity-20">
                      <div className="flex space-x-4 text-tertiary">
                        {project.github && (
                          <a 
                            href={project.github} 
                            className="hover:text-secondary" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub />
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            className="hover:text-secondary" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                      <span className="text-xs text-tertiary hover:text-secondary">View details</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl text-light mb-2">No projects found</h3>
            <p className="text-tertiary">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Projects; 