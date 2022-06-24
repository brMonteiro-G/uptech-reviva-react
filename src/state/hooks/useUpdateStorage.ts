import { Items } from '../../pages/components/windowShopper/Products';
import { updateValues } from 'pages/utils/updateValue';
import { useSetRecoilState } from 'recoil';

import { CartProducts } from '../atoms/dynamic/cartState';
import { storageState } from '../atoms/dynamic/storageState';

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