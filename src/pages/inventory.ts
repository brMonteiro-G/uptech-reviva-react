import { Items } from './components/windowShopper/Products';
import { Sizes } from './sizes';
import { v4 as uuidv4 } from 'uuid';


export default class Inventory { 

  public static available_products_in_inventory: Array<Items> = [

    {
      name: 'Vestido Midi Feminino AK by Riachuelo',
      id: uuidv4(),
      url: '#',
      price:   129.90,
      description: 'Crie um look jovem e estiloso com o Vestido Longo Feminino Evasê Uma Maria Liso Bege AK by Riachuelo! Confeccionado em malha, o vestido pode ser combinado com tênis casual, deixando seus looks muito descolados!',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/imagem_1.1.jpg', description: 'Vestido Midi Feminino Evasê' },
        { url: '/images/imagem_1.2.jpg', description: 'Vestido Midi Feminino Evasê' },
        { url: '/images/imagem_1.3.jpg', description: 'Vestido Midi Feminino Evasê' },
        { url: '/images/imagem_1.4.jpg', description: 'Vestido Midi Feminino Evasê' }
      ],
    },
    {
      name: 'Jaqueta Plus Size Masculina by Riachuelo',
      id: uuidv4(),
      url: '#',
      price: 69.90,
      description: 'A Jaqueta Plus Size Masculina Biker PU Preto ALLMAN by Riachuelo é versátil e confortável, perfeito para dias mais frios. Produzida em poliéster, a peça possui fechamento na vista com zíper. Básico e autêntico, esse modelo é superconfortável e garante muita flexibilidade. ',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/imagem_2.1.jpg', description: 'Jaqueta Plus Size Masculina' },
        { url: '/images/imagem_2.2.jpg', description: 'Jaqueta Plus Size Masculina' },
        { url: '/images/imagem_2.3.jpg', description: 'Jaqueta Plus Size Masculina' },
        { url: '/images/imagem_2.4.jpg', description: 'Jaqueta Plus Size Masculina' }
      ],
    },
    {
      name: 'Camiseta Masculina Estan',
      id: uuidv4(),
      url: '#',
      price: 55.90,
      description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/imagem_3.1.jpg', description: 'Camiseta Masculina Estan' },
        { url: '/images/imagem_3.2.jpg', description: 'Camiseta Masculina Estan' },
        { url: '/images/imagem_3.3.jpg', description: 'Camiseta Masculina Estan' },
        { url: '/images/imagem_3.4.jpg', description: 'Camiseta Masculina Estan' }
      ],
    },
    {
      name: 'Top Esportivo Feminino Adidas Vermelho',
      id: uuidv4(),
      url: '#',
      price: 149.99,
      description: 'Perfeita escolha para os momentos fitness, o Top Esportivo Feminino Training Suporte Leve Aeroreact  Adidas Vermelho é confeccionado em tecido de toque macio e maleável. Na academia, corrida, ou qualquer lugar, aposte em uma combinação com legging para conforto máximo nos treinos!',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/imagem_4.1.jpg', description: 'Top Esportivo Feminino' },
        { url: '/images/imagem_4.2.jpg', description: 'Top Esportivo Feminino' },
        { url: '/images/imagem_4.3.jpg', description: 'Top Esportivo Feminino' },
        { url: '/images/imagem_4.4.jpg', description: 'Top Esportivo Feminino' }
      ],
    },
    {
      name: 'Camisa Polo Masculina by Riachuelo',
      id: uuidv4(),
      url: '#',
      price: 79.90,
      description: `Acreditamos em um mundo que olha para a moda além da próxima estação, promovendo consciência e responsabilidade socioambiental. O programa Moda Que Transforma envolve todas as iniciativas da Riachuelo voltadas para sustentabilidade, responsabilidade social e diversidade.
      Aposte na Camisa Polo Masculina Manga Curta Texturizada Azul Marinho Pool by Riachuelo! Confeccionada em algodão, a peça é super versátil e vai deixar seus looks ainda mais estilosos! Combine com uma calça jeans e um sapatênis para um look casual!` ,
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/imagem_5.1.jpg', description: 'Blusa feminina Kaienne no tamanho M' },
        { url: '/images/imagem_5.2.jpg', description: 'Blusa feminina Kaienne no tamanho M' },
        { url: '/images/imagem_5.3.jpg', description: 'Blusa feminina Kaienne no tamanho M' },
        { url: '/images/imagem_5.4.jpg', description: 'Blusa feminina Kaienne no tamanho M' }
      ],
    },
    //details.html 
    //main.html
    {
      name: 'Blusa Plus Size Feminina by Riachuelo',
      id: uuidv4(),
      url: '#',
      price: 89.90      ,
      description: 'Imagine-se num dia de trabalho tranquilo, com tudo fluindo a seu favor. Esse é o mood da Blusa Plus Size Feminina Decote V Folhagem Bege Filipa by Riachuelo! Confeccionada em mix de viscose com elastano, a peça apresenta estampa de folhas e decote V. Experimente combinar com calça social e sandália de salto quadrada para um visual office!',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/imagem_6.1.jpg', description: 'Blusa Plus Size Feminina Decote V' },
        { url: '/images/imagem_6.2.jpg', description: 'Blusa Plus Size Feminina Decote V' },
        { url: '/images/imagem_6.3.jpg', description: 'Blusa Plus Size Feminina Decote V' },
        { url: '/images/imagem_6.4.jpg', description: 'Blusa Plus Size Feminina Decote V' }
      ],
    },
    {
      name: 'Regata Masculina Malha by Riachuelo',
      id: uuidv4(),
      url: '#',
      price: 35.90,
      description: 'A Regata Masculina Malha Listrada Azul Pool by Riachuelo é produzida em mix de fibras, sendo muito macia e confortável. Com modelagem regular, o diferencial da peça é a padronagem de listras. As peças estampadas são sempre uma boa escolha na hora de compor um look mais despojado. Aposte! Combine com uma bermuda de sarja e tênis para um visual casual.',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/imagem_7.1.jpg', description: 'Blusa feminina Kaienne no tamanho M' },
        { url: '/images/imagem_7.2.jpg', description: 'Blusa feminina Kaienne no tamanho M' },
        { url: '/images/imagem_7.3.jpg', description: 'Blusa feminina Kaienne no tamanho M' },
        { url: '/images/imagem_7.4.jpg', description: 'Blusa feminina Kaienne no tamanho M' }
      ],
    },
    {
      name: 'Macacão Feminino Alça Fina AK by Riachuelo',
      id: uuidv4(),
      url: '#',
      price: 399.90,
      description:'A Macacão Feminino Alça Fina Viscose Folhagem Verde AK by Riachuelo é a escolha certa para criar looks de verão com muito estilo! Confeccionada em malha de viscose, a peça é perfeita para encontros com as amigas e momentos de lazer! Combine com sandália para um visual confortável e descontraído! ',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        { url: '/images/imagem_8.1.jpg', description: 'Blusa feminina Kaienne no tamanho M' },
        { url: '/images/imagem_8.2.jpg', description: 'Blusa feminina Kaienne no tamanho M' },
        { url: '/images/imagem_8.3.jpg', description: 'Blusa feminina Kaienne no tamanho M' },
        { url: '/images/imagem_8.4.jpg', description: 'Blusa feminina Kaienne no tamanho M' }
      ],
    }

  ];

  //localStorageItem: string = localStorage.getItem("itens")!
  public static localStorageItem(): void {
    localStorage.setItem('Items', JSON.stringify(Inventory.available_products_in_inventory));
  }





}