import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';

const HackathonShowcase = () => {
  const achievements = [
    {
      id: 'oran',
      title: 'Oran Hackathon',
      result: 'Winner',
      date: 'June 2023',
      location: 'Oran University',
      description: 'First place for innovative IoT smart agriculture solution.',
      icon: <FaTrophy className="text-yellow-400" />,
      color: "border-yellow-400/50"
    },
    {
      id: 'olympiad',
      title: 'National Olympiad',
      result: '2nd Place',
      date: 'April 2023',
      location: 'Algiers',
      description: 'National recognition for algorithmic excellence.',
      icon: <FaMedal className="text-gray-300" />,
      color: "border-gray-300/50"
    },
    {
      id: 'laghouat',
      title: 'Laghouat Hackathon',
      result: 'Honorable Mention',
      date: 'March 2023',
      location: 'Laghouat University',
      description: 'Awarded for energy conservation smart home system.',
      icon: <FaAward className="text-accent" />,
      color: "border-accent/50"
    },
    {
      id: 'elbayadh',
      title: 'El Bayadh Competition',
      result: 'Finalist',
      date: 'February 2023',
      location: 'El Bayadh',
      description: 'Finalist for sustainable rural tech solutions.',
      icon: <FaStar className="text-purple-400" />,
      color: "border-purple-400/50"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-2">Awards & Recognition</h2>
            <p className="text-tertiary text-sm max-w-lg">
              Highlighted achievements from national competitions and hackathons.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 bg-primary rounded-sm border ${item.color} hover:bg-white/5 transition-colors duration-300 group`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-full transition-transform duration-300">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <span className="text-xs font-mono text-tertiary px-2 py-1 bg-white/5 rounded">
                  {item.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
                {item.title}
              </h3>

              <div className="text-accent font-medium text-sm mb-3 font-mono">
                {item.result}
              </div>

              <p className="text-tertiary text-xs leading-relaxed border-t border-white/5 pt-3 mt-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonShowcase; 
