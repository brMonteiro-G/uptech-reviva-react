import {  useSetRecoilState } from 'recoil';
import { buttonState } from '../atoms/buttonState';
import { CartProducts } from '../atoms/cartState';

export const useAddButton = () => {
  const setAddButton = useSetRecoilState(buttonState);
  return (product: CartProducts) => {
    return setAddButton((product));
  };
}; 