import getMovieDetails from 'API/getMovieDetails';
import MovieAdditionalInfo from 'components/MovieAdditionalInfo/MovieAdditionalInfo';
import MovieInfoBlock from 'components/MovieInfoBlock/MovieInfoBlock';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const location = useLocation();

  const [detail, setDetail] = useState(null);
  const [zeroDetails, setZeroDetails] = useState(false);

  const checkLocation = location.state?.from;

  useEffect(() => {
    getMovieDetails(moviesId)
      .then(rej => {
        if (rej.status_code === 34) return setZeroDetails(true);

        setDetail(rej);
        console.log(rej);
      })
      .catch(err => console.log(err));
  }, [moviesId]);

  return (
    <>
      <Link
        to={checkLocation || '/'}
        state={{ from: location }}
        className="link-style"
      >
        Go back
      </Link>

      {zeroDetails && <ErrorPage />}

      {detail && <MovieInfoBlock data={detail} />}

      {detail && <MovieAdditionalInfo loc={checkLocation} />}
    </>
  );
};

export default MovieDetails;
