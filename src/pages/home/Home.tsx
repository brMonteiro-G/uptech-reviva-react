import React from "react"
import style from "./Home.module.scss"
import productsStyle from "../components/windowShopper/Products.module.scss"
import Inventory from "../inventory";
import Products from "../components/windowShopper/Products";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Slogan } from "../components/Slogan/Slogan";


export default class Home extends React.Component {
    productsContainer = Inventory.inventory

    render() {
        return (
            <>
                <main className={style["main"]}>
                    <SearchBar />
                    <p className={style["main__subtitle--first"]}>Últimos lançamentos</p>

                    <section className={productsStyle["grid-prod"]}>
                        <Products
                            texto="section1"
                        />

                    </section>

                    <Slogan />

                    <p className={style["main__subtitle--second"]}>Coleção de vintage 2022</p>
                    <section className={productsStyle["grid-prod"]}>
                        <Products
                            texto="section2"
                        />

                    </section>

                    <p className={style["main__subtitle--third"]}>Na dúvida sobre combinar suas roupas e ficar incrível?
                    </p>
                    <p className={style["main__subtitle--fourth"]}> Confira nossas dicas em nosso blog.</p>



                    <section className={style["article"]}>

                    
                        <article className={style["article--left"]}>
                            <img src={process.env.PUBLIC_URL + "./images/collection-clothes-girls.jpg"} alt="Capa de coleção mulheres 2021" />
                            <p>A <strong>coleção Women 2021 </strong> traz tudo que uma mulher precisa para mostrar exuberância e
                            trazer um ar leve aos seus looks</p>
                        </article>
                       

                    

                    <div className={style["article--middle"]}>
                        <article className={ style["article__middle--top"]}>
                            <img src={process.env.PUBLIC_URL + "./images/collection-clothes-classic.jpg"} alt="Capa de coleção clássica" />
                            <p className={style["middle--text"]}>Coleção Classic 80s</p>

                        </article>
                        <article className={ style["article__middle--bottom"]}>
                            <img src={process.env.PUBLIC_URL + "./images/collection-clothes-street.jpg"} alt="Capa de coleção street" />
                            <p className={style["middle--text"]}>Coleção Street 90s</p>

                        </article>

                    </div>
                    {/* <div className={style["article--right"]}>
                        <p className={style["first-middle-text"]}>Coleção Classic 80s</p>
                        <p className={style["second-middle-text"]}>Coleção Street 90s</p>
                    </div> */}

                </section>
                </main>

                

            </>


        )
    }
}

