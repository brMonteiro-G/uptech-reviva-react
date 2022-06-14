import { CartProducts } from "../state/atoms/cartState"

export function updateValues(product: CartProducts) {
    const updateItem: CartProducts = {
        ...product,
        available_amount: product.available_amount - 1,
        units_in_cart: product.units_in_cart + 1
    }

    return updateItem

}