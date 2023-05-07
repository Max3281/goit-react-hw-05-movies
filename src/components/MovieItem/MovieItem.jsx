import { Link, useLocation } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
};

const MovieItem = ({ data }) => {
  const location = useLocation();

  const posterURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul className="movie-list">
      {data.map(val => {
        return (
          <li key={val.id} className="movie-page-card">
            <Link
              to={`/movies/${val.id}`}
              state={{ from: location }}
              style={linkStyle}
            >
              {(val.poster_path && (
                <img
                  src={posterURL + val.poster_path}
                  alt={val.name}
                  className="movie-page-poster"
                />
              )) || <div className="poster-placeholder"></div>}
              <p className="movie-page-title">{val.title ?? val.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieItem;
