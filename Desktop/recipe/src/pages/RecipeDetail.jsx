import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRecipeById, selectAllRecipes } from '../features/recipes/recipesSlice';
import { ArrowLeft, Clock, ChefHat, Users, Quote, PenTool, Lightbulb, Sparkles } from 'lucide-react';
import RecipeCard from '../components/recipes/RecipeCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import SEO from '../components/SEO';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useSelector(state => selectRecipeById(state, id));
  const allRecipes = useSelector(selectAllRecipes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif text-vert-profond mb-4">Recette introuvable</h1>
        <button onClick={() => navigate('/recettes')} className="text-vert-sauge underline">
          Retour au carnet
        </button>
      </div>
    );
  }

  const parseToISO8601 = (timeStr) => {
    if (!timeStr) return "PT0M";
    const parts = timeStr.toLowerCase().split(' ');
    let iso = "PT";
    parts.forEach(p => {
      if (p.includes('h')) iso += `${parseInt(p)}H`;
      if (p.includes('min')) iso += `${parseInt(p)}M`;
    });
    return iso === "PT" ? "PT0M" : iso;
  };

  const recipeSchema = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.titre,
    "image": [
      `https://lartiste-culinaire.com${recipe.image}`,
      ...(recipe.galerie || []).map(img => `https://lartiste-culinaire.com${img}`)
    ],
    "author": {
      "@type": "Person",
      "name": recipe.auteur || "L'Artiste Culinaire"
    },
    "datePublished": "2024-03-01",
    "description": recipe.descriptionCourte,
    "prepTime": parseToISO8601(recipe.tempsPreparation),
    "cookTime": parseToISO8601(recipe.tempsCuisson),
    "recipeYield": `${recipe.portions} personnes`,
    "recipeCategory": recipe.categorie,
    "recipeCuisine": "Française",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": recipe.valeursNutritionnelles.calories,
      "proteinContent": recipe.valeursNutritionnelles.proteines,
      "carbohydrateContent": recipe.valeursNutritionnelles.glucides,
      "fatContent": recipe.valeursNutritionnelles.lipides
    },
    "recipeIngredient": recipe.ingredients,
    "recipeInstructions": recipe.etapes.map((step, index) => ({
      "@type": "HowToStep",
      "name": `Étape ${index + 1}`,
      "text": step,
      "url": `https://lartiste-culinaire.com/recettes/${id}#step${index + 1}`
    }))
  };

  const relatedRecipes = allRecipes
    .filter(r => r.categorie === recipe.categorie && r.id !== recipe.id)
    .slice(0, 2);

  return (
    <article className="animate-fade-in pb-32">
      <SEO 
        title={recipe.titre}
        description={recipe.descriptionCourte}
        image={recipe.image}
        url={`/recettes/${id}`}
        type="article"
        schema={recipeSchema}
      />
      
      <button 
        onClick={() => navigate('/recettes')}
        className="flex items-center gap-2 text-vert-profond/60 hover:text-vert-profond transition-colors mb-12 sm:mb-16 mt-8 font-light"
      >
        <ArrowLeft size={18} />
        Retour aux recettes
      </button>

      <ScrollReveal className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-start mb-24" yOffset={0}>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-vert-sauge uppercase tracking-[0.2em] text-sm mb-6 font-medium">
            {recipe.categorie}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-vert-profond leading-[1.1] mb-10 text-balance">
            {recipe.titre}
          </h1>
          <p className="text-xl md:text-2xl font-light text-vert-profond/80 leading-relaxed mb-6 border-l-4 border-vert-sauge pl-6">
            {recipe.descriptionCourte}
          </p>
          
          {recipe.auteur && (
            <div className="flex items-center gap-4 mb-4 text-vert-profond/60">
              <span className="w-10 h-10 rounded-full bg-vert-sauge/20 flex items-center justify-center font-serif text-vert-profond">
                {recipe.auteur.charAt(0).toUpperCase()}
              </span>
              <span className="font-medium tracking-wide">Recette signée {recipe.auteur}</span>
            </div>
          )}
          
          {recipe.citation && (
            <div className="bg-gris-clair/30 p-8 rounded-3xl mb-12 relative overflow-hidden mt-6">
              <Quote size={80} className="absolute -top-4 -left-4 text-vert-sauge/10 z-0" />
              <p className="relative z-10 text-xl font-serif text-vert-profond italic leading-relaxed text-balance">
                "{recipe.citation}"
              </p>
            </div>
          )}

          {recipe.histoire && (
            <div className="mb-12">
              <h3 className="text-sm uppercase tracking-widest text-vert-sauge font-medium mb-4 flex items-center gap-2">
                <PenTool size={16} /> La Petite Histoire
              </h3>
              <p className="text-lg font-light text-vert-profond/70 leading-relaxed text-balance">
                {recipe.histoire}
              </p>
            </div>
          )}



          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-vert-sauge/20 mb-12">
            <div className="flex flex-col gap-2">
              <span className="text-vert-sauge flex items-center gap-2"><Clock size={18} /> Préparation</span>
              <span className="font-medium text-vert-profond text-lg">{recipe.tempsPreparation}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-vert-sauge mb-1">Cuisson</span>
              <span className="font-medium text-vert-profond text-lg">{recipe.tempsCuisson}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-vert-sauge flex items-center gap-2"><ChefHat size={18} /> Niveau</span>
              <span className="font-medium text-vert-profond text-lg">{recipe.niveau}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-vert-sauge flex items-center gap-2"><Users size={18} /> Portions</span>
              <span className="font-medium text-vert-profond text-lg">{recipe.portions} pers.</span>
            </div>
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] md:aspect-square w-full rounded-4xl md:rounded-[4rem] overflow-hidden shadow-soft relative group">
            <img 
              src={recipe.image} 
              alt={recipe.titre} 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-vert-sauge/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 w-full max-w-[1400px] mx-auto mb-32">
        
        <div className="w-full lg:w-1/3">
          <ScrollReveal>
             <div className="sticky top-40 bg-blanc-casse py-8 lg:p-12 rounded-4xl border border-gris-clair/50 shadow-soft relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-vert-sauge/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
               <h2 className="text-3xl font-serif text-vert-profond mb-10 relative z-10">Les Ingrédients</h2>
               <ul className="flex flex-col gap-4 relative z-10">
                 {recipe.ingredients.map((ing, idx) => (
                   <li key={idx} className="flex items-start gap-4 text-lg font-light pb-4 border-b border-gris-clair last:border-0">
                     <span className="w-1.5 h-1.5 rounded-full bg-vert-sauge shrink-0 mt-2.5"></span>
                     <span className="text-vert-profond block leading-relaxed">{ing}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </ScrollReveal>
        </div>

        
        <div className="w-full lg:w-2/3">
          <ScrollReveal><h2 className="text-4xl lg:text-5xl font-serif text-vert-profond mb-16 px-4 lg:px-0">La Préparation</h2></ScrollReveal>
          <div className="flex flex-col gap-16 lg:gap-24 relative pl-4 lg:pl-0">
            
            <div className="absolute left-9 lg:left-5 top-4 bottom-0 w-px bg-gris-clair/60 mix-blend-multiply"></div>
            
            {recipe.etapes.map((step, idx) => (
              <ScrollReveal key={idx} className="flex gap-8 lg:gap-12 relative z-10">
                <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-vert-profond text-blanc-casse font-serif text-xl z-10 md:ml-0 translate-y-1">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-vert-profond mb-4 font-serif">Étape {idx + 1}</h3>
                  <p className="text-lg md:text-xl font-light text-vert-profond/80 leading-relaxed max-w-2xl text-balance">
                    {step}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal>
            <div className="mt-20 p-10 bg-vert-sauge/5 rounded-4xl border border-vert-sauge/10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div>
                <h3 className="text-2xl font-serif text-vert-profond mb-2">Valeurs Nutritionnelles</h3>
                <p className="font-light text-vert-profond/60">Par portion indicative</p>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-10">
                <div className="text-center">
                  <span className="block text-2xl font-medium text-vert-sauge mb-1">{recipe.valeursNutritionnelles.calories}</span>
                  <span className="text-xs uppercase tracking-wider text-vert-profond/50">Calories</span>
                </div>
                <div className="w-px h-12 bg-vert-sauge/20 hidden md:block"></div>
                <div className="text-center">
                  <span className="block text-2xl font-medium text-vert-sauge mb-1">{recipe.valeursNutritionnelles.proteines}</span>
                  <span className="text-xs uppercase tracking-wider text-vert-profond/50">Protéines</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-medium text-vert-sauge mb-1">{recipe.valeursNutritionnelles.glucides}</span>
                  <span className="text-xs uppercase tracking-wider text-vert-profond/50">Glucides</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {(recipe.astuces?.length > 0 || recipe.dressage) && (
            <ScrollReveal className="mt-16 bg-blanc-casse p-12 md:p-16 rounded-[4rem] border border-gris-clair shadow-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-vert-sauge/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              {recipe.astuces?.length > 0 && (
                <div className="mb-12 relative z-10">
                  <h3 className="text-3xl font-serif text-vert-profond mb-8 flex items-center gap-3">
                    <Lightbulb className="text-vert-sauge" /> Les Astuces du Chef
                  </h3>
                  <ul className="space-y-6">
                    {recipe.astuces.map((astuce, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="text-vert-sauge text-2xl">•</span>
                        <p className="text-lg font-light text-vert-profond/80 leading-relaxed">{astuce}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {recipe.dressage && (
                <div className="relative z-10 pt-10 border-t border-vert-sauge/20">
                  <h3 className="text-3xl font-serif text-vert-profond mb-6 flex items-center gap-3">
                    <Sparkles className="text-vert-sauge" /> L'Art du Dressage
                  </h3>
                  <p className="text-lg font-light text-vert-profond/80 leading-relaxed italic border-l-2 border-vert-sauge pl-6">
                    {recipe.dressage}
                  </p>
                </div>
              )}
            </ScrollReveal>
          )}

        </div>
      </div>

      
      
      {recipe.galerie && recipe.galerie.length > 0 && (
        <ScrollReveal className="mb-32">
          <h2 className="text-center text-4xl font-serif text-vert-profond mb-16">Un Aperçu du Bonheur</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 min-h-[60vh]">
            
            <div className="w-full text-center rounded-[3rem] overflow-hidden group col-span-1 md:col-span-2">
              <img 
                src={recipe.galerie[0]} 
                alt={`${recipe.titre} - vue principale`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            
            
            <div className="grid grid-rows-2 gap-6 lg:gap-8 col-span-1">
              <div className="w-full rounded-[3rem] overflow-hidden group">
                 <img 
                    src={recipe.galerie[1] || recipe.image} 
                    alt="Détail préparation" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                 />
              </div>
              <div className="w-full rounded-[3rem] overflow-hidden group">
                 <img 
                    src={recipe.galerie[2] || recipe.galerie[0]} 
                    alt="Détail dressage" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                 />
              </div>
            </div>
          </div>
        </ScrollReveal>
      )}

      
      {relatedRecipes.length > 0 && (
          <ScrollReveal className="pt-24 border-t border-vert-sauge/20">
            <span className="text-vert-sauge uppercase tracking-[0.2em] text-sm mb-4 font-medium block text-center">Prolonger l'expérience</span>
            <h2 className="text-4xl font-serif text-vert-profond mb-16 text-center">Dans le même esprit</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
              {relatedRecipes.map(r => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          </ScrollReveal>
      )}

    </article>
  );
};

export default RecipeDetail;
