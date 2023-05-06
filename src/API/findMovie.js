async function findMovie(name) {
  const getMovie = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=41c0b9645bddc9a823d77ecad6385ef5&language=en-US&query=${name}&page=1&include_adult=true`
  );

  const parseMovie = getMovie.json();

  return parseMovie;
}

export default findMovie;
