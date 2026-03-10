import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Recettes', path: '/recettes' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[60] w-[95%] lg:w-11/12 max-w-[1600px] bg-blanc-casse/90 backdrop-blur-lg rounded-[2.5rem] md:rounded-4xl shadow-soft border border-gris-clair/50 py-4 px-6 md:px-8 flex justify-between items-center transition-all duration-300">
        <Link to="/" className="text-xl md:text-2xl font-serif text-vert-profond font-bold tracking-tight">
          L'Artiste Culinaire
        </Link>
        
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] transition-colors duration-300 relative group pb-1 ${
                  isActive ? 'text-vert-profond font-medium' : 'text-vert-profond/60 hover:text-vert-profond'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-vert-sauge transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}
        </nav>

        <button 
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 text-vert-profond focus:outline-none z-[70] relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Motion.span 
            className="w-7 h-[1.5px] bg-vert-profond block origin-center"
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6.5 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <Motion.span 
            className="w-7 h-[1.5px] bg-vert-profond block"
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <Motion.span 
            className="w-7 h-[1.5px] bg-vert-profond block origin-center"
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6.5 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%', transition: { delay: 0.2, duration: 0.4 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-blanc-casse flex flex-col justify-center items-center px-6 overflow-hidden md:hidden"
          >
            <div className="absolute top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-vert-sauge/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-vert-profond/5 rounded-full blur-3xl pointer-events-none"></div>

            <nav className="flex flex-col gap-8 text-center w-full z-10 relative">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                    transition={{ delay: 0.1 + (i * 0.1), duration: 0.5, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-4xl sm:text-5xl font-serif block relative z-10 ${
                        isActive ? 'text-vert-sauge' : 'text-vert-profond'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </Motion.div>
                );
              })}
            </nav>
            
            <Motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-12 text-center w-full text-vert-profond/50 text-sm font-light uppercase tracking-[0.2em]"
            >
              L'Artiste Culinaire © {new Date().getFullYear()}
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
