import MovieItem from '../../components/MovieItem/MovieItem';
import TrendingMoviesFetch from '../../API/trendingMovieFetch';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    TrendingMoviesFetch().then(rek => {
      setData(rek.results);
    });
  }, []);

  return (
    <>
      <h1 className="home-header">Trending today</h1>
      <MovieItem data={data} />
    </>
  );
};

export default Home;
