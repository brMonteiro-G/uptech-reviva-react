import { atom } from 'recoil';


interface Contacts {
  urlImage: string;
  title: string;
  info?: string;
}

export const contactsState = atom<Contacts[]>({
  key: 'contactsState',
  default: [
    {
      title: 'WhatsApp',
      urlImage: '../../../../public/images/whatsapp.png',
    },
    {
      title: 'Telephone',
      info: '(11) 2123-3321',
      urlImage: '../../../../public/images/telephone.png',
    },
  ],
});
