import { useEffect, useState } from 'react';
import './index.css';

import SearchIcon from './images/search.svg';

import MovieCard from './components/MovieCard';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies("Ben 10");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          type='text'
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
