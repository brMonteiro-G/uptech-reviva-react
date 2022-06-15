import { linksState } from 'pages/state/atoms/linksState';
import { useRecoilValue } from 'recoil';
import style from './Navbar.module.scss';

export function Navbar() {
  const pageLinks = useRecoilValue(linksState);

  return (
    <nav>
      <ul className={style['navbar']}>
        {pageLinks.map((link, index) => {
          return (
            <li key={index}>
              <a className={style['navbar__link']} href="#">{link}</a>
            </li>
          );
        })}

      </ul>

    </nav>
  );
} 