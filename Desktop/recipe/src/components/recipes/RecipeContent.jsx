import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredRecipes } from '../../features/recipes/recipesSlice';
import RecipeCard from './RecipeCard';

const RecipeContent = () => {
  const recipes = useSelector(selectFilteredRecipes);

  return (
    <div className="flex-grow">
      {recipes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center h-full">
          <p className="text-3xl font-serif text-vert-profond/40 mb-4">Aucune recette trouvée</p>
          <p className="font-light text-vert-profond/50">Veuillez sélectionner une autre catégorie.</p>
        </div>
      ) : (
        <div className="magazine-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeContent;
