import { Items } from 'components/windowShopper/Products';
import Inventory from 'inventory';
import { useState } from 'react';


export const useStorage = () => {
  const [products, _] = useState<Items[]>(
    Inventory.available_products_in_inventory
  );
  return products;
};

export const useSetStorage = () => {
  const [_, setProducts] = useState<Items[]>(
    Inventory.available_products_in_inventory
  );
  return setProducts;
};
