import React from 'react';
import { useRecipeContext } from '../contexts/RecipeContext';

const RecipeList = ({ recipes }) => {
  const { dispatch } = useRecipeContext();

  const handleSelectRecipe = (recipe) => {
    dispatch({ type: 'SELECT_RECIPE', payload: recipe });
    dispatch({ type: 'ADD_FAVORITE', payload: recipe }); // Add to favorites when clicked
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} onClick={() => handleSelectRecipe(recipe)}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h2>{recipe.strMeal}</h2>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;