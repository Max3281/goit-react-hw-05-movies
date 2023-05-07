const { Link } = require('react-router-dom');

const ErrorPage = () => {
  return (
    <section className="error-page">
      <p className="error-text">
        Sorry, there was found nothing. You may return to the Home page or
        search for another title.
      </p>
      <Link to={'/'} className="error-page-exit">
        Go home
      </Link>
      <Link to={'/movies'} className="error-page-exit">
        Search another article
      </Link>
    </section>
  );
};

export default ErrorPage;
