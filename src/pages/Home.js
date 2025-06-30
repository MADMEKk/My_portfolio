import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTrophy, FaMedal, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaChevronDown } from 'react-icons/fa';

// Components
import Section from '../components/Section';
import MediaGallery from '../components/MediaGallery';
import HeroSection from '../components/HeroSection';
import BioSection from '../components/BioSection';
import SkillsGalaxy from '../components/SkillsGalaxy';
import Timeline from '../components/Timeline';
import Certifications from '../components/Certifications';
import HackathonShowcase from '../components/HackathonShowcase';

// Data
import { profile } from '../data/profile';
import { skills } from '../data/skills';
import { projects } from '../data/projects';

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Bio Section */}
      <BioSection />
      
      {/* Skills Galaxy */}
      <SkillsGalaxy />
      
      {/* Timeline */}
      <Timeline />
      
      {/* Hackathon Showcase - Moved after Timeline */}
      <HackathonShowcase />
      
      {/* Featured Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="card hover:translate-y-[-5px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-primary bg-opacity-80 transition-opacity duration-300">
                  <span className="text-secondary font-mono">View Project</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
              <p className="text-tertiary mb-4">{project.description.slice(0, 100)}...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-dark text-tertiary text-xs rounded-full">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 bg-dark text-tertiary text-xs rounded-full">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline text-sm">
                  View Source
                </a>
                <a href={`/projects/${project.id}`} className="btn btn-sm btn-outline">
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <motion.a 
            href="/projects" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </div>
      </Section>
      
      {/* Competitions Section */}
      <Section id="competitions" title="Competitions & Achievements">
        <div className="space-y-12">
          {/* Olympiad */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-light mb-2">National Olympiad - 2nd Place</h3>
              <p className="text-tertiary mb-4">
                Secured 2nd place in the Algerian National Olympiad in Informatics after winning 1st place
                in the regional competition. Demonstrated exceptional problem-solving skills and algorithm optimization.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span className="text-tertiary">Algorithmic challenges and optimization problems</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span className="text-tertiary">Recognition from Oran1 Infinite Loop Club</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span className="text-tertiary">Certificate and shield of recognition</span>
                </div>
              </div>
            </div>
            <MediaGallery 
              mediaItems={[
                { type: 'image', url: '/media/competitions/olympiad/certificate.jpg', caption: 'Certificate of Recognition' },
                { type: 'image', url: '/media/competitions/olympiad/shield.jpg', caption: 'Shield of Recognition' },
                { type: 'image', url: '/media/competitions/olympiad/presentation.jpg', caption: 'Olympiad Presentation' },
                { type: 'image', url: '/media/competitions/olympiad/presentation2.jpg', caption: 'Olympiad Presentation 2' }
              ]}
            />
          </motion.div>
          
          {/* Oran Hackathon */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MediaGallery 
              mediaItems={[
                { type: 'image', url: '/media/competitions/oran/certificate.jpg', caption: 'Hackathon Certificate' },
                { type: 'image', url: '/media/competitions/oran/honoring.jpg', caption: 'Honoring Ceremony' },
                { type: 'image', url: '/media/competitions/oran/honoring1.jpg', caption: 'Honoring Ceremony 1' },
                { type: 'image', url: '/media/competitions/oran/honoring2.jpg', caption: 'Honoring Ceremony 2' },
                { type: 'image', url: '/media/competitions/oran/winning.jpg', caption: 'Winning Moment' },
                { type: 'video', url: '/media/competitions/oran/hackathon.mp4', caption: 'Hackathon Video' }
              ]}
            />
            <div className="md:order-first">
              <h3 className="text-2xl font-bold text-light mb-2">Oran Hackathon Winner</h3>
              <p className="text-tertiary mb-4">
                Led a team to victory in a 48-hour hackathon organized by the Infinite Loop Club at Oran University.
                Our project focused on innovative solutions for smart agriculture using IoT sensors and machine learning.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span className="text-tertiary">Smart agriculture solution with real-time monitoring</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span className="text-tertiary">IoT sensors integration with mobile application</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span className="text-tertiary">Machine learning for crop yield prediction</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Laghouat Hackathon */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-light mb-2">Laghouat Hackathon Participant</h3>
              <p className="text-tertiary mb-4">
                Participated in the Laghouat University Hackathon, where our team developed a smart home automation
                system using Arduino and mobile application control. The project received honorable mention for its
                innovative approach to energy conservation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span className="text-tertiary">Smart home automation with Arduino</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span className="text-tertiary">Mobile application for remote control</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span className="text-tertiary">Energy conservation algorithms</span>
                </div>
              </div>
            </div>
            <MediaGallery 
              mediaItems={[
                { type: 'image', url: '/media/competitions/laghouat/participation.jpg', caption: 'Participation Certificate' },
                { type: 'video', url: '/media/competitions/laghouat/laghouat.mp4', caption: 'Hackathon Overview' },
                { type: 'video', url: '/media/competitions/laghouat/presentation.mp4', caption: 'Project Presentation' }
              ]}
            />
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <motion.div 
              className="text-tertiary space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {profile.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph.trim()}</p>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-1 bg-secondary mr-3"></div>
                <h3 className="text-xl font-bold text-light">Professional Experience</h3>
              </div>
              <div className="space-y-6">
                {profile.experience.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="card hover:translate-y-[-5px] border-l-2 border-secondary pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex flex-wrap justify-between items-start">
                      <div>
                        <h4 className="text-light font-bold">{exp.position}</h4>
                        <p className="text-secondary">{exp.company}</p>
                      </div>
                      <span className="text-tertiary text-sm font-mono bg-dark px-2 py-1 rounded">{exp.period}</span>
                    </div>
                    <p className="text-tertiary mt-2">{exp.description}</p>
                    {exp.achievements && (
                      <ul className="mt-2 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-secondary mr-2">▹</span>
                            <span className="text-tertiary text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-6 h-1 bg-secondary mr-3"></div>
                  <h3 className="text-xl font-bold text-light">Education</h3>
                </div>
                <div className="space-y-4">
                  {profile.education.map((edu, index) => (
                    <motion.div 
                      key={index} 
                      className="card hover:translate-y-[-5px] border-l-2 border-secondary pl-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <h4 className="text-light font-bold">{edu.degree}</h4>
                      <p className="text-secondary">{edu.institution}</p>
                      <span className="text-tertiary text-sm font-mono bg-dark px-2 py-1 rounded inline-block mt-1">{edu.period}</span>
                      <p className="text-tertiary mt-2 text-sm">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-6 h-1 bg-secondary mr-3"></div>
                  <h3 className="text-xl font-bold text-light">Contact Information</h3>
                </div>
                <div className="card hover:translate-y-[-5px] bg-dark bg-opacity-50">
                  <div className="space-y-3 text-tertiary">
                    <p className="flex items-center"><FaMapMarkerAlt className="text-secondary mr-2" /> {profile.location}</p>
                    <p className="flex items-center"><FaEnvelope className="text-secondary mr-2" /> {profile.email}</p>
                    <p className="flex items-center"><FaPhone className="text-secondary mr-2" /> {profile.phone}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Professional Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, index) => (
            <div key={index} className="card hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-light mb-4 flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.technologies.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-tertiary">{skill.name}</span>
                      <span className="text-xs text-secondary font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-secondary"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section 
        id="contact-cta" 
        title="Get In Touch"
        subtitle="Have an exciting project in mind or just want to say hi? My inbox is always open!"
      >
        <div className="flex justify-center mt-8">
          <Link to="/contact" className="btn btn-primary">
            Contact Me
          </Link>
        </div>
      </Section>

      <Certifications />
    </div>
  );
};

export default Home; 