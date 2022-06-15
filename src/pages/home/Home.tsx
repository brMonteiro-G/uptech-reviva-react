import style from './Home.module.scss';
import productsStyle from '../components/windowShopper/Products.module.scss';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Banner } from './Banner/Banner';
import { Posts } from './Posts/Posts';
import { useRecoilValue } from 'recoil';
import { storageState } from '../state/atoms/storageState';
import Products from '../components/windowShopper/Products';



export default function Home() {
  const productsInStorage = useRecoilValue(storageState);    
  localStorage.setItem('Items', JSON.stringify(productsInStorage));



  return (
    <>
      <main className={style['main']}>
        <p className={style['main__subtitle--first']}>Últimos lançamentos</p>

        <section className={productsStyle['grid-prod']}>
          <Products
            texto="section1"
          />

        </section>

        <Banner />

        <p className={style['main__subtitle--second']}>Coleção de vintage 2022</p>
        <section className={productsStyle['grid-prod']}>
          <Products
            texto="section2"
          />

        </section>

        <p className={style['main__subtitle--third']}>Na dúvida sobre combinar suas roupas e ficar incrível?
        </p>
        <p className={style['main__subtitle--fourth']}> Confira nossas dicas em nosso blog.</p>



        <section className={style['article']}>

          <Posts />


        </section>
      </main>



    </>


  );

}

