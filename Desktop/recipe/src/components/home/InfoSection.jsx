import React from 'react';

const InfoSection = () => {
  return (
    <section className="mb-32 bg-vert-profond py-24 md:py-32 px-8 rounded-[3rem] text-blanc-casse overflow-hidden relative shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-vert-sauge/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blanc-casse/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
          Retrouvez le goût authentique des produits d'exception.
        </h2>
        
        <p className="text-lg md:text-xl font-light text-gris-clair leading-relaxed mb-16">
          Notre philosophie repose sur l'harmonie entre une cuisine saine, respectueuse des saisons, et une passion culinaire débordante. Chaque ingrédient est sélectionné avec le plus grand soin pour éveiller vos sens et nourrir votre bien-être.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <span className="w-16 h-16 rounded-full border border-vert-sauge flex items-center justify-center text-2xl mb-6 text-vert-sauge">🌱</span>
            <h3 className="text-xl font-serif mb-3">Produits Frais</h3>
            <p className="text-gris-clair/70 font-light text-sm">Approvisionnement local et de saison</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="w-16 h-16 rounded-full border border-vert-sauge flex items-center justify-center text-2xl mb-6 text-vert-sauge">🤍</span>
            <h3 className="text-xl font-serif mb-3">Cuisine Saine</h3>
            <p className="text-gris-clair/70 font-light text-sm">Faible en sucre, riche en nutriments</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="w-16 h-16 rounded-full border border-vert-sauge flex items-center justify-center text-2xl mb-6 text-vert-sauge">🔥</span>
            <h3 className="text-xl font-serif mb-3">Passion Créative</h3>
            <p className="text-gris-clair/70 font-light text-sm">Des mélanges audacieux et élégants</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
