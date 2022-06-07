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

            {/* <div className={style["header__logo"]}>
                <a className={style["header__logo--index"]} href="../html/index.html">
                    <h1>Reviva Fashion</h1>
                    <small>by RCHLO</small>
                </a>
            </div> */}
            <div>
                <a className={style["header__button"]} href="cart.html">Botão para carrinho de compras</a>
            </div>
        </div>
       
        <Navbar/>
    </header>
    )
}