import React, { useEffect } from 'react';
import FilterSidebar from '../components/recipes/FilterSidebar';
import RecipeContent from '../components/recipes/RecipeContent';
import ScrollReveal from '../components/ui/ScrollReveal';
import SEO from '../components/SEO';

const Recipes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20">
      <SEO 
        title="Recettes" 
        description="Explorez notre carnet de recettes gourmandes : plats sains, desserts raffinés et inspirations culinaires pour tous les goûts."
        keywords="recettes de cuisine, recettes saines, cuisine facile, gastronomie, desserts"
        url="/recettes"
      />
      <ScrollReveal className="text-center mb-24 lg:mb-32 mt-12 bg-vert-sauge/5 py-24 rounded-4xl">
        <h1 className="text-5xl md:text-7xl font-serif text-vert-profond mb-6">Le Carnet de Recettes</h1>
        <p className="text-lg md:text-xl font-light text-vert-profond/70 max-w-2xl mx-auto leading-relaxed px-4">
          Une collection précieuse de nos inspirations culinaires, pensée pour sublimer vos moments de partage.
        </p>
      </ScrollReveal>
      
      <ScrollReveal className="flex flex-col md:flex-row gap-12 lg:gap-24 relative" delay={0.2}>
        <FilterSidebar />
        <RecipeContent />
      </ScrollReveal>
    </div>
  );
};

export default Recipes;
