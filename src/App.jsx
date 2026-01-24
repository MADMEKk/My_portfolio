import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Preload critical components


// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const WorkDetails = lazy(() => import('./pages/WorkDetails'));

// Loading component for suspense fallback - Full screen to prevent layout shift
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen w-full fixed inset-0 bg-bg z-50">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-2 border-accent rounded-full animate-ping opacity-75"></div>
      <div className="absolute inset-0 border-2 border-accent rounded-full animate-pulse"></div>
      <div className="absolute inset-1/4 text-accent text-xl font-bold flex items-center justify-center">
        A
      </div>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Asset preloading with progress tracking
  useEffect(() => {
    const assets = [
      '/images/profile.png',
      '/media/competitions/oran/honoring.jpg',
      '/media/competitions/olympiad/presentation.jpg'
    ];

    let loadedCount = 0;
    const totalAssets = assets.length;

    const updateProgress = () => {
      loadedCount++;
      const progress = (loadedCount / totalAssets) * 100;
      setLoadingProgress(progress);

      if (loadedCount === totalAssets) {
        // Slight delay for smooth transition after everything is loaded
        setTimeout(() => setLoading(false), 800);
      }
    };

    // If no assets to preload, just finish loading
    if (totalAssets === 0) {
      setLoadingProgress(100);
      setLoading(false);
      return;
    }

    assets.forEach(url => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress; // Continue even if an image fails
      img.src = url;
    });

    // Fallback timer to prevent getting stuck
    const fallback = setTimeout(() => {
      if (loading) {
        setLoadingProgress(100);
        setLoading(false);
      }
    }, 5000);

    return () => clearTimeout(fallback);
  }, []);

  return (
    <div className="App min-h-screen flex flex-col bg-primary text-light selection:bg-secondary/30">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" progress={loadingProgress} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen"
          >
            <Router>
              <Navbar />
              <main className="flex-grow pt-20">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects/:id" element={<WorkDetails />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
