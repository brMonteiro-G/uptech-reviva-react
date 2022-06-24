import { atom } from 'recoil';

interface INavLinks {
  page: string;
  href: string;
}

export const linksState = atom<INavLinks[]>({
  key: 'linksState',
  default: [
    {
      page: 'Pagina incial ',
      href: '/#',
    },
    {
      page: 'Moda Masculina',
      href: '/#',
    },
    {
      page: 'Moda Feminina',
      href: '/#',
    },
    {
      page: 'Moda Infantil',
      href: '/#',
    },
    {
      page: 'Menu Moda',
      href: '/#',
    },
  ],
});
