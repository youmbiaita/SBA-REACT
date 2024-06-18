const favoritesReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
        return { ...state, favorites: [...state.favorites, action.payload] };
      case 'REMOVE_FROM_FAVORITES':
        return { ...state, favorites: state.favorites.filter(movie => movie.imdbID !== action.payload) };
      default:
        return state;
    }
  };
  
  export default favoritesReducer;