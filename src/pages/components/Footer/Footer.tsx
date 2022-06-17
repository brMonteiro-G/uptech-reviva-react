import { iconsState } from 'pages/state/atoms/iconsState';
import { linksState } from 'pages/state/atoms/linksState';
import { useRecoilValue } from 'recoil';
import { Logo } from '../Logo/Logo';
import style from './Footer.module.scss';


export function Footer() {

  const pageLinks = useRecoilValue(linksState);
  const icons = useRecoilValue(iconsState);

  return (
    <footer className={style['footer']}>
      <Logo
        dimension="big"
        justify="right"
      />


      <div className={style['footer__infos']}>


        <ul className={style['footer__infos--menu']}>
          {pageLinks.map((links, index) => {
            return (
              <li key={index}>{links}</li>
            );

          })}
        </ul>
        <ul className={style['footer__infos--networks']}>
          <li>Siga-nos nas redes sociais</li>
          <div className={style['footer__icons--medias']}>

            {icons.map((icon, index) => {
              return (
                <li key={index}><img src={icon.url} alt={icon.description} /></li>

              );
            })
            }
          </div>

        </ul>
        <ul className={style['footer__infos--contact']}>
          <li>Entre em contato</li>

          <li>Contato</li>
          <li>reviva@rchlo.com.br</li>
          <div className={style['footer__icons']}>
            <li>WhatsApp</li>
            <i className={style['footer__icons--whatsapp']}></i>
          </div>
          <div className={style['footer__icons']}>
            <li>(11) 2123-3321</li>
            <i className={style['footer__icons--contact']}></i>
          </div>

        </ul>
        <ul className={style['footer__infos--newsletter']}>
          <li>Assine nossa newsletter</li>
          <div className={style['footer__input']}>
            <li>
              <input className={style['input-newsletter']} type="text" />
            </li>
            <li>
              <button className={style['newsletter-button']}>ASSINAR JÁ</button>
            </li>
          </div>

        </ul>

      </div>

    </footer>

  );
}