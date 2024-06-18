// src/components/RecipeList.js
import React from 'react';

const RecipeList = ({ recipes, onSelect }) => (
  <div className="recipe-list">
    {recipes.map((recipe) => (
      <div key={recipe.idMeal} onClick={() => onSelect(recipe)}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h2>{recipe.strMeal}</h2>
      </div>
    ))}
  </div>
);

export default RecipeList;
