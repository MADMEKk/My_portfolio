import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

// Components
import Section from '../components/Section';
import HeroSection from '../components/HeroSection';
import BioSection from '../components/BioSection';
// import SkillsGalaxy from '../components/SkillsGalaxy'; // Removed
import Timeline from '../components/Timeline';
import SkillCard from '../components/SkillCard';
import Certifications from '../components/Certifications';
import HackathonShowcase from '../components/HackathonShowcase';
import BentoGrid from '../components/BentoGrid';

// Data
import { profile } from '../data/profile';
import { skills } from '../data/skills';
import { projects } from '../data/projects';

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-5">
      {/* Hero Section */}
      <HeroSection />

      {/* Bio Section */}
      <BioSection />

      {/* Timeline */}
      <Timeline />

      {/* Hackathon Showcase - Moved after Timeline */}
      <HackathonShowcase />

      {/* Featured Projects Section */}
      <Section id="projects" title="Featured Projects">
        <BentoGrid projects={featuredProjects} />

        <div className="flex justify-center mt-12">
          <motion.a
            href="/projects"
            className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-primary px-8 py-3 rounded-full font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </div>
      </Section>



      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div
              className="text-tertiary space-y-4"
            >
              {profile.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph.trim()}</p>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-1 bg-accent mr-3"></div>
                <h3 className="text-xl font-bold text-light">Professional Experience</h3>
              </div>
              <div className="space-y-6">
                {profile.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 border-l-4 border-secondary"
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-6 h-1 bg-accent mr-3"></div>
                  <h3 className="text-xl font-bold text-light">Education</h3>
                </div>
                <div className="space-y-4">
                  {profile.education.map((edu, index) => (
                    <div
                      key={index}
                      className="glass-card p-6 border-l-4 border-secondary"
                    >
                      <h4 className="text-light font-bold">{edu.degree}</h4>
                      <p className="text-secondary">{edu.institution}</p>
                      <span className="text-tertiary text-sm font-mono bg-dark px-2 py-1 rounded inline-block mt-1">{edu.period}</span>
                      <p className="text-tertiary mt-2 text-sm">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-6 h-1 bg-accent mr-3"></div>
                  <h3 className="text-xl font-bold text-light">Contact Information</h3>
                </div>
                <div className="card hover:translate-y-[-5px] bg-dark bg-opacity-50">
                  <div className="space-y-3 text-tertiary">
                    <p className="flex items-center"><FaMapMarkerAlt className="text-secondary mr-2" /> {profile.location}</p>
                    <p className="flex items-center"><FaEnvelope className="text-secondary mr-2" /> {profile.email}</p>
                    <p className="flex items-center"><FaPhone className="text-secondary mr-2" /> {profile.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Professional Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:border-secondary/30 transition-all duration-500 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-light mb-8 flex items-center">
                <span className="w-3 h-3 bg-secondary rounded-full mr-3 shadow-[0_0_10px_rgba(100,255,218,0.5)]"></span>
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {skillGroup.technologies.map((skill, sIndex) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={sIndex}
                  />
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
