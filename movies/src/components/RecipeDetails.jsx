// src/components/RecipeDetails.js
import React from 'react';

const RecipeDetails = ({ recipe }) => (
  <div className="recipe-details">
    {recipe ? (
      <>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p>{recipe.strInstructions}</p>
        <ul>
          {Object.keys(recipe)
            .filter((key) => key.includes('Ingredient') && recipe[key])
            .map((key) => (
              <li key={key}>{recipe[key]}</li>
            ))}
        </ul>
      </>
    ) : (
      <p>Select a recipe to see the details.</p>
    )}
  </div>
);

export default RecipeDetails;
