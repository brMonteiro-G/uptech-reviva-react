import {  useSetRecoilState } from 'recoil';
import { buttonState } from '../atoms/dynamic/buttonState';
import { CartProducts } from '../atoms/dynamic/cartState';

export const useAddButton = () => {
  const setAddButton = useSetRecoilState(buttonState);
  return (product: CartProducts) => {
    return setAddButton((product));
  };
}; 