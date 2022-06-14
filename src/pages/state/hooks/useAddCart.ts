import { useSetRecoilState } from "recoil"
import { updateValues } from "../../utils/updateValue"
import { CartProducts, cartState } from "../atoms/cartState"

export const useAddCart = () => {
    const setCartState = useSetRecoilState<CartProducts[]>(cartState)

    return (newItem: CartProducts) => {
        return setCartState(elementsInCart => {
            localStorage.setItem("Cart", JSON.stringify(elementsInCart))

            const checkCart = elementsInCart.find((product) => newItem.id === product.id)
            console.log(checkCart);

            if (typeof checkCart !== 'undefined') {
                const index = elementsInCart.indexOf(checkCart)
                return [...elementsInCart.slice(0, index), updateValues(checkCart), ...elementsInCart.slice(index + 1)]
            }


            return [...elementsInCart, updateValues(newItem)]
        })
    }
} 