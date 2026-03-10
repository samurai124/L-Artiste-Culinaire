import React from 'react';
import { motion as Motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-blanc-casse overflow-hidden relative">
      <Motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-vert-profond mb-6 tracking-wide">
          L'Artiste Culinaire
        </h2>
        
        
        <div className="relative w-48 h-px bg-gris-clair mx-auto overflow-hidden rounded-full">
          <Motion.div
            className="absolute top-0 left-0 h-full bg-vert-sauge rounded-full"
            initial={{ width: '0%', left: '0%' }}
            animate={{ 
              width: ['0%', '50%', '0%'],
              left: ['0%', '25%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-vert-profond/60 font-light text-sm uppercase tracking-[0.2em]"
        >
          Préparation en cours...
        </Motion.p>
      </Motion.div>
      
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vert-sauge/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vert-profond/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
    </div>
  );
};

export default PageLoader;
