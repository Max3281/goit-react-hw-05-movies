async function receiveCredits(id) {
  const receiveCredits = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=41c0b9645bddc9a823d77ecad6385ef5&language=en-US`
  );

  const parseCredits = receiveCredits.json();

  return parseCredits;
}

export default receiveCredits;
