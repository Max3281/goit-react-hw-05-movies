import TrendingMoviesFetch from 'API/trendingMovieFetch';
import findMovie from 'API/findMovie';
import receiveReviews from 'API/receiveReviews';

import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Reviews = () => {
  const { moviesId } = useParams();
  const location = useLocation();

  const [movieId, setMovieId] = useState(Number(0));
  const [reviews, setReviews] = useState(null);

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

    receiveReviews(movieId)
      .then(rej => {
        setReviews(rej.results);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  console.log(reviews);

  if (reviews && reviews.length === 0)
    return <div>Sorry, there is no any reviews for this title</div>;

  if (reviews)
    return (
      <ul>
        {reviews.map(ponch => (
          <li key={ponch.author}>
            <div>
              {/* <img
                src={ponch.author_details.avatar_path.slice(1)}
                alt={ponch.author}
              /> */}
              <h2>{ponch.author}</h2>
            </div>
            <p>{ponch.content}</p>
          </li>
        ))}
      </ul>
    );
};

export default Reviews;
