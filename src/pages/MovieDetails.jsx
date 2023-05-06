import findMovie from 'API/findMovie';
import getMovieDetails from 'API/getMovieDetails';
// import getMoviePoster from 'API/getMoviePoster';
import TrendingMoviesFetch from 'API/trendingMovieFetch';

import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const location = useLocation();

  const [movieId, setMovieId] = useState(Number(0));
  const [detail, setDetail] = useState({});

  const checkLocation = location.state.from.pathname;

  switch (checkLocation) {
    case '/':
      try {
        TrendingMoviesFetch()
          .then(({ results }) => {
            const findTheMovie = results.filter(
              echo => echo.title === moviesId || echo.name === moviesId
            );

            setMovieId(Number(findTheMovie[0].id));
          })
          .catch(error => console.log(error));
      } catch (error) {
        console.log(error);
      }
      break;
    case '/movies':
      findMovie(moviesId)
        .then(({ results }) => {
          const findTheMovie = results.filter(
            echo => echo.title === moviesId || echo.name === moviesId
          );

          setMovieId(Number(findTheMovie[0].id));
        })
        .catch(error => console.log(error));
      break;
    default:
      break;
  }

  useEffect(() => {
    if (movieId === 0) return;

    // const getPoster = getMoviePoster(movieId).then(ec => console.log(ec));

    getMovieDetails(movieId)
      .then(rej => {
        setDetail(rej);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  // if (detail && !detail.success) return;

  console.log(detail);

  if (detail.status_code)
    return (
      <section>
        <p>{detail.status_message}</p>
        <p>You may return to the Home page or search for another article</p>
        <ul>
          <li>
            <Link to="/">Go home</Link>
          </li>
          <li>
            <Link to="/movies">Search another article</Link>
          </li>
        </ul>
      </section>
    );

  if (detail.genres)
    return (
      <>
        <Link to={location.state?.from || '/'} state={{ from: location }}>
          Go back
        </Link>
        <section>
          <img src="" alt="" />
          <div>
            <h1>
              <p>{detail.title}</p>
              <p>{detail.release_date}</p>
            </h1>
            <p>User score: {detail.vote_average}</p>

            <h2>Overview</h2>
            <p>{detail.overview}</p>

            <h2>Genres</h2>
            <ul>
              {detail.genres.map(gen => (
                <li key={gen.id}>{gen.name}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{ from: location.state.from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location.state.from }}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      </>
    );
};

export default MovieDetails;
