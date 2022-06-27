import { Navbar } from '../Navbar/Navbar';
import { Logo } from '../Logo/Logo';
import { Dimensions } from '../Logo/LogoConfig';
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