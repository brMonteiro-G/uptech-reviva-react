import { atom } from "recoil";
import { Items } from "../../components/windowShopper/Products";
import Inventory from "../../inventory";

export const storageState = atom<Items[]>({
    key: 'storageState',
    default: Inventory.inventory
    
})