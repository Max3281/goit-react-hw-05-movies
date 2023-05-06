async function receiveReviews(id) {
  const receiveReviews = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=41c0b9645bddc9a823d77ecad6385ef5&language=en-US&page=1`
  );

  const parseReviews = receiveReviews.json();

  return parseReviews;
}

export default receiveReviews;
