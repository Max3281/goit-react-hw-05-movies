async function TrendingMoviesFetch() {
  const trendMovieFetch = await fetch(
    'https://api.themoviedb.org/3/trending/all/week?api_key=41c0b9645bddc9a823d77ecad6385ef5'
  );
  const parseTrendMovie = trendMovieFetch.json();
  return parseTrendMovie;
}

export default TrendingMoviesFetch;
