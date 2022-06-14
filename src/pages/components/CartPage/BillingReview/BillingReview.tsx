import style from './BillingReview.module.scss'

export function BillingReview() {

    const getCart = JSON.parse(localStorage.getItem("Cart"))
    const cart = [...getCart]
    const total = cart.reduce((acc, currentValue) => (acc += currentValue.price),0)

    return (


        <div className={style.review__payment}>
            <div className={style["review__payment--config"]}>
                {cart.map((productsInCart) => {
                    return (
                        <>
                            <p>2x{(productsInCart.price + productsInCart.price * 0.1).toFixed(2)} = R$ {productsInCart.price.toFixed(2)}</p>

                        </>
                    )
                })}


                <p>Total: R${total.toFixed(2)}</p>


                <button>Ir para pagamento</button>
            </div>


        </div>
    )
}