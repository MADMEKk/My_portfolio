import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaLock } from 'react-icons/fa';

const BentoGrid = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
            {projects.map((project, index) => {
                // Determine span based on index/priority to create the bento look
                const isLarge = index === 0 || index === 3;
                const colSpan = isLarge ? 'md:col-span-2' : 'md:col-span-1';

                return (
                    <motion.div
                        key={project.id}
                        className={`${colSpan} group relative overflow-hidden rounded-sm bg-primary border border-white/10 hover:border-white/30 transition-all duration-500`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/90 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-end mb-3">
                                    <h3 className="text-3xl font-serif font-bold text-white leading-none">{project.title}</h3>
                                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
                                        {project.github ? (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-dark transition-colors">
                                                <FaGithub size={16} />
                                            </a>
                                        ) : (
                                            <div className="p-2 bg-white/10 rounded-full text-tertiary cursor-not-allowed group/lock relative">
                                                <FaLock size={16} />
                                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-dark text-white rounded opacity-0 group-hover/lock:opacity-100 transition-opacity whitespace-nowrap">
                                                    Private Repo
                                                </span>
                                            </div>
                                        )}
                                        {project.media && project.media.length > 0 && (
                                            <a href={`/projects/${project.id}`} className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-dark transition-colors">
                                                <FaExternalLinkAlt size={16} />
                                            </a>
                                        )}
                                        {project.liveDemo && (
                                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-dark transition-colors">
                                                <FaExternalLinkAlt size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-4 line-clamp-2 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={`/projects/${project.id}`}
                                    className="inline-flex items-center text-secondary text-sm font-semibold hover:tracking-wide transition-all"
                                >
                                    View Case Study <FaArrowRight className="ml-2 text-xs" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default BentoGrid;
