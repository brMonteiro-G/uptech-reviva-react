import { useSetRecoilState } from 'recoil';
import { Items } from '../../components/windowShopper/Products';
import { updateValues } from '../../utils/updateValue';
import { CartProducts } from '../atoms/cartState';
import { storageState } from '../atoms/storageState';

export const useUpdateStorage = () => {

  const setStorage = useSetRecoilState<Items[]>(storageState);
  return (item:Items) => {
    console.log(item);
        
    return setStorage((beforeStateStorage) => {
      const index = beforeStateStorage.findIndex(product=> product.id === item.id);
      return [...beforeStateStorage.slice(0, index), updateValues(item as CartProducts, 'increase'), ...beforeStateStorage.slice(index + 1)];
    });
  };


};