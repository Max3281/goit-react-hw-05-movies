import { Link, useLocation } from 'react-router-dom';

const MovieItem = ({ data }) => {
  const location = useLocation();

  return (
    <ul className="movie-list">
      {data.map(val => (
        <li key={val.id}>
          <Link
            to={`/movies/${val.title ?? val.name}`}
            state={{ from: location }}
          >
            {val.title ?? val.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieItem;
