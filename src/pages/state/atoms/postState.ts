import { atom } from 'recoil';

interface Posts{
    url_image: string,
    description: string,
    title:string, 
    subtitle?:string,
    category:number
}

export const postState = atom<Posts[]>({
  key:'postState',
  default:[
    {
      url_image: './images/collection-clothes-girls.jpg',
      description: 'Capa de coleção mulheres 2021',
      title:'Coleção mulheres 2021',
      subtitle:`A coleção Women 2021 </strong> traz tudo que uma mulher precisa para mostrar exuberância e
            trazer um ar leve aos seus looks`,
      category: 1
    },
    {
      url_image: './images/collection-clothes-classic.jpg',
      description: 'Capa de coleção clássica',
      title:'Coleção Classic 80s',
      category: 2
    },
    {
      url_image: './images/collection-clothes-street.jpg',
      description: 'Capa de coleção street',
      title:'Coleção Street 90s',
      category: 2
    }
    
    
    
  ]
        
});