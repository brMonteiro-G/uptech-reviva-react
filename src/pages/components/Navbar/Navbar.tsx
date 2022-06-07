import style from './Navbar.module.scss'

export function Navbar() {
    return (
        <nav>
            <ul className={style["navbar"]}>
                <li> <a className={style["navbar__link"]} href="#">Página inicial</a> </li>
                <li> <a className={style["navbar__link"]} href="#">Moda Masculina</a> </li>
                <li> <a className={style["navbar__link"]} href="#"> Moda Feminina</a></li>
                <li> <a className={style["navbar__link"]} href="#"> Moda Infatil</a></li>
                <li> <a className={style["navbar__link"]} href="#">Manual de Moda</a></li>
            </ul>

        </nav>
    )
}