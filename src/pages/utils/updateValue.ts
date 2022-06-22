import { CartProducts } from '../state/atoms/dynamic/cartState';

export function updateValues(product: CartProducts, type: string) {
  const updateItem: CartProducts = {
    ...product,
    available_amount: type==='increase'?product.available_amount - 1:product.available_amount+1,
    units_in_cart:  type==='increase'?product.units_in_cart + 1:product.units_in_cart-1
  };

  return updateItem;

}
