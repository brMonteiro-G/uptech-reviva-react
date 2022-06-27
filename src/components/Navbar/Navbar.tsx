import { linksList as pageLinks} from 'pages/assets/linksList';
import {NavbarLink, NavbarTemplate} from './NavbarStyle';

export function Navbar() {

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