import { createContext, useReducer } from "react";
import searchReducer from "../reducers/searchReducer";
const SearchContext = createContext();

const SearchProvider = ({children}) => {
    const [state, dispatch] = useReducer(searchReducer, { searchResults: [] });

    return (
        <SearchContext.Provider value={{state, dispatch}}>
            {children}
        </SearchContext.Provider>
    )
};
export { SearchContext, SearchProvider};