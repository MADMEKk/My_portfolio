import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Preload critical components
import HeroSection from './components/HeroSection';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const WorkDetails = lazy(() => import('./pages/WorkDetails'));

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-2 border-secondary rounded-full animate-ping opacity-75"></div>
      <div className="absolute inset-0 border-2 border-secondary rounded-full animate-pulse"></div>
      <div className="absolute inset-1/4 text-secondary text-xl font-bold flex items-center justify-center">
        A
      </div>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [appReady, setAppReady] = useState(false);

  // Preload critical resources
  useEffect(() => {
    // Preload images
    const preloadImages = () => {
      const imageUrls = [
        '/media/profile.jpg',
        '/media/competitions/oran/honoring.jpg',
        '/media/competitions/olympiad/presentation.jpg'
      ];
      
      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    // Simulate loading progress with a smoother curve
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        // Slow down progress as it approaches 100%
        const increment = Math.max(1, 15 * (1 - prev / 100));
        const newProgress = prev + increment * Math.random();
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    // Set a minimum loading time to ensure smooth transition
    const minLoadingTimer = setTimeout(() => {
      clearInterval(interval);
      setLoadingProgress(100);
      
      // Add a small delay before hiding loader for smoother transition
      setTimeout(() => {
        setLoading(false);
        
        // Small delay before marking app as fully ready
        setTimeout(() => {
          setAppReady(true);
        }, 100);
      }, 300);
    }, 1800);

    return () => {
      clearTimeout(minLoadingTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App min-h-screen flex flex-col bg-primary text-light">
      {loading ? (
        <Loader progress={loadingProgress} />
      ) : (
        <Router>
          <Navbar />
          <main className={`flex-grow transition-opacity duration-300 ${appReady ? 'opacity-100' : 'opacity-0'}`}>
            <AnimatePresence mode="wait">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/projects/:id" element={<WorkDetails />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
