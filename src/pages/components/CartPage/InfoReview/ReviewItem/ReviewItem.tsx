import { Items } from "../../../windowShopper/Products";
import style from "./ReviewItem.module.scss";

interface ProductsOnCartProps {
    // unit:number
    item: Items | undefined 
}

export function ReviewItem({item}: ProductsOnCartProps) {
    //props = Object.values(props)
    //console.log(props);


    return (

        <>
            {/* { */}
                {/* props.map((products) => { */}
                    {/* return ( */}

                        <>

                            <p id="name">{item.name}</p>
                            {/* pode virar componente */}
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
                            <p className={style["review__price"]}>{item.price.toFixed(2)}</p>
                            <div className={style["review__select"]}>
                                <div>
                                    <button id="plus">+</button>
                                </div>
                                {/* {props.unit} */}
                                <div>
                                    <input id="amount" type="text" value="0" readOnly={true} />
                                </div>
                                <div>
                                    <button id="minus">-</button>
                                </div>
                            </div>
                            <p>R$129,90</p>
                        </>
                    {/* ) */}
                {/* } */}
                {/* ) */}
            {/* } */}
        </>

    )
}