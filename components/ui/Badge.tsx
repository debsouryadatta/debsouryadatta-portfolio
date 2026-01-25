import React from 'react';
import { motion } from 'framer-motion';

export const Badge: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="absolute -bottom-6 -right-6 z-20 pointer-events-none md:-bottom-10 md:-right-10"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
          </defs>
          <text className="text-[10px] font-bold uppercase tracking-[0.15em] fill-brand-accent">
            <textPath xlinkHref="#curve" startOffset="0%">
              • Available for Work • Open to Collaborate
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </motion.div>
  );
};