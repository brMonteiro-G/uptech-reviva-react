import { Banner } from './Banner/Banner';
import { Posts } from './Posts/Posts';
import { useRecoilValue } from 'recoil';
import Products from '../components/windowShopper/Products';
import { ArticleSection, Main, Subtitle } from './HomeStyle';
import { GridProducts } from '../components/windowShopper/ProductsStyle';
import { storageState } from 'state/atoms/dynamic/storageState';

export default function Home() {
  const productsInStorage = useRecoilValue(storageState);
  localStorage.setItem('Items', JSON.stringify(productsInStorage));

  return (
    <Main>
      <Subtitle id='first'>Últimos lançamentos</Subtitle>

      <GridProducts>
        <Products texto='section1' />
      </GridProducts>

      <Banner />

      <Subtitle id='second'>Coleção de vintage 2022</Subtitle>
      <GridProducts>
        <Products texto='section2' />
      </GridProducts>

      <Subtitle id='third'>
        Na dúvida sobre combinar suas roupas e ficar incrível?
      </Subtitle>
      <Subtitle id='fourth'> Confira nossas dicas em nosso blog.</Subtitle>

      <ArticleSection>
        <Posts />
      </ArticleSection>
    </Main>
  );
}
