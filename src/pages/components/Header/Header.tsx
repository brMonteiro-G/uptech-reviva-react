import style from './Header.module.scss';
import { Navbar } from '../Navbar/Navbar';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { Dimensions } from '../../components/Logo/LogoConfig';
import { HeaderButton, HeaderTemplate,HeaderLinkButton } from './HeaderStyle';



export function Header(){
  const route = {
    label:'cart',
    to:'/cart'
  };
  return(
    <header>
      <HeaderTemplate>
        <Logo
          dimension={Dimensions.MEDIUM}
          justify='left'
        />

        <HeaderButton>
          <HeaderLinkButton  to={route.to}  >Botão para carrinho de compras</HeaderLinkButton>
        </HeaderButton>
      </HeaderTemplate>
       
      <Navbar/>
    </header>
  );
} 