import { atom } from 'recoil';
import { CartProducts } from './cartState';

export const buttonState = atom({
  key: 'buttonState',
  default: {
    units_in_cart: 0
  }
});