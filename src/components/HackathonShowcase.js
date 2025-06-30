import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaTrophy, FaMedal, FaMapMarkerAlt, FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaImages, FaPlay } from 'react-icons/fa';

// Main component that showcases hackathon events
const HackathonShowcase = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  
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
        { url: '/media/competitions/oran/certificate.jpg', caption: 'Achievement Certificate' },
        { url: '/media/competitions/oran/photo_2025-04-10_16-12-21.jpg', caption: 'Honoring Ceremony' },
        { url: '/media/competitions/oran/photo_2025-04-10_16-12-49.jpg', caption: 'Honoring Ceremony' },
        { url: '/media/competitions/oran/photo_2025-04-10_16-13-40.jpg', caption: 'Honoring Ceremony' },
        { url: '/media/competitions/oran/photo_2025-04-10_16-13-41 (2).jpg', caption: 'Honoring Ceremony' }
      
      
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
        { url: '/media/competitions/olympiad/shield.jpg', caption: 'Shield Award' },
        { url: '/media/competitions/olympiad/certificate.jpg', caption: 'Achievement Certificate' }
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
        { url: '/media/competitions/laghouat/participation.jpg', caption: 'Participation Certificate' },

        { url: '/media/competitions/laghouat/photo_2025-04-18_18-52-57.jpg', caption: 'Honoring Ceremony' },
        { url: '/media/competitions/laghouat/photo_2025-04-18_18-53-38.jpg', caption: 'Honoring Ceremony' }
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
        { url: '/media/competitions/elbayadh/photo_2025-06-15_19-20-02.jpg', caption: 'Project Showcase' },
        { url: '/media/competitions/elbayadh/photo_2025-06-15_19-19-33.jpg', caption: 'Award Ceremony' },
        { url: '/media/competitions/elbayadh/photo_2025-06-15_19-19-42.jpg', caption: 'Project Demonstration' },
        { url: '/media/competitions/elbayadh/photo_2025-06-15_19-20-15.jpg', caption: 'Team Celebration' },
        { url: '/media/competitions/elbayadh/photo_2025-06-15_19-15-41.jpg', caption: 'Networking Session' }
      ],
      color: '#e91e63'
    }
  ];
  
  // Open full-screen image viewer
  const openImageViewer = (eventIndex, imageIndex) => {
    setCurrentEventIndex(eventIndex);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(hackathonEvents[eventIndex].images[imageIndex]);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Close full-screen image viewer
  const closeImageViewer = () => {
    setSelectedImage(null);
    setCurrentEventIndex(null);
    setCurrentImageIndex(null);
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };
  
  // Navigate to previous image in the viewer
  const prevImage = () => {
    const eventImages = hackathonEvents[currentEventIndex].images;
    const newIndex = (currentImageIndex - 1 + eventImages.length) % eventImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(eventImages[newIndex]);
  };
  
  // Navigate to next image in the viewer
  const nextImage = () => {
    const eventImages = hackathonEvents[currentEventIndex].images;
    const newIndex = (currentImageIndex + 1) % eventImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(eventImages[newIndex]);
  };
  
  // Handle keyboard navigation in the image viewer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeImageViewer();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentEventIndex, currentImageIndex]);
  
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                  
                  {/* Images Gallery */}
                  <div>
                    <div className="relative">
                      {/* Featured image - larger size */}
                      {event.images.length > 0 && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-4 cursor-pointer"
                          onClick={() => openImageViewer(eventIndex, 0)}
                        >
                          <img 
                            src={event.images[0].isVideo ? event.images[0].thumbnail : event.images[0].url} 
                            alt={`${event.title} - ${event.images[0].caption}`} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                            <h4 className="text-lg font-medium">{event.images[0].caption}</h4>
                            <div className="flex items-center mt-1">
                              {event.images[0].isVideo ? (
                                <>
                                  <FaPlay className="mr-2 text-secondary" />
                                  <span className="text-sm">Play video</span>
                                </>
                              ) : (
                                <>
                                  <FaExpand className="mr-2 text-secondary" />
                                  <span className="text-sm">Click to expand</span>
                                </>
                              )}
                            </div>
                          </div>
                          
                          {event.images[0].isVideo && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-80 flex items-center justify-center">
                                <FaPlay size={24} className="text-dark ml-1" />
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                      
                      {/* Thumbnail grid - smaller images */}
                      {event.images.length > 1 && (
                        <div className="grid grid-cols-3 gap-3">
                          {event.images.slice(1).map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              whileHover={{ scale: 1.05 }}
                              className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer"
                              onClick={() => openImageViewer(eventIndex, imgIndex + 1)}
                            >
                              <img 
                                src={image.isVideo ? image.thumbnail : image.url} 
                                alt={`${event.title} - ${image.caption}`} 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 hover:opacity-40 transition-opacity"></div>
                              
                              {image.isVideo && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-10 h-10 rounded-full bg-secondary bg-opacity-80 flex items-center justify-center">
                                    <FaPlay size={16} className="text-dark ml-1" />
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      )}
                      
                      {/* View all photos button */}
                      {event.images.length > 4 && (
                        <button
                          onClick={() => openImageViewer(eventIndex, 0)}
                          className="mt-3 flex items-center justify-center w-full py-2 bg-dark bg-opacity-50 rounded-md text-secondary hover:bg-opacity-70 transition-all duration-300"
                        >
                          <FaImages className="mr-2" />
                          <span>View all {event.images.length} photos</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {/* Full-screen image viewer */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-dark bg-opacity-95 flex items-center justify-center p-4"
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={closeImageViewer}
                  className="bg-dark bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full text-white transition-all duration-300"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              
              <div className="absolute top-1/2 left-4 z-10">
                <button
                  onClick={prevImage}
                  className="bg-dark bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full text-white transition-all duration-300"
                >
                  <FaChevronLeft size={24} />
                </button>
              </div>
              
              <div className="absolute top-1/2 right-4 z-10">
                <button
                  onClick={nextImage}
                  className="bg-dark bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full text-white transition-all duration-300"
                >
                  <FaChevronRight size={24} />
                </button>
              </div>
              
              <div className="w-full max-w-5xl max-h-[80vh] relative">
                {selectedImage.isVideo ? (
                  <motion.div
                    key={selectedImage.url}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                  >
                    <video
                      src={selectedImage.url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </motion.div>
                ) : (
                  <motion.img
                    key={selectedImage.url}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    src={selectedImage.url}
                    alt={selectedImage.caption}
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark to-transparent">
                  <h3 className="text-xl text-white font-medium">{selectedImage.caption}</h3>
                  {currentEventIndex !== null && (
                    <p className="text-tertiary mt-1">
                      {hackathonEvents[currentEventIndex].title} - {currentImageIndex + 1} of {hackathonEvents[currentEventIndex].images.length}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HackathonShowcase; 