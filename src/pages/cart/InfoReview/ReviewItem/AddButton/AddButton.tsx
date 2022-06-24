
import { updateValues } from '../../../../utils/updateValue';
import { ProductsInCartProps } from '../ReviewItem';

export function Addbutton({item}:ProductsInCartProps) {
  return (
    <button id="plus" onClick={() => {
      const product = updateValues(item, 'increase');
      //setButton(product)

    }}>+</button>
  );
}