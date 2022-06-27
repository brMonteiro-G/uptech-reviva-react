/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import {
  DetailsGrid,
  DetailsInfo,
  DetailsVisualize,
  DetailsSection,
  DetailsImage,
  RecomendationsSection,
  RecomendationsVisualize,
  RecomendationsProducts,
} from './DetailsStyle';


import { useContext } from 'react';
import { StorageContext } from 'contexts/StorageContext';
import { Banner } from 'components/Banner/Banner';
import { Id } from 'components/Button/Button';
import { DivButtonsDetails, CartButtonDetails } from 'components/Button/ButtonStyle';
import { SelectSizeButton } from 'components/SelectSizeButton/SelectSizeButton';

export function Details() {
  const { products, setProducts } = useContext(StorageContext);
  const displayRecomendations = [...products];
  const id = useParams().id;
  const displayProduct = displayRecomendations.find(
    (product) => product.id === id
  );
  const props: Id = {
    id: id,
  };
  //usar useEffect

  return (
    <>
      <DetailsSection>
        <div className='details__model'>
          <DetailsImage
            src={displayProduct.images[0].url}
            alt={displayProduct.images[0].description}
          />
        </div>
        <DetailsInfo>
          <h1>
            {displayProduct.name} R$ {displayProduct.price.toFixed(2)}
          </h1>
          <p>{displayProduct.description}</p>

          <DetailsGrid>
            <>
              {displayProduct.images.map((image) => {
                return (
                  <DetailsVisualize
                    key={displayProduct.id}
                    src={image.url}
                    alt={image.description}
                  />
                );
              })}
              <SelectSizeButton />
              {/* <Button id={props.id} ></Button> */}
              <DivButtonsDetails>
                <CartButtonDetails>POR NA SACOLA</CartButtonDetails>
              </DivButtonsDetails>
            </>
          </DetailsGrid>
        </DetailsInfo>
      </DetailsSection>

      <Banner />

      <RecomendationsSection>
        <h2>Recomendações</h2>
        <RecomendationsVisualize>
          {displayRecomendations.slice(0, 4).map((product) => {
            return (
              <RecomendationsProducts key={product.id}>
                <img src={product.images[0].url} alt={product.description} />
              </RecomendationsProducts>
            );
          })}
        </RecomendationsVisualize>
      </RecomendationsSection>
    </>
  );
}
