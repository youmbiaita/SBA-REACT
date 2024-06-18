import React from 'react';
import { useRecipeContext } from '../contexts/RecipeContext';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import RecipeDetails from '../components/RecipeDetails';
import { fetchRecipes } from '../api/fetchRecipe';

const Home = () => {
  const { state, dispatch } = useRecipeContext();

  const handleSearch = async (query) => {
    const recipes = await fetchRecipes(query);
    dispatch({ type: 'SET_RECIPES', payload: recipes });
  };

  const handleSelectRecipe = (recipe) => {
    dispatch({ type: 'SELECT_RECIPE', payload: recipe });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        <div className="column">
          <RecipeList recipes={state.recipes} onSelect={handleSelectRecipe} />
        </div>
        <div className="column">
          <RecipeDetails recipe={state.selectedRecipe} />
        </div>
      </div>
    </div>
  );
};

export default Home;