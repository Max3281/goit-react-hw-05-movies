import MovieItem from '../components/MovieItem/MovieItem';
import TrendingMoviesFetch from '../API/trendingMovieFetch';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    TrendingMoviesFetch().then(rek => {
      setData(rek.results);
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieItem data={data} />
    </div>
  );
};

export default Home;
