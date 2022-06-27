import { Items } from 'components/windowShopper/Products';
import {createContext} from 'react';


export interface CartProducts extends Items{
    units_in_cart: number
}

export const CartContext = createContext<CartProducts[]>([]);
CartContext.displayName = 'Cart';

