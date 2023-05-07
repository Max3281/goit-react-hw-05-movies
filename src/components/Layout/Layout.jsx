import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <ul className="header-navigation-list">
          <li className="navigation-unit">
            <NavLink
              to="/"
              state={{ from: location }}
              className="header-link-style"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation-unit">
            <NavLink
              to="/movies"
              state={{ from: location }}
              className="header-link-style"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main className="main">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
