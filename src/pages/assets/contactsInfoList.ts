
interface IContacts {
  urlImage: string;
  title: string;
  info?: string;
}

export const contactsInfoList: IContacts[] = [
  {
    title: 'WhatsApp',
    urlImage: process.env.PUBLIC_URL + 'images/whatsapp.png',
  },
  {
    title: 'Telephone',
    info: '(11) 2123-3321',
    urlImage: process.env.PUBLIC_URL + 'images/telephone-call.png'
  },
];
