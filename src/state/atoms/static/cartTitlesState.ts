import { atom } from 'recoil';

export const cartTitlesState = atom<string[]>({
  key: 'cartTitlesState',
  default: ['Produto', 'Tamanho escolhido', 'Valor', 'Quantidade', 'Subtotal'],
});
