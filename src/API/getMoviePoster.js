async function getMoviePoster(id) {
  const getPoster = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=41c0b9645bddc9a823d77ecad6385ef5&language=en-US`
  );

  const parsePoster = getPoster.json();

  return parsePoster;
}

export default getMoviePoster;
