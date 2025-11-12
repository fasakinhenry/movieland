import { useEffect, useState } from 'react';
import './index.css';
import SearchIcon from './images/search.svg';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies('Spiderman');
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
    </div>
  );
};

export default App;
