import React, { useState, useEffect, useRef } from 'react';
import { FaImage, FaAward, FaTimes, FaPlay, FaChevronLeft, FaChevronRight, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MediaGallery = ({ media }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [zoomMode, setZoomMode] = useState(false);
  const lightboxRef = useRef(null);
  const imageRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Preload the next and previous images when in lightbox mode
    if (activeIndex !== null && images.length > 1) {
      const prevIndex = (activeIndex - 1 + images.length) % images.length;
      const nextIndex = (activeIndex + 1) % images.length;
      
      const preloadImage = (url) => {
        const img = new Image();
        img.src = url;
      };
      
      preloadImage(images[prevIndex].url);
      preloadImage(images[nextIndex].url);
    }
    
    // Add keyboard navigation when lightbox is open
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      
      if (e.key === 'Escape') {
        handleClose();
      } else if (!zoomMode) {
        // Not in zoom mode, arrow keys navigate between images
        if (e.key === 'ArrowLeft') {
          navigateImages('prev');
        } else if (e.key === 'ArrowRight') {
          navigateImages('next');
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, zoomMode]);

  // Preload all images on component mount
  useEffect(() => {
    if (media && media.length > 0) {
      media.forEach((item, index) => {
        if (item.type === 'image' || item.type === 'certificate' || item.type === 'screenshot') {
          const img = new Image();
          img.onload = () => handleImageLoad(index);
          img.src = item.thumbnail || item.url;
        } else if (item.type === 'video' && item.thumbnail) {
          const img = new Image();
          img.onload = () => handleImageLoad(`video-${index}`);
          img.src = item.thumbnail;
        }
      });
    }
  }, [media]);

  // Reset states when changing images or closing lightbox
  useEffect(() => {
    setZoomMode(false);
    // Reset scroll position when changing images
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [activeIndex]);

  if (!media || media.length === 0) return null;

  const handleImageClick = (index) => {
    // Preload the full-size image if not already loaded
    if (!imagesLoaded[`lightbox-${index}`]) {
      const img = new Image();
      img.onload = () => handleImageLoad(`lightbox-${index}`);
      img.src = images[index].url;
    }
    
    setActiveIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const handleClose = () => {
    setActiveIndex(null);
    document.body.style.overflow = ''; // Re-enable scrolling
  };

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideo(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setShowVideo(false);
    setCurrentVideo(null);
    document.body.style.overflow = '';
  };

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  const navigateImages = (direction) => {
    if (images.length <= 1) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (activeIndex + 1) % images.length;
    } else {
      newIndex = (activeIndex - 1 + images.length) % images.length;
    }
    
    // Preload the new image if not already loaded
    if (!imagesLoaded[`lightbox-${newIndex}`]) {
      const img = new Image();
      img.onload = () => handleImageLoad(`lightbox-${newIndex}`);
      img.src = images[newIndex].url;
    }
    
    setActiveIndex(newIndex);
  };

  // Touch swipe handlers for mobile
  const handleTouchStart = (e) => {
    // Only handle swipes when not in zoom mode
    if (!zoomMode) {
      const touch = e.touches[0];
      const startX = touch.clientX;
      const startY = touch.clientY;
      
      const handleTouchMove = (e) => {
        if (!e.touches || e.touches.length === 0) return;
        
        const touch = e.touches[0];
        const diffX = startX - touch.clientX;
        const diffY = Math.abs(startY - touch.clientY);
        
        // Only handle horizontal swipes (to avoid confusion with scrolling)
        if (Math.abs(diffX) > 50 && Math.abs(diffX) > diffY) {
          if (diffX > 0) {
            // Swipe left
            navigateImages('next');
          } else {
            // Swipe right
            navigateImages('prev');
          }
          
          // Remove listeners after navigation
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
        }
      };
      
      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
  };

  // Group media by type
  const images = media.filter(item => item.type === 'image' || item.type === 'certificate' || item.type === 'screenshot');
  const videos = media.filter(item => item.type === 'video');

  // Helper function to determine if a URL is a YouTube embed
  const isYoutubeEmbed = (url) => {
    return url.includes('youtube.com/embed') || url.includes('youtu.be');
  };

  // Toggle zoom mode for full-page screenshots
  const toggleZoomMode = (e) => {
    e.stopPropagation();
    setZoomMode(!zoomMode);
    
    // Reset scroll position when toggling zoom
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      scrollContainerRef.current.scrollLeft = 0;
    }
  };

  return (
    <div className="mt-6">
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-light mb-4"
      >
        Media & Achievements
      </motion.h3>
      
      {/* Thumbnails Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {images.map((item, index) => (
          <motion.div 
            key={`image-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
            }}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer border border-tertiary border-opacity-30 hover:border-secondary group"
            onClick={() => handleImageClick(index)}
          >
            {/* Placeholder while image loads - only show if not loaded */}
            {!imagesLoaded[index] && (
              <div className="absolute inset-0 bg-dark flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-t-secondary rounded-full animate-spin"></div>
              </div>
            )}
            
            <img 
              src={item.thumbnail || item.url} 
              alt={item.caption || `Media ${index + 1}`} 
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
            />
            <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                {item.type === 'certificate' ? (
                  <FaAward className="text-secondary text-3xl" />
                ) : (
                  <FaImage className="text-secondary text-3xl" />
                )}
              </div>
            </div>
            {item.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-75 p-2 text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0">
                {item.caption}
              </div>
            )}
          </motion.div>
        ))}
        
        {videos.map((video, index) => (
          <motion.div 
            key={`video-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: (images.length + index) * 0.05 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
            }}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer border border-tertiary border-opacity-30 hover:border-secondary group"
            onClick={() => handleVideoClick(video.url)}
          >
            {/* Placeholder while thumbnail loads - only show if not loaded */}
            {!imagesLoaded[`video-${index}`] && (
              <div className="absolute inset-0 bg-dark flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-t-secondary rounded-full animate-spin"></div>
              </div>
            )}
            
            <img 
              src={video.thumbnail || 'https://via.placeholder.com/300x300?text=Video'} 
              alt={video.caption || `Video ${index + 1}`} 
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                imagesLoaded[`video-${index}`] ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => handleImageLoad(`video-${index}`)}
            />
            <div className="absolute inset-0 bg-primary bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="bg-secondary bg-opacity-80 rounded-full p-4"
              >
                <FaPlay className="text-dark text-xl" />
              </motion.div>
            </div>
            {video.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-75 p-2 text-sm text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {video.caption}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Lightbox for images */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
            onClick={handleClose}
            ref={lightboxRef}
            onTouchStart={handleTouchStart}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white bg-primary bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-20 transition-all duration-300 hover:rotate-90"
                onClick={handleClose}
              >
                <FaTimes className="text-xl" />
              </button>
              
              <div className="relative overflow-hidden rounded-lg">
                {/* Show loading spinner only when changing images in lightbox */}
                {!imagesLoaded[`lightbox-${activeIndex}`] && (
                  <div className="absolute inset-0 bg-dark bg-opacity-50 flex items-center justify-center z-10">
                    <div className="w-12 h-12 border-4 border-t-secondary rounded-full animate-spin"></div>
                  </div>
                )}
                
                {/* Zoom control for real estate screenshots */}
                {images[activeIndex].url.includes('real-estate') && (
                  <button 
                    className="absolute top-4 left-4 text-white bg-primary bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-20 transition-all duration-300"
                    onClick={toggleZoomMode}
                  >
                    {zoomMode ? <FaSearchMinus className="text-xl" /> : <FaSearchPlus className="text-xl" />}
                  </button>
                )}
                
                <div 
                  ref={scrollContainerRef}
                  className={`${zoomMode ? 'overflow-auto' : 'overflow-hidden'}`}
                  style={{ 
                    width: '100%',
                    height: zoomMode ? '70vh' : 'auto',
                    maxHeight: zoomMode ? '70vh' : '80vh'
                  }}
                >
                  <img 
                    ref={imageRef}
                    src={images[activeIndex].url} 
                    alt={images[activeIndex].caption || `Full size image ${activeIndex + 1}`} 
                    className={`mx-auto ${
                      // Special handling for real estate screenshots (they're full page screenshots)
                      images[activeIndex].url.includes('real-estate') 
                        ? zoomMode 
                          ? '' 
                          : 'max-h-[80vh] object-contain cursor-zoom-in hover:scale-[1.02] transition-transform duration-300'
                        : 'max-h-[80vh] object-contain'
                    }`}
                    style={
                      zoomMode && images[activeIndex].url.includes('real-estate')
                        ? { 
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                          } 
                        : {}
                    }
                    onLoad={() => handleImageLoad(`lightbox-${activeIndex}`)}
                    onClick={(e) => {
                      // For real estate screenshots, toggle zoom mode on click
                      if (images[activeIndex].url.includes('real-estate')) {
                        toggleZoomMode(e);
                      }
                    }}
                  />
                </div>
                
                {/* Hint text for real estate screenshots */}
                {images[activeIndex].url.includes('real-estate') && imagesLoaded[`lightbox-${activeIndex}`] && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary bg-opacity-75 text-light text-sm px-4 py-2 rounded-full z-20">
                    {zoomMode ? "Scroll to view the full image, click to zoom out" : "Click to zoom in"}
                  </div>
                )}
              </div>
              
              {/* Image navigation buttons */}
              {images.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full text-white transition-all duration-300 hover:scale-110 z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImages('prev');
                    }}
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full text-white transition-all duration-300 hover:scale-110 z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImages('next');
                    }}
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
              
              {/* Image caption and description */}
              <AnimatePresence>
                {(images[activeIndex].caption || images[activeIndex].description) && !zoomMode && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-primary bg-opacity-75 backdrop-blur-sm p-4 text-center mt-4 rounded-lg"
                  >
                    {images[activeIndex].caption && (
                      <p className="text-light text-lg font-medium">{images[activeIndex].caption}</p>
                    )}
                    {images[activeIndex].description && (
                      <p className="text-tertiary text-sm mt-2">{images[activeIndex].description}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Thumbnail navigation - position differently for real estate screenshots */}
              <div className={`absolute ${
                zoomMode 
                  ? 'top-4 right-16 flex-col h-auto max-h-[80vh] overflow-y-auto py-2 px-1 gap-2'
                  : '-bottom-16 left-0 right-0 py-4 px-2 gap-2'
              } flex ${
                zoomMode 
                  ? 'flex-col justify-start items-end' 
                  : 'justify-center items-center overflow-x-auto'
              } z-20`}>
                {images.map((img, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${
                      zoomMode 
                        ? 'w-12 h-12' 
                        : 'w-16 h-16'
                    } rounded-md overflow-hidden border-2 transition-all duration-300 ${
                      index === activeIndex ? 'border-secondary' : 'border-transparent'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Reset zoom when changing images
                      setZoomMode(false);
                      setActiveIndex(index);
                    }}
                  >
                    <img 
                      src={img.thumbnail || img.url} 
                      alt={`Thumbnail ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Video modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white bg-primary bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10 transition-all duration-300 hover:rotate-90"
                onClick={closeVideo}
              >
                <FaTimes className="text-xl" />
              </button>
              
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                {isYoutubeEmbed(currentVideo) ? (
                  <iframe
                    src={currentVideo}
                    title="Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video 
                    src={currentVideo} 
                    className="w-full h-full" 
                    controls 
                    autoPlay
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaGallery; 