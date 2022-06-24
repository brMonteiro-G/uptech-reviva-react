import { atom } from 'recoil';
export interface Icons{
  
  url:string,
  description:string

}

export const iconsState = atom<Icons[]>({
  key:'iconsState',
  default:[{
    url:'../images/facebook.png',
    description:'logo facebook'
  },
  {
    url:'../images/twitter.png',
    description:'logo twitter'
  },
  {
    url:'../images/instagram.png',
    description:'logo instagram'
  },
  {
    url:'../images/youtube.png',
    description:'logo youtube'
  }

  ]
});