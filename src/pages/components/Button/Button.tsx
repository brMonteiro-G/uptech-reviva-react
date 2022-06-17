import { useState } from 'react';
import style from './Button.module.scss';
import { Items } from '../windowShopper/Products';
import { storageState } from '../../state/atoms/storageState';
import { useAddCart } from '../../state/hooks/useAddCart';
import { useRecoilValue } from 'recoil';
import { CartProducts, cartState } from '../../state/atoms/cartState';
import { useUpdateStorage } from '../../state/hooks/useUpdateStorage';
import { DivBackgroundBag,CartButton,ShoppingCartButton } from '../Button/ButtonStyle';

export interface Id {
    id: string
}

export function Button(props: Id) {

  const updateStorage = useUpdateStorage();
  const addProductInCart = useAddCart();
  const storage = useRecoilValue(storageState);

  function verifyQuantity(element: Items): void {

    console.log(element.available_amount);

    if (element.available_amount - 1 < 0) {
      return alert('Produto esgotado');
    }
    const updateProduct: CartProducts = {
      ...element,
      units_in_cart: 0
    };

    addProductInCart(updateProduct);
    updateStorage(updateProduct);
    alert('Produto adicionado ao carrinho');
  }
  return (
    <DivBackgroundBag>
      <CartButton onClick={() => {

        const element = storage.find((item) => {
          return item.id === props.id;
        });

        verifyQuantity(element);

      }
      
      } >POR NA SACOLA</CartButton>
      <ShoppingCartButton id="cart-button" disabled></ShoppingCartButton>
    </DivBackgroundBag>
  );
}


