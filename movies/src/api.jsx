const API_KEY = "d40d7314";
const API_URL = `http://www.omdbapi.com/?i=tt3896198&?apikey=${API_KEY}`;

export const fetchMovies = async (bar) => {
  const response = await fetch(`${API_URL}&s=${bar}`);
  const data = await response.json();
  return data.Search || [];
};