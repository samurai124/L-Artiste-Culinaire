import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';
import { motion as Motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center mb-32 overflow-hidden rounded-[3rem] md:rounded-[4rem] group">
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
          alt="L'Artiste Culinaire Kitchen Atmosphere" 
          className="w-full h-full object-cover shadow-inner"
        />
        
        <div className="absolute inset-0 bg-vert-profond/40 backdrop-blur-[0.5px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-vert-profond/50 via-transparent to-vert-profond/70"></div>
      </div>

      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <Motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-vert-sauge font-medium uppercase tracking-[0.4em] mb-6 block text-[10px] md:text-xs drop-shadow-md"
        >
          L'Excellence Gastronomique
        </Motion.span>
        
        <Motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-4xl md:text-7xl leading-[1.1] text-blanc-casse font-serif mb-10 text-balance"
        >
          La Symphonie des <br/>
          <em className="italic font-light text-vert-sauge drop-shadow-sm">Saveurs</em>
        </Motion.h1>
        
        <Motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <button 
            onClick={() => navigate('/recettes')} 
            className="group/btn relative flex items-center justify-center bg-blanc-casse text-vert-profond rounded-full transition-all duration-500 ease-[0.22, 1, 0.36, 1] hover:pr-8 hover:pl-6 py-4 px-4 w-14 hover:w-auto h-14 overflow-hidden shadow-2xl"
          >
            <span className="whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 font-medium text-sm mr-2 absolute left-6 translate-x-4 group-hover/btn:translate-x-0 group-hover/btn:static">
              Découvrir le Carnet
            </span>
            <svg 
              className="w-5 h-5 transition-transform duration-500 group-hover/btn:rotate-45" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </Motion.div>
      </div>

      
      <div className="absolute top-1/2 -left-20 w-48 h-48 bg-vert-sauge/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-64 h-64 bg-vert-profond/30 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;

