import { atom } from "recoil";
import { Items } from "../../components/windowShopper/Products";
import { Sizes } from "../../sizes";

interface cartProducts extends Items{
    units_in_cart: number
}

export const cartState = atom<cartProducts[]>({ //mockado para testes
    key:'cartState',
    default:[
        {
            name: 'Camiseta Masculina Estan',
            url: '#',
            price: 55.90,
            description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
            available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
            available_amount: 12,
            units_in_cart:2,
            images: [
                { url: "/images/image-model-printed-tShirt.webp", description: 'camiseta lipp no tamanho p' }
            ],
        },
        {
            name: 'Camiseta Masculina Gambit',
            url: '#',
            price: 55.90,
            description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
            available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
            available_amount: 12,
            units_in_cart:4,
            images: [
                { url: "/images/image-model-striped-tShirt.webp", description: 'camiseta lipp no tamanho p' }
            ],
        }
    ]
})