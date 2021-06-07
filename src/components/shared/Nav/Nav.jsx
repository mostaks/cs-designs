import { memo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import routes from './routes';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useRouter();
  const isActive = (path) => (pathname === path ? 'active' : '');
  return (
    <nav id="nav">
      {toggle ? (
        <ul>
          {routes.map(({ route, icon }) => (
            <li key={route}>
              {route === '/gallery' ? (
                <a href={route} className={isActive(route)}><span className={`icon fa-${icon}`} /></a>
              ) : (
                <>
                  <Link href={route}>
                    <a className={isActive(route)}><span className={`icon fa-${icon}`} /></a>
                  </Link>
                </>
              )}
            </li>
          ))}
          <li>
            <a href="#"><span className="icon fa-times" onClick={() => setToggle(false)} role="none" /></a>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <a href="#">
              <span role="none" onClick={() => setToggle(true)} className="icon fa-bars" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default memo(Nav);
