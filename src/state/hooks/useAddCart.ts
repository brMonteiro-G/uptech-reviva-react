import { updateValues } from 'pages/utils/updateValue';
import { useSetRecoilState } from 'recoil';
import { CartProducts, cartState } from '../atoms/dynamic/cartState';

export const useAddCart = () => {
  const setCartState = useSetRecoilState<CartProducts[]>(cartState);

  return (newItem: CartProducts) => {
    return setCartState(elementsInCart => {
      localStorage.setItem('Cart', JSON.stringify(elementsInCart));

      const checkCart = elementsInCart.find((product) => newItem.id === product.id);
      console.log(checkCart);

      if (typeof checkCart !== 'undefined') {
        const index = elementsInCart.indexOf(checkCart);
        return [...elementsInCart.slice(0, index), updateValues(checkCart,'increase'), ...elementsInCart.slice(index + 1)];
      }


      return [...elementsInCart, updateValues(newItem, 'increase')];
    });
  };
}; 