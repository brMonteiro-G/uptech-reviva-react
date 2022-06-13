import style from './Header.module.scss'
import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../Logo/Logo'


export function Header(){
    return(
        <header>
        <div className={style["header"]}>
            <Logo
            dimension='big'
            justify='left'
            />

            <div>
                <a className={style["header__button"]} href="cart.html">Botão para carrinho de compras</a>
            </div>
        </div>
       
        <Navbar/>
    </header>
    )
} 