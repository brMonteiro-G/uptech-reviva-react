import { useSetRecoilState } from "recoil"
import { Items } from "../../components/windowShopper/Products"
import { cartState } from "../atoms/cartState"

export const useAddCart = () => {
    const setCartState = useSetRecoilState<Items[]>(cartState)
    return (newItem: Items) => {
        return setCartState(elementsInCart => {
            localStorage.setItem("Cart", JSON.stringify(elementsInCart))
            return [...elementsInCart, newItem]
        })
    }
} 