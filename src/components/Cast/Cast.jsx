import receiveCredits from 'API/receiveCredits';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { moviesId } = useParams();

  const [credits, setCredits] = useState(null);

  const posterURL = 'https://image.tmdb.org/t/p/w500';
  const notFoundURL = <div className="actor-img-placeholder"></div>;

  useEffect(() => {
    receiveCredits(moviesId)
      .then(rej => {
        const actorsList = rej.cast.filter(
          act => act.known_for_department === 'Acting'
        );

        setCredits(actorsList);
      })
      .catch(err => console.log(err));
  }, [moviesId]);

  console.log(credits);

  if (credits)
    return (
      <ul className="cast-list-block">
        {credits.map(tao => (
          <li key={tao.cast_id} className="cast-list-item">
            <a
              href={`https://www.themoviedb.org/person/${tao.id}-${tao.name}`}
              className="text"
            >
              {(tao.profile_path && (
                <img
                  src={posterURL + tao.profile_path}
                  alt={tao.name}
                  className="actor-img"
                />
              )) ||
                notFoundURL}
              <p className="actor-text">{tao.name}</p>
              {tao.character && (
                <p className="actor-text curv">as: {tao.character}</p>
              )}
            </a>
          </li>
        ))}
      </ul>
    );
};

export default Cast;
