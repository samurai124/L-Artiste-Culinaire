import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, selectSelectedCategory } from '../../features/recipes/recipesSlice';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectSelectedCategory);
  
  const categories = ['Toutes', 'Plat principal', 'Entrée', 'Dessert', 'Boisson'];

  return (
    <aside className="w-full md:w-64 shrink-0 px-4 md:px-0 mb-12 md:mb-0">
      <div className="sticky top-40">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-vert-sauge mb-8">
          Saisons & Inspirations
        </h2>
        
        <nav className="flex flex-row md:flex-col gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-4 md:pb-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => dispatch(filterByCategory(cat))}
                className={`text-left text-lg whitespace-nowrap md:whitespace-normal transition-all duration-300 font-serif ${
                  isActive 
                    ? 'text-vert-profond text-2xl ml-0 md:ml-4 border-b-2 md:border-b-0 md:border-l-2 border-vert-sauge md:pl-4 pb-1 md:pb-0' 
                    : 'text-vert-profond/40 hover:text-vert-sauge'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default FilterSidebar;
