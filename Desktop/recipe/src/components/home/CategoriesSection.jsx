import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../features/recipes/recipesSlice';

const CategoriesSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const categories = [
    { title: 'Plat principal', desc: 'Des créations chaleureuses', img: '/images/gratin_dauphinois.png' },
    { title: 'Entrée', desc: 'Préludes de fraîcheur', img: '/images/croissants_saumon.png' },
    { title: 'Dessert', desc: 'Douceurs poétiques', img: '/images/tarte_citron.png' },
    { title: 'Boisson', desc: 'Élixirs parfumés', img: '/images/limonade.png' },
  ];

  const handleCategoryClick = (category) => {
    dispatch(filterByCategory(category));
    navigate('/recettes');
  };

  return (
    <section className="mb-32">
      <div className="flex justify-between items-end mb-16 px-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-vert-profond mb-4">L'Essence des Saisons</h2>
          <p className="text-vert-profond/70 font-light text-lg">Sélectionnés avec passion pour inspirer votre quotidien.</p>
        </div>
        <button 
          onClick={() => navigate('/recettes')}
          className="group flex items-center gap-3 text-vert-sauge font-medium hover:text-vert-profond transition-colors duration-300"
        >
          Toutes les catégories 
          <span className="bg-gris-clair/50 p-3 rounded-full group-hover:bg-vert-sauge/20 transition-colors">
            <ArrowRight size={18} />
          </span>
        </button>
      </div>
      
      <div className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar px-4">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            onClick={() => handleCategoryClick(cat.title)}
            className="group relative min-w-[320px] md:min-w-[420px] h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-soft shrink-0"
          >
            <div className="absolute inset-0 bg-vert-profond/20 group-hover:bg-vert-profond/40 transition-colors duration-500 z-10"></div>
            <img 
              src={cat.img} 
              alt={`Catégorie ${cat.title}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-10 z-20 w-full bg-gradient-to-t from-vert-profond/90 via-vert-profond/50 to-transparent">
              <span className="text-blanc-casse/80 text-sm tracking-wider font-light uppercase mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {cat.desc}
              </span>
              <h3 className="text-3xl font-serif text-blanc-casse transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {cat.title}
              </h3>
            </div>
            
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
              <ArrowRight size={20} className="text-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
