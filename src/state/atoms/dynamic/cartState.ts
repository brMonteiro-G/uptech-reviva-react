import { Items } from '../../../../src/pages/components/windowShopper/Products';
import { atom } from 'recoil';


export interface CartProducts extends Items{
    units_in_cart: number
}

export const cartState = atom<CartProducts[]>({ 
  key:'cartState',
  default:[]
});