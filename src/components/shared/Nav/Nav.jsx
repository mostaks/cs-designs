import { memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import routes from './routes';

const Nav = () => {
  const { pathname } = useRouter();
  const isActive = (path) => (pathname === path ? 'active' : '');
  return (
    <nav id="nav">
      <ul>
        {routes.map(({ route, icon }) => (
          <li key={route}>
            <Link href={route}>
              <a className={isActive(route)}><span className={`icon fa-${icon}`} /></a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(Nav);
