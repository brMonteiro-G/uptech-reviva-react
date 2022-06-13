import React, { useState } from "react"
import Inventory from "../../inventory"
import style from "./Button.module.scss"
import { Items } from "../windowShopper/Products"

export interface Id {
    id: number
}

export function Button(props: Id) {

    const [productsOnStorage, setProductsOnStorage] = useState(Inventory.inventory)
    const [productsOnCart, setProductsOnCart] = useState([])

    function verifyQuantity(element: Items): void {
        if (element.available_amount - 1 < 0) {
            return alert("Produto esgotado")

        }
        element.available_amount = element.available_amount - 1
        UpdateStorage()
        alert("Produto adicionado ao carrinho")
    }

    function UpdateStorage() {
        setProductsOnStorage([...productsOnStorage])
        localStorage.setItem("Items", JSON.stringify(productsOnStorage))
    }

    function addToCart(element:Items){
    }

    return (
        <div className={style["background-bag"]}>
            <button onClick={() => {
                const element = productsOnStorage[props.id]
                verifyQuantity(element)
            }

            } className={style["desc-button"]}> POR NA SACOLA</button>
            <button id="cart-button" className={style["shopping-cart"]} disabled></button>
        </div>
    )
}

 
