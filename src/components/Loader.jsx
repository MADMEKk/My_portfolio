import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ progress = 0 }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-bg z-50 px-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center max-w-md w-full">
        <div className="relative w-24 h-24 mb-12">
          {/* Pulsing Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-accent/20 blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center border-2 border-accent/30 rounded-full">
            <motion.div
              className="text-accent text-5xl font-black tracking-tighter"
              animate={{
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              M
            </motion.div>
          </div>

          {/* Rotating Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="46"
              fill="none"
              stroke="#171717"
              strokeWidth="2"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="46"
              fill="none"
              stroke="#ff3e00"
              strokeWidth="2"
              strokeDasharray="289"
              initial={{ strokeDashoffset: 289 }}
              animate={{ strokeDashoffset: 289 - (289 * progress) / 100 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </svg>
        </div>

        <div className="w-full space-y-4 text-center">
          <div className="flex justify-between items-end mb-1">
            <span className="text-accent font-mono text-sm font-bold tracking-widest uppercase">
              {progress < 100 ? 'Initializing' : 'System Ready'}
            </span>
            <span className="text-tertiary font-mono text-xs">{Math.round(progress)}%</span>
          </div>

          <div className="h-1 w-full bg-dark rounded-full overflow-hidden border border-white/5">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-1"
          >
            <p className="text-tertiary font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
              {progress < 30 && "Loading components..."}
              {progress >= 30 && progress < 70 && "Optimizing assets..."}
              {progress >= 70 && progress < 100 && "Finishing touches..."}
              {progress === 100 && "Welcome to the Portfolio"}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader; 
