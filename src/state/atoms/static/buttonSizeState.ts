import { atom } from 'recoil';

interface ButtonSize {
  size_letter: string,
  background: string
}

export const buttonSizeState = atom<ButtonSize[]>({
  key: 'buttonSizeState',
  default: [{
    size_letter: 'P',
    background: '../../../../public/images/p.png'
  },
  {
    size_letter: 'M',
    background: '../../../../public/images/m.png'
  },
  {
    size_letter: 'G',
    background: '../../../../../public/images/m (1).png'
  }
  ]
});