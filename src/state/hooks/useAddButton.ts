import { CartProducts } from 'contexts/CartContext';
import {  useSetRecoilState } from 'recoil';
// import { buttonState } from '../atoms/dynamic/buttonState';

export const useAddButton = () => {
  // const setAddButton = useSetRecoilState(buttonState);
  return (product: CartProducts) => {
    // return setAddButton((product));
  };
}; 