async function getPersonPoster(id) {
  const getPoster = await fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=41c0b9645bddc9a823d77ecad6385ef5`
  );

  const parsePoster = getPoster.json();

  return parsePoster;
}

export default getPersonPoster;
