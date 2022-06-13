
import style from "./Products.module.scss"
import Inventory from "../../inventory"
import { ReactElement } from "react"
import { Button } from "../Button/Button"
//refatorar inventario 

export interface Items {
    name: string
    url: string,
    price: number,
    description: string,
    available_size: string[],
    available_amount: number,
    images: Array<Images>
}
export interface Images {
    url: string,
    description: string
}
export interface props {
    texto: string
}

let productsList: Array<Items> = Inventory.inventory

export default function Products(props: props) {

    function template(element: Items, index: number): ReactElement {
        return (<div className={`${style.boxModel}`} data-id={index}>

            <a href="#">
                <div className={style["div-image-buttons"]}>
                    <img className={style["img-prod"]} src={process.env.PUBLIC_URL + element.images[0].url} alt={element.images[0].description} />
                </div>
            </a>
            <div className={`${style.product__view}`}>
            <p className={style["product__view--name"]}>{element.name} </p>
            <p className={style["product__view--price"]}>R$ {element.price.toFixed(2)} </p>
            </div>

            <Button
                id={index} />

        </div>)
    }
    return (
        <>
            {
                productsList.map((element, index) => {
                    if (props.texto.includes("1")) {
                        if (index <= 3) {
                            return (template(element, index))
                        }
                    } if (props.texto.includes("2")) {
                        if (index >= 4) {
                            return (template(element, index))
                        }

                    }
                    Inventory.localStorageItem()
                }
                )

            }
        </>
    )
}


 