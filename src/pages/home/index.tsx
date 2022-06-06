import React from "react"
import style from "./index.module.scss"
import Inventory from "../inventory";
import Products from "./products";

class Index extends React.Component {
    productsContainer = Inventory.inventory

    render() {
        return (
            <>
                <header>
                    <div className={style["header"]}>
                        <div className={style["header__logo"]}>
                            <a className={style["header__logo--index"]} href="../html/index.html">
                                <h1>Reviva Fashion</h1>
                                <small>by RCHLO</small>
                            </a>
                        </div>
                        <div>
                            <a className={style["header__button"]} href="cart.html">Botão para carrinho de compras</a>
                        </div>
                    </div>
                    <nav>
                        <ul className={style["navbar"]}>
                            <li> <a className={style["navbar__link"]} href="#">Página inicial</a> </li>
                            <li> <a className={style["navbar__link"]} href="#">Moda Masculina</a> </li>
                            <li> <a className={style["navbar__link"]} href="#"> Moda Feminina</a></li>
                            <li> <a className={style["navbar__link"]} href="#"> Moda Infatil</a></li>
                            <li> <a className={style["navbar__link"]} href="#">Manual de Moda</a></li>
                        </ul>

                    </nav>
                </header>

                <main>
                    <fieldset className={style["searchBar"]}>
                        <input className={style["searchBar__input"]} id="name" name="search" placeholder="Faça sua busca aqui se já souber o que está procurando..."
                            type="text" />

                        <button className={style["searchBar__button"]} >
                        </button>

                    </fieldset>
                    <p className={style["main__subtitle--first"]}>Últimos lançamentos</p>

                    <section className={style["grid-prod"]}>
                        <Products
                            texto="section1"
                        />

                    </section>

                    <section className={style["slogan"]}>
                        <div className={style["slogan--text"]}>
                            <p className={style["normal"]}>
                                Fique por dentro de tudo que há de novidade no mundo da moda!
                            </p>
                            <p className={style["justify"]}>Baixe já nosso manual de moda!</p>
                        </div>

                        <strong className={style["logo--right"]}>
                            <p>Reviva Fashion</p>
                            <span>by RCHLO</span>
                        </strong>
                    </section>

                    <p className={style["main__subtitle--second"]}>Coleção de vintage 2022</p>
                    <section className={style["grid-prod"]}>
                        <Products
                            texto="section2"
                        />

                    </section>

                    <p className={style["main__subtitle--third"]}>Na dúvida sobre combinar suas roupas e ficar incrível?
                    </p>
                    <p className={style["main__subtitle--fourth"]}> Confira nossas dicas em nosso blog.</p>
                </main>

                {<footer className={style["footer"]}>
                    <strong className={style["footer__logo"]}>
                        <p>Reviva Fashion</p>
                        <small>by RCHLO</small>
                    </strong>

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
                                {/* <img src="../images/whatsapp.png" alt="logo whatsapp"/> */}
                            </div>
                            <div className={style["footer__icons"]}>
                                <li>(11) 2123-3321</li>
                                <i className={style["footer__icons--contact"]}></i>
                                {/* <img src="../images/telephone-call.png" alt="logo telefone"/> */}
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

                </footer>}

            </>


        )
    }
}
export default Index

//usar search and replace 