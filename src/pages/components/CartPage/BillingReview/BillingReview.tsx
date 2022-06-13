import style from './BillingReview.module.scss'

export function BillingReview() {
    return (


        <div className={style.review__payment}>
            <div className={style["review__payment--config"]}>
                <p>Total     R$129,90</p>
                <p>2x64,50 = R$140,00</p>
                <p>2x56,50 = R$150,00</p>
                <button>Ir para pagamento</button>
            </div>
            

        </div>
    )
}