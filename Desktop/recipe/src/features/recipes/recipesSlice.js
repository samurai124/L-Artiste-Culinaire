import { createSlice } from '@reduxjs/toolkit';
import recipesData from './recipesData.json';

const initialState = {
    allRecipes: recipesData,
    filteredRecipes: recipesData,
    selectedCategory: 'Toutes',
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        filterByCategory: (state, action) => {
            state.selectedCategory = action.payload;
            if (action.payload === 'Toutes') {
                state.filteredRecipes = state.allRecipes;
            } else {
                state.filteredRecipes = state.allRecipes.filter(
                    recipe => recipe.categorie === action.payload
                );
            }
        },
    },
});

export const { filterByCategory } = recipesSlice.actions;

export const selectAllRecipes = (state) => state.recipes.allRecipes;
export const selectFilteredRecipes = (state) => state.recipes.filteredRecipes;
export const selectSelectedCategory = (state) => state.recipes.selectedCategory;

export const selectRecipeById = (state, recipeId) =>
    state.recipes.allRecipes.find(r => r.id === recipeId);

export default recipesSlice.reducer;
