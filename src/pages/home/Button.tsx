import { verify } from "crypto"
import React, { useState } from "react"
import Inventory from "../inventory"
import style from "./index.module.scss"
import { Items } from "./products"

export interface Id {
    id: number
}

export function Button(props: Id) {

    const [list, setList] = useState(Inventory.inventory)

    function verifyQuantity(element: Items): void {
        if (element.available_amount - 1 < 0) {
            return alert("Produto esgotado")

        }
        element.available_amount = element.available_amount - 1
        setList([...list])
        localStorage.setItem("Items", JSON.stringify(list))
        alert("Produto adicionado ao carrinho")
    }

    return (
        <div className={style["background-bag"]}>
            <button onClick={() => {
                const element = list[props.id]
                verifyQuantity(element)
            }

            } className={style["desc-button"]}> POR NA SACOLA</button>
            <button id="cart-button" className={style["shopping-cart"]} disabled></button>
        </div>
    )
}


