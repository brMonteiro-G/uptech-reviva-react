import { Items } from './components/windowShopper/Products';
import { Sizes } from './sizes';
import { v4 as uuidv4 } from 'uuid';


export default class Inventory {

  public static available_products_in_inventory: Array<Items> = [

    {
      name: 'Blusa feminina Kaienne',
      id: uuidv4(),
      url: '#',
      price: 129.90,
      description: 'A Blusa feminina Kaienne Curta Ampla Decote Redondo Folhagem Azul AK by Riachuelo é a escolha perfeita para criar looks confortáveis e práticos! Confeccionada em malha, a blusa combina super bem com calça reta e bota de cano baixo, aposte!',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/image-model-women-coat.webp', description: 'Blusa feminina Kaienne no tamanho M' }
      ],
    },
    {
      name: 'Camiseta Masculina Flora',
      id: 'teste',
      url: '#',
      price: 69.90,
      description: 'A Camiseta Masculina floral é linda para ser usada em qualquer lugar',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/image-model-men-tShirt.webp', description: 'camiseta lipp no tamanho p' }
      ],
    },
    {
      name: 'Camiseta Masculina Estan',
      id: 'teste1',
      url: '#',
      price: 55.90,
      description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/image-model-printed-tShirt.webp', description: 'camiseta lipp no tamanho p' }
      ],
    },
    {
      name: 'Camiseta Masculina Gambit',
      id: uuidv4(),
      url: '#',
      price: 55.90,
      description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/image-model-striped-tShirt.webp', description: 'camiseta lipp no tamanho p' }
      ],
    },
    {
      name: 'Cardigan Feminino Rose',
      id: uuidv4(),
      url: '#',
      price: 65.90,
      description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/image-model-cardigan.webp', description: 'camiseta lipp no tamanho p' }
      ],
    },
    //details.html 
    //main.html
    {
      name: 'Blazer Feminino Fino ',
      id: uuidv4(),
      url: '#',
      price: 55.90,
      description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/image-model-blazer.webp', description: 'camiseta lipp no tamanho p' }
      ],
    },
    {
      name: 'Vestido Curto Feminino',
      id: uuidv4(),
      url: '#',
      price: 55.90,
      description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/image-model-short-dress.webp', description: 'camiseta lipp no tamanho p' }
      ],
    },
    {
      name: 'Sobretudo Feminino Polivelour',
      id: uuidv4(),
      url: '#',
      price: 399.90,
      description: 'Fique ainda mais quentinha e estilosa com o Sobretudo Feminino Alongado Polivelour Rosa Pink AK by Riachuelo. A peça é perfeita para dias mais gelados. Para compor o look, experimente combinar com calça de PU e bota tratorada criando um visual fashion e cheio de atitude!  ',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/image-model-overcoat.webp', description: 'camiseta lipp no tamanho p' }
      ],
    }

  ];

  //localStorageItem: string = localStorage.getItem("itens")!
  public static localStorageItem(): void {
    localStorage.setItem('Items', JSON.stringify(Inventory.available_products_in_inventory));
  }





}