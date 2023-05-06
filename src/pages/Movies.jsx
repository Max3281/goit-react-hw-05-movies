import { useState } from 'react';
import findMovie from 'API/findMovie';
import MovieItem from 'components/MovieItem/MovieItem';

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = e => {
    const searchNormalize = e.target.value.toLowerCase().trim();
    setSearch(searchNormalize);
  };

  const handleSubmit = e => {
    e.preventDefault();

    findMovie(search).then(rook => setMovieData(rook.results));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <MovieItem data={movieData} />
    </div>
  );
};

export default Movies;
