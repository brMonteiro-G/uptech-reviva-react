import { Items } from '../../../pages/components/windowShopper/Products';
import { atom } from 'recoil';
import Inventory from 'pages/inventory';

export const storageState = atom<Items[]>({
  key: 'storageState',
  default:Inventory.available_products_in_inventory
     
}); 