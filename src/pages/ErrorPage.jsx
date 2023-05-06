const { Link } = require('react-router-dom');

const ErrorPage = () => {
  return (
    <section>
      <p>
        Sorry, there is no such page. You may return to the Home page or search
        for another article
      </p>
      <Link>Go home</Link>
      <Link>Search another article</Link>
    </section>
  );
};

export default ErrorPage;
