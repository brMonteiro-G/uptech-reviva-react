import { Logo } from '../../components/Logo/Logo';
import style from './Banner.module.scss';


export function Banner(){
  return(
    <section className={style['slogan']}>
      <div className={style['slogan--text']}>
        <p className={style['normal']}>
                Fique por dentro de tudo que há de novidade no mundo da moda!
        </p>
        <p className={style['justify']}>Baixe já nosso manual de moda!</p>
      </div>

      <Logo
        dimension="small"
        justify="left"
      />


      {/* <strong className={style["logo--right"]}>
            <p>Reviva Fashion</p>
            <span>by RCHLO</span>
        </strong> */}
    </section>
  );
}