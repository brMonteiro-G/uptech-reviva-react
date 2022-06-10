import { ProductReview } from "../components/CartPage/ProductReview/ProductReview";

export function Cart() {
    return <>

        <main>

            <fieldset className="searchBar">
                <input className="searchBar__input" placeholder="Faça sua busca aqui se já souber o que está procurando..."
                    type="text" />

                <button className="searchBar__button" >
                </button>

            </fieldset>
            {/* componente title */}
            <h1>Minha sacola</h1> 
            <section className="review">
                <ProductReview/>
            </section>

        </main>

    </>
}