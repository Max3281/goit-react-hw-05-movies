import receiveReviews from 'API/receiveReviews';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { moviesId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    receiveReviews(moviesId)
      .then(rej => {
        setReviews(rej.results);
      })
      .catch(err => console.log(err));
  }, [moviesId]);

  if (reviews && reviews.length === 0)
    return (
      <div className="zero-reviews">
        Sorry, there are no reviews for this specific title
      </div>
    );

  if (reviews)
    return (
      <ul className="reviews-block-list">
        {reviews.map(ponch => (
          <li key={ponch.author}>
            <h2 className="reviewer-name">{ponch.author}</h2>
            <p className="review-text">{ponch.content}</p>
          </li>
        ))}
      </ul>
    );
};

export default Reviews;
