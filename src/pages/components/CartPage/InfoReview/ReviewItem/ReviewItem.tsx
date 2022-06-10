import style from "./ReviewItem.module.scss";

export function ReviewItem(){
    return(

        <>
        <p id="name">Blusa feminina Kaienne</p>

        <fieldset className={style["details__button--size"]}>

            <div className={style["details__button--size--p"]}>
                <input type="radio" name="size" value="0" id="radio-1" />
                <label htmlFor="radio-1">Tamanho P</label>
            </div>

            <div className={style["details__button--size--m"]}>
                <input type="radio" name="size" value="1" id="radio-2" />
                <label htmlFor="radio-2">Tamanho M</label>
            </div>

            <div className={style["details__button--size--g"]}>
                <input type="radio" name="size" value="2" id="radio-3" />
                <label htmlFor="radio-3">Tamanho G</label>
            </div>

        </fieldset>
        <p>R$129,90</p>

        <div className={style["review__select"]}>
            <button id="plus">+</button>
            <input id="amount" type="text" value="0" readOnly={true} />
            <button id="minus">-</button>
        </div>
        <p>R$129,90</p>

    </>
    )
}