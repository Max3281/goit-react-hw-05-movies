import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <ul>
        <li>
          <NavLink to="/" state={{ from: location }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" state={{ from: location }}>
            Movies
          </NavLink>
        </li>
      </ul>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
