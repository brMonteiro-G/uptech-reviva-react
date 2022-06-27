import { Items } from 'components/windowShopper/Products';
import Inventory from 'inventory';
import { createContext, ReactNode, useState } from 'react';
import { CartProducts } from './CartContext';

interface ProductsProviderProps {
  children: ReactNode;
}
export interface ProductscontextProps { 
  products?: Items[];
  setProducts?: (products: any) => void;
  cart?: CartProducts[];
  setCart?: (products: any) => void;
}
export const StorageContext = createContext<ProductscontextProps>({
  products: [],
  cart:[]
});

StorageContext.displayName = 'Storage';
export const StorageProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Items[]>(
    Inventory.available_products_in_inventory
  );
  const [cart, setCart] = useState<CartProducts[]>([]);
  return (
    <StorageContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </StorageContext.Provider>
  );
};
