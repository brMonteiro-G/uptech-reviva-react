import { SelectSizeButton } from '../components/SelectSizeButton/SelectSizeButton';
import { Banner } from 'pages/home/Banner/Banner';
import { storageState } from 'pages/state/atoms/storageState';
import { useRecoilValue } from 'recoil';

export function Details() {

  const recomendations = useRecoilValue(storageState);
  const displayRecomendations = [...recomendations];
  return (
    <>

      <section>

        <div className="details__model">
          <img className="details__image" src="../images/image-model-women-coat.webp"
            alt="Modelo utilizando blusa feminina"/>
        </div>
        <div>

          <h1>Blusa feminina Kaienne R$129,90</h1>
          <p>A Blusa feminina Kaienne Curta Ampla Decote Redondo Folhagem Azul AK by Riachuelo é a escolha
            perfeita
            para criar looks confortáveis e práticos! Confeccionada em malha, a blusa combina super bem com
            calça reta e bota de cano baixo, aposte!
          </p>

          <div>
            <img className="details__visualize--1" src="../images/image-model-women-coat-whole.webp"
              alt="imagem por inteiro da modelo"/>
            <img className="details__visualize--2" src="../images/image-model-women-coat-back.webp"
              alt="imagem da parte de trás da modelo"/>
            <img className="details__visualize--3" src="../images/image-model-women-coat-near.webp"
              alt="imagem com foco próximo da modelo"/>
            <img className="details__visualize--4" src="../images/image-model-women-coat.webp"
              alt="imagem da cintura pra cima da modelo"/>

            <SelectSizeButton />

            <button className="details__button--cart">Por na sacola</button>

          </div>

        </div>

      </section>

      <Banner />

      <section className="recomendations">
        <h2>Recomendações</h2>
        <div className="recomendations__visualize">

          {displayRecomendations.slice(0, 4).map((product) => {
            return (

              <figure key={product.id} className="recomendations__products">
                <img src={product.images[0].url}
                  alt={product.description} />

              </figure>
            );
          }
          )
          }
        </div>

      </section>
    </>


  );
}