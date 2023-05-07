import { useEffect, useState } from 'react';
import findMovie from 'API/findMovie';
import MovieItem from 'components/MovieItem/MovieItem';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movieData, setMovieData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    findMovie(query).then(rook => setMovieData(rook.results));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.query.value.toLowerCase().trim();

    if (!query) return;

    setSearchParams({ query });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="movie-page-input">
        <input
          type="text"
          name="query"
          autoComplete="off"
          defaultValue={query}
          placeholder="Enter a movie name"
          className="movie-input-search"
        />
        <button type="submit" className="movie-search-button">
          Search
        </button>
      </form>
      {movieData && <MovieItem data={movieData} />}
    </>
  );
};

export default Movies;
