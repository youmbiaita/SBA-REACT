// src/components/Favorites.js
import React from 'react';
import { useRecipeContext } from '../contexts/RecipeContext';

const Favorites = () => {
  const { state, dispatch } = useRecipeContext();

  const handleSelectRecipe = (recipe) => {
    dispatch({ type: 'SELECT_RECIPE', payload: recipe });
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {state.favorites.map((recipe) => (
        <div key={recipe.idMeal} onClick={() => handleSelectRecipe(recipe)}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
