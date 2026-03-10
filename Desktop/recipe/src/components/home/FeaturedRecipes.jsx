import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllRecipes } from '../../features/recipes/recipesSlice';
import RecipeCard from '../recipes/RecipeCard';

const FeaturedRecipes = () => {
  const recipes = useSelector(selectAllRecipes);
  const featured = recipes.slice(0, 4);

  return (
    <section className="mb-32">
      <div className="flex flex-col items-center text-center mb-16 px-4">
        <span className="text-vert-sauge uppercase tracking-[0.2em] text-sm mb-4 font-medium">Coups de Coeur</span>
        <h2 className="text-4xl md:text-5xl font-serif text-vert-profond mb-6">Les Trésors du Chef</h2>
        <div className="w-16 h-px bg-vert-sauge/50"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 px-4">
        {featured.map((recipe, index) => (
          <div key={recipe.id} className={index % 2 !== 0 ? 'md:mt-16 lg:mt-24' : ''}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
