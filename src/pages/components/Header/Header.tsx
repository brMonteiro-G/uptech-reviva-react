import style from './Header.module.scss';
import { Navbar } from '../Navbar/Navbar';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';


export function Header(){
  const route = {
    label:'cart',
    to:'/cart'
  };
  return(
    <header>
      <div className={style['header']}>
        <Logo
          dimension='big'
          justify='left'
        />

        <div>
          <Link className={style['header__button']} to={route.to}>Botão para carrinho de compras</Link>
        </div>
      </div>
       
      <Navbar/>
    </header>
  );
} 