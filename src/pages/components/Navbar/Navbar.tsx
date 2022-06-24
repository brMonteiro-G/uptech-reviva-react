import { useRecoilValue } from 'recoil';
import { linksState } from 'state/atoms/static/linksState';
import {NavbarLink, NavbarTemplate} from './NavbarStyle';

export function Navbar() {
  const pageLinks = useRecoilValue(linksState);

  return (
    <nav> 
      <NavbarTemplate>
        {pageLinks.map((item, index) => {
          return (
            <li key={index}>
              <NavbarLink to={item.href} >{item.page}</NavbarLink>
            </li>
          );
        })}

      </NavbarTemplate>

    </nav>
  ); 
} 