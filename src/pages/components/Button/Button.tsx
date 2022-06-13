import { useState } from "react"
import style from "./Button.module.scss"
import { Items } from "../windowShopper/Products"
import { storageState } from "../../state/atoms/storageState"
import { useAddCart } from "../../state/hooks/useAddCart"
import { useRecoilValue } from "recoil"
import { cartState } from "../../state/atoms/cartState"

export interface Id {
    id: number
}

export function Button(props: Id) {

    const productsInStorage = useRecoilValue(storageState)
    const addProductInCart = useAddCart()
    const teste = useRecoilValue(cartState)

    function verifyQuantity(element: Items): void {
        if (element.available_amount - 1 < 0) {
            return alert("Produto esgotado")

        }

        const updateProduct ={
            ...element
        }

        updateProduct.available_amount = updateProduct.available_amount - 1
        UpdateStorage(updateProduct)
        addProductInCart(updateProduct)
        console.log(productsInStorage);
       
        console.log(teste)
        
        
        alert("Produto adicionado ao carrinho")
    }

    function UpdateStorage(updateProduct:Items) {

        // const productsOnStorageArray = Object.values(productsOnStorage)
        // productsOnStorageArray.push([productsOnStorage])

        //setProductsOnStorage(previousStorage =>{
        //  const previousStorag = Object.values(previousStorage)
        //   return previousStorag.push(previousStorage)
        //   })
       
    }

    return (
        <div className={style["background-bag"]}>
            <button onClick={() => {
                const element = productsInStorage[props.id]                
                verifyQuantity(element)


            }

            } className={style["desc-button"]}> POR NA SACOLA</button>
            <button id="cart-button" className={style["shopping-cart"]} disabled></button>
        </div>
    )
}


