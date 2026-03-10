import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-vert-profond text-blanc-casse py-20 mt-30 rounded-t-4xl">
      <div className="max-w-[1600px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="max-w-xs">
          <h2 className="font-serif text-3xl mb-4">L'Artiste Culinaire</h2>
          <p className="text-gris-clair font-light text-sm leading-relaxed">
            Une exploration poétique et savoureuse de la gastronomie, où chaque recette raconte une histoire de passion et de partage.
          </p>
        </div>
        
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-vert-sauge mb-2 tracking-wide text-sm uppercase">Navigation</h3>
            <Link to="/" className="text-gris-clair hover:text-white transition-colors text-sm">Accueil</Link>
            <Link to="/recettes" className="text-gris-clair hover:text-white transition-colors text-sm">Recettes</Link>
            <Link to="/a-propos" className="text-gris-clair hover:text-white transition-colors text-sm">Notre Histoire</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-vert-sauge mb-2 tracking-wide text-sm uppercase">Réseaux</h3>
            <a href="#" className="text-gris-clair hover:text-white transition-colors text-sm">Instagram</a>
            <a href="#" className="text-gris-clair hover:text-white transition-colors text-sm">Pinterest</a>
            <a href="#" className="text-gris-clair hover:text-white transition-colors text-sm">Facebook</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1600px] mx-auto px-8 mt-16 pt-8 border-t border-vert-sauge/30 flex justify-between items-center text-xs text-vert-sauge/70">
        <p>© {new Date().getFullYear()} L'Artiste Culinaire. Tous droits réservés.</p>
        <p>Design éditorial & moderne</p>
      </div>
    </footer>
  );
};

export default Footer;
