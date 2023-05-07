const MovieInfoBlock = ({ data }) => {
  const { genres, poster_path, release_date } = data;

  const posterURL = 'https://image.tmdb.org/t/p/w500';
  const notFoundURL = '';

  const genresList = genres?.map(uuk => uuk.name).join('/ ');
  const poster = poster_path ? posterURL + poster_path : notFoundURL;
  const releaseDate = release_date ? release_date : '';

  console.log(data);

  return (
    <section className="movie-info-block">
      <img src={poster} alt={data.title} className="movie-block-poster" />
      <div className="color">
        <h1 className="movie-article">
          {data.title} ({releaseDate})
        </h1>
        <p className="movie-info">User score: {data.vote_average}</p>

        <h2 className="movie-article">Overview</h2>
        <p className="movie-info">{data.overview}</p>

        <h2 className="movie-article">Genres</h2>
        <p className="movie-info">{genresList}</p>
      </div>
    </section>
  );
};

export default MovieInfoBlock;
