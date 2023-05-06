import TrendingMoviesFetch from 'API/trendingMovieFetch';
import findMovie from 'API/findMovie';
import receiveCredits from 'API/receiveCredits';
// import getPersonPoster from 'API/getPersonPoster';

import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Cast = () => {
  const { moviesId } = useParams();
  const location = useLocation();

  const [movieId, setMovieId] = useState(Number(0));
  const [credits, setCredits] = useState(null);

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

    receiveCredits(movieId)
      .then(rej => {
        const actorsList = rej.cast.filter(
          act => act.known_for_department === 'Acting'
        );

        setCredits(actorsList);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  if (credits)
    return (
      <ul>
        {credits.map(tao => (
          <li key={tao.cast_id}>
            <a href={`https://www.themoviedb.org/person/${tao.id}-${tao.name}`}>
              <p>
                {tao.name} / {tao.character}
              </p>
            </a>
          </li>
        ))}
      </ul>
    );
};

export default Cast;
