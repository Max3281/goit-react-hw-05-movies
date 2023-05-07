import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const MovieAdditionalInfo = ({ loc }) => {
  return (
    <>
      <section className="movie-add-info-block">
        <h3 className="more-info-header">Additional information</h3>
        <ul className="more-info-options">
          <li className="more-info">
            <Link to="cast" state={{ from: loc }} className="info-list-style">
              Cast
            </Link>
          </li>
          <li className="more-info">
            <Link
              to="reviews"
              state={{ from: loc }}
              className="info-list-style"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieAdditionalInfo;
