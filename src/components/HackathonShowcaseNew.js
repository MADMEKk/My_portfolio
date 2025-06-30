import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaTrophy, FaMedal, FaMapMarkerAlt } from 'react-icons/fa';

// Main component that showcases hackathon events
const HackathonShowcase = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Hackathon events data
  const hackathonEvents = [
    {
      id: 'oran',
      title: 'Oran Hackathon',
      result: 'Winner',
      date: 'June 2023',
      location: 'Oran University',
      description: 'Led a team to victory in a 48-hour hackathon focused on innovative solutions for smart agriculture using IoT sensors and machine learning.',
      images: [
        { url: '/media/competitions/oran/honoring.jpg', caption: 'Honoring Ceremony' },
        { url: '/media/competitions/oran/winning.jpg', caption: 'Winning Moment' },
        { url: '/media/competitions/oran/honoring1.jpg', caption: 'Team Recognition' },
        { url: '/media/competitions/oran/honoring2.jpg', caption: 'Award Presentation' }
      ],
      color: '#61dafb'
    },
    {
      id: 'olympiad',
      title: 'National Olympiad',
      result: '2nd Place',
      date: 'April 2023',
      location: 'Algiers',
      description: 'Secured 2nd place in the Algerian National Olympiad in Informatics after winning 1st place in the regional competition. Demonstrated exceptional problem-solving skills and algorithm optimization.',
      images: [
        { url: '/media/competitions/olympiad/presentation.jpg', caption: 'Presentation' },
        { url: '/media/competitions/olympiad/presentation2.jpg', caption: 'Project Demo' },
        { url: '/media/competitions/olympiad/shield.jpg', caption: 'Shield Award' }
      ],
      color: '#4caf50'
    },
    {
      id: 'laghouat',
      title: 'Laghouat Hackathon',
      result: 'Honorable Mention',
      date: 'March 2023',
      location: 'Laghouat University',
      description: 'Participated in the Laghouat University Hackathon, where our team developed a smart home automation system using Arduino and mobile application control. The project received honorable mention for its innovative approach to energy conservation.',
      images: [
        { url: '/media/competitions/laghouat/participation.jpg', caption: 'Participation Certificate' }
      ],
      color: '#ff9800'
    },
    {
      id: 'elbayadh',
      title: 'El Bayadh Competition',
      result: 'Finalist',
      date: 'February 2023',
      location: 'El Bayadh',
      description: 'Reached the finals of the El Bayadh tech competition with an innovative project focused on sustainable technology solutions for rural communities.',
      images: [
        { url: '/media/competitions/elbayadh/photo_2025-06-15_19-19-27.jpg', caption: 'Team Collaboration' },
        { url: '/media/competitions/elbayadh/photo_2025-06-15_19-20-02.jpg', caption: 'Project Showcase' }
      ],
      color: '#e91e63'
    }
  ];
  
  // Preload images for smoother experience
  useEffect(() => {
    const imageUrls = [];
    hackathonEvents.forEach(event => {
      event.images.forEach(img => {
        imageUrls.push(img.url);
      });
    });
    
    let loadedCount = 0;
    const totalImages = imageUrls.length;
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = url;
    });
    
    // Set a timeout to show content even if images don't all load
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [hackathonEvents]);
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-light mb-4">Hackathon Highlights</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="text-tertiary mt-6 max-w-2xl mx-auto">
            Showcasing memorable moments from hackathons and competitions where I demonstrated
            problem-solving skills and technical expertise.
          </p>
        </motion.div>
        
        {!imagesLoaded ? (
          <div className="h-[200px] flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-secondary">Loading gallery...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-24">
            {hackathonEvents.map((event, eventIndex) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: eventIndex * 0.2 }}
                className="relative"
              >
                {/* Timeline connector */}
                {eventIndex < hackathonEvents.length - 1 && (
                  <div className="absolute left-1/2 top-full w-1 bg-secondary bg-opacity-30 h-24 transform -translate-x-1/2"></div>
                )}
                
                {/* Event header */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-light inline-block relative">
                    {event.title}
                    <div 
                      className="absolute bottom-0 left-0 w-full h-1 transform -translate-y-1" 
                      style={{ backgroundColor: event.color }}
                    ></div>
                  </h3>
                  <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-tertiary">
                    <div className="flex items-center">
                      <FaTrophy className="text-secondary mr-2" />
                      <span>{event.result}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="text-secondary mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-secondary mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Event content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Description */}
                  <div className={`${eventIndex % 2 === 1 ? 'md:order-last' : ''}`}>
                    <div className="card bg-dark bg-opacity-50 p-6 rounded-lg border-l-4" style={{ borderColor: event.color }}>
                      <p className="text-tertiary leading-relaxed">{event.description}</p>
                      <div className="mt-6 space-y-2">
                        <div className="flex items-center">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: event.color }}></span>
                          <span className="text-tertiary">Developed innovative technical solutions</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: event.color }}></span>
                          <span className="text-tertiary">Collaborated with a diverse team</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: event.color }}></span>
                          <span className="text-tertiary">Presented solutions to industry experts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Images */}
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      {event.images.slice(0, 4).map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          whileHover={{ scale: 1.05 }}
                          className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
                        >
                          <img 
                            src={image.url} 
                            alt={`${event.title} - ${image.caption}`} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-sm font-medium">
                            {image.caption}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HackathonShowcase; 