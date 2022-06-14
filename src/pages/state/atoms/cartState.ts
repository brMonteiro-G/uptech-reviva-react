import { atom } from "recoil";
import { Items } from "../../components/windowShopper/Products";


export interface CartProducts extends Items{
    units_in_cart: number
}

export const cartState = atom<CartProducts[]>({ 
    key:'cartState',
     default:[]
})