import { createContext, useReducer } from "react";
import searchReducer from "../reducers/searchReducer";
const searchContext = createContext();

const SearchProvider = ({children}) => {
    const [state, dispatch] = useReducer(searchReducer, { searchResults: [] });

    return (
        <searchContext.Provider value={{state, dispatch}}>
            {children}
        </searchContext.Provider>
    )
};
export { searchContext, SearchProvider};