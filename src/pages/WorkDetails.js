import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

// Components
import Section from '../components/Section';
import MediaGallery from '../components/MediaGallery';

// Data
import { projects } from '../data/projects';

const WorkDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    }
  }, [project, navigate]);
  
  if (!project) return null;

  return (
    <div className="pt-24 pb-16">
      <Section hideSectionNumber>
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center text-tertiary hover:text-secondary mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">{project.title}</h1>
          <p className="text-xl text-tertiary">{project.description}</p>
        </div>

        {/* Project Image */}
        <motion.div 
          className="mb-12 overflow-hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto"
          />
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-light mb-6">Project Overview</h2>
            
            <div className="mb-8 text-tertiary whitespace-pre-line">
              {project.longDescription}
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary mr-2">▹</span>
                    <span className="text-tertiary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media Gallery */}
            {project.media && project.media.length > 0 && (
              <div className="mb-8">
                <MediaGallery media={project.media} />
              </div>
            )}

            <div className="flex space-x-4 mb-8">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center"
                >
                  <FaGithub className="mr-2" /> View Code
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>

          <div>
            <div className="card">
              <h3 className="text-xl font-bold text-light mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-sm py-1 px-3 rounded-full bg-dark text-secondary border border-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-light mb-4">Other Projects</h3>
              <div className="space-y-4">
                {projects
                  .filter(p => p.id !== id)
                  .slice(0, 3)
                  .map(p => (
                    <Link 
                      key={p.id} 
                      to={`/projects/${p.id}`}
                      className="block card hover:translate-y-[-5px]"
                    >
                      <h4 className="text-light font-bold">{p.title}</h4>
                      <p className="text-tertiary text-sm mt-1 line-clamp-2">{p.description}</p>
                    </Link>
                  ))
                }
                <Link 
                  to="/projects" 
                  className="block text-center text-secondary hover:underline mt-2"
                >
                  View all projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WorkDetails; 