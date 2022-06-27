interface IButtonSize {
  size_letter: string;
  background: string; 
}

export const buttonSizeList: IButtonSize[] = [
  {
    size_letter: 'P',
    background: process.env.PUBLIC_URL + '/images/p.png',
  },
  {
    size_letter: 'M',
    background: process.env.PUBLIC_URL + '/images/m.png',
  },
  {
    size_letter: 'G',
    background: process.env.PUBLIC_URL + '/images/m (1).png',
  },
];

