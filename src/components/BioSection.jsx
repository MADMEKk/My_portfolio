import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';

const BioSection = () => {
  return (
    <section id="bio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-light mb-4">Personal Information</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="card bg-dark bg-opacity-80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
                <span className="w-2 h-6 bg-accent mr-3"></span>
                Personal Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-accent/20 p-3 rounded-full mr-4">
                    <FaBirthdayCake className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Birth Date</h4>
                    <p className="text-light">August 17, 2000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent/20 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Location</h4>
                    <p className="text-light">Oran, Algeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-dark bg-opacity-80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
                <span className="w-2 h-6 bg-accent mr-3"></span>
                Education
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent/20 p-3 rounded-full mr-4">
                    <FaGraduationCap className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Master's in Computer Science</h4>
                    <p className="text-light">University of Oran 1 Ahmed Ben Bella</p>
                    <p className="text-tertiary text-sm">2023 - 2025</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent/20 p-3 rounded-full mr-4">
                    <FaGraduationCap className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Bachelor's in Computer Science</h4>
                    <p className="text-light">University of Oran 1 Ahmed Ben Bella</p>
                    <p className="text-tertiary text-sm">2020 - 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card bg-dark bg-opacity-80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
                <span className="w-2 h-6 bg-accent mr-3"></span>
                Certifications
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-accent/20 p-3 rounded-full mr-4">
                    <FaCertificate className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="text-tertiary font-bold">Fundamentals of Deep Learning</h4>
                    <p className="text-light">NVIDIA - University of Oran 1</p>
                    <p className="text-tertiary text-sm">2023</p>
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

