import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-32 h-32">
          <motion.span 
            className="absolute inset-0 border-2 border-secondary rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.span 
            className="absolute inset-0 border-2 border-secondary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
          <motion.span 
            className="absolute inset-0 border-2 border-secondary rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4
            }}
          />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-secondary text-4xl font-bold"
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            A
          </motion.div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-8 w-64 h-1 bg-dark rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        
        <motion.p 
          className="mt-4 text-tertiary font-mono"
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {progress < 100 ? 'Loading...' : 'Welcome!'}
        </motion.p>
        
        <motion.p 
          className="mt-2 text-tertiary text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: progress > 70 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          Preparing an immersive experience
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader; 