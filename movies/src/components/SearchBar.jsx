import { useState, useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { fetchMovies } from '../api';

const SearchBar = () => {
    const [bar, setBar] = useState("");
    const {dispatch} = useContext(SearchContext);

    const handleSearch = async (e) => {
        e.preventDefault();

        const results = await fetchMovies(bar);
        dispatch({type: "SET_SEARCH_RESULTS", payload: results })
    }

    return (
        <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
    )
}
export default SearchBar;