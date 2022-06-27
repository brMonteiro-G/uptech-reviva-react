import { Items } from 'components/windowShopper/Products';
import { CartProducts } from 'contexts/CartContext';
import { ProductscontextProps } from 'contexts/StorageContext';
import { updateValues } from 'utils/updateValue';

export const useUpdateStorage = () => {
  return (item: Items, {products, setProducts}: ProductscontextProps) => {
    
    return setProducts((beforeStateStorage) => {
      const index = beforeStateStorage.findIndex(
        (product) => product.id === item.id
      );
      return [
        ...beforeStateStorage.slice(0, index),
        updateValues(item as CartProducts, 'increase'),
        ...beforeStateStorage.slice(index + 1),
      ];
    });
  };
};
