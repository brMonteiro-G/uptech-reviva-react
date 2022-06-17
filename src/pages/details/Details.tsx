/* eslint-disable react/prop-types */
import { SelectSizeButton } from '../components/SelectSizeButton/SelectSizeButton';
import { Banner } from 'pages/home/Banner/Banner';
import { storageState } from 'pages/state/atoms/storageState';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import {
  DetailsGrid, DetailsInfo, DetailsVisualize, DetailsSection, DetailsImage, RecomendationsSection,
  RecomendationsVisualize, RecomendationsProducts
} from './DetailsStyle';
import { Button, Id } from '../components/Button/Button';


export function Details() {

  const recomendations = useRecoilValue(storageState);
  const displayRecomendations = [...recomendations];
  const id = useParams().id;
  const displayProduct = displayRecomendations.find((product) => product.id === id);
  const props: Id = {
    id: id
  };
  console.log(props.id);
  //usar useEffect

  return (
    <>

      <DetailsSection>

        <div className="details__model">
          <DetailsImage src={displayProduct.images[0].url}
            alt={displayProduct.images[0].description} />
        </div>
        <DetailsInfo>

          <h1>{displayProduct.name} R$ {displayProduct.price}</h1>
          <p>{displayProduct.description}</p>

          <DetailsGrid>
            <>
              {displayProduct.images.map((image) => {
                return (
                  <DetailsVisualize key={displayProduct.id} src={image.url}
                    alt={image.description} />
                );
              })}
              <SelectSizeButton />
              <Button id={props.id} ></Button>
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

              < RecomendationsProducts key={product.id}>
                <img src={product.images[0].url}
                  alt={product.description} />

              </RecomendationsProducts>
            );
          }
          )
          }
        </RecomendationsVisualize>

      </RecomendationsSection>
    </>


  );
}