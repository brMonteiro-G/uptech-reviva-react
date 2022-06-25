import Inventory from '../../inventory';
import { ReactElement, useContext} from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import {
  BoxModel,
  DivImageButtons,
  ImageProducts,
  ProductContent,
  ProductInfo,
  ProductName,
  ProductPrice,
} from './ProductsStyle';
import { StorageContext } from 'common/StorageContext';

export interface Items {
  name: string;
  id: string;
  url: string;
  price: number;
  description: string;
  available_size: string[];
  available_amount: number;
  images: Array<Images>;
}
export interface Images {
  url: string;
  description: string;
}
export interface Props {
  texto: string;
}

export default function Products(props: Props) {
  const productsContainer = useContext(StorageContext);

  function template(element: Items, index: number): ReactElement {
    return (
      <BoxModel data-id={index}>
        <Link to={'/details/' + element.id}>
          <DivImageButtons>
            <ImageProducts
              src={process.env.PUBLIC_URL + element.images[0].url}
              alt={element.images[0].description}
            />
          </DivImageButtons>
        </Link>
        <ProductContent>
          <ProductInfo>
            <ProductName>{element.name} </ProductName>
            <ProductPrice>R$ {element.price.toFixed(2)} </ProductPrice>
          </ProductInfo>

          <Button id={element.id} />
        </ProductContent>
      </BoxModel>
    );
  }
  return (
    <>
      {productsContainer.map((element, index) => {
        if (props.texto.includes('1')) {
          if (index <= 3) {
            return template(element, index);
          }
        }
        if (props.texto.includes('2')) {
          if (index >= 4) {
            return template(element, index);
          }
        }
        Inventory.localStorageItem();
      })}
    </>
  );
}
