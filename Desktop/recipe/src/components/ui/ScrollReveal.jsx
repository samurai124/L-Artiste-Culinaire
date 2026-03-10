import React from 'react';
import { motion as Motion } from 'framer-motion';

const ScrollReveal = ({ children, className = '', delay = 0, yOffset = 40, duration = 0.8 }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: duration, 
        ease: [0.16, 1, 0.3, 1],
        delay: delay 
      }}
      className={className}
    >
      {children}
    </Motion.div>
  );
};

export default ScrollReveal;
