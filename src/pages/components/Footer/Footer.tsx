import { Logo } from '../Logo/Logo'
import style from './Footer.module.scss'


export function Footer(){
    return(
        <footer className={style["footer"]}>
                        <Logo
                         dimension="big"
                         justify="right"
                        />
{/* 
                    <strong className={style["footer__logo"]}>
                        <p>Reviva Fashion</p>
                        <small>by RCHLO</small>
                    </strong> */}

                    <div className={style["footer__infos"]}>


                        <ul className={style["footer__infos--menu"]}>
                            <li>Menu</li>
                            <li>Página inicial</li>
                            <li>Moda Masculina</li>
                            <li>Moda Feminina</li>
                            <li>Moda Infatil</li>
                            <li>Manual de Moda</li>
                        </ul>
                        <ul className={style["footer__infos--networks"]}>
                            <li>Siga-nos nas redes sociais</li>
                            <div className={style["footer__icons--medias"]}>
                                <li><img src="../images/facebook.png" alt="logo facebook" /></li>
                                <li><img src="../images/twitter.png" alt="logo twitter" /></li>
                                <li><img src="../images/instagram.png" alt="logo instagram" /></li>
                                <li><img src="../images/youtube.png" alt="logo youtube" /></li>
                            </div>

                        </ul>
                        <ul className={style["footer__infos--contact"]}>
                            <li>Entre em contato</li>

                            <li>Contato</li>
                            <li>reviva@rchlo.com.br</li>
                            <div className={style["footer__icons"]}>
                                <li>WhatsApp</li>
                                <i className={style["footer__icons--whatsapp"]}></i>
                            </div>
                            <div className={style["footer__icons"]}>
                                <li>(11) 2123-3321</li>
                                <i className={style["footer__icons--contact"]}></i>
                            </div>

                        </ul>
                        <ul className={style["footer__infos--newsletter"]}>
                            <li>Assine nossa newsletter</li>
                            <div className={style["footer__input"]}>
                                <li>
                                    <input className={style["input-newsletter"]} type="text" />
                                </li>
                                <li>
                                    <button className={style["newsletter-button"]}>ASSINAR JÁ</button>
                                </li>
                            </div>

                        </ul>

                    </div>

                </footer>

    )
}