import { atom } from 'recoil';

export const linksState = atom<string[]>({
  key: 'linksState',
  default: [
    'Pagina incial ',
    'Moda Masculina',
    'Moda Feminina',
    'Moda Infantil',
    'Menu Moda'
  ]
});