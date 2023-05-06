async function getMovieDetails(id) {
  const getDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=41c0b9645bddc9a823d77ecad6385ef5`
  );

  const parseDetails = getDetails.json();

  return parseDetails;
}

export default getMovieDetails;
