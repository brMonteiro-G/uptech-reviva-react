import { updateValues } from 'utils/updateValue';
import { StorageContext } from 'contexts/StorageContext';
import { useContext } from 'react';
import { CartProducts } from 'contexts/CartContext';

export const useAddButton = () => {
  const {cart, setCart} = useContext(StorageContext);

  return (produtoASerAdicionado: CartProducts, operation: string) => {
    produtoASerAdicionado = updateValues(
      produtoASerAdicionado,
      operation === 'plus' ? 'increase' : 'decrease'
    );

    return setCart((produtosNoCarrinho) => {
      console.log(produtoASerAdicionado);
      console.log(cart);

      //const produtoDaLista = produtosNoCarrinho.filter((produtoNoCarrinho)=>produtoNoCarrinho.id === produtoASerAdicionado.id);
      // const novaLista = [

      // ]
      // eslint-disable-next-line no-debugger
      // debugger;
      // const spliceList = produtosNoCarrinho.splice(
      //   0,
      //   1 ,
      //   produtoASerAdicionado
      // );
      // console.log('spliceList');

      // console.log(spliceList);
      const index = produtosNoCarrinho.indexOf(produtoASerAdicionado);

      const result:Array<any> =[] ;
      if (produtosNoCarrinho.length === 1) {
        result.push(produtoASerAdicionado);
      }else{
        result.splice(index,1,produtoASerAdicionado);
      }


      return result;
    });
  };
};
