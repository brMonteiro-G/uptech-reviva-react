import { useState } from "react"
import style from "./Button.module.scss"
import { Items } from "../windowShopper/Products"
import { storageState } from "../../state/atoms/storageState"
import { useAddCart } from "../../state/hooks/useAddCart"
import { useRecoilValue } from "recoil"
import { CartProducts, cartState } from "../../state/atoms/cartState"
import { useUpdateStorage } from "../../state/hooks/useUpdateStorage"

export interface Id {
    id: string
}

export function Button(props: Id) {

    const updateStorage = useUpdateStorage()
    const addProductInCart = useAddCart()
    const storage = useRecoilValue(storageState)

    function verifyQuantity(element: Items): void {
        console.log("quero ver quando chegar em zero ");

        console.log(element.available_amount);

        if (element.available_amount - 1 < 0) {
            return alert("Produto esgotado")
            throw new Error("O Produto está esgotado no estoque")

        }
        const updateProduct: CartProducts = {
            ...element,
            units_in_cart: 0
        }

        addProductInCart(updateProduct)
        updateStorage(updateProduct)
        alert("Produto adicionado ao carrinho")
    }
    return (
        <div className={style["background-bag"]}>
            <button onClick={() => {

                const element = storage.find((item) => {
                    return item.id === props.id
                })

                verifyQuantity(element)

            }

            } className={style["desc-button"]}>POR NA SACOLA</button>
            <button id="cart-button" className={style["shopping-cart"]} disabled></button>
        </div>
    )
}


