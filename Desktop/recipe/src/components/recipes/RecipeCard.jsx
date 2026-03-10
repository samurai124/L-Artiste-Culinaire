import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <ScrollReveal yOffset={30} duration={0.6}>
      <article 
        className="group cursor-pointer flex flex-col h-full bg-blanc-casse"
        onClick={() => navigate(`/recettes/${recipe.id}`)}
      >
        <div className="relative h-80 w-full mb-8 overflow-hidden rounded-[2rem] shadow-sm group-hover:shadow-soft transition-all duration-700 hover:-translate-y-2">
          <div className="absolute inset-0 bg-vert-profond/0 group-hover:bg-vert-profond/10 transition-colors duration-700 z-10"></div>
          <img 
            src={recipe.image} 
            alt={recipe.titre} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-20 bg-blanc-casse/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-vert-profond shadow-sm">
            {recipe.categorie}
          </div>
        </div>
        
        <div className="flex flex-col flex-grow px-2">
          <div className="flex justify-between items-center text-vert-sauge text-sm mb-4">
            <span className="flex items-center gap-1.5 font-light">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {recipe.tempsPreparation}
            </span>
            <span className="text-gris-clair/80 hidden sm:inline">•</span>
            <span className="font-light">{recipe.niveau}</span>
          </div>
          
          <h3 className="text-3xl font-serif text-vert-profond mb-4 leading-tight group-hover:text-vert-sauge transition-colors duration-300 line-clamp-2">
            {recipe.titre}
          </h3>
          
          <p className="text-vert-profond/60 font-light text-base leading-relaxed line-clamp-2 mt-auto">
            {recipe.descriptionCourte}
          </p>
        </div>
      </article>
    </ScrollReveal>
  );
};

export default RecipeCard;
