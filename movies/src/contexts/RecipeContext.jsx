// src/context/RecipeContext.js
import React, { createContext, useContext, useReducer } from 'react';

const RecipeContext = createContext();

const initialState = {
  recipes: [],
  selectedRecipe: null,
  favorites: []
};

const recipeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return { ...state, recipes: action.payload };
    case 'SELECT_RECIPE':
      return { ...state, selectedRecipe: action.payload };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);
