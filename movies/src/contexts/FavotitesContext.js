import { createContext, useReducer } from "react";
import favoritesReducer from "../reducers/favoritesReducer";
const FavoritesContext = createContext();

const FavoritesProvider = ({childen}) => {
    const [state, dispatch] = useReducer(favoritesReducer, {favorites: [] })

    return (
        <FavoritesContext.Provider value={{ state, dispatch }}>
        {children}
      </FavoritesContext.Provider>
    );
};
export { FavoritesContext, FavoritesProvider };